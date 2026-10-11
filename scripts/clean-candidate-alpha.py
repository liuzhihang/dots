#!/usr/bin/env python3
"""Conservative, explicitly authorized cleanup of generated candidate alpha.

Keeps the largest requested connected subject regions plus their soft edges.
Does not draw, recolor, crop, scale, or overwrite source artwork. A person must
review the resulting silhouette, particularly detached intended accessories.
Requires the already-bundled Pillow and NumPy runtime; no project dependency.
"""
import argparse
import hashlib
import json
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter


def components(mask, alpha):
    """Eight-connected, run-length components without an extra CV dependency."""
    parents, runs, previous = [], [], []

    def find(index):
        while parents[index] != index:
            parents[index] = parents[parents[index]]
            index = parents[index]
        return index

    for y, row in enumerate(mask):
        edges = np.diff(np.pad(row.astype(np.int8), (1, 1)))
        current = []
        left = 0
        for x0, x1 in zip(np.flatnonzero(edges == 1), np.flatnonzero(edges == -1)):
            index = len(parents)
            parents.append(index)
            runs.append((y, int(x0), int(x1), index))
            while left < len(previous) and previous[left][1] < x0:
                left += 1
            cursor = left
            while cursor < len(previous) and previous[cursor][0] <= x1:
                other = find(previous[cursor][2])
                parent = find(index)
                if parent != other:
                    parents[parent] = other
                cursor += 1
            current.append((int(x0), int(x1), index))
        previous = current
    totals = {}
    for y, x0, x1, index in runs:
        root = find(index)
        item = totals.setdefault(root, {"id": root, "pixels": 0, "alphaMass": 0})
        item["pixels"] += x1 - x0
        item["alphaMass"] += int(alpha[y, x0:x1].sum())
    for index in range(len(parents)):
        parents[index] = find(index)
    return runs, parents, sorted(totals.values(), key=lambda row: row["alphaMass"], reverse=True)


def clean_rgba(rgba, count=1, threshold=16, feather_radius=2):
    alpha = rgba[:, :, 3]
    runs, parents, groups = components(alpha >= threshold, alpha)
    if len(groups) < count:
        raise ValueError(f"Expected {count} subject regions; found only {len(groups)}.")
    selected = {group["id"] for group in groups[:count]}
    core = np.zeros(alpha.shape, dtype=np.uint8)
    for y, x0, x1, index in runs:
        if parents[index] in selected:
            core[y, x0:x1] = 255
    keep = Image.fromarray(core)
    if feather_radius:
        keep = keep.filter(ImageFilter.MaxFilter(feather_radius * 2 + 1))
    keep = np.asarray(keep) > 0
    result = rgba.copy()
    result[:, :, 3][~keep] = 0
    changed = (alpha != result[:, :, 3])
    assert np.array_equal(rgba[:, :, :3], result[:, :, :3])
    assert np.array_equal(alpha[keep], result[:, :, 3][keep])
    return result, {
        "coreThreshold": threshold,
        "softEdgeRadiusPixels": feather_radius,
        "retainedComponentCount": count,
        "sourceComponentCount": len(groups),
        "retainedComponents": groups[:count],
        "removedVisiblePixels": int(changed.sum()),
        "removedAlphaMass": int(alpha[changed].sum()),
        "sourceVisiblePixels": int((alpha > 0).sum()),
        "resultVisiblePixels": int((result[:, :, 3] > 0).sum()),
        "rgbUnchanged": True,
        "retainedAlphaUnchanged": True,
        "dimensionsUnchanged": True,
        "visualReview": "required",
        "artApproval": "pending",
    }


def self_test():
    source = np.zeros((32, 32, 4), dtype=np.uint8)
    source[:, :, :3] = [63, 90, 170]
    source[8:22, 8:22, 3] = 255
    source[7, 8:22, 3] = 7
    source[2:4, 27:29, 3] = 200
    result, report = clean_rgba(source)
    assert result[9, 9, 3] == 255 and result[7, 10, 3] == 7
    assert result[2, 27, 3] == 0 and report["removedVisiblePixels"] == 4
    pair = np.zeros((32, 32, 4), dtype=np.uint8)
    pair[8:22, 5:10, 3] = 255
    pair[8:22, 22:27, 3] = 253
    pair[2, 2, 3] = 255
    result, report = clean_rgba(pair, count=2)
    assert result[9, 6, 3] == 255 and result[9, 23, 3] == 253
    assert result[2, 2, 3] == 0 and report["retainedComponentCount"] == 2
    print("PASS alpha cleanup: preserve subject, both eyes, retained RGB/alpha and connected soft edge; remove isolated specks")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("source", nargs="?")
    parser.add_argument("output", nargs="?")
    parser.add_argument("--components", type=int, default=1)
    parser.add_argument("--threshold", type=int, default=16)
    parser.add_argument("--soft-edge", type=int, default=2)
    parser.add_argument("--self-test", action="store_true")
    args = parser.parse_args()
    if args.self_test:
        return self_test()
    if not args.source or not args.output:
        parser.error("source and a new output path are required")
    source, output = Path(args.source).resolve(), Path(args.output).resolve()
    if source == output or output.exists() or output.with_suffix(".alpha-cleanup.json").exists():
        parser.error("Never overwrite the source or an existing candidate version")
    if args.components < 1 or not 1 <= args.threshold <= 255 or not 0 <= args.soft_edge <= 8:
        parser.error("Invalid cleanup bounds")
    original_bytes = source.read_bytes()
    with Image.open(source) as image:
        if image.mode != "RGBA":
            parser.error("Only already-transparent RGBA candidates are accepted")
        rgba = np.array(image)
    result, report = clean_rgba(rgba, args.components, args.threshold, args.soft_edge)
    output.parent.mkdir(parents=True, exist_ok=True)
    Image.fromarray(result, "RGBA").save(output)
    report.update({
        "source": str(source), "sourceSha256": hashlib.sha256(original_bytes).hexdigest(),
        "output": str(output), "outputSha256": hashlib.sha256(output.read_bytes()).hexdigest(),
        "width": result.shape[1], "height": result.shape[0],
        "authorization": "User explicitly allowed local alpha edge cleanup in this apply session.",
    })
    assert source.read_bytes() == original_bytes
    output.with_suffix(".alpha-cleanup.json").write_text(json.dumps(report, indent=2, ensure_ascii=False) + "\n")
    print(json.dumps(report, ensure_ascii=False))


if __name__ == "__main__":
    main()
