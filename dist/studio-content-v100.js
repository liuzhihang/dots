// Frozen v100 Artwork integration metadata and approved default facts.
const deepFreeze=value=>{if(!value||typeof value!=='object'||Object.isFrozen(value))return value;for(const child of Object.values(value))deepFreeze(child);return Object.freeze(value);};
import { ARTWORK_CONTENT as BASE_ARTWORK_CONTENT, CHARACTER_IDENTITIES as BASE_CHARACTER_IDENTITIES, PREVIEW_ARTWORK_CONTENT } from './studio-content.js?v=102';
export const V100_APPROVAL_ID="character-adjustments-20261011-v1";
export const V100_APPROVAL_RECORD='design/acceptance/20261011-character-adjustments-v1/approval.json';
export const V100_APPROVAL_RECORD_SHA256='f2f4296013a1ccdb1eb8305720fabd21bd5f84a83b4412d2a1599a10312383d8';
export const V100_REVIEW_PACKAGE='openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json';
export const V100_REVIEW_PACKAGE_SHA256='c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c';
export const V100_ARTWORK_ROWS=deepFreeze([
  {
    "id": "candidate-dots-20261005",
    "version": "v2",
    "seriesId": "dots",
    "approvalSeriesId": "dots",
    "change": "existing-original-retained",
    "approvalScopeIndex": 0,
    "originalAssetId": "asset:candidate-dots-20261005:original",
    "original": {
      "id": "asset:candidate-dots-20261005:original",
      "version": "v2",
      "path": "./assets/characters/dots-blue-plush-orb-headphones-candidate-v2.png",
      "sourcePath": "dist/assets/characters/dots-blue-plush-orb-headphones-candidate-v2.png",
      "sha256": "2f680b276f76c2a1c6faeb7d496f16a41327f1186bca27d0acf5197997309455",
      "byteSize": 1720054,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "approvalSeriesId": "dots",
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255
      }
    },
    "template": {
      "id": "dots-orb-core-adjustments-v6-four-tabs-candidate",
      "version": "v6",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/dots-orb-core-adjustments-v6-four-tabs-review.json",
      "reviewManifestSha256": "f8032af64441e83fd24f3e6b024a05d74cb8638dcd5d05e6088c9d813f9a56d1",
      "recipeCount": 32,
      "recipeSetSha256": "d45f1c02ad20bc2e15d65eba350d31baa024f302299cde36ce2a79c715a707cb"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "dots-rose-glasses",
    "version": "v1",
    "seriesId": "dots",
    "approvalSeriesId": "dots",
    "change": "existing-original-retained",
    "approvalScopeIndex": 1,
    "originalAssetId": "asset:dots-rose-glasses:original",
    "original": {
      "id": "asset:dots-rose-glasses:original",
      "version": "v1",
      "path": "./assets/looks/dots-rose-glasses.png",
      "sourcePath": "dist/assets/looks/dots-rose-glasses.png",
      "sha256": "a95261160aa0a6223bab0a3b38d080a4fa5b1b6315593bb6631d820732578d75",
      "byteSize": 1860436,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "approvalSeriesId": "dots",
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255
      }
    },
    "template": {
      "id": "dots-rose-glasses-adjustments-v3-four-tabs-candidate",
      "version": "v3",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/dots-rose-glasses-adjustments-v3-four-tabs-review.json",
      "reviewManifestSha256": "326230f7f78e602d41fa899740ea2bb01c7ffec56fb2aefd07d478dec4b32632",
      "recipeCount": 16,
      "recipeSetSha256": "9795113a8452939ddbd300bca786070cef70ab8e1c1938171694f2b685271193"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "dots-lilac-bucket",
    "version": "v1",
    "seriesId": "dots",
    "approvalSeriesId": "dots",
    "change": "existing-original-retained",
    "approvalScopeIndex": 2,
    "originalAssetId": "asset:dots-lilac-bucket:original",
    "original": {
      "id": "asset:dots-lilac-bucket:original",
      "version": "v1",
      "path": "./assets/looks/dots-lilac-bucket.png",
      "sourcePath": "dist/assets/looks/dots-lilac-bucket.png",
      "sha256": "50ddea9f24e82c02b14cc5374d4b3ae08b00954aa4bcdcbb6aa24dc2a8b3d615",
      "byteSize": 1605008,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "approvalSeriesId": "dots",
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255
      }
    },
    "template": {
      "id": "dots-lilac-bucket-adjustments-v2-four-tabs-candidate",
      "version": "v2",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/dots-lilac-bucket-adjustments-v2-four-tabs-review.json",
      "reviewManifestSha256": "826ff735fe9837a32413f44ed23127d5de0059b4aaf0ab1e96915ef1698a64bf",
      "recipeCount": 12,
      "recipeSetSha256": "09cad6640265e41c39304534cec1b284bb27c162c5fe09b90c3e2f9787d1f535"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "dots-butter-beret",
    "version": "v2",
    "seriesId": "dots",
    "approvalSeriesId": "dots",
    "change": "existing-original-retained",
    "approvalScopeIndex": 3,
    "originalAssetId": "asset:dots-butter-beret:original",
    "original": {
      "id": "asset:dots-butter-beret:original",
      "version": "v2",
      "path": "./assets/companions/v99/dots-butter-beret-candidate-v2.png",
      "sourcePath": "dist/assets/companions/v99/dots-butter-beret-candidate-v2.png",
      "sha256": "284093696b5e244a8ebd6f5ef433c50059b81bdaf7709ba1d60bd68321ccae00",
      "byteSize": 1541746,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "approvalSeriesId": "dots",
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255
      }
    },
    "template": {
      "id": "dots-butter-beret-adjustments-v1-four-tabs-candidate",
      "version": "v1",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/dots-butter-beret-adjustments-v1-four-tabs-review.json",
      "reviewManifestSha256": "3e4b672f2638ea7e6fce78efc2ee7b17eff2c881acd18d53cf4485b45b0660da",
      "recipeCount": 12,
      "recipeSetSha256": "fd4ec4148eb4f1ae416c9499f5577c7264095606e7237d1d5a63264b9137c355"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "dots-lime-frog-bow",
    "version": "v1",
    "seriesId": "dots",
    "approvalSeriesId": "dots",
    "change": "existing-original-retained",
    "approvalScopeIndex": 4,
    "originalAssetId": "asset:dots-lime-frog-bow:original",
    "original": {
      "id": "asset:dots-lime-frog-bow:original",
      "version": "v1",
      "path": "./assets/companions/v99/dots-lime-frog-bow-candidate-v1.png",
      "sourcePath": "/Users/liuzhihang/workspace/dots/dist/assets/companions/v99/dots-lime-frog-bow-candidate-v1.png",
      "sha256": "bc8aa7fa0fe4ea5e4ba2bf36f74703ed33d80036fdfd1cb7027571ed365c2d0f",
      "byteSize": 1087340,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "approvalSeriesId": "dots",
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255
      }
    },
    "template": {
      "id": "dots-lime-frog-bow-adjustments-v1",
      "version": "v1",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/dots-lime-frog-bow-review.json",
      "reviewManifestSha256": "abd1e5e6e7e29c812322d097cde669417b1224f195bc1ff3ab46ee709981af68",
      "recipeCount": 5,
      "recipeSetSha256": "c11e79dc736fc94e8b68c59ef3f7e5fabbd38d50cd1c0202be6f3eb61f383ad1"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "dots-pink-heart-shades",
    "version": "v1",
    "seriesId": "dots",
    "approvalSeriesId": "dots",
    "change": "existing-original-retained",
    "approvalScopeIndex": 5,
    "originalAssetId": "asset:dots-pink-heart-shades:original",
    "original": {
      "id": "asset:dots-pink-heart-shades:original",
      "version": "v1",
      "path": "./assets/companions/v99/dots-pink-heart-shades-candidate-v1.png",
      "sourcePath": "/Users/liuzhihang/workspace/dots/dist/assets/companions/v99/dots-pink-heart-shades-candidate-v1.png",
      "sha256": "df3dcfc4468f6fe24f202395dd98957c4d439adb8c80b1357f4a91f9b07a1384",
      "byteSize": 905104,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "approvalSeriesId": "dots",
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255
      }
    },
    "template": {
      "id": "dots-pink-heart-shades-adjustments-v1",
      "version": "v1",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/dots-pink-heart-shades-review.json",
      "reviewManifestSha256": "e3bcc14a193ac3af8149557575047736f788b9bf5b2614801368332e484c7590",
      "recipeCount": 5,
      "recipeSetSha256": "7a860e828723cb3718b3b081b1127739bff468102e577c7981ed132abb480b0c"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "dots-blue-beret-cloud",
    "version": "v1",
    "seriesId": "dots",
    "approvalSeriesId": "dots",
    "change": "new-artwork",
    "approvalScopeIndex": 6,
    "originalAssetId": "asset:dots-blue-beret-cloud:original",
    "original": {
      "id": "asset:dots-blue-beret-cloud:original",
      "version": "v1",
      "path": "./assets/characters/gallery-v100/dots-blue-beret-cloud-v1.png",
      "sourcePath": "dist/assets/characters/gallery-v100/dots-blue-beret-cloud-v1.png",
      "sha256": "7035905930586409378f8cce212c393c94e3fe2860a4fb62e38108a3349f332d",
      "byteSize": 1613064,
      "width": 1254,
      "height": 1254,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "sourceRef": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/generated/dots-blue-beret-cloud-candidate-v1.png",
      "approvalScopeRef": "scope.artworks[6].original",
      "approvalSeriesId": "dots",
      "previousArtApproval": null,
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 254,
        "transparentPixels": 751005,
        "opaquePixels": 0,
        "partialAlphaPixels": 821511
      }
    },
    "template": {
      "id": "dots-blue-cloud-adjustments-v2",
      "version": "v2",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/dots-blue-cloud-four-tabs-v2-review.json",
      "reviewManifestSha256": "0bba1ead7212776759d4dea97cc516861dc20576cb0e232e0ebd9e05d6ff0d70",
      "recipeCount": 16,
      "recipeSetSha256": "371c5e361755e52ce0f31b159ed14423844e4416ff20403e35a07fc0533273bb"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "dots-yellow-glasses-triangle",
    "version": "v1",
    "seriesId": "dots",
    "approvalSeriesId": "dots",
    "change": "new-artwork",
    "approvalScopeIndex": 7,
    "originalAssetId": "asset:dots-yellow-glasses-triangle:original",
    "original": {
      "id": "asset:dots-yellow-glasses-triangle:original",
      "version": "v1",
      "path": "./assets/characters/gallery-v100/dots-yellow-glasses-triangle-v1.png",
      "sourcePath": "dist/assets/characters/gallery-v100/dots-yellow-glasses-triangle-v1.png",
      "sha256": "036264f59a5e0b355a863a41620e2394a7f31336fdf08ca25b4f583937444059",
      "byteSize": 1296941,
      "width": 1254,
      "height": 1254,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "sourceRef": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/generated/dots-yellow-glasses-triangle-candidate-v1.png",
      "approvalScopeRef": "scope.artworks[7].original",
      "approvalSeriesId": "dots",
      "previousArtApproval": null,
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 254,
        "transparentPixels": 914841,
        "opaquePixels": 0,
        "partialAlphaPixels": 657675
      }
    },
    "template": {
      "id": "dots-yellow-glasses-triangle-adjustments-v2",
      "version": "v2",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/dots-yellow-glasses-triangle-four-tabs-v2-review.json",
      "reviewManifestSha256": "81dbf5fb46d289634cf5ec83ec3945a01484008bdc4bebbda5e8bd815fd91359",
      "recipeCount": 16,
      "recipeSetSha256": "73897a5c8881ec4fbe9983e8ab1abdd1046b633ae7a2af79a018ea5686c0e4b0"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "dots-leaf-pear",
    "version": "v1",
    "seriesId": "dots",
    "approvalSeriesId": "dots",
    "change": "new-artwork",
    "approvalScopeIndex": 8,
    "originalAssetId": "asset:dots-leaf-pear:original",
    "original": {
      "id": "asset:dots-leaf-pear:original",
      "version": "v1",
      "path": "./assets/characters/gallery-v100/dots-leaf-pear-v1.png",
      "sourcePath": "dist/assets/characters/gallery-v100/dots-leaf-pear-v1.png",
      "sha256": "12a092ddf983cc03e3382a9f0c82e1d97f3d2f233c5b0f5b309521c63e37cdc9",
      "byteSize": 1610333,
      "width": 1214,
      "height": 1295,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "sourceRef": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/generated/dots-leaf-pear-candidate-v2.png",
      "approvalScopeRef": "scope.artworks[8].original",
      "approvalSeriesId": "dots",
      "previousArtApproval": null,
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 254,
        "transparentPixels": 841134,
        "opaquePixels": 0,
        "partialAlphaPixels": 730996
      }
    },
    "template": {
      "id": "dots-leaf-pear-adjustments-v1",
      "version": "v1",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/dots-leaf-pear-review.json",
      "reviewManifestSha256": "016124424e040254f16fef53f73381536f96df7f52323b7f74cbb9b0cb3ef30b",
      "recipeCount": 5,
      "recipeSetSha256": "a8ea0b98046da77283ef8d8696ec3efa8e455092cc4740ee3daac8945d6ec22f"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "dots-violet-star",
    "version": "v1",
    "seriesId": "dots",
    "approvalSeriesId": "dots",
    "change": "new-artwork",
    "approvalScopeIndex": 9,
    "originalAssetId": "asset:dots-violet-star:original",
    "original": {
      "id": "asset:dots-violet-star:original",
      "version": "v1",
      "path": "./assets/characters/gallery-v100/dots-violet-star-v1.png",
      "sourcePath": "dist/assets/characters/gallery-v100/dots-violet-star-v1.png",
      "sha256": "1dde58d2eb78c4a7025ba60e0f3a62a492a3a076a647f9a615f989e4665393c8",
      "byteSize": 1548983,
      "width": 1312,
      "height": 1199,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "sourceRef": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/generated/dots-violet-star-candidate-v2.png",
      "approvalScopeRef": "scope.artworks[9].original",
      "approvalSeriesId": "dots",
      "previousArtApproval": null,
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255,
        "transparentPixels": 873081,
        "opaquePixels": 12,
        "partialAlphaPixels": 699995
      }
    },
    "template": {
      "id": "dots-violet-star-adjustments-v1",
      "version": "v1",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/dots-violet-star-review.json",
      "reviewManifestSha256": "61b88c87705beab92b250bf17d1f04e52022973443b905e25d0eab2012c9cfec",
      "recipeCount": 5,
      "recipeSetSha256": "4db8fd03e45f777ff3a6d7f9507fb33aa9b126027acc1b8bb85e4d69cbad4502"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "dots-flower-cloud",
    "version": "v1",
    "seriesId": "dots",
    "approvalSeriesId": "dots",
    "change": "new-artwork",
    "approvalScopeIndex": 10,
    "originalAssetId": "asset:dots-flower-cloud:original",
    "original": {
      "id": "asset:dots-flower-cloud:original",
      "version": "v1",
      "path": "./assets/characters/gallery-v100/dots-flower-cloud-v1.png",
      "sourcePath": "dist/assets/characters/gallery-v100/dots-flower-cloud-v1.png",
      "sha256": "135e3c1438147383d0878479b694662706c0ceef2260e5ff2ba77aa6ff5fc11b",
      "byteSize": 1270982,
      "width": 1402,
      "height": 1122,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "sourceRef": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/generated/dots-flower-cloud-candidate-v2.png",
      "approvalScopeRef": "scope.artworks[10].original",
      "approvalSeriesId": "dots",
      "previousArtApproval": null,
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 254,
        "transparentPixels": 1003112,
        "opaquePixels": 0,
        "partialAlphaPixels": 569932
      }
    },
    "template": {
      "id": "dots-flower-cloud-adjustments-v1",
      "version": "v1",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/dots-flower-cloud-review.json",
      "reviewManifestSha256": "9e90e679e245916355bae54cbdfc9f4e60c9120bbc8ae60adf4bac05d7e1eae6",
      "recipeCount": 5,
      "recipeSetSha256": "b06ed8f784d88309d0a846a652959529c26a6af7097182592b2eb9c670090102"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "dots-lime-rounded-square",
    "version": "v1",
    "seriesId": "dots",
    "approvalSeriesId": "dots",
    "change": "new-artwork",
    "approvalScopeIndex": 11,
    "originalAssetId": "asset:dots-lime-rounded-square:original",
    "original": {
      "id": "asset:dots-lime-rounded-square:original",
      "version": "v1",
      "path": "./assets/characters/gallery-v100/dots-lime-rounded-square-v1.png",
      "sourcePath": "dist/assets/characters/gallery-v100/dots-lime-rounded-square-v1.png",
      "sha256": "0c743f839d3e356009ef41792f4cf3c2be60e6211a62a69cdcf45a1bae441fe4",
      "byteSize": 1761543,
      "width": 1367,
      "height": 1151,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "sourceRef": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/generated/dots-lime-rounded-square-candidate-v2.png",
      "approvalScopeRef": "scope.artworks[11].original",
      "approvalSeriesId": "dots",
      "previousArtApproval": null,
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255,
        "transparentPixels": 761466,
        "opaquePixels": 94,
        "partialAlphaPixels": 811857
      }
    },
    "template": {
      "id": "dots-lime-rounded-square-adjustments-v1",
      "version": "v1",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/dots-lime-rounded-square-review.json",
      "reviewManifestSha256": "ae3489a1c776b6e3af78131aeaed896d24dca4fe8fd2f1650ec49cfbff11bc15",
      "recipeCount": 5,
      "recipeSetSha256": "ac0b2133248ca9d27e5908a44e2487e86dd2edbe548e1d0a80cb8d651f83e1b0"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "candidate-grok-20261005",
    "version": "v2",
    "seriesId": "grok",
    "approvalSeriesId": "grok",
    "change": "existing-original-retained",
    "approvalScopeIndex": 12,
    "originalAssetId": "asset:candidate-grok-20261005:original",
    "original": {
      "id": "asset:candidate-grok-20261005:original",
      "version": "v2",
      "path": "./assets/characters/grok-bot-purple-orb-candidate-v2.png",
      "sourcePath": "dist/assets/characters/grok-bot-purple-orb-candidate-v2.png",
      "sha256": "e4730f2957d64b8b2b7eb49c09a21f7a9c1ea352870bd2bf4c0649c7eeec0874",
      "byteSize": 971168,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "approvalSeriesId": "grok",
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255
      }
    },
    "template": {
      "id": "grok-purple-orb-adjustments-v2",
      "version": "v2",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/grok-purple-orb-four-tabs-v2-review.json",
      "reviewManifestSha256": "3389fac44864e4aef6beda8d233a6ddc045e5c63fd4751ba2f947f571146292f",
      "recipeCount": 20,
      "recipeSetSha256": "a3290575ecac27d4e217f4d94c62e5b066c9fb013490d7b287fd1ac6480bb477"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "grok-green-cloud",
    "version": "v1",
    "seriesId": "grok",
    "approvalSeriesId": "grok",
    "change": "existing-original-retained",
    "approvalScopeIndex": 13,
    "originalAssetId": "asset:grok-green-cloud:original",
    "original": {
      "id": "asset:grok-green-cloud:original",
      "version": "v1",
      "path": "./assets/looks/grok-green-cloud.png",
      "sourcePath": "/Users/liuzhihang/workspace/dots/dist/assets/looks/grok-green-cloud.png",
      "sha256": "d186c5b0837b15c6177b476729b463a7542fdc559d606c6d5818bbad274bad96",
      "byteSize": 790009,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "approvalSeriesId": "grok",
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255
      }
    },
    "template": {
      "id": "grok-green-cloud-adjustments-v2",
      "version": "v2",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/grok-green-cloud-four-tabs-v2-review.json",
      "reviewManifestSha256": "b66d0d08ac15c508f2ffe23812a1685608c4f6f6f047ee53b5c3d518f6581677",
      "recipeCount": 16,
      "recipeSetSha256": "6c92534664f8fb6f007821fc926aba637468f3027873286225c524433ccff09d"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "grok-teal-square",
    "version": "v1",
    "seriesId": "grok",
    "approvalSeriesId": "grok",
    "change": "existing-original-retained",
    "approvalScopeIndex": 14,
    "originalAssetId": "asset:grok-teal-square:original",
    "original": {
      "id": "asset:grok-teal-square:original",
      "version": "v1",
      "path": "./assets/looks/grok-teal-square.png",
      "sourcePath": "/Users/liuzhihang/workspace/dots/dist/assets/looks/grok-teal-square.png",
      "sha256": "81b63d5a809c381f7617261ee4c186031acdc984bac7844d4820c732d44b5f6d",
      "byteSize": 828844,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "approvalSeriesId": "grok",
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255
      }
    },
    "template": {
      "id": "grok-teal-square-adjustments-v2",
      "version": "v2",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/grok-teal-square-four-tabs-v2-review.json",
      "reviewManifestSha256": "41823ec6aa34592348b7e5fcc7c857cd06c7dbfea7ad6d409e89d8e725d94b9a",
      "recipeCount": 16,
      "recipeSetSha256": "17547f35bfe379f10168edc9032de2e4d87655a8fd7eebcb0ec88fb2a0310fcc"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "grok-coral-drop",
    "version": "v1",
    "seriesId": "grok",
    "approvalSeriesId": "grok",
    "change": "existing-original-retained",
    "approvalScopeIndex": 15,
    "originalAssetId": "asset:grok-coral-drop:original",
    "original": {
      "id": "asset:grok-coral-drop:original",
      "version": "v1",
      "path": "./assets/companions/v99/grok-coral-drop-candidate-v1.png",
      "sourcePath": "/Users/liuzhihang/workspace/dots/dist/assets/companions/v99/grok-coral-drop-candidate-v1.png",
      "sha256": "443d0143546c74822387f898471030621c011d2b549bf48ee60857dd1e3d1af8",
      "byteSize": 871631,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "approvalSeriesId": "grok",
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255
      }
    },
    "template": {
      "id": "grok-coral-drop-adjustments-v2",
      "version": "v2",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/grok-coral-drop-four-tabs-v2-review.json",
      "reviewManifestSha256": "a01e8c94141939f1bd4e65e5d58b9ef76eed48c2806c98f08e5c243f15fd3392",
      "recipeCount": 16,
      "recipeSetSha256": "d8577ba6ac33df28c37fa56e88fe88bc263b9c8b824ab1e23f998734dffbd2b2"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "grok-white-arch",
    "version": "v1",
    "seriesId": "grok",
    "approvalSeriesId": "grok",
    "change": "new-artwork",
    "approvalScopeIndex": 16,
    "originalAssetId": "asset:grok-white-arch:original",
    "original": {
      "id": "asset:grok-white-arch:original",
      "version": "v1",
      "path": "./assets/characters/gallery-v100/grok-white-arch-v1.png",
      "sourcePath": "dist/assets/characters/gallery-v100/grok-white-arch-v1.png",
      "sha256": "53726fb2087f4feb459f01457aaee278c328a239be8726f4b33ecd9c620db4c0",
      "byteSize": 635566,
      "width": 1254,
      "height": 1254,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "sourceRef": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/generated/grok-white-arch-candidate-v3.png",
      "approvalScopeRef": "scope.artworks[16].original",
      "approvalSeriesId": "grok",
      "previousArtApproval": null,
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255,
        "transparentPixels": 979312,
        "opaquePixels": 899,
        "partialAlphaPixels": 592305
      }
    },
    "template": {
      "id": "grok-white-arch-adjustments-v2",
      "version": "v2",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/grok-white-arch-four-tabs-v2-review.json",
      "reviewManifestSha256": "cb277e4c88378e62b7579aac9d842b39bd785df164cf23c1a2c04138827a8983",
      "recipeCount": 16,
      "recipeSetSha256": "34a2a9b59c8e7b43cc3f94d553916b33549c03123fb87ce585678d62ef05f6f7"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "grok-horizontal-capsule",
    "version": "v1",
    "seriesId": "grok",
    "approvalSeriesId": "grok",
    "change": "new-artwork",
    "approvalScopeIndex": 17,
    "originalAssetId": "asset:grok-horizontal-capsule:original",
    "original": {
      "id": "asset:grok-horizontal-capsule:original",
      "version": "v1",
      "path": "./assets/characters/gallery-v100/grok-horizontal-capsule-v1.png",
      "sourcePath": "dist/assets/characters/gallery-v100/grok-horizontal-capsule-v1.png",
      "sha256": "2824032dc5ff54573b12d8a309de73be04393c2d9d50fae0d8e3f45cebf51522",
      "byteSize": 618745,
      "width": 1635,
      "height": 962,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "sourceRef": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/generated/grok-horizontal-capsule-candidate-v2.png",
      "approvalScopeRef": "scope.artworks[17].original",
      "approvalSeriesId": "grok",
      "previousArtApproval": null,
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255,
        "transparentPixels": 1114343,
        "opaquePixels": 1108,
        "partialAlphaPixels": 457419
      }
    },
    "template": {
      "id": "grok-horizontal-capsule-adjustments-v2",
      "version": "v2",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/grok-horizontal-capsule-four-tabs-v2-review.json",
      "reviewManifestSha256": "350a45ebe481f6ecd8774c27faa39f78e3a006314292ece39d469ced9a332581",
      "recipeCount": 16,
      "recipeSetSha256": "eb0104950b9d890d2b5e95b1b780fb74a580033b12794f1e1944f0e1f1f7242b"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "grok-soft-triangle",
    "version": "v1",
    "seriesId": "grok",
    "approvalSeriesId": "grok",
    "change": "new-artwork",
    "approvalScopeIndex": 18,
    "originalAssetId": "asset:grok-soft-triangle:original",
    "original": {
      "id": "asset:grok-soft-triangle:original",
      "version": "v1",
      "path": "./assets/characters/gallery-v100/grok-soft-triangle-v1.png",
      "sourcePath": "dist/assets/characters/gallery-v100/grok-soft-triangle-v1.png",
      "sha256": "ce81ee389e047a8c0abc6012f78cbbc39ccbf46fd634b993c02168e5383307a1",
      "byteSize": 628413,
      "width": 1254,
      "height": 1254,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "sourceRef": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/generated/grok-soft-triangle-candidate-v2.png",
      "approvalScopeRef": "scope.artworks[18].original",
      "approvalSeriesId": "grok",
      "previousArtApproval": null,
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255,
        "transparentPixels": 1044506,
        "opaquePixels": 408,
        "partialAlphaPixels": 527602
      }
    },
    "template": {
      "id": "grok-soft-triangle-adjustments-v2",
      "version": "v2",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/grok-soft-triangle-four-tabs-v2-review.json",
      "reviewManifestSha256": "df577604a82ea7032b6828cd6fb90260271acf14ef3241dabb6b3e2f33a99fe1",
      "recipeCount": 16,
      "recipeSetSha256": "9dd29b854c079847fd8c5d6163b4fcd62a2b28ba71c012bf2dd204a525a83f4d"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "grok-soft-diamond",
    "version": "v1",
    "seriesId": "grok",
    "approvalSeriesId": "grok",
    "change": "new-artwork",
    "approvalScopeIndex": 19,
    "originalAssetId": "asset:grok-soft-diamond:original",
    "original": {
      "id": "asset:grok-soft-diamond:original",
      "version": "v1",
      "path": "./assets/characters/gallery-v100/grok-soft-diamond-v1.png",
      "sourcePath": "dist/assets/characters/gallery-v100/grok-soft-diamond-v1.png",
      "sha256": "dc64e4b96a1c5a3cdee8988e5aae0f5343d5494fdf3abeb8f9ed7d75957c2456",
      "byteSize": 726957,
      "width": 1254,
      "height": 1254,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "sourceRef": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/generated/grok-soft-diamond-candidate-v2.png",
      "approvalScopeRef": "scope.artworks[19].original",
      "approvalSeriesId": "grok",
      "previousArtApproval": null,
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255,
        "transparentPixels": 903595,
        "opaquePixels": 866,
        "partialAlphaPixels": 668055
      }
    },
    "template": {
      "id": "grok-soft-diamond-adjustments-v2",
      "version": "v2",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/grok-soft-diamond-four-tabs-v2-review.json",
      "reviewManifestSha256": "d001d02e4ad4cee932b6c2aa26d7256fdb828a2fcf3ec055900cccd0fb7d0fe3",
      "recipeCount": 16,
      "recipeSetSha256": "d39e966aaa0acd6e1da8de78dd1b87c284d9f1ff9bae450f7b822906344dce30"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "grok-half-dome",
    "version": "v1",
    "seriesId": "grok",
    "approvalSeriesId": "grok",
    "change": "new-artwork",
    "approvalScopeIndex": 20,
    "originalAssetId": "asset:grok-half-dome:original",
    "original": {
      "id": "asset:grok-half-dome:original",
      "version": "v1",
      "path": "./assets/characters/gallery-v100/grok-half-dome-v1.png",
      "sourcePath": "dist/assets/characters/gallery-v100/grok-half-dome-v1.png",
      "sha256": "ba254fff8ee53e5733c571d99daa205934af4cba76965dfc046d78b201d6f80d",
      "byteSize": 712400,
      "width": 1254,
      "height": 1254,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "sourceRef": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/generated/grok-half-dome-candidate-v2.png",
      "approvalScopeRef": "scope.artworks[20].original",
      "approvalSeriesId": "grok",
      "previousArtApproval": null,
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255,
        "transparentPixels": 1011991,
        "opaquePixels": 1154,
        "partialAlphaPixels": 559371
      }
    },
    "template": {
      "id": "grok-half-dome-adjustments-v2",
      "version": "v2",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/grok-half-dome-four-tabs-v2-review.json",
      "reviewManifestSha256": "73fb2b43cf4b0246fafcd60089d1e0e2e8d5a2a554873d9a6af52559016cbad1",
      "recipeCount": 16,
      "recipeSetSha256": "a91cb741f586ede2e2fe7d342d198aaaec524bb72f6c3687de448638352ab802"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "grok-cylinder",
    "version": "v1",
    "seriesId": "grok",
    "approvalSeriesId": "grok",
    "change": "new-artwork",
    "approvalScopeIndex": 21,
    "originalAssetId": "asset:grok-cylinder:original",
    "original": {
      "id": "asset:grok-cylinder:original",
      "version": "v1",
      "path": "./assets/characters/gallery-v100/grok-cylinder-v1.png",
      "sourcePath": "dist/assets/characters/gallery-v100/grok-cylinder-v1.png",
      "sha256": "fb6b397e19e17a5c0bf1dd1e80018fbb3172898df3f06e32631f0686feb5d33b",
      "byteSize": 727644,
      "width": 1226,
      "height": 1283,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "sourceRef": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/generated/grok-cylinder-candidate-v2.png",
      "approvalScopeRef": "scope.artworks[21].original",
      "approvalSeriesId": "grok",
      "previousArtApproval": null,
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255,
        "transparentPixels": 935885,
        "opaquePixels": 705,
        "partialAlphaPixels": 636368
      }
    },
    "template": {
      "id": "grok-cylinder-adjustments-v2",
      "version": "v2",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/grok-cylinder-four-tabs-v2-review.json",
      "reviewManifestSha256": "bd4d8f719ae24da519e0233cb08ea8943b3e69506a3071b0ef96109b83bc510e",
      "recipeCount": 16,
      "recipeSetSha256": "7c1d827e06d3898307fc031d6a6259fd3c05d2f12d724e75826f963c087e6a2e"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "grok-egg",
    "version": "v1",
    "seriesId": "grok",
    "approvalSeriesId": "grok",
    "change": "new-artwork",
    "approvalScopeIndex": 22,
    "originalAssetId": "asset:grok-egg:original",
    "original": {
      "id": "asset:grok-egg:original",
      "version": "v1",
      "path": "./assets/characters/gallery-v100/grok-egg-v1.png",
      "sourcePath": "dist/assets/characters/gallery-v100/grok-egg-v1.png",
      "sha256": "067a355db475520ff270e70bb64d31505b65052051451ddfe6ac03774612e027",
      "byteSize": 742923,
      "width": 1230,
      "height": 1278,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "sourceRef": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/generated/grok-egg-candidate-v2.png",
      "approvalScopeRef": "scope.artworks[22].original",
      "approvalSeriesId": "grok",
      "previousArtApproval": null,
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255,
        "transparentPixels": 1060234,
        "opaquePixels": 470,
        "partialAlphaPixels": 511236
      }
    },
    "template": {
      "id": "grok-egg-adjustments-v2",
      "version": "v2",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/grok-egg-four-tabs-v2-review.json",
      "reviewManifestSha256": "385d19c9a14f99b4a7165e55e1dc538e6a543d5f0f4979bcd829818362d92626",
      "recipeCount": 16,
      "recipeSetSha256": "ae56fdb814ecf704c9556a038e9f1ceea67dda85db409229956dd364ece0c058"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "grok-rounded-cube",
    "version": "v1",
    "seriesId": "grok",
    "approvalSeriesId": "grok",
    "change": "new-artwork",
    "approvalScopeIndex": 23,
    "originalAssetId": "asset:grok-rounded-cube:original",
    "original": {
      "id": "asset:grok-rounded-cube:original",
      "version": "v1",
      "path": "./assets/characters/gallery-v100/grok-rounded-cube-v1.png",
      "sourcePath": "dist/assets/characters/gallery-v100/grok-rounded-cube-v1.png",
      "sha256": "aa5b76c9a1958e27d5529a5780792bc22ee010a30218f4c6d7bc9288df0f0c8f",
      "byteSize": 892052,
      "width": 1372,
      "height": 1147,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "sourceRef": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/generated/grok-rounded-cube-candidate-v2.png",
      "approvalScopeRef": "scope.artworks[23].original",
      "approvalSeriesId": "grok",
      "previousArtApproval": null,
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255,
        "transparentPixels": 913393,
        "opaquePixels": 651,
        "partialAlphaPixels": 659640
      }
    },
    "template": {
      "id": "grok-rounded-cube-adjustments-v2",
      "version": "v2",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/grok-rounded-cube-four-tabs-v2-review.json",
      "reviewManifestSha256": "101b4de02f52917713763273720565851b07e17955f3c6dc6f755adc90f11440",
      "recipeCount": 16,
      "recipeSetSha256": "04547e42d6bd6b76f6280777c88ce4b13d930525f0bb0faa4778e15b705b81e3"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "candidate-meta-muse-20261005",
    "version": "v1",
    "seriesId": "meta-muse",
    "approvalSeriesId": "muse",
    "change": "existing-original-retained",
    "approvalScopeIndex": 24,
    "originalAssetId": "asset:candidate-meta-muse-20261005:original",
    "original": {
      "id": "asset:candidate-meta-muse-20261005:original",
      "version": "v1",
      "path": "./assets/characters/meta-muse-cream-hooded-candidate-v1.png",
      "sourcePath": "/Users/liuzhihang/workspace/dots/dist/assets/characters/meta-muse-cream-hooded-candidate-v1.png",
      "sha256": "12ec7cee17f4948d5dd4258b3ad0fe5b44a38e9506b13f5ff39aa3856b3b3ea6",
      "byteSize": 1003955,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "approvalSeriesId": "muse",
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255
      }
    },
    "template": {
      "id": "muse-cream-core-adjustments-v1",
      "version": "v1",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/muse-cream-core-review.json",
      "reviewManifestSha256": "ccbdadc17beef29023940474a749315ad5a1c2811f9627a7f11801a6d5dd5492",
      "recipeCount": 13,
      "recipeSetSha256": "f49ebbf4f2816e7d65f7fd98dc513bc1869825da90b80ddcf722ba90b0289785"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "muse-rose-flowers",
    "version": "v1",
    "seriesId": "meta-muse",
    "approvalSeriesId": "muse",
    "change": "existing-original-retained",
    "approvalScopeIndex": 25,
    "originalAssetId": "asset:muse-rose-flowers:original",
    "original": {
      "id": "asset:muse-rose-flowers:original",
      "version": "v1",
      "path": "./assets/looks/muse-rose-flowers.png",
      "sourcePath": "/Users/liuzhihang/workspace/dots/dist/assets/looks/muse-rose-flowers.png",
      "sha256": "d0865bc0a0df4e0e9451c702dac8db0a4bf7e6aa0820657edffa239d24b367be",
      "byteSize": 1185166,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "approvalSeriesId": "muse",
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255
      }
    },
    "template": {
      "id": "muse-rose-flowers-adjustments-v1",
      "version": "v1",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/muse-rose-flowers-review.json",
      "reviewManifestSha256": "f577c53ad47a5b0d4d77e0ee8ee9dc683c0716e70783b2103d3245eb4747a6a6",
      "recipeCount": 13,
      "recipeSetSha256": "11affe290e4c03959d84f213ba75f0885d87ca57f6d093841504734f194e2b72"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "muse-sage-reading",
    "version": "v1",
    "seriesId": "meta-muse",
    "approvalSeriesId": "muse",
    "change": "existing-original-retained",
    "approvalScopeIndex": 26,
    "originalAssetId": "asset:muse-sage-reading:original",
    "original": {
      "id": "asset:muse-sage-reading:original",
      "version": "v1",
      "path": "./assets/looks/muse-sage-reading.png",
      "sourcePath": "/Users/liuzhihang/workspace/dots/dist/assets/looks/muse-sage-reading.png",
      "sha256": "82f85f8abce3d425381c54c3d54b116a4e9ab6af2f782792377bbd6ed79f0f3a",
      "byteSize": 1142481,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "approvalSeriesId": "muse",
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255
      }
    },
    "template": {
      "id": "muse-sage-reading-adjustments-v1",
      "version": "v1",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/muse-sage-reading-review.json",
      "reviewManifestSha256": "719c9c63ea83d3a92aa676e485e26583a393fe35ba013990fa3ae9fbd07428cc",
      "recipeCount": 13,
      "recipeSetSha256": "4df454bf4086ce98df9280194f362c527c7f06ae8ed4ac6dfd1dcf4d0a5a29d7"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "muse-lavender-lantern",
    "version": "v1",
    "seriesId": "meta-muse",
    "approvalSeriesId": "muse",
    "change": "existing-original-retained",
    "approvalScopeIndex": 27,
    "originalAssetId": "asset:muse-lavender-lantern:original",
    "original": {
      "id": "asset:muse-lavender-lantern:original",
      "version": "v1",
      "path": "./assets/companions/v99/muse-lavender-lantern-candidate-v1.png",
      "sourcePath": "/Users/liuzhihang/workspace/dots/dist/assets/companions/v99/muse-lavender-lantern-candidate-v1.png",
      "sha256": "ecf97bcb22678cd4461da27c0ec2a7a4721137081c1b42e25cef115666137574",
      "byteSize": 1014161,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "approvalSeriesId": "muse",
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255
      }
    },
    "template": {
      "id": "muse-lavender-lantern-adjustments-v1",
      "version": "v1",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/muse-lavender-lantern-review.json",
      "reviewManifestSha256": "578f6bb482c5dafe4cd3b3c76d43c9059e2c11c1b0eea7ac26df8933ff851fa2",
      "recipeCount": 13,
      "recipeSetSha256": "f502c1481a1593c6321d02e2de816f37bda64e352560fe1b453846890e5054e8"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "muse-holding-star",
    "version": "v1",
    "seriesId": "meta-muse",
    "approvalSeriesId": "muse",
    "change": "new-artwork",
    "approvalScopeIndex": 28,
    "originalAssetId": "asset:muse-holding-star:original",
    "original": {
      "id": "asset:muse-holding-star:original",
      "version": "v1",
      "path": "./assets/characters/gallery-v100/muse-holding-star-v1.png",
      "sourcePath": "dist/assets/characters/gallery-v100/muse-holding-star-v1.png",
      "sha256": "b8f2e7f4fab8ea5abef60fef2ab87476fa90b9686463521c9949054330446ad1",
      "byteSize": 1202099,
      "width": 1203,
      "height": 1308,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "sourceRef": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/generated/muse-holding-star-candidate-v2.png",
      "approvalScopeRef": "scope.artworks[28].original",
      "approvalSeriesId": "muse",
      "previousArtApproval": null,
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255,
        "transparentPixels": 891187,
        "opaquePixels": 2,
        "partialAlphaPixels": 682335
      }
    },
    "template": {
      "id": "muse-holding-star-adjustments-v1",
      "version": "v1",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/muse-holding-star-review.json",
      "reviewManifestSha256": "0e4175cbd7b2fa712f30b47fb0baa2bc8460aec6d349e9a142ad98ba3b2418ba",
      "recipeCount": 13,
      "recipeSetSha256": "2dedb32bbdcaf5302f778f9a13f23db06f23ae95a0592f75ae8e03d443f206a7"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "candidate-animals-20261005",
    "version": "v1",
    "seriesId": "animals",
    "approvalSeriesId": "animals",
    "change": "existing-original-retained",
    "approvalScopeIndex": 29,
    "originalAssetId": "asset:candidate-animals-20261005:original",
    "original": {
      "id": "asset:candidate-animals-20261005:original",
      "version": "v1",
      "path": "./assets/characters/animals-original-shiba-candidate-v1.png",
      "sourcePath": "/Users/liuzhihang/workspace/dots/dist/assets/characters/animals-original-shiba-candidate-v1.png",
      "sha256": "f6e731ad99f85a20681588e14e2f93279707897da7ff50769f6f29bb62893c62",
      "byteSize": 1413426,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "approvalSeriesId": "animals",
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255
      }
    },
    "template": {
      "id": "animal-shiba-adjustments-v1",
      "version": "v1",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/animal-shiba-review.json",
      "reviewManifestSha256": "b3408fe4a7c7bc7e2c4025a478dbfaf5c1cf6e9607a8eac713e4bb0c3ece20cc",
      "recipeCount": 6,
      "recipeSetSha256": "98cd5e43ae915dd6f41d816110f8b4f01f6546eb28488eb600af2d16ac9b8531"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "animal-white-cat",
    "version": "v1",
    "seriesId": "animals",
    "approvalSeriesId": "animals",
    "change": "existing-original-retained",
    "approvalScopeIndex": 30,
    "originalAssetId": "asset:animal-white-cat:original",
    "original": {
      "id": "asset:animal-white-cat:original",
      "version": "v1",
      "path": "./assets/looks/animal-white-cat.png",
      "sourcePath": "/Users/liuzhihang/workspace/dots/dist/assets/looks/animal-white-cat.png",
      "sha256": "6b6e0cc65b7edef88b0b19a948444a261a4050ccdcba942fd5941bc2aa2f499a",
      "byteSize": 1382027,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "approvalSeriesId": "animals",
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255
      }
    },
    "template": {
      "id": "animal-white-cat-adjustments-v1",
      "version": "v1",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/animal-white-cat-review.json",
      "reviewManifestSha256": "af98d7b1e8306b631b145a4f55283a703d3231e049f2fefcdb3236318986046f",
      "recipeCount": 6,
      "recipeSetSha256": "b5be7acac98933625258bce9f32f510e941fda4d293783da71c74bd5a533902c"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "animal-gray-husky",
    "version": "v1",
    "seriesId": "animals",
    "approvalSeriesId": "animals",
    "change": "existing-original-retained",
    "approvalScopeIndex": 31,
    "originalAssetId": "asset:animal-gray-husky:original",
    "original": {
      "id": "asset:animal-gray-husky:original",
      "version": "v1",
      "path": "./assets/looks/animal-gray-husky.png",
      "sourcePath": "/Users/liuzhihang/workspace/dots/dist/assets/looks/animal-gray-husky.png",
      "sha256": "21fa19552ec9c93282985aecf80a1c89d38d15064cf27c3a8bafc8cacdb315ca",
      "byteSize": 1623665,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "approvalSeriesId": "animals",
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255
      }
    },
    "template": {
      "id": "animal-gray-husky-adjustments-v1",
      "version": "v1",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/animal-gray-husky-review.json",
      "reviewManifestSha256": "727c7cbc3ba8232af8a74ad4273f8c1d723fa92f8c0cc63ef3d179acff35f5fc",
      "recipeCount": 6,
      "recipeSetSha256": "f633c552ba4ae8c03f6da9786622b4b0796730f60d3260a9e12c78152fba7ef6"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "animal-white-rabbit-v98-candidate",
    "version": "v2",
    "seriesId": "animals",
    "approvalSeriesId": "animals",
    "change": "new-transparent-version",
    "approvalScopeIndex": 32,
    "originalAssetId": "asset:animal-white-rabbit-v98-candidate:original",
    "original": {
      "id": "asset:animal-white-rabbit-v98-candidate:original",
      "version": "v2",
      "path": "./assets/characters/gallery-v100/animal-white-rabbit-v98-candidate-v2.png",
      "sourcePath": "dist/assets/characters/gallery-v100/animal-white-rabbit-v98-candidate-v2.png",
      "sha256": "e98a689faeebafc98fce9ed52d0686982be80e5836b7ec154102e1fc5006c794",
      "byteSize": 1234792,
      "width": 1133,
      "height": 1388,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "sourceRef": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/generated/animal-white-rabbit-v98-candidate-v2.png",
      "approvalScopeRef": "scope.artworks[32].original",
      "approvalSeriesId": "animals",
      "previousArtApproval": null,
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255,
        "transparentPixels": 841527,
        "opaquePixels": 265,
        "partialAlphaPixels": 730812
      }
    },
    "template": {
      "id": "animal-white-rabbit-adjustments-v2",
      "version": "v2",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/animal-white-rabbit-adjustments-review-v2.json",
      "reviewManifestSha256": "e5d5dd6e47ffdd1e0830db638288cab59d5019999c1a0423b5a6dd06e5ff24ec",
      "recipeCount": 11,
      "recipeSetSha256": "6d858a88b23c8d92d889490fd40a45b65d97aafb012bef3fa314907a5eb8da24"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "animal-cocoa-bear",
    "version": "v1",
    "seriesId": "animals",
    "approvalSeriesId": "animals",
    "change": "existing-original-retained",
    "approvalScopeIndex": 33,
    "originalAssetId": "asset:animal-cocoa-bear:original",
    "original": {
      "id": "asset:animal-cocoa-bear:original",
      "version": "v1",
      "path": "./assets/companions/v99/animal-cocoa-bear-candidate-v1.png",
      "sourcePath": "/Users/liuzhihang/workspace/dots/dist/assets/companions/v99/animal-cocoa-bear-candidate-v1.png",
      "sha256": "3eb35d93bccd37542bbbca3aa0216b5102bf25183168aeca9392b959061d5f57",
      "byteSize": 956169,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "approvalSeriesId": "animals",
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255
      }
    },
    "template": {
      "id": "animal-cocoa-bear-adjustments-v1",
      "version": "v1",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/animal-cocoa-bear-review.json",
      "reviewManifestSha256": "c7d1f8f03ce3ff4ba9da79199f0826715551897dbccfca4ed466544328270844",
      "recipeCount": 6,
      "recipeSetSha256": "fa5a814590443c4b83b963af60ef935f38af77d2bc3bad366b700ae899a00b69"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "candidate-animal-panda",
    "version": "v2",
    "seriesId": "animals",
    "approvalSeriesId": "animals",
    "change": "new-artwork",
    "approvalScopeIndex": 34,
    "originalAssetId": "asset:candidate-animal-panda:original",
    "original": {
      "id": "asset:candidate-animal-panda:original",
      "version": "v2",
      "path": "./assets/characters/gallery-v100/candidate-animal-panda-v2.png",
      "sourcePath": "dist/assets/characters/gallery-v100/candidate-animal-panda-v2.png",
      "sha256": "b0f058ad260ac76545164e0b927db00a3fe32f5d50ff08d30afa39bfe7b2ecd3",
      "byteSize": 1624595,
      "width": 1230,
      "height": 1278,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "sourceRef": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/generated/candidate-animal-panda-candidate-v2-alpha-clean.png",
      "approvalScopeRef": "scope.artworks[34].original",
      "approvalSeriesId": "animals",
      "previousArtApproval": null,
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 254,
        "transparentPixels": 739071,
        "opaquePixels": 0,
        "partialAlphaPixels": 832869
      }
    },
    "template": {
      "id": "candidate-animal-panda-adjustments-v1",
      "version": "v1",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/panda-adjustments-review.json",
      "reviewManifestSha256": "49ee409c1b9b70443cd019051e5749226629bcdb7e8477e90f38460b5c2e59be",
      "recipeCount": 10,
      "recipeSetSha256": "60b37b181134845dbb0c5d93a3f2e0add35b4df5361c4959cec3a2ffcde65624"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "candidate-animal-pig",
    "version": "v2",
    "seriesId": "animals",
    "approvalSeriesId": "animals",
    "change": "new-artwork",
    "approvalScopeIndex": 35,
    "originalAssetId": "asset:candidate-animal-pig:original",
    "original": {
      "id": "asset:candidate-animal-pig:original",
      "version": "v2",
      "path": "./assets/characters/gallery-v100/candidate-animal-pig-v2.png",
      "sourcePath": "dist/assets/characters/gallery-v100/candidate-animal-pig-v2.png",
      "sha256": "eec3e34b62e0f311900409f586d9feca191d780e4e730414ea4b320eed86d1aa",
      "byteSize": 1262869,
      "width": 1347,
      "height": 1168,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "sourceRef": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/generated/candidate-animal-pig-candidate-v2-alpha-clean.png",
      "approvalScopeRef": "scope.artworks[35].original",
      "approvalSeriesId": "animals",
      "previousArtApproval": null,
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255,
        "transparentPixels": 917600,
        "opaquePixels": 18,
        "partialAlphaPixels": 655678
      }
    },
    "template": {
      "id": "candidate-animal-pig-adjustments-v1",
      "version": "v1",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/animal-pig-adjustments-review.json",
      "reviewManifestSha256": "884f61970c667ef2517145e0f9916bebd3a9bd5a79686a3c42e840de386dc26d",
      "recipeCount": 10,
      "recipeSetSha256": "3694d30d6f824a0bd52529a84997494ce98152d1e36c4fe507226b01dad49bef"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "candidate-animal-monkey",
    "version": "v2",
    "seriesId": "animals",
    "approvalSeriesId": "animals",
    "change": "new-artwork",
    "approvalScopeIndex": 36,
    "originalAssetId": "asset:candidate-animal-monkey:original",
    "original": {
      "id": "asset:candidate-animal-monkey:original",
      "version": "v2",
      "path": "./assets/characters/gallery-v100/candidate-animal-monkey-v2.png",
      "sourcePath": "dist/assets/characters/gallery-v100/candidate-animal-monkey-v2.png",
      "sha256": "1d7fa9e559773bfbe7628d99c926ccda8a9e59dc9a8a3912097c4ebe67a5595a",
      "byteSize": 1853281,
      "width": 1245,
      "height": 1263,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "sourceRef": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/generated/candidate-animal-monkey-candidate-v1-v2-alpha-clean.png",
      "approvalScopeRef": "scope.artworks[36].original",
      "approvalSeriesId": "animals",
      "previousArtApproval": null,
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255,
        "transparentPixels": 706314,
        "opaquePixels": 19,
        "partialAlphaPixels": 866102
      }
    },
    "template": {
      "id": "candidate-animal-monkey-adjustments-v1",
      "version": "v1",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/animal-monkey-adjustments-review.json",
      "reviewManifestSha256": "614e2fe6e413be87300e3444e5261e8ced97afa756bf4070c237f5db090ba3b2",
      "recipeCount": 10,
      "recipeSetSha256": "2480f97d7c6de40de29d423d05c76ead845c72b70de099aef6e162ea035ee03d"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "candidate-animal-small-bird",
    "version": "v2",
    "seriesId": "animals",
    "approvalSeriesId": "animals",
    "change": "new-artwork",
    "approvalScopeIndex": 37,
    "originalAssetId": "asset:candidate-animal-small-bird:original",
    "original": {
      "id": "asset:candidate-animal-small-bird:original",
      "version": "v2",
      "path": "./assets/characters/gallery-v100/candidate-animal-small-bird-v2.png",
      "sourcePath": "dist/assets/characters/gallery-v100/candidate-animal-small-bird-v2.png",
      "sha256": "b797eba8697b45d58440769444f8e2afecaad59b96478de6bd2a259605c40791",
      "byteSize": 1188034,
      "width": 1374,
      "height": 1145,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "sourceRef": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/generated/candidate-animal-small-bird-candidate-v1-v2-alpha-clean.png",
      "approvalScopeRef": "scope.artworks[37].original",
      "approvalSeriesId": "animals",
      "previousArtApproval": null,
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255,
        "transparentPixels": 1003672,
        "opaquePixels": 114,
        "partialAlphaPixels": 569444
      }
    },
    "template": {
      "id": "candidate-animal-small-bird-adjustments-v1",
      "version": "v1",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/animal-small-bird-adjustments-review.json",
      "reviewManifestSha256": "fd823db93d63087b18845a9e2c8a1b443a0286d89455e5d7829733b1646d358d",
      "recipeCount": 10,
      "recipeSetSha256": "f2fdfc750681e5f3c9d3767d175cf9a511c98319ade6ba9904f19b77430e8949"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "candidate-animal-penguin",
    "version": "v2",
    "seriesId": "animals",
    "approvalSeriesId": "animals",
    "change": "new-artwork",
    "approvalScopeIndex": 38,
    "originalAssetId": "asset:candidate-animal-penguin:original",
    "original": {
      "id": "asset:candidate-animal-penguin:original",
      "version": "v2",
      "path": "./assets/characters/gallery-v100/candidate-animal-penguin-v2.png",
      "sourcePath": "dist/assets/characters/gallery-v100/candidate-animal-penguin-v2.png",
      "sha256": "7fb006b5216dd7a7d58d1f131ea17a495fc06b3f2ee61e5915beae56fa11101e",
      "byteSize": 1377810,
      "width": 1230,
      "height": 1278,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "sourceRef": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/generated/candidate-animal-penguin-candidate-v1-v2-alpha-clean.png",
      "approvalScopeRef": "scope.artworks[38].original",
      "approvalSeriesId": "animals",
      "previousArtApproval": null,
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255,
        "transparentPixels": 855624,
        "opaquePixels": 98,
        "partialAlphaPixels": 716218
      }
    },
    "template": {
      "id": "candidate-animal-penguin-adjustments-v1",
      "version": "v1",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/animal-penguin-adjustments-review.json",
      "reviewManifestSha256": "0f8666b5c7d467d7957248fb96c71f07a4cd48eb412a9b2ae769a330e0a47555",
      "recipeCount": 10,
      "recipeSetSha256": "421ea8bf199ff7df404c7bc840bbdd7c2dc0be6c23a5e8b97be665ce673f6b9e"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "candidate-humans-20261005",
    "version": "v1",
    "seriesId": "humans",
    "approvalSeriesId": "humans",
    "change": "existing-original-retained",
    "approvalScopeIndex": 39,
    "originalAssetId": "asset:candidate-humans-20261005:original",
    "original": {
      "id": "asset:candidate-humans-20261005:original",
      "version": "v1",
      "path": "./assets/characters/humans-chestnut-chibi-teal-knit-candidate-v1.png",
      "sourcePath": "dist/assets/characters/humans-chestnut-chibi-teal-knit-candidate-v1.png",
      "sha256": "56423f860f47bbad212875aeecdda40e6c86382b6d15a61b5c1a2ffd723fc521",
      "byteSize": 1151483,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "approvalSeriesId": "humans",
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255
      }
    },
    "template": {
      "id": "human-chestnut-boy-adjustments-v3",
      "version": "v3",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/chestnut-boy-adjustments-review-v3.json",
      "reviewManifestSha256": "e3bc22df4e4fa166858583af13e421b1b9e4a8d91cde7454b4a6a9f744c7f087",
      "recipeCount": 8,
      "recipeSetSha256": "a9ad605e7657ba25734f9d8191c5bdb193d15110128dca5bfb4341c2c02a44ce"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "human-bun-yellow",
    "version": "v1",
    "seriesId": "humans",
    "approvalSeriesId": "humans",
    "change": "existing-original-retained",
    "approvalScopeIndex": 40,
    "originalAssetId": "asset:human-bun-yellow:original",
    "original": {
      "id": "asset:human-bun-yellow:original",
      "version": "v1",
      "path": "./assets/looks/human-bun-yellow.png",
      "sourcePath": "dist/assets/looks/human-bun-yellow.png",
      "sha256": "f7a5f87daa25e1171f8c42db6ed8b668b695bf6f40cbed0aa31d5f8ca7052ccc",
      "byteSize": 1086214,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "approvalSeriesId": "humans",
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255
      }
    },
    "template": {
      "id": "human-bun-girl-adjustments-v3",
      "version": "v3",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/bun-girl-adjustments-review-v3.json",
      "reviewManifestSha256": "413d8a5f1923f3926e147908581968fd39aa12ebe12f3185b2d3787ee0dd3756",
      "recipeCount": 8,
      "recipeSetSha256": "4a5755e17492461481972d3070aef9809dbf1ec50b78a648bd2f01f7849732da"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "human-blond-glasses",
    "version": "v1",
    "seriesId": "humans",
    "approvalSeriesId": "humans",
    "change": "existing-original-retained",
    "approvalScopeIndex": 41,
    "originalAssetId": "asset:human-blond-glasses:original",
    "original": {
      "id": "asset:human-blond-glasses:original",
      "version": "v1",
      "path": "./assets/looks/human-blond-glasses.png",
      "sourcePath": "dist/assets/looks/human-blond-glasses.png",
      "sha256": "84d20915564eac63f5e33834e221bd73ef7530c8ea331c730503e9de0dafc0f6",
      "byteSize": 1058375,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "approvalSeriesId": "humans",
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255
      }
    },
    "template": {
      "id": "human-blond-child-adjustments-v2",
      "version": "v2",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/blond-child-adjustments-review-v2.json",
      "reviewManifestSha256": "2d424bb0c5ebcedd767d14f2b4efa73d9a9e95e75fe4cc7ae394830343da83cc",
      "recipeCount": 6,
      "recipeSetSha256": "82daed164db787ff5ba55d9c9cb4be17d9cbcaf85d661a3303068eb8d2e6f0c5"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "human-rust-jacket",
    "version": "v1",
    "seriesId": "humans",
    "approvalSeriesId": "humans",
    "change": "existing-original-retained",
    "approvalScopeIndex": 42,
    "originalAssetId": "asset:human-rust-jacket:original",
    "original": {
      "id": "asset:human-rust-jacket:original",
      "version": "v1",
      "path": "./assets/companions/v99/human-rust-jacket-candidate-v1.png",
      "sourcePath": "dist/assets/companions/v99/human-rust-jacket-candidate-v1.png",
      "sha256": "f53049ad40e0781453ba90c8bcc88b6b30c460fd2b27c9302463df4076208cf4",
      "byteSize": 944230,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "approvalSeriesId": "humans",
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255
      }
    },
    "template": {
      "id": "human-rust-girl-adjustments-v2",
      "version": "v2",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/rust-girl-adjustments-review-v2.json",
      "reviewManifestSha256": "dcd8d5aedb486067e24e4a24569c58bd8aa8c4778ceddc6a392f924ad5e59e92",
      "recipeCount": 6,
      "recipeSetSha256": "d77e75de43a8b1948a50b3e4d2b860806527edcc6747350fffdff263bd0968d6"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  },
  {
    "id": "robot-ivory-capsule-face-v98-candidate",
    "version": "v2",
    "seriesId": "independent-original",
    "approvalSeriesId": "independent-original",
    "change": "new-transparent-version",
    "approvalScopeIndex": 43,
    "originalAssetId": "asset:robot-ivory-capsule-face-v98-candidate:original",
    "original": {
      "id": "asset:robot-ivory-capsule-face-v98-candidate:original",
      "version": "v2",
      "path": "./assets/characters/gallery-v100/robot-ivory-capsule-face-v98-candidate-v2.png",
      "sourcePath": "dist/assets/characters/gallery-v100/robot-ivory-capsule-face-v98-candidate-v2.png",
      "sha256": "0678c8f5747273c8cbc8ea7f993c02331eed41c6bc703f939344f91a59ae3b1c",
      "byteSize": 1023195,
      "width": 1215,
      "height": 1295,
      "resourceKind": "transparent-character-still",
      "resourceStatus": "verified-source",
      "runtimeVerification": "not-browser-checked",
      "sourceRef": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/generated/robot-ivory-capsule-face-v98-candidate-v2.png",
      "approvalScopeRef": "scope.artworks[43].original",
      "approvalSeriesId": "independent-original",
      "previousArtApproval": null,
      "alpha": {
        "hasAlpha": true,
        "hasTransparency": true,
        "min": 0,
        "max": 255,
        "transparentPixels": 845604,
        "opaquePixels": 285,
        "partialAlphaPixels": 727536
      }
    },
    "template": {
      "id": "robot-capsule-independent-adjustments-v1",
      "version": "v1",
      "reviewManifest": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/robot-capsule-independent-adjustments-review.json",
      "reviewManifestSha256": "e4af72c450c96a14ec6ce62a0e6a6511e0285d4a42df3e327dd98d13fd0c528d",
      "recipeCount": 32,
      "recipeSetSha256": "ad1cf8a64af7fd09dfe563db072372778d080af8d7b917ed8e69e069a63579c3"
    },
    "approval": {
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1",
      "packagePath": "openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.json",
      "packageSha256": "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c"
    }
  }
]);
export const V100_ORIGINAL_ASSETS=deepFreeze(V100_ARTWORK_ROWS.filter(row=>row.change!=='existing-original-retained').map(row=>row.original));
export const V100_ADDITIONAL_CONTENT=deepFreeze({
  "dots-blue-beret-cloud": {
    "titleByLanguage": {
      "en": "Blue Beret Cloud",
      "zh-CN": "蓝帽云团"
    },
    "descriptionByLanguage": {
      "en": "Dots character Blue Beret Cloud: a low continuous cloud mound with rounded scallops; electric blue short dense fur; two glossy black vertical oval eyes; a fitted black wool beret.",
      "zh-CN": "Dots角色「蓝帽云团」：低矮连续、带圆润起伏的云团；亮蓝色短密绒；两枚有高光的黑色竖椭圆眼；贴合头顶的黑色毛呢贝雷帽。"
    },
    "aliases": {
      "en": [
        "Blue Beret Cloud",
        "Blue Beret Cloud Dots",
        "original Dots"
      ],
      "zh-CN": [
        "蓝帽云团",
        "蓝帽云团Dots",
        "原创Dots"
      ]
    },
    "characterId": "dots-blue-beret-cloud",
    "seriesId": "dots",
    "detailFactIds": [
      "shape:cloud",
      "color:blue",
      "material:short-dense-plush",
      "facial-features:open",
      "head-accessory:beret"
    ],
    "facts": [
      {
        "id": "style:dots",
        "labelByLanguage": {
          "en": "Dots",
          "zh-CN": "Dots"
        },
        "state": "known"
      },
      {
        "id": "object-type:orb-character",
        "labelByLanguage": {
          "en": "orb-character",
          "zh-CN": "Dots"
        },
        "state": "known"
      },
      {
        "id": "shape:cloud",
        "labelByLanguage": {
          "en": "a low continuous cloud mound with rounded scallops",
          "zh-CN": "低矮连续、带圆润起伏的云团"
        },
        "state": "known"
      },
      {
        "id": "color:blue",
        "labelByLanguage": {
          "en": "Electric blue",
          "zh-CN": "亮蓝色"
        },
        "state": "known"
      },
      {
        "id": "material:short-dense-plush",
        "labelByLanguage": {
          "en": "Short dense plush",
          "zh-CN": "短密绒"
        },
        "state": "known"
      },
      {
        "id": "facial-features:open",
        "labelByLanguage": {
          "en": "two glossy black vertical oval eyes",
          "zh-CN": "两枚有高光的黑色竖椭圆眼"
        },
        "state": "known"
      },
      {
        "id": "head-accessory:beret",
        "labelByLanguage": {
          "en": "a fitted black wool beret",
          "zh-CN": "贴合头顶的黑色毛呢贝雷帽"
        },
        "state": "known"
      },
      {
        "id": "body-structure:limbless",
        "labelByLanguage": {
          "en": "Limbless body",
          "zh-CN": "无肢体"
        },
        "state": "known"
      },
      {
        "id": "background:transparent",
        "labelByLanguage": {
          "en": "Transparent background",
          "zh-CN": "透明背景"
        },
        "state": "known"
      },
      {
        "id": "usage:transparent-character",
        "labelByLanguage": {
          "en": "Transparent character image",
          "zh-CN": "透明角色图"
        },
        "state": "known"
      }
    ]
  },
  "dots-yellow-glasses-triangle": {
    "titleByLanguage": {
      "zh-CN": "黄色眼镜三角",
      "en": "Yellow Glasses Triangle"
    },
    "descriptionByLanguage": {
      "en": "Dots character Yellow Glasses Triangle: one rounded triangular body without limbs; warm yellow dense short plush; paired simple black curved closed eyes; no mouth; fitted black round eyeglasses around both eyes.",
      "zh-CN": "Dots角色「黄色眼镜三角」：无肢体圆角三角身体；暖黄色细密短绒；成对黑色弯弯闭眼，无嘴；贴合双眼的黑色圆框眼镜。"
    },
    "aliases": {
      "en": [
        "Yellow Glasses Triangle",
        "Yellow Glasses Triangle Dots",
        "original Dots"
      ],
      "zh-CN": [
        "黄色眼镜三角",
        "黄色眼镜三角Dots",
        "原创Dots"
      ]
    },
    "characterId": "dots-yellow-glasses-triangle",
    "seriesId": "dots",
    "detailFactIds": [
      "shape:classic",
      "color:original",
      "material:short-dense-plush",
      "facial-features:closed",
      "head-accessory:glasses"
    ],
    "facts": [
      {
        "id": "style:dots",
        "labelByLanguage": {
          "en": "Dots",
          "zh-CN": "Dots"
        },
        "state": "known"
      },
      {
        "id": "object-type:orb-character",
        "labelByLanguage": {
          "en": "orb-character",
          "zh-CN": "Dots"
        },
        "state": "known"
      },
      {
        "id": "shape:classic",
        "labelByLanguage": {
          "en": "one rounded triangular body without limbs",
          "zh-CN": "无肢体圆角三角身体"
        },
        "state": "known"
      },
      {
        "id": "color:original",
        "labelByLanguage": {
          "en": "Warm yellow",
          "zh-CN": "暖黄"
        },
        "state": "known"
      },
      {
        "id": "material:short-dense-plush",
        "labelByLanguage": {
          "en": "Short dense plush",
          "zh-CN": "短密绒"
        },
        "state": "known"
      },
      {
        "id": "facial-features:closed",
        "labelByLanguage": {
          "en": "paired simple black curved closed eyes; no mouth",
          "zh-CN": "成对黑色弯弯闭眼，无嘴"
        },
        "state": "known"
      },
      {
        "id": "head-accessory:glasses",
        "labelByLanguage": {
          "en": "fitted black round eyeglasses around both eyes",
          "zh-CN": "贴合双眼的黑色圆框眼镜"
        },
        "state": "known"
      },
      {
        "id": "body-structure:limbless",
        "labelByLanguage": {
          "en": "Limbless body",
          "zh-CN": "无肢体"
        },
        "state": "known"
      },
      {
        "id": "background:transparent",
        "labelByLanguage": {
          "en": "Transparent background",
          "zh-CN": "透明背景"
        },
        "state": "known"
      },
      {
        "id": "usage:transparent-character",
        "labelByLanguage": {
          "en": "Transparent character image",
          "zh-CN": "透明角色图"
        },
        "state": "known"
      }
    ]
  },
  "dots-leaf-pear": {
    "titleByLanguage": {
      "zh-CN": "芽叶梨团",
      "en": "Leaf Pear"
    },
    "descriptionByLanguage": {
      "en": "Dots character Leaf Pear: a continuous rounded pear body with two top sprout leaves; Mint green short dense plush; simple paired black eyes, no mouth.",
      "zh-CN": "Dots角色「芽叶梨团」：带两片顶芽叶的柔圆梨形连续身体；薄荷绿短密绒；成对简洁黑色眼睛，无嘴。"
    },
    "aliases": {
      "en": [
        "Leaf Pear",
        "Leaf Pear Dots",
        "original Dots"
      ],
      "zh-CN": [
        "芽叶梨团",
        "芽叶梨团Dots",
        "原创Dots"
      ]
    },
    "characterId": "dots-leaf-pear",
    "seriesId": "dots",
    "detailFactIds": [
      "shape:classic",
      "color:original",
      "material:short-dense-plush",
      "facial-features:open",
      "head-accessory:none"
    ],
    "facts": [
      {
        "id": "style:dots",
        "labelByLanguage": {
          "en": "Dots",
          "zh-CN": "Dots"
        },
        "state": "known"
      },
      {
        "id": "object-type:orb-character",
        "labelByLanguage": {
          "en": "orb-character",
          "zh-CN": "Dots"
        },
        "state": "known"
      },
      {
        "id": "shape:classic",
        "labelByLanguage": {
          "en": "a continuous rounded pear body with two top sprout leaves",
          "zh-CN": "带两片顶芽叶的柔圆梨形连续身体"
        },
        "state": "known"
      },
      {
        "id": "color:original",
        "labelByLanguage": {
          "en": "Mint green",
          "zh-CN": "薄荷绿"
        },
        "state": "known"
      },
      {
        "id": "material:short-dense-plush",
        "labelByLanguage": {
          "en": "Short dense plush",
          "zh-CN": "短密绒"
        },
        "state": "known"
      },
      {
        "id": "facial-features:open",
        "labelByLanguage": {
          "en": "simple paired black eyes, no mouth",
          "zh-CN": "成对简洁黑色眼睛，无嘴"
        },
        "state": "known"
      },
      {
        "id": "head-accessory:none",
        "labelByLanguage": {
          "en": "No headwear",
          "zh-CN": "无头饰"
        },
        "state": "none"
      },
      {
        "id": "body-accessory:none",
        "labelByLanguage": {
          "en": "No body accessory",
          "zh-CN": "无身体配饰"
        },
        "state": "none"
      },
      {
        "id": "body-structure:limbless",
        "labelByLanguage": {
          "en": "Limbless body",
          "zh-CN": "无肢体"
        },
        "state": "known"
      },
      {
        "id": "background:transparent",
        "labelByLanguage": {
          "en": "Transparent background",
          "zh-CN": "透明背景"
        },
        "state": "known"
      },
      {
        "id": "usage:transparent-character",
        "labelByLanguage": {
          "en": "Transparent character image",
          "zh-CN": "透明角色图"
        },
        "state": "known"
      }
    ]
  },
  "dots-violet-star": {
    "titleByLanguage": {
      "zh-CN": "紫色星团",
      "en": "Violet Star"
    },
    "descriptionByLanguage": {
      "en": "Dots character Violet Star: a continuous five-point star body with rounded points; Violet short dense plush; simple paired black eyes, no mouth.",
      "zh-CN": "Dots角色「紫色星团」：五个圆润星角构成的连续星形身体；淡紫色短密绒；成对简洁黑色眼睛，无嘴。"
    },
    "aliases": {
      "en": [
        "Violet Star",
        "Violet Star Dots",
        "original Dots"
      ],
      "zh-CN": [
        "紫色星团",
        "紫色星团Dots",
        "原创Dots"
      ]
    },
    "characterId": "dots-violet-star",
    "seriesId": "dots",
    "detailFactIds": [
      "shape:classic",
      "color:original",
      "material:short-dense-plush",
      "facial-features:open",
      "head-accessory:none"
    ],
    "facts": [
      {
        "id": "style:dots",
        "labelByLanguage": {
          "en": "Dots",
          "zh-CN": "Dots"
        },
        "state": "known"
      },
      {
        "id": "object-type:orb-character",
        "labelByLanguage": {
          "en": "orb-character",
          "zh-CN": "Dots"
        },
        "state": "known"
      },
      {
        "id": "shape:classic",
        "labelByLanguage": {
          "en": "a continuous five-point star body with rounded points",
          "zh-CN": "五个圆润星角构成的连续星形身体"
        },
        "state": "known"
      },
      {
        "id": "color:original",
        "labelByLanguage": {
          "en": "Violet",
          "zh-CN": "淡紫色"
        },
        "state": "known"
      },
      {
        "id": "material:short-dense-plush",
        "labelByLanguage": {
          "en": "Short dense plush",
          "zh-CN": "短密绒"
        },
        "state": "known"
      },
      {
        "id": "facial-features:open",
        "labelByLanguage": {
          "en": "simple paired black eyes, no mouth",
          "zh-CN": "成对简洁黑色眼睛，无嘴"
        },
        "state": "known"
      },
      {
        "id": "head-accessory:none",
        "labelByLanguage": {
          "en": "No headwear",
          "zh-CN": "无头饰"
        },
        "state": "none"
      },
      {
        "id": "body-accessory:none",
        "labelByLanguage": {
          "en": "No body accessory",
          "zh-CN": "无身体配饰"
        },
        "state": "none"
      },
      {
        "id": "body-structure:limbless",
        "labelByLanguage": {
          "en": "Limbless body",
          "zh-CN": "无肢体"
        },
        "state": "known"
      },
      {
        "id": "background:transparent",
        "labelByLanguage": {
          "en": "Transparent background",
          "zh-CN": "透明背景"
        },
        "state": "known"
      },
      {
        "id": "usage:transparent-character",
        "labelByLanguage": {
          "en": "Transparent character image",
          "zh-CN": "透明角色图"
        },
        "state": "known"
      }
    ]
  },
  "dots-flower-cloud": {
    "titleByLanguage": {
      "zh-CN": "紫色花云",
      "en": "Flower Cloud"
    },
    "descriptionByLanguage": {
      "en": "Dots character Flower Cloud: a low continuous purple flower-cloud outline with rounded scallops; Purple short dense plush; simple paired black eyes, no mouth.",
      "zh-CN": "Dots角色「紫色花云」：低矮连续、圆润起伏的紫色花云轮廓；紫色短密绒；成对简洁黑色眼睛，无嘴。"
    },
    "aliases": {
      "en": [
        "Flower Cloud",
        "Flower Cloud Dots",
        "original Dots"
      ],
      "zh-CN": [
        "紫色花云",
        "紫色花云Dots",
        "原创Dots"
      ]
    },
    "characterId": "dots-flower-cloud",
    "seriesId": "dots",
    "detailFactIds": [
      "shape:classic",
      "color:original",
      "material:short-dense-plush",
      "facial-features:open",
      "head-accessory:none"
    ],
    "facts": [
      {
        "id": "style:dots",
        "labelByLanguage": {
          "en": "Dots",
          "zh-CN": "Dots"
        },
        "state": "known"
      },
      {
        "id": "object-type:orb-character",
        "labelByLanguage": {
          "en": "orb-character",
          "zh-CN": "Dots"
        },
        "state": "known"
      },
      {
        "id": "shape:classic",
        "labelByLanguage": {
          "en": "a low continuous purple flower-cloud outline with rounded scallops",
          "zh-CN": "低矮连续、圆润起伏的紫色花云轮廓"
        },
        "state": "known"
      },
      {
        "id": "color:original",
        "labelByLanguage": {
          "en": "Purple",
          "zh-CN": "紫色"
        },
        "state": "known"
      },
      {
        "id": "material:short-dense-plush",
        "labelByLanguage": {
          "en": "Short dense plush",
          "zh-CN": "短密绒"
        },
        "state": "known"
      },
      {
        "id": "facial-features:open",
        "labelByLanguage": {
          "en": "simple paired black eyes, no mouth",
          "zh-CN": "成对简洁黑色眼睛，无嘴"
        },
        "state": "known"
      },
      {
        "id": "head-accessory:none",
        "labelByLanguage": {
          "en": "No headwear",
          "zh-CN": "无头饰"
        },
        "state": "none"
      },
      {
        "id": "body-accessory:none",
        "labelByLanguage": {
          "en": "No body accessory",
          "zh-CN": "无身体配饰"
        },
        "state": "none"
      },
      {
        "id": "body-structure:limbless",
        "labelByLanguage": {
          "en": "Limbless body",
          "zh-CN": "无肢体"
        },
        "state": "known"
      },
      {
        "id": "background:transparent",
        "labelByLanguage": {
          "en": "Transparent background",
          "zh-CN": "透明背景"
        },
        "state": "known"
      },
      {
        "id": "usage:transparent-character",
        "labelByLanguage": {
          "en": "Transparent character image",
          "zh-CN": "透明角色图"
        },
        "state": "known"
      }
    ]
  },
  "dots-lime-rounded-square": {
    "titleByLanguage": {
      "zh-CN": "绿色绒方块",
      "en": "Lime Plush Square"
    },
    "descriptionByLanguage": {
      "en": "Dots character Lime Plush Square: a short-dense-plush square block with thick rounded corners; Lime green short dense plush; simple paired black eyes, no mouth.",
      "zh-CN": "Dots角色「绿色绒方块」：厚圆角的短密绒近方形块体；青绿色短密绒；成对简洁黑色眼睛，无嘴。"
    },
    "aliases": {
      "en": [
        "Lime Plush Square",
        "Lime Plush Square Dots",
        "original Dots"
      ],
      "zh-CN": [
        "绿色绒方块",
        "绿色绒方块Dots",
        "原创Dots"
      ]
    },
    "characterId": "dots-lime-rounded-square",
    "seriesId": "dots",
    "detailFactIds": [
      "shape:classic",
      "color:original",
      "material:short-dense-plush",
      "facial-features:open",
      "head-accessory:none"
    ],
    "facts": [
      {
        "id": "style:dots",
        "labelByLanguage": {
          "en": "Dots",
          "zh-CN": "Dots"
        },
        "state": "known"
      },
      {
        "id": "object-type:orb-character",
        "labelByLanguage": {
          "en": "orb-character",
          "zh-CN": "Dots"
        },
        "state": "known"
      },
      {
        "id": "shape:classic",
        "labelByLanguage": {
          "en": "a short-dense-plush square block with thick rounded corners",
          "zh-CN": "厚圆角的短密绒近方形块体"
        },
        "state": "known"
      },
      {
        "id": "color:original",
        "labelByLanguage": {
          "en": "Lime green",
          "zh-CN": "青绿色"
        },
        "state": "known"
      },
      {
        "id": "material:short-dense-plush",
        "labelByLanguage": {
          "en": "Short dense plush",
          "zh-CN": "短密绒"
        },
        "state": "known"
      },
      {
        "id": "facial-features:open",
        "labelByLanguage": {
          "en": "simple paired black eyes, no mouth",
          "zh-CN": "成对简洁黑色眼睛，无嘴"
        },
        "state": "known"
      },
      {
        "id": "head-accessory:none",
        "labelByLanguage": {
          "en": "No headwear",
          "zh-CN": "无头饰"
        },
        "state": "none"
      },
      {
        "id": "body-accessory:none",
        "labelByLanguage": {
          "en": "No body accessory",
          "zh-CN": "无身体配饰"
        },
        "state": "none"
      },
      {
        "id": "body-structure:limbless",
        "labelByLanguage": {
          "en": "Limbless body",
          "zh-CN": "无肢体"
        },
        "state": "known"
      },
      {
        "id": "background:transparent",
        "labelByLanguage": {
          "en": "Transparent background",
          "zh-CN": "透明背景"
        },
        "state": "known"
      },
      {
        "id": "usage:transparent-character",
        "labelByLanguage": {
          "en": "Transparent character image",
          "zh-CN": "透明角色图"
        },
        "state": "known"
      }
    ]
  },
  "grok-white-arch": {
    "titleByLanguage": {
      "en": "White Arch",
      "zh-CN": "白色拱团"
    },
    "descriptionByLanguage": {
      "en": "Grok Bot character White Arch: a low rounded arch silhouette with a broad gentle base; ivory white smooth soft silicone; paired vertical black capsule eyes.",
      "zh-CN": "Grok Bot角色「白色拱团」：低圆拱轮廓与平缓底面；象牙白光滑软硅胶材质；成对竖向黑色胶囊眼。"
    },
    "aliases": {
      "en": [
        "White Arch",
        "White Arch Grok Bot",
        "original Grok Bot"
      ],
      "zh-CN": [
        "白色拱团",
        "白色拱团Grok Bot",
        "原创Grok Bot"
      ]
    },
    "characterId": "grok-white-arch",
    "seriesId": "grok",
    "detailFactIds": [
      "shape:classic",
      "color:original",
      "material:smooth-soft-silicone",
      "facial-features:open",
      "head-accessory:none"
    ],
    "facts": [
      {
        "id": "style:grok",
        "labelByLanguage": {
          "en": "Grok Bot",
          "zh-CN": "Grok Bot"
        },
        "state": "known"
      },
      {
        "id": "object-type:soft-geometry",
        "labelByLanguage": {
          "en": "soft-geometry",
          "zh-CN": "Grok Bot"
        },
        "state": "known"
      },
      {
        "id": "shape:classic",
        "labelByLanguage": {
          "en": "a low rounded arch silhouette with a broad gentle base",
          "zh-CN": "低圆拱轮廓与平缓底面"
        },
        "state": "known"
      },
      {
        "id": "color:original",
        "labelByLanguage": {
          "en": "ivory white",
          "zh-CN": "象牙白"
        },
        "state": "known"
      },
      {
        "id": "material:smooth-soft-silicone",
        "labelByLanguage": {
          "en": "Smooth soft silicone",
          "zh-CN": "光滑柔和软硅胶"
        },
        "state": "known"
      },
      {
        "id": "facial-features:open",
        "labelByLanguage": {
          "en": "paired vertical black capsule eyes",
          "zh-CN": "成对竖向黑色胶囊眼"
        },
        "state": "known"
      },
      {
        "id": "head-accessory:none",
        "labelByLanguage": {
          "en": "No headwear",
          "zh-CN": "无头饰"
        },
        "state": "none"
      },
      {
        "id": "body-accessory:none",
        "labelByLanguage": {
          "en": "No body accessory",
          "zh-CN": "无身体配饰"
        },
        "state": "none"
      },
      {
        "id": "body-structure:limbless",
        "labelByLanguage": {
          "en": "Limbless body",
          "zh-CN": "无肢体"
        },
        "state": "known"
      },
      {
        "id": "background:transparent",
        "labelByLanguage": {
          "en": "Transparent background",
          "zh-CN": "透明背景"
        },
        "state": "known"
      },
      {
        "id": "usage:transparent-character",
        "labelByLanguage": {
          "en": "Transparent character image",
          "zh-CN": "透明角色图"
        },
        "state": "known"
      }
    ]
  },
  "grok-horizontal-capsule": {
    "titleByLanguage": {
      "en": "Horizontal Capsule",
      "zh-CN": "横向胶囊"
    },
    "descriptionByLanguage": {
      "en": "Grok Bot character Horizontal Capsule: a wide short horizontal capsule silhouette; orange smooth soft silicone; paired vertical ivory capsule eyes.",
      "zh-CN": "Grok Bot角色「横向胶囊」：横向宽短胶囊轮廓；橙色光滑软硅胶材质；成对竖向象牙白胶囊眼。"
    },
    "aliases": {
      "en": [
        "Horizontal Capsule",
        "Horizontal Capsule Grok Bot",
        "original Grok Bot"
      ],
      "zh-CN": [
        "横向胶囊",
        "横向胶囊Grok Bot",
        "原创Grok Bot"
      ]
    },
    "characterId": "grok-horizontal-capsule",
    "seriesId": "grok",
    "detailFactIds": [
      "shape:classic",
      "color:original",
      "material:smooth-soft-silicone",
      "facial-features:open",
      "head-accessory:none"
    ],
    "facts": [
      {
        "id": "style:grok",
        "labelByLanguage": {
          "en": "Grok Bot",
          "zh-CN": "Grok Bot"
        },
        "state": "known"
      },
      {
        "id": "object-type:soft-geometry",
        "labelByLanguage": {
          "en": "soft-geometry",
          "zh-CN": "Grok Bot"
        },
        "state": "known"
      },
      {
        "id": "shape:classic",
        "labelByLanguage": {
          "en": "a wide short horizontal capsule silhouette",
          "zh-CN": "横向宽短胶囊轮廓"
        },
        "state": "known"
      },
      {
        "id": "color:original",
        "labelByLanguage": {
          "en": "orange",
          "zh-CN": "橙色"
        },
        "state": "known"
      },
      {
        "id": "material:smooth-soft-silicone",
        "labelByLanguage": {
          "en": "Smooth soft silicone",
          "zh-CN": "光滑柔和软硅胶"
        },
        "state": "known"
      },
      {
        "id": "facial-features:open",
        "labelByLanguage": {
          "en": "paired vertical ivory capsule eyes",
          "zh-CN": "成对竖向象牙白胶囊眼"
        },
        "state": "known"
      },
      {
        "id": "head-accessory:none",
        "labelByLanguage": {
          "en": "No headwear",
          "zh-CN": "无头饰"
        },
        "state": "none"
      },
      {
        "id": "body-accessory:none",
        "labelByLanguage": {
          "en": "No body accessory",
          "zh-CN": "无身体配饰"
        },
        "state": "none"
      },
      {
        "id": "body-structure:limbless",
        "labelByLanguage": {
          "en": "Limbless body",
          "zh-CN": "无肢体"
        },
        "state": "known"
      },
      {
        "id": "background:transparent",
        "labelByLanguage": {
          "en": "Transparent background",
          "zh-CN": "透明背景"
        },
        "state": "known"
      },
      {
        "id": "usage:transparent-character",
        "labelByLanguage": {
          "en": "Transparent character image",
          "zh-CN": "透明角色图"
        },
        "state": "known"
      }
    ]
  },
  "grok-soft-triangle": {
    "titleByLanguage": {
      "en": "Soft Triangle",
      "zh-CN": "柔角三角"
    },
    "descriptionByLanguage": {
      "en": "Grok Bot character Soft Triangle: a soft triangular silhouette; coral pink smooth soft silicone; paired vertical ivory capsule eyes.",
      "zh-CN": "Grok Bot角色「柔角三角」：软三角轮廓；珊瑚粉光滑软硅胶材质；成对竖向象牙白胶囊眼。"
    },
    "aliases": {
      "en": [
        "Soft Triangle",
        "Soft Triangle Grok Bot",
        "original Grok Bot"
      ],
      "zh-CN": [
        "柔角三角",
        "柔角三角Grok Bot",
        "原创Grok Bot"
      ]
    },
    "characterId": "grok-soft-triangle",
    "seriesId": "grok",
    "detailFactIds": [
      "shape:classic",
      "color:original",
      "material:smooth-soft-silicone",
      "facial-features:open",
      "head-accessory:none"
    ],
    "facts": [
      {
        "id": "style:grok",
        "labelByLanguage": {
          "en": "Grok Bot",
          "zh-CN": "Grok Bot"
        },
        "state": "known"
      },
      {
        "id": "object-type:soft-geometry",
        "labelByLanguage": {
          "en": "soft-geometry",
          "zh-CN": "Grok Bot"
        },
        "state": "known"
      },
      {
        "id": "shape:classic",
        "labelByLanguage": {
          "en": "a soft triangular silhouette",
          "zh-CN": "软三角轮廓"
        },
        "state": "known"
      },
      {
        "id": "color:original",
        "labelByLanguage": {
          "en": "coral pink",
          "zh-CN": "珊瑚粉"
        },
        "state": "known"
      },
      {
        "id": "material:smooth-soft-silicone",
        "labelByLanguage": {
          "en": "Smooth soft silicone",
          "zh-CN": "光滑柔和软硅胶"
        },
        "state": "known"
      },
      {
        "id": "facial-features:open",
        "labelByLanguage": {
          "en": "paired vertical ivory capsule eyes",
          "zh-CN": "成对竖向象牙白胶囊眼"
        },
        "state": "known"
      },
      {
        "id": "head-accessory:none",
        "labelByLanguage": {
          "en": "No headwear",
          "zh-CN": "无头饰"
        },
        "state": "none"
      },
      {
        "id": "body-accessory:none",
        "labelByLanguage": {
          "en": "No body accessory",
          "zh-CN": "无身体配饰"
        },
        "state": "none"
      },
      {
        "id": "body-structure:limbless",
        "labelByLanguage": {
          "en": "Limbless body",
          "zh-CN": "无肢体"
        },
        "state": "known"
      },
      {
        "id": "background:transparent",
        "labelByLanguage": {
          "en": "Transparent background",
          "zh-CN": "透明背景"
        },
        "state": "known"
      },
      {
        "id": "usage:transparent-character",
        "labelByLanguage": {
          "en": "Transparent character image",
          "zh-CN": "透明角色图"
        },
        "state": "known"
      }
    ]
  },
  "grok-soft-diamond": {
    "titleByLanguage": {
      "en": "Soft Diamond",
      "zh-CN": "圆角菱形"
    },
    "descriptionByLanguage": {
      "en": "Grok Bot character Soft Diamond: a rounded diamond silhouette; berry pink smooth soft silicone; paired vertical ivory capsule eyes.",
      "zh-CN": "Grok Bot角色「圆角菱形」：圆钝菱形轮廓；莓果粉光滑软硅胶材质；成对竖向象牙白胶囊眼。"
    },
    "aliases": {
      "en": [
        "Soft Diamond",
        "Soft Diamond Grok Bot",
        "original Grok Bot"
      ],
      "zh-CN": [
        "圆角菱形",
        "圆角菱形Grok Bot",
        "原创Grok Bot"
      ]
    },
    "characterId": "grok-soft-diamond",
    "seriesId": "grok",
    "detailFactIds": [
      "shape:classic",
      "color:original",
      "material:smooth-soft-silicone",
      "facial-features:open",
      "head-accessory:none"
    ],
    "facts": [
      {
        "id": "style:grok",
        "labelByLanguage": {
          "en": "Grok Bot",
          "zh-CN": "Grok Bot"
        },
        "state": "known"
      },
      {
        "id": "object-type:soft-geometry",
        "labelByLanguage": {
          "en": "soft-geometry",
          "zh-CN": "Grok Bot"
        },
        "state": "known"
      },
      {
        "id": "shape:classic",
        "labelByLanguage": {
          "en": "a rounded diamond silhouette",
          "zh-CN": "圆钝菱形轮廓"
        },
        "state": "known"
      },
      {
        "id": "color:original",
        "labelByLanguage": {
          "en": "berry pink",
          "zh-CN": "莓果粉"
        },
        "state": "known"
      },
      {
        "id": "material:smooth-soft-silicone",
        "labelByLanguage": {
          "en": "Smooth soft silicone",
          "zh-CN": "光滑柔和软硅胶"
        },
        "state": "known"
      },
      {
        "id": "facial-features:open",
        "labelByLanguage": {
          "en": "paired vertical ivory capsule eyes",
          "zh-CN": "成对竖向象牙白胶囊眼"
        },
        "state": "known"
      },
      {
        "id": "head-accessory:none",
        "labelByLanguage": {
          "en": "No headwear",
          "zh-CN": "无头饰"
        },
        "state": "none"
      },
      {
        "id": "body-accessory:none",
        "labelByLanguage": {
          "en": "No body accessory",
          "zh-CN": "无身体配饰"
        },
        "state": "none"
      },
      {
        "id": "body-structure:limbless",
        "labelByLanguage": {
          "en": "Limbless body",
          "zh-CN": "无肢体"
        },
        "state": "known"
      },
      {
        "id": "background:transparent",
        "labelByLanguage": {
          "en": "Transparent background",
          "zh-CN": "透明背景"
        },
        "state": "known"
      },
      {
        "id": "usage:transparent-character",
        "labelByLanguage": {
          "en": "Transparent character image",
          "zh-CN": "透明角色图"
        },
        "state": "known"
      }
    ]
  },
  "grok-half-dome": {
    "titleByLanguage": {
      "en": "Half Dome",
      "zh-CN": "半圆穹顶"
    },
    "descriptionByLanguage": {
      "en": "Grok Bot character Half Dome: a semicircular dome with a gently flattened base; graphite blue smooth soft silicone; paired vertical ivory capsule eyes.",
      "zh-CN": "Grok Bot角色「半圆穹顶」：半圆穹顶与平缓底缘；石墨蓝光滑软硅胶材质；成对竖向象牙白胶囊眼。"
    },
    "aliases": {
      "en": [
        "Half Dome",
        "Half Dome Grok Bot",
        "original Grok Bot"
      ],
      "zh-CN": [
        "半圆穹顶",
        "半圆穹顶Grok Bot",
        "原创Grok Bot"
      ]
    },
    "characterId": "grok-half-dome",
    "seriesId": "grok",
    "detailFactIds": [
      "shape:classic",
      "color:original",
      "material:smooth-soft-silicone",
      "facial-features:open",
      "head-accessory:none"
    ],
    "facts": [
      {
        "id": "style:grok",
        "labelByLanguage": {
          "en": "Grok Bot",
          "zh-CN": "Grok Bot"
        },
        "state": "known"
      },
      {
        "id": "object-type:soft-geometry",
        "labelByLanguage": {
          "en": "soft-geometry",
          "zh-CN": "Grok Bot"
        },
        "state": "known"
      },
      {
        "id": "shape:classic",
        "labelByLanguage": {
          "en": "a semicircular dome with a gently flattened base",
          "zh-CN": "半圆穹顶与平缓底缘"
        },
        "state": "known"
      },
      {
        "id": "color:original",
        "labelByLanguage": {
          "en": "graphite blue",
          "zh-CN": "石墨蓝"
        },
        "state": "known"
      },
      {
        "id": "material:smooth-soft-silicone",
        "labelByLanguage": {
          "en": "Smooth soft silicone",
          "zh-CN": "光滑柔和软硅胶"
        },
        "state": "known"
      },
      {
        "id": "facial-features:open",
        "labelByLanguage": {
          "en": "paired vertical ivory capsule eyes",
          "zh-CN": "成对竖向象牙白胶囊眼"
        },
        "state": "known"
      },
      {
        "id": "head-accessory:none",
        "labelByLanguage": {
          "en": "No headwear",
          "zh-CN": "无头饰"
        },
        "state": "none"
      },
      {
        "id": "body-accessory:none",
        "labelByLanguage": {
          "en": "No body accessory",
          "zh-CN": "无身体配饰"
        },
        "state": "none"
      },
      {
        "id": "body-structure:limbless",
        "labelByLanguage": {
          "en": "Limbless body",
          "zh-CN": "无肢体"
        },
        "state": "known"
      },
      {
        "id": "background:transparent",
        "labelByLanguage": {
          "en": "Transparent background",
          "zh-CN": "透明背景"
        },
        "state": "known"
      },
      {
        "id": "usage:transparent-character",
        "labelByLanguage": {
          "en": "Transparent character image",
          "zh-CN": "透明角色图"
        },
        "state": "known"
      }
    ]
  },
  "grok-cylinder": {
    "titleByLanguage": {
      "en": "Cylinder",
      "zh-CN": "圆柱"
    },
    "descriptionByLanguage": {
      "en": "Grok Bot character Cylinder: an upright cylinder with a visible elliptical top; red smooth soft silicone; paired vertical ivory capsule eyes.",
      "zh-CN": "Grok Bot角色「圆柱」：可见椭圆顶面的圆柱轮廓；朱红光滑软硅胶材质；成对竖向象牙白胶囊眼。"
    },
    "aliases": {
      "en": [
        "Cylinder",
        "Cylinder Grok Bot",
        "original Grok Bot"
      ],
      "zh-CN": [
        "圆柱",
        "圆柱Grok Bot",
        "原创Grok Bot"
      ]
    },
    "characterId": "grok-cylinder",
    "seriesId": "grok",
    "detailFactIds": [
      "shape:classic",
      "color:original",
      "material:smooth-soft-silicone",
      "facial-features:open",
      "head-accessory:none"
    ],
    "facts": [
      {
        "id": "style:grok",
        "labelByLanguage": {
          "en": "Grok Bot",
          "zh-CN": "Grok Bot"
        },
        "state": "known"
      },
      {
        "id": "object-type:soft-geometry",
        "labelByLanguage": {
          "en": "soft-geometry",
          "zh-CN": "Grok Bot"
        },
        "state": "known"
      },
      {
        "id": "shape:classic",
        "labelByLanguage": {
          "en": "an upright cylinder with a visible elliptical top",
          "zh-CN": "可见椭圆顶面的圆柱轮廓"
        },
        "state": "known"
      },
      {
        "id": "color:original",
        "labelByLanguage": {
          "en": "red",
          "zh-CN": "朱红"
        },
        "state": "known"
      },
      {
        "id": "material:smooth-soft-silicone",
        "labelByLanguage": {
          "en": "Smooth soft silicone",
          "zh-CN": "光滑柔和软硅胶"
        },
        "state": "known"
      },
      {
        "id": "facial-features:open",
        "labelByLanguage": {
          "en": "paired vertical ivory capsule eyes",
          "zh-CN": "成对竖向象牙白胶囊眼"
        },
        "state": "known"
      },
      {
        "id": "head-accessory:none",
        "labelByLanguage": {
          "en": "No headwear",
          "zh-CN": "无头饰"
        },
        "state": "none"
      },
      {
        "id": "body-accessory:none",
        "labelByLanguage": {
          "en": "No body accessory",
          "zh-CN": "无身体配饰"
        },
        "state": "none"
      },
      {
        "id": "body-structure:limbless",
        "labelByLanguage": {
          "en": "Limbless body",
          "zh-CN": "无肢体"
        },
        "state": "known"
      },
      {
        "id": "background:transparent",
        "labelByLanguage": {
          "en": "Transparent background",
          "zh-CN": "透明背景"
        },
        "state": "known"
      },
      {
        "id": "usage:transparent-character",
        "labelByLanguage": {
          "en": "Transparent character image",
          "zh-CN": "透明角色图"
        },
        "state": "known"
      }
    ]
  },
  "grok-egg": {
    "titleByLanguage": {
      "en": "Rounded Egg",
      "zh-CN": "圆卵"
    },
    "descriptionByLanguage": {
      "en": "Grok Bot character Rounded Egg: a rounded egg silhouette without a pointed tip; apricot orange smooth soft silicone; paired vertical ivory capsule eyes.",
      "zh-CN": "Grok Bot角色「圆卵」：无尖端的圆滑卵形轮廓；杏橙光滑软硅胶材质；成对竖向象牙白胶囊眼。"
    },
    "aliases": {
      "en": [
        "Rounded Egg",
        "Rounded Egg Grok Bot",
        "original Grok Bot"
      ],
      "zh-CN": [
        "圆卵",
        "圆卵Grok Bot",
        "原创Grok Bot"
      ]
    },
    "characterId": "grok-egg",
    "seriesId": "grok",
    "detailFactIds": [
      "shape:classic",
      "color:original",
      "material:smooth-soft-silicone",
      "facial-features:open",
      "head-accessory:none"
    ],
    "facts": [
      {
        "id": "style:grok",
        "labelByLanguage": {
          "en": "Grok Bot",
          "zh-CN": "Grok Bot"
        },
        "state": "known"
      },
      {
        "id": "object-type:soft-geometry",
        "labelByLanguage": {
          "en": "soft-geometry",
          "zh-CN": "Grok Bot"
        },
        "state": "known"
      },
      {
        "id": "shape:classic",
        "labelByLanguage": {
          "en": "a rounded egg silhouette without a pointed tip",
          "zh-CN": "无尖端的圆滑卵形轮廓"
        },
        "state": "known"
      },
      {
        "id": "color:original",
        "labelByLanguage": {
          "en": "apricot orange",
          "zh-CN": "杏橙"
        },
        "state": "known"
      },
      {
        "id": "material:smooth-soft-silicone",
        "labelByLanguage": {
          "en": "Smooth soft silicone",
          "zh-CN": "光滑柔和软硅胶"
        },
        "state": "known"
      },
      {
        "id": "facial-features:open",
        "labelByLanguage": {
          "en": "paired vertical ivory capsule eyes",
          "zh-CN": "成对竖向象牙白胶囊眼"
        },
        "state": "known"
      },
      {
        "id": "head-accessory:none",
        "labelByLanguage": {
          "en": "No headwear",
          "zh-CN": "无头饰"
        },
        "state": "none"
      },
      {
        "id": "body-accessory:none",
        "labelByLanguage": {
          "en": "No body accessory",
          "zh-CN": "无身体配饰"
        },
        "state": "none"
      },
      {
        "id": "body-structure:limbless",
        "labelByLanguage": {
          "en": "Limbless body",
          "zh-CN": "无肢体"
        },
        "state": "known"
      },
      {
        "id": "background:transparent",
        "labelByLanguage": {
          "en": "Transparent background",
          "zh-CN": "透明背景"
        },
        "state": "known"
      },
      {
        "id": "usage:transparent-character",
        "labelByLanguage": {
          "en": "Transparent character image",
          "zh-CN": "透明角色图"
        },
        "state": "known"
      }
    ]
  },
  "grok-rounded-cube": {
    "titleByLanguage": {
      "en": "Rounded Cube",
      "zh-CN": "圆角立方"
    },
    "descriptionByLanguage": {
      "en": "Grok Bot character Rounded Cube: a rounded cube with visible top and two side planes; emerald green smooth soft silicone; paired vertical ivory capsule eyes.",
      "zh-CN": "Grok Bot角色「圆角立方」：顶面和两侧面可见的圆角立方轮廓；翠绿光滑软硅胶材质；成对竖向象牙白胶囊眼。"
    },
    "aliases": {
      "en": [
        "Rounded Cube",
        "Rounded Cube Grok Bot",
        "original Grok Bot"
      ],
      "zh-CN": [
        "圆角立方",
        "圆角立方Grok Bot",
        "原创Grok Bot"
      ]
    },
    "characterId": "grok-rounded-cube",
    "seriesId": "grok",
    "detailFactIds": [
      "shape:classic",
      "color:original",
      "material:smooth-soft-silicone",
      "facial-features:open",
      "head-accessory:none"
    ],
    "facts": [
      {
        "id": "style:grok",
        "labelByLanguage": {
          "en": "Grok Bot",
          "zh-CN": "Grok Bot"
        },
        "state": "known"
      },
      {
        "id": "object-type:soft-geometry",
        "labelByLanguage": {
          "en": "soft-geometry",
          "zh-CN": "Grok Bot"
        },
        "state": "known"
      },
      {
        "id": "shape:classic",
        "labelByLanguage": {
          "en": "a rounded cube with visible top and two side planes",
          "zh-CN": "顶面和两侧面可见的圆角立方轮廓"
        },
        "state": "known"
      },
      {
        "id": "color:original",
        "labelByLanguage": {
          "en": "emerald green",
          "zh-CN": "翠绿"
        },
        "state": "known"
      },
      {
        "id": "material:smooth-soft-silicone",
        "labelByLanguage": {
          "en": "Smooth soft silicone",
          "zh-CN": "光滑柔和软硅胶"
        },
        "state": "known"
      },
      {
        "id": "facial-features:open",
        "labelByLanguage": {
          "en": "paired vertical ivory capsule eyes",
          "zh-CN": "成对竖向象牙白胶囊眼"
        },
        "state": "known"
      },
      {
        "id": "head-accessory:none",
        "labelByLanguage": {
          "en": "No headwear",
          "zh-CN": "无头饰"
        },
        "state": "none"
      },
      {
        "id": "body-accessory:none",
        "labelByLanguage": {
          "en": "No body accessory",
          "zh-CN": "无身体配饰"
        },
        "state": "none"
      },
      {
        "id": "body-structure:limbless",
        "labelByLanguage": {
          "en": "Limbless body",
          "zh-CN": "无肢体"
        },
        "state": "known"
      },
      {
        "id": "background:transparent",
        "labelByLanguage": {
          "en": "Transparent background",
          "zh-CN": "透明背景"
        },
        "state": "known"
      },
      {
        "id": "usage:transparent-character",
        "labelByLanguage": {
          "en": "Transparent character image",
          "zh-CN": "透明角色图"
        },
        "state": "known"
      }
    ]
  },
  "muse-holding-star": {
    "titleByLanguage": {
      "zh-CN": "抱星 Muse",
      "en": "Star Muse"
    },
    "descriptionByLanguage": {
      "en": "Muse character Star Muse: a continuous hooded body with an inset face; keep the yellow star naturally supported by both short round hands; cream white short-plush body; preserve peach face and prop colors; an inset peach face with small open dark eyes and a gentle smile.",
      "zh-CN": "Muse角色「抱星 Muse」：经典连续包覆身体与内嵌脸，坐姿，双手在胸前自然承托黄色星星；奶油白短绒身体，肤色与道具保持原色；内嵌桃色脸、睁开小圆眼与轻柔微笑。"
    },
    "aliases": {
      "en": [
        "Star Muse",
        "Star Muse Muse",
        "original Muse"
      ],
      "zh-CN": [
        "抱星 Muse",
        "抱星 MuseMuse",
        "原创Muse"
      ]
    },
    "characterId": "muse-holding-star",
    "seriesId": "meta-muse",
    "detailFactIds": [
      "shape:classic",
      "color:original",
      "material:short-plush",
      "facial-features:open",
      "head-accessory:none"
    ],
    "facts": [
      {
        "id": "style:meta-muse",
        "labelByLanguage": {
          "en": "Muse",
          "zh-CN": "Muse"
        },
        "state": "known"
      },
      {
        "id": "object-type:hooded-mascot",
        "labelByLanguage": {
          "en": "hooded-mascot",
          "zh-CN": "Muse"
        },
        "state": "known"
      },
      {
        "id": "shape:classic",
        "labelByLanguage": {
          "en": "a continuous hooded body with an inset face; keep the yellow star naturally supported by both short round hands",
          "zh-CN": "经典连续包覆身体与内嵌脸，坐姿，双手在胸前自然承托黄色星星"
        },
        "state": "known"
      },
      {
        "id": "color:original",
        "labelByLanguage": {
          "en": "cream white",
          "zh-CN": "奶油白"
        },
        "state": "known"
      },
      {
        "id": "material:short-plush",
        "labelByLanguage": {
          "en": "Short plush",
          "zh-CN": "短绒"
        },
        "state": "known"
      },
      {
        "id": "facial-features:open",
        "labelByLanguage": {
          "en": "an inset peach face with small open dark eyes and a gentle smile",
          "zh-CN": "内嵌桃色脸、睁开小圆眼与轻柔微笑"
        },
        "state": "known"
      },
      {
        "id": "clothing:none",
        "labelByLanguage": {
          "en": "No clothing",
          "zh-CN": "No clothing"
        },
        "state": "none"
      },
      {
        "id": "head-accessory:none",
        "labelByLanguage": {
          "en": "No headwear",
          "zh-CN": "无头饰"
        },
        "state": "none"
      },
      {
        "id": "body-accessory:none",
        "labelByLanguage": {
          "en": "No body accessory",
          "zh-CN": "无身体配饰"
        },
        "state": "none"
      },
      {
        "id": "prop:yellow-star",
        "labelByLanguage": {
          "en": "Yellow star held with both hands",
          "zh-CN": "双手承托的黄色星星"
        },
        "state": "known"
      },
      {
        "id": "background:transparent",
        "labelByLanguage": {
          "en": "Transparent background",
          "zh-CN": "透明背景"
        },
        "state": "known"
      },
      {
        "id": "usage:transparent-character",
        "labelByLanguage": {
          "en": "Transparent character image",
          "zh-CN": "透明角色图"
        },
        "state": "known"
      }
    ]
  },
  "candidate-animal-panda": {
    "titleByLanguage": {
      "en": "Panda Cub",
      "zh-CN": "熊猫幼崽"
    },
    "descriptionByLanguage": {
      "en": "A compact ivory plush panda cub with charcoal eye patches and round ears.",
      "zh-CN": "一只紧凑的象牙白绒面熊猫幼崽，带炭黑眼斑与圆耳。"
    },
    "aliases": {
      "en": [
        "Panda Cub",
        "Panda Cub Animal",
        "original Animal"
      ],
      "zh-CN": [
        "熊猫幼崽",
        "熊猫幼崽动物",
        "原创动物"
      ]
    },
    "characterId": "animal-panda",
    "seriesId": "animals",
    "detailFactIds": [
      "shape:seated",
      "color:classic",
      "material:soft-plush-fur",
      "facial-features:open",
      "head-accessory:none"
    ],
    "facts": [
      {
        "id": "style:animals",
        "labelByLanguage": {
          "en": "Animal",
          "zh-CN": "动物"
        },
        "state": "known"
      },
      {
        "id": "object-type:animal",
        "labelByLanguage": {
          "en": "animal",
          "zh-CN": "动物"
        },
        "state": "known"
      },
      {
        "id": "shape:seated",
        "labelByLanguage": {
          "en": "a compact front-facing seated panda with round ears, paired eye patches and short integrated limbs",
          "zh-CN": "正面紧凑坐姿的熊猫，圆耳、成对眼斑与短小连体四肢清楚"
        },
        "state": "known"
      },
      {
        "id": "color:classic",
        "labelByLanguage": {
          "en": "Ivory and charcoal",
          "zh-CN": "象牙白与炭黑"
        },
        "state": "known"
      },
      {
        "id": "material:soft-plush-fur",
        "labelByLanguage": {
          "en": "Soft plush fur",
          "zh-CN": "柔软绒毛"
        },
        "state": "known"
      },
      {
        "id": "facial-features:open",
        "labelByLanguage": {
          "en": "large glossy dark eyes centered inside the original black patches, with the small friendly muzzle and smile",
          "zh-CN": "原有黑色眼斑中间的大而明亮的深色眼睛，保留小巧友好的口鼻与微笑"
        },
        "state": "known"
      },
      {
        "id": "clothing:none",
        "labelByLanguage": {
          "en": "No clothing",
          "zh-CN": "No clothing"
        },
        "state": "none"
      },
      {
        "id": "head-accessory:none",
        "labelByLanguage": {
          "en": "No headwear",
          "zh-CN": "无头饰"
        },
        "state": "none"
      },
      {
        "id": "body-accessory:none",
        "labelByLanguage": {
          "en": "No body accessory",
          "zh-CN": "无身体配饰"
        },
        "state": "none"
      },
      {
        "id": "background:transparent",
        "labelByLanguage": {
          "en": "Transparent background",
          "zh-CN": "透明背景"
        },
        "state": "known"
      },
      {
        "id": "usage:transparent-character",
        "labelByLanguage": {
          "en": "Transparent character image",
          "zh-CN": "透明角色图"
        },
        "state": "known"
      }
    ]
  },
  "candidate-animal-pig": {
    "titleByLanguage": {
      "en": "Piglet",
      "zh-CN": "小粉猪"
    },
    "descriptionByLanguage": {
      "en": "A blush-pink plush piglet with a broad snout, cloven hooves, and a curled tail.",
      "zh-CN": "一只腮红粉色绒面小猪，带圆润鼻盘、分趾蹄和卷尾。"
    },
    "aliases": {
      "en": [
        "Piglet",
        "Piglet Animal",
        "original Animal"
      ],
      "zh-CN": [
        "小粉猪",
        "小粉猪动物",
        "原创动物"
      ]
    },
    "characterId": "animal-pig",
    "seriesId": "animals",
    "detailFactIds": [
      "shape:seated",
      "color:classic",
      "material:soft-plush-fur",
      "facial-features:open",
      "head-accessory:none"
    ],
    "facts": [
      {
        "id": "style:animals",
        "labelByLanguage": {
          "en": "Animal",
          "zh-CN": "动物"
        },
        "state": "known"
      },
      {
        "id": "object-type:animal",
        "labelByLanguage": {
          "en": "animal",
          "zh-CN": "动物"
        },
        "state": "known"
      },
      {
        "id": "shape:seated",
        "labelByLanguage": {
          "en": "the original compact seated plush piglet with visible hooves and curled tail",
          "zh-CN": "原始紧凑坐姿绒面小猪，蹄子和卷尾清楚可见"
        },
        "state": "known"
      },
      {
        "id": "color:classic",
        "labelByLanguage": {
          "en": "Blush rose",
          "zh-CN": "经典粉"
        },
        "state": "known"
      },
      {
        "id": "material:soft-plush-fur",
        "labelByLanguage": {
          "en": "Soft plush fur",
          "zh-CN": "柔软绒毛"
        },
        "state": "known"
      },
      {
        "id": "facial-features:open",
        "labelByLanguage": {
          "en": "two glossy dark open eyes, as in the original seated artwork",
          "zh-CN": "保留坐姿母图中的两只明亮深色睁眼"
        },
        "state": "known"
      },
      {
        "id": "clothing:none",
        "labelByLanguage": {
          "en": "No clothing",
          "zh-CN": "No clothing"
        },
        "state": "none"
      },
      {
        "id": "head-accessory:none",
        "labelByLanguage": {
          "en": "No headwear",
          "zh-CN": "无头饰"
        },
        "state": "none"
      },
      {
        "id": "body-accessory:none",
        "labelByLanguage": {
          "en": "No body accessory",
          "zh-CN": "无身体配饰"
        },
        "state": "none"
      },
      {
        "id": "background:transparent",
        "labelByLanguage": {
          "en": "Transparent background",
          "zh-CN": "透明背景"
        },
        "state": "known"
      },
      {
        "id": "usage:transparent-character",
        "labelByLanguage": {
          "en": "Transparent character image",
          "zh-CN": "透明角色图"
        },
        "state": "known"
      }
    ]
  },
  "candidate-animal-monkey": {
    "titleByLanguage": {
      "en": "Monkey",
      "zh-CN": "原创毛绒猴"
    },
    "descriptionByLanguage": {
      "en": "An original seated chestnut plush monkey with a tan heart-shaped face, rounded ears, and an attached curved tail.",
      "zh-CN": "原创坐姿栗棕绒面猴，带暖棕心形脸、圆耳和相连卷尾。"
    },
    "aliases": {
      "en": [
        "Monkey",
        "Monkey Animal",
        "original Animal"
      ],
      "zh-CN": [
        "原创毛绒猴",
        "原创毛绒猴动物",
        "原创动物"
      ]
    },
    "characterId": "animal-monkey",
    "seriesId": "animals",
    "detailFactIds": [
      "shape:seated",
      "color:chestnut",
      "material:soft-plush-fur",
      "facial-features:open",
      "head-accessory:none"
    ],
    "facts": [
      {
        "id": "style:animals",
        "labelByLanguage": {
          "en": "Animal",
          "zh-CN": "动物"
        },
        "state": "known"
      },
      {
        "id": "object-type:animal",
        "labelByLanguage": {
          "en": "animal",
          "zh-CN": "动物"
        },
        "state": "known"
      },
      {
        "id": "shape:seated",
        "labelByLanguage": {
          "en": "the original seated pose, with the full attached tail visible",
          "zh-CN": "原始坐姿，完整相连卷尾清晰可见"
        },
        "state": "known"
      },
      {
        "id": "color:chestnut",
        "labelByLanguage": {
          "en": "Chestnut",
          "zh-CN": "栗棕"
        },
        "state": "known"
      },
      {
        "id": "material:soft-plush-fur",
        "labelByLanguage": {
          "en": "Soft plush fur",
          "zh-CN": "柔软绒毛"
        },
        "state": "known"
      },
      {
        "id": "facial-features:open",
        "labelByLanguage": {
          "en": "the original two large friendly brown open eyes and smile",
          "zh-CN": "原始两只明亮棕色眼睛与微笑"
        },
        "state": "known"
      },
      {
        "id": "clothing:none",
        "labelByLanguage": {
          "en": "No clothing",
          "zh-CN": "No clothing"
        },
        "state": "none"
      },
      {
        "id": "head-accessory:none",
        "labelByLanguage": {
          "en": "No headwear",
          "zh-CN": "无头饰"
        },
        "state": "none"
      },
      {
        "id": "body-accessory:none",
        "labelByLanguage": {
          "en": "No body accessory",
          "zh-CN": "无身体配饰"
        },
        "state": "none"
      },
      {
        "id": "background:transparent",
        "labelByLanguage": {
          "en": "Transparent background",
          "zh-CN": "透明背景"
        },
        "state": "known"
      },
      {
        "id": "usage:transparent-character",
        "labelByLanguage": {
          "en": "Transparent character image",
          "zh-CN": "透明角色图"
        },
        "state": "known"
      }
    ]
  },
  "candidate-animal-small-bird": {
    "titleByLanguage": {
      "en": "Little Songbird",
      "zh-CN": "小蓝鸟"
    },
    "descriptionByLanguage": {
      "en": "A turquoise-blue plush songbird with a butter-yellow belly, small orange beak, feather tuft, wings and feet.",
      "zh-CN": "一只青蓝色绒面小鸟，配奶油黄色腹部、橙色小喙、羽冠、翅膀和双脚。"
    },
    "aliases": {
      "en": [
        "Little Songbird",
        "Little Songbird Animal",
        "original Animal"
      ],
      "zh-CN": [
        "小蓝鸟",
        "小蓝鸟动物",
        "原创动物"
      ]
    },
    "characterId": "animal-small-bird",
    "seriesId": "animals",
    "detailFactIds": [
      "shape:standing",
      "color:blue-yellow",
      "material:soft-plush-fur",
      "facial-features:open",
      "head-accessory:none"
    ],
    "facts": [
      {
        "id": "style:animals",
        "labelByLanguage": {
          "en": "Animal",
          "zh-CN": "动物"
        },
        "state": "known"
      },
      {
        "id": "object-type:animal",
        "labelByLanguage": {
          "en": "animal",
          "zh-CN": "动物"
        },
        "state": "known"
      },
      {
        "id": "shape:standing",
        "labelByLanguage": {
          "en": "the original standing plush songbird with a compact upright body and visible feet",
          "zh-CN": "原始站姿绒面小鸟，身体紧凑直立且双脚清楚可见"
        },
        "state": "known"
      },
      {
        "id": "color:blue-yellow",
        "labelByLanguage": {
          "en": "Blue and butter yellow",
          "zh-CN": "蓝黄配色"
        },
        "state": "known"
      },
      {
        "id": "material:soft-plush-fur",
        "labelByLanguage": {
          "en": "Soft plush fur",
          "zh-CN": "柔软绒毛"
        },
        "state": "known"
      },
      {
        "id": "facial-features:open",
        "labelByLanguage": {
          "en": "two glossy brown open eyes and the original small open beak",
          "zh-CN": "两只亮泽棕色睁眼和原有微张小喙"
        },
        "state": "known"
      },
      {
        "id": "clothing:none",
        "labelByLanguage": {
          "en": "No clothing",
          "zh-CN": "No clothing"
        },
        "state": "none"
      },
      {
        "id": "head-accessory:none",
        "labelByLanguage": {
          "en": "No headwear",
          "zh-CN": "无头饰"
        },
        "state": "none"
      },
      {
        "id": "body-accessory:none",
        "labelByLanguage": {
          "en": "No body accessory",
          "zh-CN": "无身体配饰"
        },
        "state": "none"
      },
      {
        "id": "background:transparent",
        "labelByLanguage": {
          "en": "Transparent background",
          "zh-CN": "透明背景"
        },
        "state": "known"
      },
      {
        "id": "usage:transparent-character",
        "labelByLanguage": {
          "en": "Transparent character image",
          "zh-CN": "透明角色图"
        },
        "state": "known"
      }
    ]
  },
  "candidate-animal-penguin": {
    "titleByLanguage": {
      "en": "Plush Penguin",
      "zh-CN": "毛绒企鹅"
    },
    "descriptionByLanguage": {
      "en": "A round black-and-ivory plush penguin with orange beak and feet.",
      "zh-CN": "一只圆润的黑白绒面企鹅，配橙色喙和双脚。"
    },
    "aliases": {
      "en": [
        "Plush Penguin",
        "Plush Penguin Animal",
        "original Animal"
      ],
      "zh-CN": [
        "毛绒企鹅",
        "毛绒企鹅动物",
        "原创动物"
      ]
    },
    "characterId": "animal-penguin",
    "seriesId": "animals",
    "detailFactIds": [
      "shape:front",
      "color:charcoal-ivory",
      "material:soft-plush-fur",
      "facial-features:open",
      "head-accessory:none"
    ],
    "facts": [
      {
        "id": "style:animals",
        "labelByLanguage": {
          "en": "Animal",
          "zh-CN": "动物"
        },
        "state": "known"
      },
      {
        "id": "object-type:animal",
        "labelByLanguage": {
          "en": "animal",
          "zh-CN": "动物"
        },
        "state": "known"
      },
      {
        "id": "shape:front",
        "labelByLanguage": {
          "en": "the original front-facing rounded penguin with both flippers visible",
          "zh-CN": "原始圆润正面企鹅，双侧鳍肢均可见"
        },
        "state": "known"
      },
      {
        "id": "color:charcoal-ivory",
        "labelByLanguage": {
          "en": "Charcoal and ivory",
          "zh-CN": "炭灰象牙白"
        },
        "state": "known"
      },
      {
        "id": "material:soft-plush-fur",
        "labelByLanguage": {
          "en": "Soft plush fur",
          "zh-CN": "柔软绒毛"
        },
        "state": "known"
      },
      {
        "id": "facial-features:open",
        "labelByLanguage": {
          "en": "two glossy dark open eyes and the original short beak",
          "zh-CN": "两只亮泽深色睁眼和原有短喙"
        },
        "state": "known"
      },
      {
        "id": "clothing:none",
        "labelByLanguage": {
          "en": "No clothing",
          "zh-CN": "No clothing"
        },
        "state": "none"
      },
      {
        "id": "head-accessory:none",
        "labelByLanguage": {
          "en": "No headwear",
          "zh-CN": "无头饰"
        },
        "state": "none"
      },
      {
        "id": "body-accessory:none",
        "labelByLanguage": {
          "en": "No body accessory",
          "zh-CN": "无身体配饰"
        },
        "state": "none"
      },
      {
        "id": "background:transparent",
        "labelByLanguage": {
          "en": "Transparent background",
          "zh-CN": "透明背景"
        },
        "state": "known"
      },
      {
        "id": "usage:transparent-character",
        "labelByLanguage": {
          "en": "Transparent character image",
          "zh-CN": "透明角色图"
        },
        "state": "known"
      }
    ]
  }
});
export const V100_ADDITIONAL_IDENTITIES=deepFreeze([
  {
    "id": "dots-blue-beret-cloud",
    "seriesId": "dots",
    "labelByLanguage": {
      "en": "Blue Beret Cloud",
      "zh-CN": "蓝帽云团"
    }
  },
  {
    "id": "dots-yellow-glasses-triangle",
    "seriesId": "dots",
    "labelByLanguage": {
      "en": "Yellow Glasses Triangle",
      "zh-CN": "黄色眼镜三角"
    }
  },
  {
    "id": "dots-leaf-pear",
    "seriesId": "dots",
    "labelByLanguage": {
      "en": "Leaf Pear",
      "zh-CN": "芽叶梨团"
    }
  },
  {
    "id": "dots-violet-star",
    "seriesId": "dots",
    "labelByLanguage": {
      "en": "Violet Star",
      "zh-CN": "紫色星团"
    }
  },
  {
    "id": "dots-flower-cloud",
    "seriesId": "dots",
    "labelByLanguage": {
      "en": "Flower Cloud",
      "zh-CN": "紫色花云"
    }
  },
  {
    "id": "dots-lime-rounded-square",
    "seriesId": "dots",
    "labelByLanguage": {
      "en": "Lime Plush Square",
      "zh-CN": "绿色绒方块"
    }
  },
  {
    "id": "grok-white-arch",
    "seriesId": "grok",
    "labelByLanguage": {
      "en": "White Arch",
      "zh-CN": "白色拱团"
    }
  },
  {
    "id": "grok-horizontal-capsule",
    "seriesId": "grok",
    "labelByLanguage": {
      "en": "Horizontal Capsule",
      "zh-CN": "横向胶囊"
    }
  },
  {
    "id": "grok-soft-triangle",
    "seriesId": "grok",
    "labelByLanguage": {
      "en": "Soft Triangle",
      "zh-CN": "柔角三角"
    }
  },
  {
    "id": "grok-soft-diamond",
    "seriesId": "grok",
    "labelByLanguage": {
      "en": "Soft Diamond",
      "zh-CN": "圆角菱形"
    }
  },
  {
    "id": "grok-half-dome",
    "seriesId": "grok",
    "labelByLanguage": {
      "en": "Half Dome",
      "zh-CN": "半圆穹顶"
    }
  },
  {
    "id": "grok-cylinder",
    "seriesId": "grok",
    "labelByLanguage": {
      "en": "Cylinder",
      "zh-CN": "圆柱"
    }
  },
  {
    "id": "grok-egg",
    "seriesId": "grok",
    "labelByLanguage": {
      "en": "Rounded Egg",
      "zh-CN": "圆卵"
    }
  },
  {
    "id": "grok-rounded-cube",
    "seriesId": "grok",
    "labelByLanguage": {
      "en": "Rounded Cube",
      "zh-CN": "圆角立方"
    }
  },
  {
    "id": "muse-holding-star",
    "seriesId": "meta-muse",
    "labelByLanguage": {
      "en": "Star Muse",
      "zh-CN": "抱星 Muse"
    }
  },
  {
    "id": "animal-panda",
    "seriesId": "animals",
    "labelByLanguage": {
      "en": "Panda Cub",
      "zh-CN": "熊猫幼崽"
    }
  },
  {
    "id": "animal-pig",
    "seriesId": "animals",
    "labelByLanguage": {
      "en": "Piglet",
      "zh-CN": "小粉猪"
    }
  },
  {
    "id": "animal-monkey",
    "seriesId": "animals",
    "labelByLanguage": {
      "en": "Monkey",
      "zh-CN": "原创毛绒猴"
    }
  },
  {
    "id": "animal-small-bird",
    "seriesId": "animals",
    "labelByLanguage": {
      "en": "Little Songbird",
      "zh-CN": "小蓝鸟"
    }
  },
  {
    "id": "animal-penguin",
    "seriesId": "animals",
    "labelByLanguage": {
      "en": "Plush Penguin",
      "zh-CN": "毛绒企鹅"
    }
  }
]);
export const V100_PROMPT_ROWS=deepFreeze([
  [
    "dots-blue-beret-cloud",
    "Dots角色「蓝帽云团」：低矮连续、带圆润起伏的云团；亮蓝色短密绒；两枚有高光的黑色竖椭圆眼；贴合头顶的黑色毛呢贝雷帽。 保持无嘴、无手脚，不添加衣物。完整单体居中，使用真实透明像素背景，不添加场景或文字。",
    "Dots character Blue Beret Cloud: a low continuous cloud mound with rounded scallops; electric blue short dense fur; two glossy black vertical oval eyes; a fitted black wool beret. Keep it mouthless and limbless, and add no clothing. Show one complete character centered on true alpha transparency, with no scene or text."
  ],
  [
    "dots-yellow-glasses-triangle",
    "Dots角色「黄色眼镜三角」：无肢体圆角三角身体；暖黄色细密短绒；成对黑色弯弯闭眼，无嘴；贴合双眼的黑色圆框眼镜。 保持无嘴、无手脚，不添加衣物。完整单体居中，使用真实透明像素背景，不添加场景或文字。",
    "Dots character Yellow Glasses Triangle: one rounded triangular body without limbs; warm yellow dense short plush; paired simple black curved closed eyes; no mouth; fitted black round eyeglasses around both eyes. Keep it mouthless and limbless, and add no clothing. Show one complete character centered on true alpha transparency, with no scene or text."
  ],
  [
    "dots-leaf-pear",
    "Dots角色「芽叶梨团」：带两片顶芽叶的柔圆梨形连续身体；薄荷绿短密绒；成对简洁黑色眼睛，无嘴。 保持无嘴、无手脚，不添加衣物。完整单体居中，使用真实透明像素背景，不添加场景或文字。",
    "Dots character Leaf Pear: a continuous rounded pear body with two top sprout leaves; Mint green short dense plush; simple paired black eyes, no mouth. Keep it mouthless and limbless, and add no clothing. Show one complete character centered on true alpha transparency, with no scene or text."
  ],
  [
    "dots-violet-star",
    "Dots角色「紫色星团」：五个圆润星角构成的连续星形身体；淡紫色短密绒；成对简洁黑色眼睛，无嘴。 保持无嘴、无手脚，不添加衣物。完整单体居中，使用真实透明像素背景，不添加场景或文字。",
    "Dots character Violet Star: a continuous five-point star body with rounded points; Violet short dense plush; simple paired black eyes, no mouth. Keep it mouthless and limbless, and add no clothing. Show one complete character centered on true alpha transparency, with no scene or text."
  ],
  [
    "dots-flower-cloud",
    "Dots角色「紫色花云」：低矮连续、圆润起伏的紫色花云轮廓；紫色短密绒；成对简洁黑色眼睛，无嘴。 保持无嘴、无手脚，不添加衣物。完整单体居中，使用真实透明像素背景，不添加场景或文字。",
    "Dots character Flower Cloud: a low continuous purple flower-cloud outline with rounded scallops; Purple short dense plush; simple paired black eyes, no mouth. Keep it mouthless and limbless, and add no clothing. Show one complete character centered on true alpha transparency, with no scene or text."
  ],
  [
    "dots-lime-rounded-square",
    "Dots角色「绿色绒方块」：厚圆角的短密绒近方形块体；青绿色短密绒；成对简洁黑色眼睛，无嘴。 保持无嘴、无手脚，不添加衣物。完整单体居中，使用真实透明像素背景，不添加场景或文字。",
    "Dots character Lime Plush Square: a short-dense-plush square block with thick rounded corners; Lime green short dense plush; simple paired black eyes, no mouth. Keep it mouthless and limbless, and add no clothing. Show one complete character centered on true alpha transparency, with no scene or text."
  ],
  [
    "grok-white-arch",
    "Grok Bot角色「白色拱团」：低圆拱轮廓与平缓底面；象牙白光滑软硅胶材质；成对竖向黑色胶囊眼。 保持无嘴、无手脚，不添加衣物。完整单体居中，使用真实透明像素背景，不添加场景或文字。",
    "Grok Bot character White Arch: a low rounded arch silhouette with a broad gentle base; ivory white smooth soft silicone; paired vertical black capsule eyes. Keep it mouthless and limbless, and add no clothing. Show one complete character centered on true alpha transparency, with no scene or text."
  ],
  [
    "grok-horizontal-capsule",
    "Grok Bot角色「横向胶囊」：横向宽短胶囊轮廓；橙色光滑软硅胶材质；成对竖向象牙白胶囊眼。 保持无嘴、无手脚，不添加衣物。完整单体居中，使用真实透明像素背景，不添加场景或文字。",
    "Grok Bot character Horizontal Capsule: a wide short horizontal capsule silhouette; orange smooth soft silicone; paired vertical ivory capsule eyes. Keep it mouthless and limbless, and add no clothing. Show one complete character centered on true alpha transparency, with no scene or text."
  ],
  [
    "grok-soft-triangle",
    "Grok Bot角色「柔角三角」：软三角轮廓；珊瑚粉光滑软硅胶材质；成对竖向象牙白胶囊眼。 保持无嘴、无手脚，不添加衣物。完整单体居中，使用真实透明像素背景，不添加场景或文字。",
    "Grok Bot character Soft Triangle: a soft triangular silhouette; coral pink smooth soft silicone; paired vertical ivory capsule eyes. Keep it mouthless and limbless, and add no clothing. Show one complete character centered on true alpha transparency, with no scene or text."
  ],
  [
    "grok-soft-diamond",
    "Grok Bot角色「圆角菱形」：圆钝菱形轮廓；莓果粉光滑软硅胶材质；成对竖向象牙白胶囊眼。 保持无嘴、无手脚，不添加衣物。完整单体居中，使用真实透明像素背景，不添加场景或文字。",
    "Grok Bot character Soft Diamond: a rounded diamond silhouette; berry pink smooth soft silicone; paired vertical ivory capsule eyes. Keep it mouthless and limbless, and add no clothing. Show one complete character centered on true alpha transparency, with no scene or text."
  ],
  [
    "grok-half-dome",
    "Grok Bot角色「半圆穹顶」：半圆穹顶与平缓底缘；石墨蓝光滑软硅胶材质；成对竖向象牙白胶囊眼。 保持无嘴、无手脚，不添加衣物。完整单体居中，使用真实透明像素背景，不添加场景或文字。",
    "Grok Bot character Half Dome: a semicircular dome with a gently flattened base; graphite blue smooth soft silicone; paired vertical ivory capsule eyes. Keep it mouthless and limbless, and add no clothing. Show one complete character centered on true alpha transparency, with no scene or text."
  ],
  [
    "grok-cylinder",
    "Grok Bot角色「圆柱」：可见椭圆顶面的圆柱轮廓；朱红光滑软硅胶材质；成对竖向象牙白胶囊眼。 保持无嘴、无手脚，不添加衣物。完整单体居中，使用真实透明像素背景，不添加场景或文字。",
    "Grok Bot character Cylinder: an upright cylinder with a visible elliptical top; red smooth soft silicone; paired vertical ivory capsule eyes. Keep it mouthless and limbless, and add no clothing. Show one complete character centered on true alpha transparency, with no scene or text."
  ],
  [
    "grok-egg",
    "Grok Bot角色「圆卵」：无尖端的圆滑卵形轮廓；杏橙光滑软硅胶材质；成对竖向象牙白胶囊眼。 保持无嘴、无手脚，不添加衣物。完整单体居中，使用真实透明像素背景，不添加场景或文字。",
    "Grok Bot character Rounded Egg: a rounded egg silhouette without a pointed tip; apricot orange smooth soft silicone; paired vertical ivory capsule eyes. Keep it mouthless and limbless, and add no clothing. Show one complete character centered on true alpha transparency, with no scene or text."
  ],
  [
    "grok-rounded-cube",
    "Grok Bot角色「圆角立方」：顶面和两侧面可见的圆角立方轮廓；翠绿光滑软硅胶材质；成对竖向象牙白胶囊眼。 保持无嘴、无手脚，不添加衣物。完整单体居中，使用真实透明像素背景，不添加场景或文字。",
    "Grok Bot character Rounded Cube: a rounded cube with visible top and two side planes; emerald green smooth soft silicone; paired vertical ivory capsule eyes. Keep it mouthless and limbless, and add no clothing. Show one complete character centered on true alpha transparency, with no scene or text."
  ],
  [
    "muse-holding-star",
    "Muse角色「抱星 Muse」：经典连续包覆身体与内嵌脸，坐姿，双手在胸前自然承托黄色星星；奶油白短绒身体，肤色与道具保持原色；内嵌桃色脸、睁开小圆眼与轻柔微笑。 完整单体居中，使用真实透明像素背景，不添加场景或文字。",
    "Muse character Star Muse: a continuous hooded body with an inset face; keep the yellow star naturally supported by both short round hands; cream white short-plush body; preserve peach face and prop colors; an inset peach face with small open dark eyes and a gentle smile.  Show one complete character centered on true alpha transparency, with no scene or text."
  ],
  [
    "candidate-animal-panda",
    "一只紧凑的象牙白绒面熊猫幼崽，带炭黑眼斑与圆耳。 完整单体居中，使用真实透明像素背景，不添加场景或文字。",
    "A compact ivory plush panda cub with charcoal eye patches and round ears.  Show one complete character centered on true alpha transparency, with no scene or text."
  ],
  [
    "candidate-animal-pig",
    "一只腮红粉色绒面小猪，带圆润鼻盘、分趾蹄和卷尾。 完整单体居中，使用真实透明像素背景，不添加场景或文字。",
    "A blush-pink plush piglet with a broad snout, cloven hooves, and a curled tail.  Show one complete character centered on true alpha transparency, with no scene or text."
  ],
  [
    "candidate-animal-monkey",
    "原创坐姿栗棕绒面猴，带暖棕心形脸、圆耳和相连卷尾。 完整单体居中，使用真实透明像素背景，不添加场景或文字。",
    "An original seated chestnut plush monkey with a tan heart-shaped face, rounded ears, and an attached curved tail.  Show one complete character centered on true alpha transparency, with no scene or text."
  ],
  [
    "candidate-animal-small-bird",
    "一只青蓝色绒面小鸟，配奶油黄色腹部、橙色小喙、羽冠、翅膀和双脚。 完整单体居中，使用真实透明像素背景，不添加场景或文字。",
    "A turquoise-blue plush songbird with a butter-yellow belly, small orange beak, feather tuft, wings and feet.  Show one complete character centered on true alpha transparency, with no scene or text."
  ],
  [
    "candidate-animal-penguin",
    "一只圆润的黑白绒面企鹅，配橙色喙和双脚。 完整单体居中，使用真实透明像素背景，不添加场景或文字。",
    "A round black-and-ivory plush penguin with orange beak and feet.  Show one complete character centered on true alpha transparency, with no scene or text."
  ],
  [
    "animal-white-rabbit-v98-candidate",
    "原创完整坐姿白兔，长而直立的双耳内侧为粉色，保留棕色眼睛、粉色鼻头、短白毛与圆尾。保持原有身份和造型，不增删配件；完整单体居中，背景为真实透明像素。",
    "An original complete seated white rabbit with two long upright ears lined in pink, brown eyes, a pink nose, short white fur, and a rounded tail. Preserve its established identity and appearance, add or remove no features, and center the complete single character on true alpha transparency."
  ],
  [
    "robot-ivory-capsule-face-v98-candidate",
    "原创象牙白胶囊机器人，圆润光滑外壳、深色内嵌屏幕、一对白色竖胶囊眼、短圆手足、抬起的一只手臂和琥珀色胸灯。保持独立机器人身份，不画成 Grok Bot；完整单体居中，背景为真实透明像素。",
    "An original ivory capsule robot with a smooth rounded shell, dark inset display, paired white vertical capsule eyes, short rounded limbs and feet, one raised arm, and an amber chest light. Preserve its independent robot identity; do not turn it into a Grok Bot. Center the complete single character on true alpha transparency."
  ]
]);
export const V100_CONTENT_BY_ID=deepFreeze({...BASE_ARTWORK_CONTENT,...PREVIEW_ARTWORK_CONTENT,...V100_ADDITIONAL_CONTENT});
export const V100_CHARACTER_IDENTITIES=deepFreeze([...BASE_CHARACTER_IDENTITIES,...V100_ADDITIONAL_IDENTITIES]);
export const V100_SERIES_NORMALIZATION=deepFreeze({
  "muse": {
    "runtimeSeriesId": "meta-muse",
    "approvalSeriesId": "muse"
  }
});
