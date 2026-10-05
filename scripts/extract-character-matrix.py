"""Audit and package a complete actual-frame QA matrix.

The browser-downloaded JSON is input only. This script never changes it or the
original Downloads file. It validates the frozen source, expected case IDs,
actual painted state and independently decoded PNG metrics before creating any
matrix image or contact sheet.
"""
import base64
import hashlib
import io
import json
import math
import re
import subprocess
import sys
from pathlib import Path
from urllib.parse import parse_qs, urlsplit

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
ALPHA_THRESHOLD = 8


def require(condition, message):
    if not condition:
        raise ValueError(message)


def validate_frozen_source(frozen, embedded):
    require(frozen.get("format") == "dots-local-source-snapshot" and frozen.get("version") == 1,
            "Unexpected frozen source snapshot format/version")
    require(frozen.get("frozen") is True, "Source snapshot must explicitly be frozen")
    require(frozen.get("userArtApproved") is False, "Source snapshot cannot claim user art approval")
    require(embedded == frozen, "Embedded source snapshot differs from the frozen parent snapshot")
    files = frozen.get("files")
    require(isinstance(files, list) and files, "Frozen source file inventory is empty")
    normalized = []
    for entry in files:
        require(isinstance(entry, dict) and set(entry) == {"path", "bytes", "sha256"}, "Invalid source inventory entry")
        require(isinstance(entry["path"], str) and not Path(entry["path"]).is_absolute()
                and ".." not in Path(entry["path"]).parts, "Invalid source inventory path")
        require(type(entry["bytes"]) is int and entry["bytes"] >= 0, "Invalid source file size")
        require(isinstance(entry["sha256"], str) and re.fullmatch(r"[0-9a-f]{64}", entry["sha256"]), "Invalid source file SHA-256")
        normalized.append({"path": entry["path"], "bytes": entry["bytes"], "sha256": entry["sha256"]})
    inventory = subprocess.run(["rg", "--files", "src/live", "dist", "scripts", "package.json",
                                "package-lock.json", "vite.config.mjs"], cwd=ROOT, check=True,
                               text=True, capture_output=True).stdout.splitlines()
    expected_paths = sorted(path for path in inventory if path != "dist/qa/character-source.json")
    require([entry["path"] for entry in normalized] == expected_paths, "Frozen inventory is not the complete current source inventory")
    digest = hashlib.sha256(json.dumps(normalized, ensure_ascii=False, separators=(",", ":")).encode("utf-8")).hexdigest()
    require(frozen.get("sourceId") == digest, "Frozen sourceId does not match its file inventory")
    for entry in normalized:
        local = ROOT / entry["path"]
        require(local.is_file(), f"Frozen source file is missing: {entry['path']}")
        payload = local.read_bytes()
        require(len(payload) == entry["bytes"] and hashlib.sha256(payload).hexdigest() == entry["sha256"],
                f"Working source differs from the frozen matrix version: {entry['path']}")


def node_expected_cases():
    """Read the versioned expected case matrix by executing the local QA module."""
    cases_module = ROOT / "dist/qa/character-cases.js"
    require(cases_module.is_file(), f"Missing local expected-case module: {cases_module}")
    script = """
import { pathToFileURL } from 'node:url';
const module = await import(pathToFileURL(process.argv[1]));
const expected = Object.fromEntries(module.FAMILIES.map(family => [
  family,
  module.acceptanceCases(family).map(({id, section, label, time, assembly, config, resolved}) => ({
    id, section, label, time, assembly, config, resolved
  }))
]));
process.stdout.write(JSON.stringify(expected));
"""
    result = subprocess.run(
        ["node", "--input-type=module", "-e", script, str(cases_module)],
        cwd=ROOT,
        check=True,
        capture_output=True,
        text=True,
    )
    expected = json.loads(result.stdout)
    require(isinstance(expected, dict) and expected, "Expected-case module returned no families")
    return expected


