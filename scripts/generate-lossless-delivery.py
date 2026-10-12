#!/usr/bin/env python3
"""Generate and verify byte-exact WebP delivery derivatives for registered PNG assets."""
from __future__ import annotations

import argparse
import hashlib
import json
import os
import shutil
import subprocess
import sys
import tempfile
from concurrent.futures import ProcessPoolExecutor, as_completed
from pathlib import Path
from typing import Any

from PIL import Image, features
import PIL

ROOT = Path(__file__).resolve().parents[1]
TEMPLATE_MANIFEST = ROOT / "dist/assets/templates/sources.json"
CATALOG_MODULE = ROOT / "dist/studio-artwork-catalog.js"
DELIVERY_DIR = ROOT / "dist/assets/delivery"
DELIVERY_MODULE = ROOT / "dist/studio-delivery-assets.js"
QA_PATH = ROOT / ".artifacts/release-v101/lossless-delivery-qa.json"
VERSION = "lossless-v1"
ENCODING = {
    "format": "webp",
    "lossless": True,
    "exact": True,
    "method": 6,
    "quality": 100,
}
MODULE_PREFIX = "export const DELIVERY_ASSETS = Object.freeze("


def fail(message: str) -> None:
    raise RuntimeError(message)


def sha256_bytes(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def sha256_file(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for block in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(block)
    return digest.hexdigest()


def dist_relative_path(value: str) -> str | None:
    if not isinstance(value, str) or not value:
        return None
    if value.startswith("./assets/"):
        return "dist/" + value[2:]
    candidate = Path(value)
    if candidate.is_absolute():
        try:
            relative = candidate.resolve().relative_to(ROOT)
        except ValueError:
            return None
        return relative.as_posix()
    if value.startswith("dist/"):
        return Path(value).as_posix()
    return None


def public_asset_path(dist_path: str) -> str:
    if not dist_path.startswith("dist/assets/"):
        fail(f"Asset is outside dist/assets: {dist_path}")
    return "./" + dist_path[len("dist/"):]


def identity_key(value: dict[str, Any]) -> str:
    return json.dumps(value, ensure_ascii=False, sort_keys=True, separators=(",", ":"))


def add_authorized_source(
    registry: dict[str, dict[str, Any]],
    dist_path: str,
    row: dict[str, Any],
    relation: str,
    identity: dict[str, Any],
    expected_sha: str | None = None,
) -> None:
    if not dist_path.startswith("dist/assets/templates/") or not dist_path.lower().endswith(".png"):
        return
    expected_sha = expected_sha or row.get("sha256")
    if not isinstance(expected_sha, str) or len(expected_sha) != 64:
        fail(f"Registered template source has no SHA-256: {dist_path}")
    item = registry.setdefault(dist_path, {"expectedSha256": expected_sha, "identities": []})
    if item["expectedSha256"] != expected_sha:
        fail(f"Conflicting registered hashes for template source: {dist_path}")
    expected_alpha = row.get("alpha")
    if isinstance(expected_alpha, dict):
        existing_alpha = item.get("expectedAlpha")
        if existing_alpha is not None and existing_alpha != expected_alpha:
            fail(f"Conflicting registered alpha metadata for template source: {dist_path}")
        item["expectedAlpha"] = expected_alpha
    identity = {**identity, "via": relation}
    if all(identity_key(existing) != identity_key(identity) for existing in item["identities"]):
        item["identities"].append(identity)


def node_preview_rows() -> list[dict[str, Any]]:
    node = shutil.which("node")
    if not node:
        fail("Node.js is required to read the canonical detail-preview asset registry.")
    program = (
        "import { DETAIL_PREVIEW_ASSETS } from './dist/studio-artwork-catalog.js';"
        "console.log(JSON.stringify(DETAIL_PREVIEW_ASSETS.map(asset => ({"
        "id: asset.id, artworkId: asset.artworkId, purpose: asset.purpose, version: asset.version,"
        "path: asset.path, sha256: asset.sha256, byteSize: asset.byteSize, width: asset.width,"
        "height: asset.height, mime: asset.mime, publicationStatus: asset.publicationStatus,"
        "alpha: asset.alpha, sourceAssetId: asset.sourceAssetId"
        "}))));"
    )
    result = subprocess.run(
        [node, "--input-type=module", "-e", program],
        cwd=ROOT,
        check=False,
        capture_output=True,
        text=True,
    )
    if result.returncode:
        fail(f"Could not load canonical detail-preview registry: {result.stderr.strip()}")
    try:
        rows = json.loads(result.stdout.strip().splitlines()[-1])
    except (IndexError, json.JSONDecodeError) as error:
        fail(f"Canonical detail-preview registry returned invalid JSON: {error}")
    if not isinstance(rows, list):
        fail("Canonical detail-preview registry must export an array.")
    return rows


def discover_sources() -> list[dict[str, Any]]:
    if not TEMPLATE_MANIFEST.is_file():
        fail(f"Missing registered template source manifest: {TEMPLATE_MANIFEST}")
    template_manifest = json.loads(TEMPLATE_MANIFEST.read_text(encoding="utf-8"))
    if template_manifest.get("status") != "approved":
        fail("Template source manifest is not approved.")
    if template_manifest.get("manifestId") != "template-sources-20261011-character-adjustments-v1":
        fail("Unexpected template source manifest identity.")

    authorized_templates: dict[str, dict[str, Any]] = {}
    for row in template_manifest.get("assets", []) + template_manifest.get("retainedSourceAssets", []):
        if row.get("mime") != "image/png":
            fail(f"Registered template source is not PNG: {row.get('id')}")
        identity_base = {
            "id": row.get("id"),
            "kind": "template-source",
            "status": row.get("status"),
            "purpose": row.get("purpose"),
        }
        for field in ("path", "sourcePath"):
            dist_path = dist_relative_path(row.get(field, ""))
            if not dist_path or not dist_path.startswith("dist/assets/templates/") or not dist_path.lower().endswith(".png"):
                continue
            source_details = row.get("source")
            expected_sha = None
            if field == "sourcePath" and isinstance(source_details, dict):
                expected_sha = source_details.get("sourceSha256")
            add_authorized_source(
                authorized_templates,
                dist_path,
                row,
                field,
                identity_base,
                expected_sha=expected_sha,
            )

    template_root = ROOT / "dist/assets/templates"
    actual_template_paths = {
        path.relative_to(ROOT).as_posix()
        for path in template_root.rglob("*.png")
        if path.is_file()
    }
    if actual_template_paths != set(authorized_templates):
        missing = sorted(actual_template_paths - set(authorized_templates))
        absent = sorted(set(authorized_templates) - actual_template_paths)
        fail(f"Template PNG authorization differs from actual files; unregistered={missing[:12]}, missing={absent[:12]}")

    preview_rows = node_preview_rows()
    authorized_previews: dict[str, dict[str, Any]] = {}
    for row in preview_rows:
        dist_path = dist_relative_path(row.get("path", ""))
        if not dist_path or not dist_path.startswith("dist/assets/previews/") or not dist_path.lower().endswith(".png"):
            fail(f"Canonical preview path is invalid: {row.get('path')}")
        identity = {
            "id": row.get("id"),
            "kind": "detail-preview",
            "artworkId": row.get("artworkId"),
            "purpose": row.get("purpose"),
            "version": row.get("version"),
            "status": row.get("publicationStatus"),
        }
        entry = {
            "expectedSha256": row.get("sha256"),
            "expectedByteSize": row.get("byteSize"),
            "expectedWidth": row.get("width"),
            "expectedHeight": row.get("height"),
            "expectedMime": row.get("mime"),
            "expectedAlpha": row.get("alpha"),
            "identities": [identity],
        }
        if dist_path in authorized_previews:
            fail(f"Duplicate canonical detail-preview path: {dist_path}")
        authorized_previews[dist_path] = entry
    actual_preview_paths = {
        path.relative_to(ROOT).as_posix()
        for path in (ROOT / "dist/assets/previews").rglob("*.png")
        if path.is_file()
    }
    if actual_preview_paths != set(authorized_previews):
        missing = sorted(actual_preview_paths - set(authorized_previews))
        absent = sorted(set(authorized_previews) - actual_preview_paths)
        fail(f"Detail-preview registry differs from actual files; unregistered={missing[:12]}, missing={absent[:12]}")

    combined: dict[str, dict[str, Any]] = {}
    for dist_path, entry in authorized_templates.items():
        combined[dist_path] = {
            "distPath": dist_path,
            "expectedSha256": entry["expectedSha256"],
            "expectedAlpha": entry.get("expectedAlpha"),
            "identities": entry["identities"],
        }
    for dist_path, entry in authorized_previews.items():
        combined[dist_path] = {
            "distPath": dist_path,
            "expectedSha256": entry["expectedSha256"],
            "expectedByteSize": entry["expectedByteSize"],
            "expectedWidth": entry["expectedWidth"],
            "expectedHeight": entry["expectedHeight"],
            "expectedMime": entry["expectedMime"],
            "expectedAlpha": entry["expectedAlpha"],
            "identities": entry["identities"],
        }

    sources: list[dict[str, Any]] = []
    for dist_path, entry in sorted(combined.items()):
        path = ROOT / dist_path
        if not path.is_file():
            fail(f"Registered PNG is missing: {dist_path}")
        byte_size = path.stat().st_size
        digest = sha256_file(path)
        if digest != entry["expectedSha256"]:
            fail(f"PNG bytes do not match canonical registry: {dist_path}")
        if "expectedByteSize" in entry and byte_size != entry["expectedByteSize"]:
            fail(f"PNG byte size does not match canonical registry: {dist_path}")
        with Image.open(path) as image:
            if image.format != "PNG":
                fail(f"Registered source did not decode as PNG: {dist_path}")
            width, height = image.size
            rgba = image.convert("RGBA")
            alpha_min, alpha_max = rgba.getchannel("A").getextrema()
            has_alpha = "A" in image.getbands() or "transparency" in image.info
            has_transparency = alpha_min < 255
            icc_profile = image.info.get("icc_profile")
            if icc_profile == b"":
                icc_profile = None
        if "expectedWidth" in entry and [width, height] != [entry["expectedWidth"], entry["expectedHeight"]]:
            fail(f"PNG dimensions do not match canonical registry: {dist_path}")
        if entry.get("expectedMime", "image/png") != "image/png":
            fail(f"Canonical preview MIME is not image/png: {dist_path}")
        expected_alpha = entry.get("expectedAlpha")
        if isinstance(expected_alpha, dict):
            if expected_alpha.get("hasAlpha") is not None and expected_alpha.get("hasAlpha") != has_alpha:
                fail(f"PNG alpha-channel metadata does not match canonical registry: {dist_path}")
            if expected_alpha.get("hasTransparency") is not None and expected_alpha.get("hasTransparency") != has_transparency:
                fail(f"PNG transparency metadata does not match canonical registry: {dist_path}")
        identities = sorted(entry["identities"], key=identity_key)
        sources.append({
            "distPath": dist_path,
            "path": public_asset_path(dist_path),
            "sha256": digest,
            "byteSize": byte_size,
            "width": width,
            "height": height,
            "mime": "image/png",
            "alpha": {"hasAlpha": has_alpha, "hasTransparency": has_transparency},
            "iccProfile": icc_profile,
            "identities": identities,
        })
    if len(sources) != 412:
        fail(f"Expected 412 canonical source PNG paths (320 templates + 92 previews), got {len(sources)}")
    if sum(item["distPath"].startswith("dist/assets/templates/") for item in sources) != 320:
        fail("Expected exactly 320 registered template PNG paths.")
    if sum(item["distPath"].startswith("dist/assets/previews/") for item in sources) != 92:
        fail("Expected exactly 92 registered detail-preview PNG paths.")
    return sources


def pixel_metadata(path: Path) -> tuple[int, int, bytes, bool, bool, bytes | None]:
    with Image.open(path) as image:
        if image.format != "PNG":
            fail(f"Source is not a PNG: {path}")
        rgba_image = image.convert("RGBA")
        rgba = rgba_image.tobytes()
        alpha_min, _ = rgba_image.getchannel("A").getextrema()
        has_alpha = "A" in image.getbands() or "transparency" in image.info
        has_transparency = alpha_min < 255
        icc_profile = image.info.get("icc_profile")
        if icc_profile == b"":
            icc_profile = None
        return image.width, image.height, rgba, has_alpha, has_transparency, icc_profile


def webp_metadata(path: Path, source_path: Path) -> dict[str, Any]:
    with Image.open(source_path) as source_image:
        source_rgba = source_image.convert("RGBA").tobytes()
        source_icc = source_image.info.get("icc_profile") or None
        source_alpha_min, _ = source_image.convert("RGBA").getchannel("A").getextrema()
        source_alpha = {
            "hasAlpha": "A" in source_image.getbands() or "transparency" in source_image.info,
            "hasTransparency": source_alpha_min < 255,
        }
        source_width, source_height = source_image.size
    with Image.open(path) as derivative:
        if derivative.format != "WEBP":
            fail(f"Derivative is not WebP: {path}")
        width, height = derivative.size
        decoded_rgba = derivative.convert("RGBA").tobytes()
        derivative_icc = derivative.info.get("icc_profile") or None
        lossless_hint = derivative.info.get("lossless")
    if (width, height) != (source_width, source_height):
        fail(f"WebP dimensions differ from source PNG: {path}")
    if decoded_rgba != source_rgba:
        fail(f"Decoded WebP RGBA bytes differ from source PNG: {path}")
    if derivative_icc != source_icc:
        fail(f"WebP ICC profile differs from source PNG: {path}")
    alpha_min = min(decoded_rgba[3::4]) if decoded_rgba else 255
    if (alpha_min < 255) != source_alpha["hasTransparency"]:
        fail(f"WebP alpha transparency differs from source PNG: {path}")
    return {
        "width": width,
        "height": height,
        "byteSize": path.stat().st_size,
        "sha256": sha256_file(path),
        "pixelSha256": sha256_bytes(decoded_rgba),
        "alpha": source_alpha,
        "iccProfilePreserved": derivative_icc == source_icc,
        "iccProfileSha256": sha256_bytes(source_icc) if source_icc else None,
        "losslessHint": lossless_hint,
    }


def encode_or_verify_one(args: tuple[str, str, str, bool]) -> dict[str, Any]:
    source_text, destination_text, temporary_text, generate = args
    source_path = Path(source_text)
    destination = Path(destination_text)
    temporary = Path(temporary_text)
    try:
        if destination.is_file():
            try:
                metadata = webp_metadata(destination, source_path)
                if metadata["iccProfilePreserved"]:
                    return metadata
            except Exception:
                if not generate:
                    raise
        if not generate:
            fail(f"Missing WebP delivery derivative: {destination}")
        with Image.open(source_path) as source_image:
            if source_image.format != "PNG":
                fail(f"Source is not PNG: {source_path}")
            rgba = source_image.convert("RGBA")
            icc_profile = source_image.info.get("icc_profile")
            if icc_profile == b"":
                icc_profile = None
            save_options = {
                "format": "WEBP",
                "lossless": True,
                "exact": True,
                "method": 6,
                "quality": 100,
            }
            if icc_profile:
                save_options["icc_profile"] = icc_profile
            rgba.save(temporary, **save_options)
        metadata = webp_metadata(temporary, source_path)
        if not metadata["iccProfilePreserved"]:
            fail(f"ICC profile was not preserved in WebP derivative: {destination}")
        destination.parent.mkdir(parents=True, exist_ok=True)
        os.replace(temporary, destination)
        metadata["byteSize"] = destination.stat().st_size
        metadata["sha256"] = sha256_file(destination)
        return metadata
    finally:
        try:
            temporary.unlink()
        except FileNotFoundError:
            pass


def manifest_text(records: list[dict[str, Any]]) -> str:
    return MODULE_PREFIX + json.dumps(records, ensure_ascii=False, indent=2, sort_keys=False) + ");\n"


def read_module_manifest() -> list[dict[str, Any]]:
    if not DELIVERY_MODULE.is_file():
        fail(f"Missing delivery manifest module: {DELIVERY_MODULE}")
    source = DELIVERY_MODULE.read_text(encoding="utf-8")
    if not source.startswith(MODULE_PREFIX):
        fail("Delivery module does not use the expected ESM export shape.")
    encoded = source[len(MODULE_PREFIX):]
    try:
        records, end = json.JSONDecoder().raw_decode(encoded)
    except json.JSONDecodeError as error:
        fail(f"Delivery module contains invalid JSON data: {error}")
    if encoded[end:].strip() != ");":
        fail("Delivery module has unexpected trailing content.")
    if not isinstance(records, list):
        fail("DELIVERY_ASSETS must be an array.")
    return records


def build_records(sources: list[dict[str, Any]], encoded: dict[str, dict[str, Any]]) -> list[dict[str, Any]]:
    records = []
    for source in sources:
        source_hash = source["sha256"]
        derivative = encoded[source_hash]
        records.append({
            "source": {
                "path": source["path"],
                "sha256": source_hash,
                "byteSize": source["byteSize"],
                "width": source["width"],
                "height": source["height"],
                "mime": "image/png",
            },
            "sourceIdentity": source["identities"],
            "path": f"./assets/delivery/{source_hash}.webp",
            "sha256": derivative["sha256"],
            "byteSize": derivative["byteSize"],
            "width": derivative["width"],
            "height": derivative["height"],
            "mime": "image/webp",
            "version": VERSION,
            "pixelSha256": derivative["pixelSha256"],
            "alpha": source["alpha"],
            "encoding": {
                **ENCODING,
                "encoder": f"Pillow {PIL.__version__} / libwebp {features.version('webp')}",
                "iccProfilePreserved": derivative["iccProfilePreserved"],
                "iccProfileSha256": derivative["iccProfileSha256"],
            },
        })
    return records


def write_qa(sources: list[dict[str, Any]], records: list[dict[str, Any]], verified: dict[str, dict[str, Any]], mode: str) -> dict[str, Any]:
    unique_by_hash: dict[str, dict[str, Any]] = {}
    for record in records:
        source = record["source"]
        digest = source["sha256"]
        unique_by_hash.setdefault(digest, {
            "sourceSha256": digest,
            "sourceByteSize": source["byteSize"],
            "deliveryPath": record["path"],
            "deliverySha256": record["sha256"],
            "deliveryByteSize": record["byteSize"],
            "pixelSha256": record["pixelSha256"],
            "width": record["width"],
            "height": record["height"],
            "alpha": record["alpha"],
            "iccProfilePreserved": record["encoding"]["iccProfilePreserved"],
            "iccProfileSha256": record["encoding"]["iccProfileSha256"],
        })
    source_bytes_by_path = sum(record["source"]["byteSize"] for record in records)
    source_bytes_unique = sum(item["sourceByteSize"] for item in unique_by_hash.values())
    delivery_bytes_unique = sum(item["deliveryByteSize"] for item in unique_by_hash.values())
    delivery_bytes_by_path = sum(record["byteSize"] for record in records)
    path_records = []
    for source, record in zip(sources, records):
        path_records.append({
            "sourcePath": source["distPath"],
            "sourceSha256": record["source"]["sha256"],
            "sourceByteSize": record["source"]["byteSize"],
            "sourceWidth": record["source"]["width"],
            "sourceHeight": record["source"]["height"],
            "sourceIdentity": source["identities"],
            "deliveryPath": "dist/" + record["path"][2:],
            "deliverySha256": record["sha256"],
            "deliveryByteSize": record["byteSize"],
            "pixelSha256": record["pixelSha256"],
            "alpha": record["alpha"],
            "iccProfilePreserved": record["encoding"]["iccProfilePreserved"],
            "verified": True,
        })
    qa = {
        "schemaVersion": 1,
        "status": "verified",
        "mode": mode,
        "contract": {
            "version": VERSION,
            "format": "image/webp",
            "lossless": True,
            "exact": True,
            "rgbaByteEquality": True,
            "iccProfilePreservedIfPresent": True,
            "approvalRecordsModified": False,
            "sourcePngsModified": False,
        },
        "summary": {
            "sourcePathCount": len(records),
            "templatePathCount": sum(path.startswith("dist/assets/templates/") for path in (source["distPath"] for source in sources)),
            "detailPreviewPathCount": sum(path.startswith("dist/assets/previews/") for path in (source["distPath"] for source in sources)),
            "uniqueSourcePngSha256Count": len(unique_by_hash),
            "uniqueWebpFileCount": len(unique_by_hash),
            "transparentSourceCount": sum(bool(record["alpha"]["hasTransparency"]) for record in records),
            "opaqueSourceCount": sum(not record["alpha"]["hasTransparency"] for record in records),
            "iccProfileSourceCount": sum(bool(item["iccProfilePreserved"] and item["iccProfileSha256"]) for item in unique_by_hash.values()),
            "sourceBytesByPath": source_bytes_by_path,
            "sourceBytesUniqueByHash": source_bytes_unique,
            "deliveryBytesUniqueFiles": delivery_bytes_unique,
            "deliveryBytesByPathIfRepeated": delivery_bytes_by_path,
            "uniqueFileSavingsBytes": source_bytes_unique - delivery_bytes_unique,
            "pathBasedSavingsBytes": source_bytes_by_path - delivery_bytes_by_path,
            "uniqueFileSavingsRatio": (source_bytes_unique - delivery_bytes_unique) / source_bytes_unique if source_bytes_unique else 0,
            "pathBasedSavingsRatio": (source_bytes_by_path - delivery_bytes_by_path) / source_bytes_by_path if source_bytes_by_path else 0,
            "rgbaAndAlphaVerifiedUnique": len(verified),
        },
        "sourceOnlyFiles": sorted(source["distPath"] for source in sources),
        "uniqueFiles": [unique_by_hash[digest] for digest in sorted(unique_by_hash)],
        "paths": path_records,
    }
    QA_PATH.parent.mkdir(parents=True, exist_ok=True)
    QA_PATH.write_text(json.dumps(qa, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return qa


def manifest_index(records: list[dict[str, Any]]) -> dict[str, dict[str, Any]]:
    by_source: dict[str, dict[str, Any]] = {}
    seen_paths: set[str] = set()
    for record in records:
        source = record.get("source")
        if not isinstance(source, dict):
            fail("Delivery record is missing source metadata.")
        source_path = source.get("path")
        source_hash = source.get("sha256")
        if not isinstance(source_path, str) or not isinstance(source_hash, str):
            fail("Delivery record has invalid source path/hash.")
        if source_path in seen_paths:
            fail(f"Duplicate delivery mapping for source path: {source_path}")
        seen_paths.add(source_path)
        if source_hash not in by_source:
            by_source[source_hash] = record
    return by_source


def verify_manifest(sources: list[dict[str, Any]], records: list[dict[str, Any]]) -> tuple[dict[str, dict[str, Any]], list[str]]:
    expected_by_path = {source["path"]: source for source in sources}
    actual_by_path = {record.get("source", {}).get("path"): record for record in records}
    if set(expected_by_path) != set(actual_by_path):
        missing = sorted(set(expected_by_path) - set(actual_by_path))
        extra = sorted(set(actual_by_path) - set(expected_by_path))
        fail(f"Delivery manifest source paths differ from canonical registry; missing={missing[:12]}, extra={extra[:12]}")
    if len(records) != len(sources):
        fail(f"Expected {len(sources)} delivery mappings, got {len(records)}")
    grouped: dict[str, list[dict[str, Any]]] = {}
    for source_path, source in expected_by_path.items():
        record = actual_by_path[source_path]
        wanted_source = {
            "path": source["path"],
            "sha256": source["sha256"],
            "byteSize": source["byteSize"],
            "width": source["width"],
            "height": source["height"],
            "mime": "image/png",
        }
        if record.get("source") != wanted_source:
            fail(f"Delivery source metadata differs from canonical PNG: {source_path}")
        if record.get("sourceIdentity") != source["identities"]:
            fail(f"Delivery source identity differs from canonical registry: {source_path}")
        if record.get("version") != VERSION or record.get("mime") != "image/webp":
            fail(f"Delivery format/version is invalid for {source_path}")
        expected_delivery_path = f"./assets/delivery/{source['sha256']}.webp"
        if record.get("path") != expected_delivery_path:
            fail(f"Delivery path does not use the full canonical PNG hash: {source_path}")
        if [record.get("width"), record.get("height")] != [source["width"], source["height"]]:
            fail(f"Delivery dimensions differ from canonical PNG: {source_path}")
        if record.get("alpha") != source["alpha"]:
            fail(f"Delivery alpha metadata differs from canonical PNG: {source_path}")
        encoding = record.get("encoding")
        for key, value in ENCODING.items():
            if not isinstance(encoding, dict) or encoding.get(key) != value:
                fail(f"Delivery encoding metadata is invalid for {source_path}: {key}")
        if not isinstance(encoding.get("encoder"), str) or not encoding["encoder"].startswith("Pillow "):
            fail(f"Delivery encoder provenance is invalid for {source_path}")
        grouped.setdefault(source["sha256"], []).append(record)

    unique_info: dict[str, dict[str, Any]] = {}
    for digest, copies in grouped.items():
        record = copies[0]
        if any(copy.get("path") != record.get("path") for copy in copies):
            fail(f"Duplicate source bytes map to inconsistent WebP paths: {digest}")
        path = ROOT / "dist" / record["path"][2:]
        metadata = webp_metadata(path, ROOT / expected_by_path[copies[0]["source"]["path"]]["distPath"])
        if metadata["sha256"] != record.get("sha256") or metadata["byteSize"] != record.get("byteSize"):
            fail(f"WebP bytes do not match delivery manifest: {record['path']}")
        if metadata["pixelSha256"] != record.get("pixelSha256"):
            fail(f"WebP decoded pixel hash does not match delivery manifest: {record['path']}")
        if metadata["alpha"] != record.get("alpha"):
            fail(f"WebP alpha pixels do not match delivery manifest: {record['path']}")
        if not metadata["iccProfilePreserved"]:
            fail(f"WebP ICC profile was not preserved: {record['path']}")
        unique_info[digest] = metadata

    expected_delivery_files = {f"{digest}.webp" for digest in grouped}
    actual_delivery_files = {path.name for path in DELIVERY_DIR.glob("*.webp") if path.is_file()}
    if actual_delivery_files != expected_delivery_files:
        extra = sorted(actual_delivery_files - expected_delivery_files)
        missing = sorted(expected_delivery_files - actual_delivery_files)
        fail(f"Delivery file inventory mismatch; extra={extra[:12]}, missing={missing[:12]}")
    return unique_info, sorted(expected_delivery_files)


def default_generate(sources: list[dict[str, Any]], workers: int) -> dict[str, Any]:
    DELIVERY_DIR.mkdir(parents=True, exist_ok=True)
    groups: dict[str, dict[str, Any]] = {}
    for source in sources:
        groups.setdefault(source["sha256"], source)
    if len(groups) != 356:
        fail(f"Expected 356 unique source PNG hashes, got {len(groups)}")
    tasks = []
    for digest, source in sorted(groups.items()):
        src_path = ROOT / source["distPath"]
        dest = DELIVERY_DIR / f"{digest}.webp"
        temp = DELIVERY_DIR / f".{digest}.{os.getpid()}.tmp"
        tasks.append((str(src_path), str(dest), str(temp), True))

    results: dict[str, dict[str, Any]] = {}
    pool_size = max(1, min(workers, len(tasks)))
    with ProcessPoolExecutor(max_workers=pool_size) as executor:
        futures = {executor.submit(encode_or_verify_one, task): Path(task[1]).stem for task in tasks}
        completed = 0
        for future in as_completed(futures):
            digest = futures[future]
            results[digest] = future.result()
            completed += 1
            if completed % 40 == 0 or completed == len(tasks):
                print(f"Encoded/verified {completed}/{len(tasks)} unique WebP files", flush=True)
    return results


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--verify-only", action="store_true", help="Verify existing manifest and WebP files without writing delivery assets or the ESM module.")
    parser.add_argument("--workers", type=int, default=min(6, max(1, os.cpu_count() or 1)), help="Parallel encoding/verification workers (default: up to 6).")
    args = parser.parse_args()
    if not features.check("webp"):
        fail("This Pillow build has no WebP support.")
    if args.workers < 1:
        fail("--workers must be at least 1.")

    sources = discover_sources()
    if args.verify_only:
        records = read_module_manifest()
        unique_info, _ = verify_manifest(sources, records)
        qa = write_qa(sources, records, unique_info, "verify-only")
    else:
        unique_results = default_generate(sources, args.workers)
        records = build_records(sources, unique_results)
        DELIVERY_MODULE.write_text(manifest_text(records), encoding="utf-8")
        written_records = read_module_manifest()
        unique_info, _ = verify_manifest(sources, written_records)
        qa = write_qa(sources, written_records, unique_info, "generate-and-verify")

    print(json.dumps({"status": "verified", **qa["summary"], "qa": QA_PATH.relative_to(ROOT).as_posix()}, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as error:
        print(f"lossless delivery error: {error}", file=sys.stderr)
        raise SystemExit(1)
