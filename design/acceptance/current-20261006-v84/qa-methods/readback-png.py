from __future__ import annotations
import hashlib, io, json, sys, tarfile
from pathlib import Path
from PIL import Image


def summarize_png(name, payload, expected):
    result = {'filename': name, 'bytes': len(payload), 'sha256': hashlib.sha256(payload).hexdigest()}
    errors = []
    if expected.get('bytes') is not None and result['bytes'] != expected['bytes']:
        errors.append(f"bytes expected {expected['bytes']} got {result['bytes']}")
    if expected.get('sha256') and result['sha256'] != expected['sha256']:
        errors.append('sha256 mismatch')
    try:
        with Image.open(io.BytesIO(payload)) as image:
            image.load()
            rgba = image.convert('RGBA')
            width, height = rgba.size
            alpha = rgba.getchannel('A')
            histogram = alpha.histogram()
            transparent = histogram[0]
            opaque = histogram[255]
            partial = sum(histogram[1:255])
            box = alpha.getbbox()
            bounds = None if box is None else {'x': box[0], 'y': box[1], 'width': box[2]-box[0], 'height': box[3]-box[1]}
        result.update({'format': image.format or 'PNG', 'width': width, 'height': height,
                       'transparentPixels': transparent, 'opaquePixels': opaque,
                       'partialAlphaPixels': partial, 'alphaBounds': bounds})
        for key in ('width', 'height', 'transparentPixels', 'opaquePixels', 'partialAlphaPixels', 'alphaBounds'):
            if key in expected and expected[key] != result[key]:
                errors.append(f"{key} expected {expected[key]} got {result[key]}")
    except Exception as exc:
        errors.append(f"Pillow decode failed: {type(exc).__name__}: {exc}")
    result['errors'] = errors
    return result


def read_bundle(path):
    with tarfile.open(path, 'r:gz') as archive:
        files = {}
        for member in archive.getmembers():
            if not member.isfile():
                continue
            if member.name.startswith('/') or '..' in Path(member.name).parts:
                raise ValueError(f'unsafe archive member: {member.name}')
            stream = archive.extractfile(member)
            if stream is None:
                raise ValueError(f'cannot read archive member: {member.name}')
            files[member.name] = stream.read()
    manifest = json.loads(files['capture-manifest.json'])
    canvas_expected = {}
    sources_expected = {}
    for record in manifest['records']:
        canvas = record.get('canvas')
        if canvas and canvas.get('filename'):
            canvas_expected[canvas['filename']] = canvas
        for source in record.get('sourceAssets', []):
            if source.get('filename'):
                existing = sources_expected.get(source['filename'])
                if existing and (existing.get('actualSha256') != source.get('actualSha256') or existing.get('bytes') != source.get('bytes')):
                    raise ValueError(f"source filename has inconsistent references: {source['filename']}")
                sources_expected[source['filename']] = source
    results = []
    for filename, expected in sorted(sources_expected.items()):
        payload = files.get(filename)
        if payload is None:
            results.append({'filename': filename, 'errors': ['missing source PNG bytes']})
        else:
            expected_png = dict(expected)
            expected_png['sha256'] = expected.get('actualSha256')
            results.append(summarize_png(filename, payload, expected_png))
    source_count = len(results)
    for filename, expected in sorted(canvas_expected.items()):
        payload = files.get(filename)
        if payload is None:
            results.append({'filename': filename, 'errors': ['missing Canvas PNG bytes']})
        else:
            results.append(summarize_png(filename, payload, expected))
    png_names = {name for name in files if name.lower().endswith('.png')}
    referenced_names = set(sources_expected) | set(canvas_expected)
    unreferenced = sorted(png_names - referenced_names)
    missing = sorted(referenced_names - png_names)
    errors = [f"{item['filename']}: {error}" for item in results for error in item.get('errors', [])]
    errors.extend(f'unreferenced PNG bytes: {name}' for name in unreferenced)
    errors.extend(f'referenced PNG missing from archive: {name}' for name in missing)
    return {
        'bundle': str(path), 'schema': manifest.get('schema'), 'captureKind': 'modular' if 'module-capture' in str(path) else 'template',
        'records': len(manifest.get('records', [])), 'coverage': manifest.get('coverage'),
        'sourcePngs': source_count, 'canvasPngs': len(canvas_expected), 'pngFiles': len(png_names),
        'decodedPngs': len(results), 'result': 'pass' if not errors else 'fail', 'errors': errors,
        'readback': results
    }

outputs = []
for filename in sys.argv[1:]:
    outputs.append(read_bundle(Path(filename)))
print(json.dumps(outputs, ensure_ascii=False, indent=2))