def alpha_metrics(image):
    alpha = image.getchannel("A")
    width, height = image.size
    histogram = alpha.histogram()
    visible = sum(histogram[ALPHA_THRESHOLD + 1 :])

    thresholded = alpha.point(lambda value: 255 if value > ALPHA_THRESHOLD else 0)
    bbox = thresholded.getbbox()
    bounds = None if bbox is None else [bbox[0], bbox[1], bbox[2] - 1, bbox[3] - 1]

    corners = [
        alpha.getpixel((0, 0)),
        alpha.getpixel((width - 1, 0)),
        alpha.getpixel((0, height - 1)),
        alpha.getpixel((width - 1, height - 1)),
    ]
    border = sum(
        alpha.getpixel((x, y)) > ALPHA_THRESHOLD
        for x in range(width)
        for y in (0, height - 1)
    ) + sum(
        alpha.getpixel((x, y)) > ALPHA_THRESHOLD
        for y in range(1, height - 1)
        for x in (0, width - 1)
    )
    return {
        "visiblePixels": visible,
        "alphaCorners": corners,
        "bounds": bounds,
        "borderPixels": border,
    }


def validate_record(record, expected, family, renderer):
    require(isinstance(record, dict), "Matrix record is not an object")
    record_id = record.get("id")
    require(record_id == expected["id"], f"Unexpected record id: {record_id!r}")
    require(record.get("section") == expected["section"], f"{record_id}: section differs from expected cases")
    require(record.get("label") == expected["label"], f"{record_id}: label differs from expected cases")
    require(record.get("config") == expected["config"], f"{record_id}: requested config differs from expected cases")
    require(record.get("resolved") == expected["resolved"], f"{record_id}: resolved config differs from expected cases")
    require(
        math.isclose(float(record.get("time")), float(expected["time"]), rel_tol=0, abs_tol=1e-6),
        f"{record_id}: requested time differs from expected cases",
    )
    require(
        math.isclose(float(record.get("assembly")), float(expected["assembly"]), rel_tol=0, abs_tol=1e-6),
        f"{record_id}: requested assembly differs from expected cases",
    )

    for config_name in ("config", "resolved", "actualConfig"):
        config = record.get(config_name)
        require(isinstance(config, dict), f"{record_id}: missing {config_name}")
        require(config.get("family") == family, f"{record_id}: {config_name} family differs from matrix family")
    require(record.get("renderer") == renderer, f"{record_id}: mixed or unexpected renderer")
    require(
        record.get("actualConfig") == expected["resolved"],
        f"{record_id}: actual painted configuration differs from the requested case",
    )
    require(
        math.isclose(float(record.get("paintedTime")), float(expected["time"]), rel_tol=0, abs_tol=1e-6),
        f"{record_id}: actual painted time differs from the requested frame",
    )
    require(
        math.isclose(float(record.get("paintedAssembly")), float(expected["assembly"]), rel_tol=0, abs_tol=1e-6),
        f"{record_id}: actual painted assembly differs from the requested frame",
    )

    stats = record.get("renderStats")
    require(isinstance(stats, dict), f"{record_id}: missing render statistics")
    require(stats.get("previewStatus") == "ready", f"{record_id}: preview was not ready")
    require(stats.get("revision") == stats.get("renderedRevision"), f"{record_id}: rendered revision is stale")
    require(stats.get("renderMode") == renderer, f"{record_id}: render statistics use another renderer")
    require(stats.get("family") == family, f"{record_id}: render statistics use another family")
    # At assembly=0 the intact group starts at subpixel scale; an actual blank
    # Canvas is the expected first frame, not a missing character render.
    starts_hidden = expected["section"] == "assembly" and expected["assembly"] == 0
    require(starts_hidden or record.get("metrics", {}).get("bounds") is not None, f"{record_id}: frame has no visible pixels")


