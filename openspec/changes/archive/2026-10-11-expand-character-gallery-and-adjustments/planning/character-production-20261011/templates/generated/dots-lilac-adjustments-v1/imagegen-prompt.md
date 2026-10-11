# Lilac Bucket Dots pending template layers

Original Artwork: `dist/assets/looks/dots-lilac-bucket.png`, dots-lilac-bucket@v1, SHA256 `50ddea9f24e82c02b14cc5374d4b3ae08b00954aa4bcdcbb6aa24dc2a8b3d615`.

## Body-only orb

Status: pending review only; not user-approved. Image 1 was the exact Lilac Bucket Dots Artwork. Prompt:

```text
Precise-object-edit for a pending transparent character-adjustment template. Image 1 is the exact lilac Dots Artwork and the edit target. Remove only the yellow soft-fabric bucket hat and the pair of black oval eyes. Reconstruct the covered head/body with matching light-lilac short-plush fibers. Preserve the same round orb silhouette after removing the hat, the same front-facing pose, fur texture, body color, scale, canvas position, edge softness, and transparent full 1254x1254 canvas. Keep a continuous single rounded Dots body with no limbs. No eyes, hat, mouth, nose, accessories, clothing, background, floor, shadow outside the body, text, borders, or other objects. Do not crop or resize; retain the source alignment.
```

The raw generated output is preserved as `lilac-body-imagegen-raw-v1.png`; alpha cleanup created separate `lilac-body-imagegen-clean-v1.png`.

## Bucket hat accessory

Status: pending review only; first extraction was rejected because it left too much of the hat hollow. Both outputs remain preserved. Accepted-for-template-layer candidate prompt:

```text
Create one usable, isolated transparent accessory layer from the yellow bucket hat worn by the character in Image 1. Image 1 is the exact artwork and absolute placement reference. The worn hat is a solid, opaque fabric object: the crown's front panel fills its entire central area, and the wide flared brim is solid fabric. Do not make a hollow ring, open crown, brim-only cutout, or top-down hat. Keep the same soft yellow cloth, stitching, size, perspective, angle, orientation, and exact top-center coordinates as the worn hat in Image 1. Remove the lilac body and eyes completely. Place the entire filled bucket hat on the exact 1254x1254 transparent canvas at its original coordinates, with no repositioning or resizing. No background, shadow plane, body, face, eyes, accessories, text, or other objects. The layer should overlay a separate Dots body and fully cover the body area under the brim just as the source hat does.
```

`bucket-hat-imagegen-raw-v2.png` preserves the generated output; `bucket-hat-imagegen-clean-v2.png` is the separate alpha-cleaned layer. The older hollow output remains as `hat-hollow-extraction-rejected-v1.png` and is not bound by the review manifest.

## Cloud appearance

Status: pending review only; not user-approved. Image 1 was the exact cleaned blue cloud body-only layer and Image 2 was the cleaned Lilac orb body layer. Prompt:

```text
Create a pending transparent appearance layer by editing Image 1 while using Image 2 only as the lilac color and short-plush material reference. Preserve Image 1's exact low three-lobed cloud silhouette, complete fur direction, size, placement, perspective, and 1254x1254 transparent canvas. Make the body light lilac purple to match Image 2, with dense short plush fibers and soft 3D fur detail across all three lobes. Body only: no eyes, glasses, hat, clothing, accessories, mouth, nose, limbs, background, floor, shadow outside the silhouette, text, or additional objects. Keep the body as one continuous Dots shape and do not crop or resize. Preserve full transparency outside the cloud silhouette.
```

`cloud-body-imagegen-raw-v1.png` preserves the output; `cloud-body-imagegen-clean-v1.png` is a separate alpha-cleaned layer. Source and cleanup reports preserve exact byte hashes. All template assets and compositions remain pending.