def make_contact_sheets(prefix, records, images, output_files):
    font = ImageFont.truetype("/System/Library/Fonts/STHeiti Medium.ttc", 13)
    title_font = ImageFont.truetype("/System/Library/Fonts/STHeiti Medium.ttc", 20)

    for section in dict.fromkeys(record["section"] for record in records):
        group = [record for record in records if record["section"] == section]
        columns = 3 if section == "identity" else 6
        cell_w, cell_h = (280, 325) if section == "identity" else (200, 244)
        page_size = columns * (6 if section == "identity" else 5)
        for page, start in enumerate(range(0, len(group), page_size), 1):
            subset = group[start : start + page_size]
            rows = math.ceil(len(subset) / columns)
            sheet = Image.new("RGB", (columns * cell_w, rows * cell_h + 65), "#f8f9fc")
            draw = ImageDraw.Draw(sheet)
            draw.text((12, 10), f"{prefix} · {section} · {page}", font=title_font, fill="#24232b")
            draw.text((12, 37), "实际 Canvas 帧排列；不是美术通过或用户确认", font=font, fill="#a45324")
            for index, record in enumerate(subset):
                x, y = (index % columns) * cell_w, (index // columns) * cell_h + 65
                img = images[record["id"]].copy()
                img.thumbnail((cell_w - 12, cell_h - 55), Image.Resampling.LANCZOS)
                sheet.paste(img, (x + (cell_w - img.width) // 2, y + (cell_h - 55 - img.height) // 2), img)
                draw.text((x + 6, y + cell_h - 52), record["id"], font=font, fill="#292735")
                label = record["label"].split(" · t=")[0]
                draw.text((x + 6, y + cell_h - 34), label[:30], font=font, fill="#292735")
                draw.text(
                    (x + 6, y + cell_h - 16),
                    f"t={record['paintedTime']:.3f} / 边界={record['metrics']['borderPixels']}",
                    font=font,
                    fill="#55515d",
                )
            payload = io.BytesIO()
            sheet.save(payload, format="JPEG", quality=91)
            output_files[f"{prefix}-{section}-{page}.jpg"] = payload.getvalue()


def existing_generated_outputs(output, family, renderer, prefix):
    if not output.exists():
        return []
    require(output.is_dir(), f"Output path is not a directory: {output}")
    matrix_name = f"{prefix}-matrix.json"
    single = re.compile(rf"{re.escape(family)}-\d{{3}}-{re.escape(renderer)}\.png$")
    sheet = re.compile(rf"{re.escape(prefix)}-.+-\d+\.jpg$")
    return [
        item.name
        for item in output.iterdir()
        if item.name == matrix_name or single.fullmatch(item.name) or sheet.fullmatch(item.name)
    ]


def main():
    require(len(sys.argv) == 3, "Usage: extract-character-matrix.py <browser-download.json> <output-frames-directory>")
    source, output = Path(sys.argv[1]).expanduser().resolve(), Path(sys.argv[2]).expanduser().resolve()
    require(source.is_file(), f"Matrix download does not exist: {source}")
    try:
        raw = source.read_bytes()
        data = json.loads(raw)
    except Exception as error:
        raise ValueError(f"Could not read browser matrix JSON: {error}") from error

    require(data.get("format") == "dots-local-actual-frame-matrix", "Unexpected matrix format")
    require(data.get("section") == "all", "Only a complete section=all matrix is accepted")
    require(data.get("status") == "recorded", "Only status=recorded matrices are accepted")
    require(data.get("userArtApproved") is False, "A matrix cannot claim user art approval")
    family = data.get("family")
    source_snapshot = data.get("sourceSnapshot")
    require(isinstance(source_snapshot, dict), "Matrix is missing its source snapshot")
    source_id = source_snapshot.get("sourceId")
    require(isinstance(source_id, str) and source_id, "Matrix is missing its sourceId")

    frozen_path = output.parent / "source-snapshot.json"
    require(frozen_path.is_file(), f"Output parent has no frozen source snapshot: {frozen_path}")
    try:
        frozen = json.loads(frozen_path.read_text(encoding="utf-8"))
    except Exception as error:
        raise ValueError(f"Could not read output source snapshot: {error}") from error
    require(
        frozen.get("sourceId") == source_id,
        f"Matrix sourceId does not match output parent snapshot: {source_id} != {frozen.get('sourceId')}",
    )
    validate_frozen_source(frozen, source_snapshot)

    expected_by_family = node_expected_cases()
    require(family in expected_by_family, f"Unknown matrix family: {family!r}")
    expected_cases = expected_by_family[family]
    expected_ids = [item["id"] for item in expected_cases]
    require(len(expected_ids) == len(set(expected_ids)), "Expected-case module contains duplicate IDs")

    records_in = data.get("records")
    require(isinstance(records_in, list) and records_in, "Matrix has no records")
    renderers = {record.get("renderer") for record in records_in if isinstance(record, dict)}
    require(len(renderers) == 1, f"Matrix mixes renderers: {sorted(map(str, renderers))}")
    renderer = next(iter(renderers))
    require(renderer in {"webgl", "software"}, f"Unsupported renderer: {renderer!r}")

    parsed_url = urlsplit(data.get("url", ""))
    query = parse_qs(parsed_url.query)
    if "family" in query:
        require(query["family"] == [family], "Matrix URL family metadata disagrees with its records")
    if "renderer" in query:
        expected_url_renderer = "software" if query["renderer"] == ["software"] else "webgl" if query["renderer"] == ["webgl"] else None
        require(expected_url_renderer == renderer, "Matrix URL renderer metadata disagrees with its records")

    ids = [record.get("id") if isinstance(record, dict) else None for record in records_in]
    require(all(isinstance(record_id, str) for record_id in ids), "Matrix contains a record without an ID")
    require(len(ids) == len(set(ids)), "Matrix contains duplicate record IDs")
    actual_ids, expected_id_set = set(ids), set(expected_ids)
    missing, extra = sorted(expected_id_set - actual_ids), sorted(actual_ids - expected_id_set)
    require(not missing and not extra, f"Matrix IDs are incomplete: missing={missing[:8]}, extra={extra[:8]}")

    expected_map = {item["id"]: item for item in expected_cases}
    images, records = {}, []
    for original in records_in:
        record = dict(original)
        record_id = record["id"]
        validate_record(record, expected_map[record_id], family, renderer)
        encoded = record.pop("image", None)
        require(isinstance(encoded, str) and encoded.startswith("data:image/png;base64,"), f"{record_id}: missing actual PNG frame")
        try:
            png = base64.b64decode(encoded.split(",", 1)[1], validate=True)
            decoded = Image.open(io.BytesIO(png))
            require(decoded.format == "PNG", f"{record_id}: captured image is not PNG")
            image = decoded.convert("RGBA")
            image.load()
        except Exception as error:
            raise ValueError(f"{record_id}: invalid captured PNG: {error}") from error
        require(image.size == (record.get("width"), record.get("height")), f"{record_id}: PNG size differs from captured canvas")
        measured = alpha_metrics(image)
        require(record.get("metrics") == measured, f"{record_id}: captured alpha metrics differ from independently decoded PNG")
        record.update(
            pngSha256=hashlib.sha256(png).hexdigest(),
            pngBytes=len(png),
            independentAlphaCheck=True,
        )
        if record["section"] == "identity":
            record["imageFile"] = f"{record_id}-{renderer}.png"
        images[record_id] = image
        records.append(record)

    prefix = f"{family}-{renderer}"
    matrix_name = f"{prefix}-matrix.json"
    manifest = {key: value for key, value in data.items() if key != "records"}
    manifest.update(
        rawDownload={"path": str(source), "bytes": len(raw), "sha256": hashlib.sha256(raw).hexdigest()},
        records=records,
    )
    output_files = {
        matrix_name: (json.dumps(manifest, ensure_ascii=False, indent=2) + "\n").encode("utf-8")
    }
    for record in records:
        if record["section"] == "identity":
            encoded = next(item["image"] for item in records_in if item["id"] == record["id"])
            output_files[f"{record['id']}-{renderer}.png"] = base64.b64decode(encoded.split(",", 1)[1], validate=True)
    make_contact_sheets(prefix, records, images, output_files)

    conflicts = existing_generated_outputs(output, family, renderer, prefix)
    require(not conflicts, f"Refusing to overwrite existing {prefix} matrix/frame/contact-sheet output: {conflicts[:12]}")
    output.mkdir(parents=True, exist_ok=True)

    created = []
    try:
        for name, payload in output_files.items():
            destination = output / name
            with destination.open("xb") as file:
                created.append(destination)
                file.write(payload)
    except Exception:
        for destination in created:
            destination.unlink(missing_ok=True)
        raise

    print(
        json.dumps(
            {
                "family": family,
                "renderer": renderer,
                "recorded": len(records),
                "rawBytes": len(raw),
                "sourceId": source_id,
                "boundaryCases": [record["id"] for record in records if record["metrics"]["borderPixels"] > 0],
                "out": str(output),
            },
            ensure_ascii=False,
        )
    )


if __name__ == "__main__":
    try:
        main()
    except Exception as error:
        raise SystemExit(f"Matrix audit failed: {error}") from error
