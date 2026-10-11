// Runtime Templates extracted from the exact approved review package gallery-adjustments-review-package-v1.
// Package SHA-256: c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c
// User approval: character-adjustments-20261011-v1; the review-only source manifests remain unchanged.
export const CHARACTER_ADJUSTMENT_PACKAGE_ID = "gallery-adjustments-review-package-v1";
export const CHARACTER_ADJUSTMENT_PACKAGE_SHA256 = "c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c";
export const CHARACTER_ADJUSTMENT_TEMPLATES = [
  {
    "schemaVersion": 2,
    "id": "dots-orb-core-adjustments-v6-four-tabs-candidate",
    "version": "v6",
    "family": "dots",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "candidate-dots-20261005",
      "artworkVersion": "v2"
    },
    "canvas": {
      "width": 1254,
      "height": 1254
    },
    "anchors": {
      "face.center": {
        "point": [
          627,
          626
        ]
      },
      "body.lower.orb": {
        "point": [
          627,
          940
        ]
      },
      "body.lower.cloud": {
        "point": [
          627,
          930
        ]
      },
      "accessory.head": {
        "point": [
          627,
          240
        ]
      }
    },
    "identitySemanticsByLanguage": {
      "en": "One Dots character with a continuous plush body and two simple eyes. No arms, hands, legs, feet, mouth, screen face, props, or background.",
      "zh-CN": "单个连续绒面身体、两只简洁眼睛的 Dots 角色。无手臂、手、腿、脚、嘴、屏幕脸、道具或背景。"
    },
    "defaultOptions": {
      "appearance": "orb",
      "colors": "blue",
      "face": "open",
      "accessories": "headphones"
    },
    "options": {
      "appearance": [
        {
          "id": "orb",
          "labelByLanguage": {
            "en": "Orb",
            "zh-CN": "圆球"
          },
          "semanticByLanguage": {
            "en": "a round plush orb-shaped Dots body",
            "zh-CN": "圆球形绒面 Dots 身体"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "cloud",
          "labelByLanguage": {
            "en": "Cloud",
            "zh-CN": "云团"
          },
          "semanticByLanguage": {
            "en": "a low continuous three-lobed plush cloud Dots body",
            "zh-CN": "低矮连续、三处圆润起伏的云团绒面 Dots 身体"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:appearance:cloud",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "blue",
          "hex": "#3989e5",
          "swatches": [
            "#3989e5"
          ],
          "zoneColors": {
            "body": "#3989e5"
          },
          "labelByLanguage": {
            "en": "Blue",
            "zh-CN": "蓝色"
          },
          "semanticByLanguage": {
            "en": "blue short-pile plush body",
            "zh-CN": "蓝色短绒身体"
          }
        },
        {
          "id": "rose",
          "hex": "#e36cb7",
          "swatches": [
            "#e36cb7"
          ],
          "zoneColors": {
            "body": "#e36cb7"
          },
          "labelByLanguage": {
            "en": "Rose",
            "zh-CN": "玫瑰粉"
          },
          "semanticByLanguage": {
            "en": "rose-pink short-pile plush body",
            "zh-CN": "玫瑰粉短绒身体"
          }
        },
        {
          "id": "ivory",
          "hex": "#F3F0E8",
          "swatches": [
            "#F3F0E8"
          ],
          "labelByLanguage": {
            "en": "Ivory white",
            "zh-CN": "象牙白"
          },
          "semanticByLanguage": {
            "en": "warm ivory plush body",
            "zh-CN": "暖象牙色绒面身体"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:color:ivory",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "charcoal",
          "hex": "#27282D",
          "swatches": [
            "#27282D"
          ],
          "labelByLanguage": {
            "en": "Charcoal",
            "zh-CN": "炭黑色"
          },
          "semanticByLanguage": {
            "en": "deep charcoal plush body",
            "zh-CN": "深炭黑色绒面身体"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:color:charcoal",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "en": "Open eyes",
            "zh-CN": "睁眼"
          },
          "semanticByLanguage": {
            "en": "two simple glossy black upright oval eyes",
            "zh-CN": "两只简洁、带高光的黑色竖椭圆眼"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        },
        {
          "id": "closed",
          "labelByLanguage": {
            "en": "Closed eyes",
            "zh-CN": "闭眼"
          },
          "semanticByLanguage": {
            "en": "two gently curved closed-eye marks as a static expression",
            "zh-CN": "两道柔和弯曲的闭眼线，作为静态表情"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "None",
            "zh-CN": "无配饰"
          },
          "semanticByLanguage": {
            "en": "no accessories",
            "zh-CN": "无配饰"
          }
        },
        {
          "id": "headphones",
          "labelByLanguage": {
            "en": "Headphones",
            "zh-CN": "耳机"
          },
          "semanticByLanguage": {
            "en": "a black headband with violet over-ear headphone cups",
            "zh-CN": "黑色头带与紫色包耳式耳罩"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:headphones:front",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          ]
        },
        {
          "id": "round-glasses",
          "labelByLanguage": {
            "en": "Round glasses",
            "zh-CN": "圆框眼镜"
          },
          "semanticByLanguage": {
            "en": "round black-framed glasses aligned over the eyes",
            "zh-CN": "对齐眼睛位置的黑色圆框眼镜"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:glasses:front",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          ]
        },
        {
          "id": "chef-toque",
          "labelByLanguage": {
            "en": "Chef toque",
            "zh-CN": "厨师帽"
          },
          "semanticByLanguage": {
            "en": "a soft ivory plush chef toque fitted to the crown, with no head or body added",
            "zh-CN": "贴合头顶的柔软象牙白绒面厨师帽，不增加头部或身体"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:chef-toque",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          ]
        },
        {
          "id": "cool-sunglasses",
          "labelByLanguage": {
            "en": "Black cool sunglasses",
            "zh-CN": "黑色酷墨镜"
          },
          "semanticByLanguage": {
            "en": "wide black opaque oval sunglasses fitted across the open eyes",
            "zh-CN": "贴合睁眼位置的黑色不透明宽椭圆墨镜"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:cool-sunglasses",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          ]
        },
        {
          "id": "cyber-glasses",
          "labelByLanguage": {
            "en": "Cyber glasses",
            "zh-CN": "赛博眼镜"
          },
          "semanticByLanguage": {
            "en": "black-framed cyan cyber glasses with opaque lenses fitted across the eyes",
            "zh-CN": "贴合眼睛位置、带不透明青色镜片的黑框赛博眼镜"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:cyber-glasses",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [
      {
        "when": {
          "appearance": "cloud",
          "accessories": "headphones"
        },
        "code": "cloud-headphones-fit-conflict",
        "messageByLanguage": {
          "en": "These over-ear cups and headband are registered for the round orb silhouette. Choose the cloud with no accessory or round glasses, or choose the orb to keep the headphones.",
          "zh-CN": "这副包耳耳罩与头带仅按圆球轮廓制作。云团可选择无配饰或圆框眼镜；若要耳机，请切换为圆球。"
        }
      },
      {
        "when": {
          "appearance": "cloud",
          "accessories": "chef-toque"
        },
        "code": "cloud-chef-toque-fit-conflict",
        "messageByLanguage": {
          "en": "The chef toque layer is fitted to the round orb only. Choose Orb for this accessory, or choose the cloud with another registered accessory.",
          "zh-CN": "厨师帽图层仅按圆球轮廓适配。若要此配饰请切换圆球；云团可改用其他已登记配饰。"
        }
      },
      {
        "when": {
          "appearance": "cloud",
          "accessories": "cool-sunglasses"
        },
        "code": "cloud-cool-sunglasses-fit-conflict",
        "messageByLanguage": {
          "en": "The black cool sunglasses layer is fitted to the round orb only. Choose Orb for this accessory, or choose the cloud with another registered accessory.",
          "zh-CN": "黑色酷墨镜图层仅按圆球轮廓适配。若要此配饰请切换圆球；云团可改用其他已登记配饰。"
        }
      },
      {
        "when": {
          "appearance": "cloud",
          "accessories": "cyber-glasses"
        },
        "code": "cloud-cyber-glasses-fit-conflict",
        "messageByLanguage": {
          "en": "The cyber glasses layer is fitted to the round orb only. Choose Orb for this accessory, or choose the cloud with another registered accessory.",
          "zh-CN": "赛博眼镜图层仅按圆球轮廓适配。若要此配饰请切换圆球；云团可改用其他已登记配饰。"
        }
      },
      {
        "when": {
          "face": "closed",
          "accessories": "cool-sunglasses"
        },
        "code": "cool-sunglasses-closed-eyes-conflict",
        "messageByLanguage": {
          "en": "The opaque dark lenses conceal the closed-eye expression. Choose open eyes or another accessory.",
          "zh-CN": "深色不透明镜片会遮住闭眼表情。请选择睁眼或其他配饰。"
        }
      },
      {
        "when": {
          "face": "closed",
          "accessories": "cyber-glasses"
        },
        "code": "cyber-glasses-conceal-closed-eyes",
        "messageByLanguage": {
          "en": "The opaque cyan lenses conceal the closed-eye expression. Choose open eyes or another accessory.",
          "zh-CN": "青色不透明镜片会遮住闭眼表情。请选择睁眼或其他配饰。"
        }
      },
      {
        "when": {
          "appearance": "cloud",
          "colors": "ivory"
        },
        "code": "cloud-ivory-body-unavailable",
        "messageByLanguage": {
          "en": "This transparent ivory body asset is fitted to the round orb only. Choose Orb for ivory, or choose the cloud in blue or rose.",
          "zh-CN": "象牙色透明身体素材仅适配圆球。若要象牙色请切换圆球；云团可选择蓝色或玫瑰粉。"
        }
      },
      {
        "when": {
          "appearance": "cloud",
          "colors": "charcoal"
        },
        "code": "cloud-charcoal-body-unavailable",
        "messageByLanguage": {
          "en": "This transparent charcoal body asset is fitted to the round orb only. Choose Orb for charcoal, or choose the cloud in blue or rose.",
          "zh-CN": "炭黑色透明身体素材仅适配圆球。若要炭黑色请切换圆球；云团可选择蓝色或玫瑰粉。"
        }
      }
    ],
    "recipes": [
      {
        "id": "orb-blue-open-none-none",
        "selections": {
          "appearance": "orb",
          "colors": "blue",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "orb-blue-open-none-headphones",
        "selections": {
          "appearance": "orb",
          "colors": "blue",
          "face": "open",
          "accessories": "headphones"
        },
        "layers": [
          {
            "slot": "headphones-rear",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:headphones:rear",
              "version": "v1",
              "purpose": "accessory-rear-layer"
            }
          },
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "headphones-front",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:headphones:front",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      },
      {
        "id": "orb-blue-open-none-round-glasses",
        "selections": {
          "appearance": "orb",
          "colors": "blue",
          "face": "open",
          "accessories": "round-glasses"
        },
        "layers": [
          {
            "slot": "glasses-rear",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:glasses:rear",
              "version": "v1",
              "purpose": "accessory-rear-layer"
            }
          },
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:glasses:front",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      },
      {
        "id": "orb-blue-closed-none-none",
        "selections": {
          "appearance": "orb",
          "colors": "blue",
          "face": "closed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "orb-blue-closed-none-headphones",
        "selections": {
          "appearance": "orb",
          "colors": "blue",
          "face": "closed",
          "accessories": "headphones"
        },
        "layers": [
          {
            "slot": "headphones-rear",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:headphones:rear",
              "version": "v1",
              "purpose": "accessory-rear-layer"
            }
          },
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "headphones-front",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:headphones:front",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      },
      {
        "id": "orb-blue-closed-none-round-glasses",
        "selections": {
          "appearance": "orb",
          "colors": "blue",
          "face": "closed",
          "accessories": "round-glasses"
        },
        "layers": [
          {
            "slot": "glasses-rear",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:glasses:rear",
              "version": "v1",
              "purpose": "accessory-rear-layer"
            }
          },
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:glasses:front",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      },
      {
        "id": "orb-rose-open-none-none",
        "selections": {
          "appearance": "orb",
          "colors": "rose",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "orb-rose-open-none-headphones",
        "selections": {
          "appearance": "orb",
          "colors": "rose",
          "face": "open",
          "accessories": "headphones"
        },
        "layers": [
          {
            "slot": "headphones-rear",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:headphones:rear",
              "version": "v1",
              "purpose": "accessory-rear-layer"
            }
          },
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "headphones-front",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:headphones:front",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      },
      {
        "id": "orb-rose-open-none-round-glasses",
        "selections": {
          "appearance": "orb",
          "colors": "rose",
          "face": "open",
          "accessories": "round-glasses"
        },
        "layers": [
          {
            "slot": "glasses-rear",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:glasses:rear",
              "version": "v1",
              "purpose": "accessory-rear-layer"
            }
          },
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:glasses:front",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      },
      {
        "id": "orb-rose-closed-none-none",
        "selections": {
          "appearance": "orb",
          "colors": "rose",
          "face": "closed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "orb-rose-closed-none-headphones",
        "selections": {
          "appearance": "orb",
          "colors": "rose",
          "face": "closed",
          "accessories": "headphones"
        },
        "layers": [
          {
            "slot": "headphones-rear",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:headphones:rear",
              "version": "v1",
              "purpose": "accessory-rear-layer"
            }
          },
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "headphones-front",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:headphones:front",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      },
      {
        "id": "orb-rose-closed-none-round-glasses",
        "selections": {
          "appearance": "orb",
          "colors": "rose",
          "face": "closed",
          "accessories": "round-glasses"
        },
        "layers": [
          {
            "slot": "glasses-rear",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:glasses:rear",
              "version": "v1",
              "purpose": "accessory-rear-layer"
            }
          },
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:glasses:front",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-blue-open-none-none",
        "selections": {
          "appearance": "cloud",
          "colors": "blue",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:appearance:cloud",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:mask:color:cloud",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-blue-open-none-round-glasses",
        "selections": {
          "appearance": "cloud",
          "colors": "blue",
          "face": "open",
          "accessories": "round-glasses"
        },
        "layers": [
          {
            "slot": "glasses-rear",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:glasses:rear",
              "version": "v1",
              "purpose": "accessory-rear-layer"
            }
          },
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:appearance:cloud",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:mask:color:cloud",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:glasses:front",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-blue-closed-none-none",
        "selections": {
          "appearance": "cloud",
          "colors": "blue",
          "face": "closed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:appearance:cloud",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:mask:color:cloud",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-blue-closed-none-round-glasses",
        "selections": {
          "appearance": "cloud",
          "colors": "blue",
          "face": "closed",
          "accessories": "round-glasses"
        },
        "layers": [
          {
            "slot": "glasses-rear",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:glasses:rear",
              "version": "v1",
              "purpose": "accessory-rear-layer"
            }
          },
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:appearance:cloud",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:mask:color:cloud",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:glasses:front",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-rose-open-none-none",
        "selections": {
          "appearance": "cloud",
          "colors": "rose",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:appearance:cloud",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:mask:color:cloud",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-rose-open-none-round-glasses",
        "selections": {
          "appearance": "cloud",
          "colors": "rose",
          "face": "open",
          "accessories": "round-glasses"
        },
        "layers": [
          {
            "slot": "glasses-rear",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:glasses:rear",
              "version": "v1",
              "purpose": "accessory-rear-layer"
            }
          },
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:appearance:cloud",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:mask:color:cloud",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:glasses:front",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-rose-closed-none-none",
        "selections": {
          "appearance": "cloud",
          "colors": "rose",
          "face": "closed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:appearance:cloud",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:mask:color:cloud",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-rose-closed-none-round-glasses",
        "selections": {
          "appearance": "cloud",
          "colors": "rose",
          "face": "closed",
          "accessories": "round-glasses"
        },
        "layers": [
          {
            "slot": "glasses-rear",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:glasses:rear",
              "version": "v1",
              "purpose": "accessory-rear-layer"
            }
          },
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:appearance:cloud",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:mask:color:cloud",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:glasses:front",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      },
      {
        "id": "orb-blue-open-none-chef-toque",
        "selections": {
          "appearance": "orb",
          "colors": "blue",
          "face": "open",
          "accessories": "chef-toque"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-chef-toque",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:chef-toque",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      },
      {
        "id": "orb-blue-closed-none-chef-toque",
        "selections": {
          "appearance": "orb",
          "colors": "blue",
          "face": "closed",
          "accessories": "chef-toque"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-chef-toque",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:chef-toque",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      },
      {
        "id": "orb-rose-open-none-chef-toque",
        "selections": {
          "appearance": "orb",
          "colors": "rose",
          "face": "open",
          "accessories": "chef-toque"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-chef-toque",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:chef-toque",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      },
      {
        "id": "orb-rose-closed-none-chef-toque",
        "selections": {
          "appearance": "orb",
          "colors": "rose",
          "face": "closed",
          "accessories": "chef-toque"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-chef-toque",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:chef-toque",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      },
      {
        "id": "orb-blue-open-none-cool-sunglasses",
        "selections": {
          "appearance": "orb",
          "colors": "blue",
          "face": "open",
          "accessories": "cool-sunglasses"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-cool-sunglasses",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:cool-sunglasses",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      },
      {
        "id": "orb-rose-open-none-cool-sunglasses",
        "selections": {
          "appearance": "orb",
          "colors": "rose",
          "face": "open",
          "accessories": "cool-sunglasses"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-cool-sunglasses",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:cool-sunglasses",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      },
      {
        "id": "orb-blue-open-none-cyber-glasses",
        "selections": {
          "appearance": "orb",
          "colors": "blue",
          "face": "open",
          "accessories": "cyber-glasses"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-cyber-glasses",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:cyber-glasses",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      },
      {
        "id": "orb-rose-open-none-cyber-glasses",
        "selections": {
          "appearance": "orb",
          "colors": "rose",
          "face": "open",
          "accessories": "cyber-glasses"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-cyber-glasses",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:cyber-glasses",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      },
      {
        "id": "orb-ivory-open-none-headphones",
        "selections": {
          "appearance": "orb",
          "colors": "ivory",
          "face": "open",
          "accessories": "headphones"
        },
        "layers": [
          {
            "slot": "headphones-rear",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:headphones:rear",
              "version": "v1",
              "purpose": "accessory-rear-layer"
            }
          },
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:color:ivory",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "headphones-front",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:headphones:front",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      },
      {
        "id": "orb-charcoal-open-none-headphones",
        "selections": {
          "appearance": "orb",
          "colors": "charcoal",
          "face": "open",
          "accessories": "headphones"
        },
        "layers": [
          {
            "slot": "headphones-rear",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:headphones:rear",
              "version": "v1",
              "purpose": "accessory-rear-layer"
            }
          },
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:color:charcoal",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "headphones-front",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:headphones:front",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      },
      {
        "id": "orb-ivory-open-none-chef-toque",
        "selections": {
          "appearance": "orb",
          "colors": "ivory",
          "face": "open",
          "accessories": "chef-toque"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:color:ivory",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-chef-toque",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:chef-toque",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      },
      {
        "id": "orb-charcoal-open-none-cool-sunglasses",
        "selections": {
          "appearance": "orb",
          "colors": "charcoal",
          "face": "open",
          "accessories": "cool-sunglasses"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:color:charcoal",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-cool-sunglasses",
            "asset": {
              "id": "template:dots-orb-core-adjustments-v6-four-tabs-candidate:accessories:cool-sunglasses",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "dots-rose-glasses-adjustments-v3-four-tabs-candidate",
    "version": "v3",
    "family": "dots",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "dots-rose-glasses",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1254,
      "height": 1254
    },
    "anchors": {
      "face.center": {
        "point": [
          627,
          626
        ]
      },
      "body.lower.orb": {
        "point": [
          627,
          940
        ]
      },
      "body.lower.cloud": {
        "point": [
          627,
          930
        ]
      }
    },
    "identitySemanticsByLanguage": {
      "en": "One Dots character with a continuous plush body and two simple eyes. No arms, hands, legs, feet, mouth, screen face, props, or background.",
      "zh-CN": "单个连续绒面身体、两只简洁眼睛的 Dots 角色。无手臂、手、腿、脚、嘴、屏幕脸、道具或背景。"
    },
    "defaultOptions": {
      "appearance": "orb",
      "colors": "rose",
      "face": "open",
      "accessories": "rose-round-glasses"
    },
    "options": {
      "appearance": [
        {
          "id": "orb",
          "labelByLanguage": {
            "en": "Orb",
            "zh-CN": "圆球"
          },
          "semanticByLanguage": {
            "en": "a round rose-pink short-plush Dots body",
            "zh-CN": "莓粉色圆球短绒 Dots 身体"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "cloud",
          "labelByLanguage": {
            "en": "Cloud",
            "zh-CN": "云团"
          },
          "semanticByLanguage": {
            "en": "a low three-lobed rose-pink plush cloud Dots body",
            "zh-CN": "莓粉色低矮三瓣云团绒面 Dots 身体"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:appearance:cloud",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "rose",
          "labelByLanguage": {
            "en": "Rose",
            "zh-CN": "莓粉色"
          },
          "semanticByLanguage": {
            "en": "berry-pink short-pile plush body",
            "zh-CN": "莓粉色短绒身体"
          },
          "hex": "#e36cb7",
          "swatches": [
            "#e36cb7"
          ],
          "zoneColors": {
            "body": "#e36cb7"
          }
        },
        {
          "id": "blue",
          "labelByLanguage": {
            "en": "Blue",
            "zh-CN": "蓝色"
          },
          "semanticByLanguage": {
            "en": "blue short-pile plush body",
            "zh-CN": "蓝色短绒身体"
          },
          "hex": "#3989e5",
          "swatches": [
            "#3989e5"
          ],
          "zoneColors": {
            "body": "#3989e5"
          }
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "en": "Open eyes",
            "zh-CN": "睁眼"
          },
          "semanticByLanguage": {
            "en": "two glossy black upright oval eyes",
            "zh-CN": "两只黑色竖椭圆眼"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        },
        {
          "id": "closed",
          "labelByLanguage": {
            "en": "Closed eyes",
            "zh-CN": "闭眼"
          },
          "semanticByLanguage": {
            "en": "two gently curved closed-eye marks as a static expression",
            "zh-CN": "两道柔和弯曲的闭眼线，作为静态表情"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "None",
            "zh-CN": "无配饰"
          },
          "semanticByLanguage": {
            "en": "no accessories",
            "zh-CN": "无配饰"
          }
        },
        {
          "id": "rose-round-glasses",
          "labelByLanguage": {
            "en": "Rose round glasses",
            "zh-CN": "莓粉圆框眼镜"
          },
          "semanticByLanguage": {
            "en": "rose-pink round frames aligned over the two eyes",
            "zh-CN": "对齐双眼的莓粉色圆框眼镜"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:accessories:glasses:front",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [],
    "recipes": [
      {
        "id": "orb-rose-open-none-none",
        "selections": {
          "appearance": "orb",
          "colors": "rose",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "orb-rose-open-none-rose-round-glasses",
        "selections": {
          "appearance": "orb",
          "colors": "rose",
          "face": "open",
          "accessories": "rose-round-glasses"
        },
        "layers": [
          {
            "slot": "glasses-rear",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:accessories:glasses:rear",
              "version": "v1",
              "purpose": "accessory-rear-layer"
            }
          },
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:face:open:glasses-fit",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:accessories:glasses:front",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      },
      {
        "id": "orb-rose-closed-none-none",
        "selections": {
          "appearance": "orb",
          "colors": "rose",
          "face": "closed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "orb-rose-closed-none-rose-round-glasses",
        "selections": {
          "appearance": "orb",
          "colors": "rose",
          "face": "closed",
          "accessories": "rose-round-glasses"
        },
        "layers": [
          {
            "slot": "glasses-rear",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:accessories:glasses:rear",
              "version": "v1",
              "purpose": "accessory-rear-layer"
            }
          },
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:accessories:glasses:front",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      },
      {
        "id": "orb-blue-open-none-none",
        "selections": {
          "appearance": "orb",
          "colors": "blue",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "orb-blue-open-none-rose-round-glasses",
        "selections": {
          "appearance": "orb",
          "colors": "blue",
          "face": "open",
          "accessories": "rose-round-glasses"
        },
        "layers": [
          {
            "slot": "glasses-rear",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:accessories:glasses:rear",
              "version": "v1",
              "purpose": "accessory-rear-layer"
            }
          },
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:face:open:glasses-fit",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:accessories:glasses:front",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      },
      {
        "id": "orb-blue-closed-none-none",
        "selections": {
          "appearance": "orb",
          "colors": "blue",
          "face": "closed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "orb-blue-closed-none-rose-round-glasses",
        "selections": {
          "appearance": "orb",
          "colors": "blue",
          "face": "closed",
          "accessories": "rose-round-glasses"
        },
        "layers": [
          {
            "slot": "glasses-rear",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:accessories:glasses:rear",
              "version": "v1",
              "purpose": "accessory-rear-layer"
            }
          },
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:accessories:glasses:front",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-rose-open-none-none",
        "selections": {
          "appearance": "cloud",
          "colors": "rose",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:appearance:cloud",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:mask:color:cloud",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-rose-open-none-rose-round-glasses",
        "selections": {
          "appearance": "cloud",
          "colors": "rose",
          "face": "open",
          "accessories": "rose-round-glasses"
        },
        "layers": [
          {
            "slot": "glasses-rear",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:accessories:glasses:rear",
              "version": "v1",
              "purpose": "accessory-rear-layer"
            }
          },
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:appearance:cloud",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:mask:color:cloud",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:face:open:glasses-fit",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:accessories:glasses:front",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-rose-closed-none-none",
        "selections": {
          "appearance": "cloud",
          "colors": "rose",
          "face": "closed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:appearance:cloud",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:mask:color:cloud",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-rose-closed-none-rose-round-glasses",
        "selections": {
          "appearance": "cloud",
          "colors": "rose",
          "face": "closed",
          "accessories": "rose-round-glasses"
        },
        "layers": [
          {
            "slot": "glasses-rear",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:accessories:glasses:rear",
              "version": "v1",
              "purpose": "accessory-rear-layer"
            }
          },
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:appearance:cloud",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:mask:color:cloud",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:accessories:glasses:front",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-blue-open-none-none",
        "selections": {
          "appearance": "cloud",
          "colors": "blue",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:appearance:cloud",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:mask:color:cloud",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-blue-open-none-rose-round-glasses",
        "selections": {
          "appearance": "cloud",
          "colors": "blue",
          "face": "open",
          "accessories": "rose-round-glasses"
        },
        "layers": [
          {
            "slot": "glasses-rear",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:accessories:glasses:rear",
              "version": "v1",
              "purpose": "accessory-rear-layer"
            }
          },
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:appearance:cloud",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:mask:color:cloud",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:face:open:glasses-fit",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:accessories:glasses:front",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-blue-closed-none-none",
        "selections": {
          "appearance": "cloud",
          "colors": "blue",
          "face": "closed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:appearance:cloud",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:mask:color:cloud",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-blue-closed-none-rose-round-glasses",
        "selections": {
          "appearance": "cloud",
          "colors": "blue",
          "face": "closed",
          "accessories": "rose-round-glasses"
        },
        "layers": [
          {
            "slot": "glasses-rear",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:accessories:glasses:rear",
              "version": "v1",
              "purpose": "accessory-rear-layer"
            }
          },
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:appearance:cloud",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:mask:color:cloud",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:dots-rose-glasses-adjustments-v3-four-tabs-candidate:accessories:glasses:front",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "dots-lilac-bucket-adjustments-v2-four-tabs-candidate",
    "version": "v2",
    "family": "dots",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "dots-lilac-bucket",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1254,
      "height": 1254
    },
    "anchors": {
      "face.center": {
        "point": [
          627,
          626
        ]
      },
      "body.lower.orb": {
        "point": [
          627,
          940
        ]
      },
      "body.lower.cloud": {
        "point": [
          627,
          930
        ]
      }
    },
    "identitySemanticsByLanguage": {
      "en": "One Dots character with one continuous short-plush body and two simple eyes. No arms, hands, legs, feet, mouth, screen face, props, or background.",
      "zh-CN": "单个连续短绒身体、两只简洁眼睛的 Dots 角色。无手臂、手、腿、脚、嘴、屏幕脸、道具或背景。"
    },
    "defaultOptions": {
      "appearance": "orb",
      "colors": "lilac",
      "face": "open",
      "accessories": "bucket-hat"
    },
    "options": {
      "appearance": [
        {
          "id": "orb",
          "labelByLanguage": {
            "en": "Orb",
            "zh-CN": "圆球"
          },
          "semanticByLanguage": {
            "en": "a round light-lilac short-plush Dots body",
            "zh-CN": "浅薰衣草紫圆球短绒 Dots 身体"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "cloud",
          "labelByLanguage": {
            "en": "Cloud",
            "zh-CN": "云团"
          },
          "semanticByLanguage": {
            "en": "a low three-lobed light-lilac plush cloud Dots body",
            "zh-CN": "浅薰衣草紫低矮三瓣云团绒面 Dots 身体"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:appearance:cloud",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "lilac",
          "labelByLanguage": {
            "en": "Lilac",
            "zh-CN": "浅紫色"
          },
          "semanticByLanguage": {
            "en": "light lilac short-pile plush body",
            "zh-CN": "浅薰衣草紫短绒身体"
          },
          "hex": "#b594e8",
          "swatches": [
            "#b594e8"
          ],
          "zoneColors": {
            "body": "#b594e8"
          }
        },
        {
          "id": "blue",
          "labelByLanguage": {
            "en": "Blue",
            "zh-CN": "蓝色"
          },
          "semanticByLanguage": {
            "en": "blue short-pile plush body",
            "zh-CN": "蓝色短绒身体"
          },
          "hex": "#3989e5",
          "swatches": [
            "#3989e5"
          ],
          "zoneColors": {
            "body": "#3989e5"
          }
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "en": "Open eyes",
            "zh-CN": "睁眼"
          },
          "semanticByLanguage": {
            "en": "two glossy black upright oval eyes",
            "zh-CN": "两只黑色竖椭圆眼"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        },
        {
          "id": "closed",
          "labelByLanguage": {
            "en": "Closed eyes",
            "zh-CN": "闭眼"
          },
          "semanticByLanguage": {
            "en": "two gently curved closed-eye marks as a static expression",
            "zh-CN": "两道柔和弯曲的闭眼线，作为静态表情"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "None",
            "zh-CN": "无配饰"
          },
          "semanticByLanguage": {
            "en": "no accessories",
            "zh-CN": "无配饰"
          }
        },
        {
          "id": "bucket-hat",
          "labelByLanguage": {
            "en": "Yellow bucket hat",
            "zh-CN": "黄色渔夫帽"
          },
          "semanticByLanguage": {
            "en": "a soft yellow fabric bucket hat with a wide brim and visible stitched crown",
            "zh-CN": "黄色软布宽檐渔夫帽，帽冠缝线清晰"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:accessories:bucket-hat",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [
      {
        "when": {
          "appearance": "cloud",
          "accessories": "bucket-hat"
        },
        "code": "bucket-hat-cloud-fit-conflict",
        "messageByLanguage": {
          "en": "The bucket hat layer is fitted to the round orb. Use no accessory with the cloud appearance, or switch back to orb.",
          "zh-CN": "渔夫帽配件按圆球外形制作。云团外形请选无配饰，或切回圆球。"
        }
      }
    ],
    "recipes": [
      {
        "id": "orb-lilac-open-none-none",
        "selections": {
          "appearance": "orb",
          "colors": "lilac",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "orb-lilac-open-none-bucket-hat",
        "selections": {
          "appearance": "orb",
          "colors": "lilac",
          "face": "open",
          "accessories": "bucket-hat"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "bucket-hat",
            "asset": {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:accessories:bucket-hat",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "orb-lilac-closed-none-none",
        "selections": {
          "appearance": "orb",
          "colors": "lilac",
          "face": "closed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "orb-lilac-closed-none-bucket-hat",
        "selections": {
          "appearance": "orb",
          "colors": "lilac",
          "face": "closed",
          "accessories": "bucket-hat"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "bucket-hat",
            "asset": {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:accessories:bucket-hat",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "orb-blue-open-none-none",
        "selections": {
          "appearance": "orb",
          "colors": "blue",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "orb-blue-open-none-bucket-hat",
        "selections": {
          "appearance": "orb",
          "colors": "blue",
          "face": "open",
          "accessories": "bucket-hat"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "bucket-hat",
            "asset": {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:accessories:bucket-hat",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "orb-blue-closed-none-none",
        "selections": {
          "appearance": "orb",
          "colors": "blue",
          "face": "closed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "orb-blue-closed-none-bucket-hat",
        "selections": {
          "appearance": "orb",
          "colors": "blue",
          "face": "closed",
          "accessories": "bucket-hat"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:appearance:orb",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:mask:color:orb",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "bucket-hat",
            "asset": {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:accessories:bucket-hat",
              "version": "v1",
              "purpose": "accessory-front-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-lilac-open-none-none",
        "selections": {
          "appearance": "cloud",
          "colors": "lilac",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:appearance:cloud",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:mask:color:cloud",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-lilac-closed-none-none",
        "selections": {
          "appearance": "cloud",
          "colors": "lilac",
          "face": "closed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:appearance:cloud",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:mask:color:cloud",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-blue-open-none-none",
        "selections": {
          "appearance": "cloud",
          "colors": "blue",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:appearance:cloud",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:mask:color:cloud",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-blue-closed-none-none",
        "selections": {
          "appearance": "cloud",
          "colors": "blue",
          "face": "closed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:appearance:cloud",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:mask:color:cloud",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-lilac-bucket-adjustments-v2-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "dots-butter-beret-adjustments-v1-four-tabs-candidate",
    "version": "v1",
    "family": "dots",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "dots-butter-beret",
      "artworkVersion": "v2"
    },
    "canvas": {
      "width": 1254,
      "height": 1254
    },
    "identitySemanticsByLanguage": {
      "en": "One Dots character with one continuous short-dense-plush body and two simple black eyes. No arms, hands, legs, feet, mouth, screen face, separate clothing, props, or background.",
      "zh-CN": "单个 Dots 角色，连续短密绒身体与两只简洁黑眼。无手臂、手、腿、脚、嘴、屏幕脸、独立衣物、道具或背景。"
    },
    "defaultOptions": {
      "appearance": "triangle",
      "colors": "butter-yellow",
      "face": "open",
      "accessories": "beret"
    },
    "options": {
      "appearance": [
        {
          "id": "triangle",
          "labelByLanguage": {
            "en": "Rounded triangle",
            "zh-CN": "圆角三角"
          },
          "semanticByLanguage": {
            "en": "one rounded triangular Dots body with a broad lower edge",
            "zh-CN": "一个下缘宽圆的圆角三角 Dots 身体"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:body:original-master",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "cloud",
          "labelByLanguage": {
            "en": "Low cloud",
            "zh-CN": "低矮云团"
          },
          "semanticByLanguage": {
            "en": "one low continuous three-lobed Dots body",
            "zh-CN": "一个低矮、连续三瓣的 Dots 云团身体"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:body:cloud-yellow",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "butter-yellow",
          "labelByLanguage": {
            "en": "Butter yellow",
            "zh-CN": "奶油黄"
          },
          "semanticByLanguage": {
            "en": "warm butter-yellow short dense plush body",
            "zh-CN": "暖奶油黄色短密绒身体"
          },
          "hex": "#F8C83C",
          "swatches": [
            "#F8C83C"
          ],
          "zoneColors": {
            "body": "#F8C83C"
          }
        },
        {
          "id": "blue",
          "labelByLanguage": {
            "en": "Bright blue",
            "zh-CN": "亮蓝色"
          },
          "semanticByLanguage": {
            "en": "bright medium-blue short dense plush body",
            "zh-CN": "明亮中蓝色短密绒身体"
          },
          "hex": "#328DF0",
          "swatches": [
            "#328DF0"
          ],
          "zoneColors": {
            "body": "#328DF0"
          }
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "en": "Open oval eyes",
            "zh-CN": "椭圆睁眼"
          },
          "semanticByLanguage": {
            "en": "two glossy black vertical oval eyes; no mouth",
            "zh-CN": "两只黑色竖椭圆眼；无嘴"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        },
        {
          "id": "closed",
          "labelByLanguage": {
            "en": "Closed eyes",
            "zh-CN": "闭眼"
          },
          "semanticByLanguage": {
            "en": "two small black curved closed-eye marks as a static expression; no mouth",
            "zh-CN": "两道黑色弯曲闭眼线，作为静态表情；无嘴"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "None",
            "zh-CN": "无配饰"
          },
          "semanticByLanguage": {
            "en": "no accessory",
            "zh-CN": "无配饰"
          }
        },
        {
          "id": "beret",
          "labelByLanguage": {
            "en": "Navy felt beret",
            "zh-CN": "海军蓝毛毡贝雷帽"
          },
          "semanticByLanguage": {
            "en": "a fitted tilted navy felt beret with a small fabric nub, placed on the rounded-triangle body",
            "zh-CN": "贴合圆角三角身体、略微倾斜的海军蓝毛毡贝雷帽，带小布结"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:accessory:beret",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [
      {
        "when": {
          "appearance": "cloud",
          "accessories": "beret"
        },
        "code": "butter-beret-cloud-fit-conflict",
        "messageByLanguage": {
          "en": "The beret is fitted to the rounded-triangle silhouette. Remove the beret before switching to the cloud body.",
          "zh-CN": "贝雷帽按圆角三角轮廓贴合制作。切换云团外观前，请先移除贝雷帽。"
        }
      }
    ],
    "recipes": [
      {
        "id": "triangle-butter-yellow-open-beret",
        "selections": {
          "appearance": "triangle",
          "colors": "butter-yellow",
          "face": "open",
          "accessories": "beret"
        },
        "layers": [
          {
            "slot": "character-master",
            "asset": {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:body:original-master",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "triangle-butter-yellow-open-none",
        "selections": {
          "appearance": "triangle",
          "colors": "butter-yellow",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:body:triangle-yellow",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "triangle-butter-yellow-closed-none",
        "selections": {
          "appearance": "triangle",
          "colors": "butter-yellow",
          "face": "closed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:body:triangle-yellow",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "triangle-butter-yellow-closed-beret",
        "selections": {
          "appearance": "triangle",
          "colors": "butter-yellow",
          "face": "closed",
          "accessories": "beret"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:body:triangle-yellow",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:accessory:beret",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "triangle-blue-open-none",
        "selections": {
          "appearance": "triangle",
          "colors": "blue",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:body:triangle-blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "triangle-blue-open-beret",
        "selections": {
          "appearance": "triangle",
          "colors": "blue",
          "face": "open",
          "accessories": "beret"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:body:triangle-blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:accessory:beret",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "triangle-blue-closed-none",
        "selections": {
          "appearance": "triangle",
          "colors": "blue",
          "face": "closed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:body:triangle-blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "triangle-blue-closed-beret",
        "selections": {
          "appearance": "triangle",
          "colors": "blue",
          "face": "closed",
          "accessories": "beret"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:body:triangle-blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:accessory:beret",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-butter-yellow-open-none",
        "selections": {
          "appearance": "cloud",
          "colors": "butter-yellow",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:body:cloud-yellow",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-butter-yellow-closed-none",
        "selections": {
          "appearance": "cloud",
          "colors": "butter-yellow",
          "face": "closed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:body:cloud-yellow",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-blue-open-none",
        "selections": {
          "appearance": "cloud",
          "colors": "blue",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:body:cloud-blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:face:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-blue-closed-none",
        "selections": {
          "appearance": "cloud",
          "colors": "blue",
          "face": "closed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:body:cloud-blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-butter-beret-adjustments-v1-four-tabs-candidate:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "dots-lime-frog-bow-adjustments-v1",
    "version": "v1",
    "family": "dots",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "dots-lime-frog-bow",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1254,
      "height": 1254
    },
    "identitySemanticsByLanguage": {
      "zh-CN": "单个蛙形意象 Dots，连续短密绒身体与两个顶部眼部突起。不是生物青蛙。无手臂、手、腿、脚、嘴、屏幕脸和服装。",
      "en": "One frog-inspired Dots character with a continuous short-dense-plush body and two raised eye bumps. Not a biological frog. No arms, hands, legs, feet, mouth, screen face or clothing."
    },
    "defaultOptions": {
      "appearance": "classic",
      "colors": "original",
      "face": "open",
      "accessories": "bow"
    },
    "options": {
      "appearance": [
        {
          "id": "classic",
          "labelByLanguage": {
            "zh-CN": "经典轮廓",
            "en": "Classic outline"
          },
          "semanticByLanguage": {
            "zh-CN": "连续圆润蛙形绒面身体，顶部两个突起含奶油眼圈与黑瞳",
            "en": "a continuous rounded frog-inspired plush body with two raised cream-rimmed black eyes"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-lime-frog-bow-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "soft",
          "labelByLanguage": {
            "zh-CN": "柔圆轮廓",
            "en": "Softer outline"
          },
          "semanticByLanguage": {
            "zh-CN": "更低宽的连续身体，保留顶部两处眼部突起",
            "en": "a lower wider continuous body preserving the two raised eye bumps"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-lime-frog-bow-adjustments-v1:appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "original",
          "labelByLanguage": {
            "zh-CN": "青柠绿",
            "en": "Lime green"
          },
          "semanticByLanguage": {
            "zh-CN": "青柠绿短密绒",
            "en": "Lime green short dense plush"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-lime-frog-bow-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "swatches": [
            "#b7e941"
          ],
          "zoneColors": {
            "body": "#b7e941"
          }
        },
        {
          "id": "alternate",
          "labelByLanguage": {
            "zh-CN": "天空蓝",
            "en": "Sky blue"
          },
          "semanticByLanguage": {
            "zh-CN": "天空蓝短绒，奶油眼圈、黑色瞳孔和黑领结保持原色",
            "en": "sky-blue short plush preserving cream eye rims, black pupils and the black bow"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-lime-frog-bow-adjustments-v1:colors",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "swatches": [
            "#79c5f3"
          ],
          "zoneColors": {
            "body": "#79c5f3"
          }
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "zh-CN": "黑瞳双眼",
            "en": "Cream-rimmed dark eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "两处顶部眼窝各有奶油色眼圈与黑色瞳孔，无嘴",
            "en": "two raised eyes with cream rims and dark pupils, no mouth"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-lime-frog-bow-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "closed",
          "labelByLanguage": {
            "zh-CN": "弯弯闭眼",
            "en": "Closed eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "奶油眼圈内两条黑色闭合弧线，无嘴；静态表情",
            "en": "two black closed curved eyelids within cream eye insets, no mouth; a static expression"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-lime-frog-bow-adjustments-v1:face",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "bow",
          "labelByLanguage": {
            "zh-CN": "黑色领结",
            "en": "Black bow"
          },
          "semanticByLanguage": {
            "zh-CN": "贴合身体下方的黑色布领结",
            "en": "a black fabric bow fitted to the lower front"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-lime-frog-bow-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "none",
          "labelByLanguage": {
            "zh-CN": "移除领结",
            "en": "Remove bow"
          },
          "semanticByLanguage": {
            "zh-CN": "完整去除黑领结，身体下方恢复连续青柠短绒",
            "en": "remove the black bow completely, leaving uninterrupted lime plush on the lower front"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-lime-frog-bow-adjustments-v1:accessories",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [
      {
        "when": {
          "appearance": "soft",
          "colors": "alternate"
        },
        "code": "appearance-colors-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "appearance": "soft",
          "face": "closed"
        },
        "code": "appearance-face-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "appearance": "soft",
          "accessories": "none"
        },
        "code": "appearance-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "colors": "alternate",
          "face": "closed"
        },
        "code": "colors-face-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "colors": "alternate",
          "accessories": "none"
        },
        "code": "colors-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "face": "closed",
          "accessories": "none"
        },
        "code": "face-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      }
    ],
    "recipes": [
      {
        "id": "classic-original-open-bow",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "bow"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-lime-frog-bow-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-open-bow",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "open",
          "accessories": "bow"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-lime-frog-bow-adjustments-v1:appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-alternate-open-bow",
        "selections": {
          "appearance": "classic",
          "colors": "alternate",
          "face": "open",
          "accessories": "bow"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-lime-frog-bow-adjustments-v1:colors",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-closed-bow",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "accessories": "bow"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-lime-frog-bow-adjustments-v1:face",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-lime-frog-bow-adjustments-v1:accessories",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "dots-pink-heart-shades-adjustments-v1",
    "version": "v1",
    "family": "dots",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "dots-pink-heart-shades",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1254,
      "height": 1254
    },
    "identitySemanticsByLanguage": {
      "zh-CN": "单个连续心形 Dots，短密绒身体。无手臂、手、腿、脚、嘴、屏幕脸和服装。去除墨镜后的眼型按 Dots 家族补足，原始不透明镜片后的眼睛不可见。",
      "en": "One continuous heart-shaped Dots with short dense plush. No arms, hands, legs, feet, mouth, screen face or clothing. Bare eye design is completed from Dots family rules; the original opaque lenses conceal the eyes."
    },
    "defaultOptions": {
      "appearance": "classic",
      "colors": "pink",
      "face": "open",
      "accessories": "shades"
    },
    "options": {
      "appearance": [
        {
          "id": "classic",
          "labelByLanguage": {
            "zh-CN": "经典心形",
            "en": "Classic heart"
          },
          "semanticByLanguage": {
            "zh-CN": "两个圆瓣与圆钝下尖构成连续心形",
            "en": "a continuous heart with two rounded lobes and a softly pointed bottom"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-pink-heart-shades-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "plump",
          "labelByLanguage": {
            "zh-CN": "饱满心形",
            "en": "Plump heart"
          },
          "semanticByLanguage": {
            "zh-CN": "更横宽饱满的心形，圆瓣加宽、下尖缩短",
            "en": "a wider plumper heart with broader lobes and a shorter lower tip"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-pink-heart-shades-adjustments-v1:appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "pink",
          "labelByLanguage": {
            "zh-CN": "玫瑰粉",
            "en": "Rose pink"
          },
          "semanticByLanguage": {
            "zh-CN": "玫瑰粉短密绒，墨镜保持黑色",
            "en": "rose-pink short dense plush; sunglasses remain black"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-pink-heart-shades-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "swatches": [
            "#ef38a7"
          ],
          "zoneColors": {
            "body": "#ef38a7"
          }
        },
        {
          "id": "lavender",
          "labelByLanguage": {
            "zh-CN": "薰衣草紫",
            "en": "Lavender"
          },
          "semanticByLanguage": {
            "zh-CN": "薰衣草紫短密绒，墨镜保持黑色",
            "en": "lavender-purple short dense plush; sunglasses remain black"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-pink-heart-shades-adjustments-v1:colors",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "swatches": [
            "#b16ae4"
          ],
          "zoneColors": {
            "body": "#b16ae4"
          }
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "zh-CN": "黑色双眼",
            "en": "Black paired eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "去掉墨镜时显露成对黑色竖椭圆眼；墨镜佩戴时遮住眼睛",
            "en": "paired black vertical oval eyes when sunglasses are removed; opaque lenses conceal eyes when worn"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-pink-heart-shades-adjustments-v1:bare",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "closed",
          "labelByLanguage": {
            "zh-CN": "弯弯闭眼",
            "en": "Closed eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "无墨镜时，双眼为两条小型黑色闭合弧线，无嘴",
            "en": "without sunglasses, two small black gently closed curved eyelids, no mouth"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-pink-heart-shades-adjustments-v1:closed",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "shades",
          "labelByLanguage": {
            "zh-CN": "黑色圆墨镜",
            "en": "Round black shades"
          },
          "semanticByLanguage": {
            "zh-CN": "贴合心形正面的黑色圆框不透明墨镜，镜腿贴合两侧",
            "en": "opaque black round sunglasses fitted to the heart front, with temples touching both sides"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-pink-heart-shades-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "none",
          "labelByLanguage": {
            "zh-CN": "无配饰",
            "en": "No accessory"
          },
          "semanticByLanguage": {
            "zh-CN": "完全去除墨镜、镜腿和镜框，露出眼睛",
            "en": "remove sunglasses, temples and frames completely to reveal the eyes"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-pink-heart-shades-adjustments-v1:bare",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [
      {
        "when": {
          "appearance": "plump",
          "colors": "lavender"
        },
        "code": "appearance-colors-fit-conflict",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options have no matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "appearance": "plump",
          "accessories": "none"
        },
        "code": "appearance-accessories-fit-conflict",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options have no matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "colors": "lavender",
          "accessories": "none"
        },
        "code": "colors-accessories-fit-conflict",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options have no matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "face": "closed",
          "accessories": "shades"
        },
        "code": "face-accessories-fit-conflict",
        "messageByLanguage": {
          "zh-CN": "不透明墨镜会遮住表情，请先移除墨镜再选择闭眼。",
          "en": "Opaque lenses hide the expression. Remove the sunglasses before choosing closed eyes."
        }
      }
    ],
    "recipes": [
      {
        "id": "classic-pink-open-shades",
        "selections": {
          "appearance": "classic",
          "colors": "pink",
          "face": "open",
          "accessories": "shades"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-pink-heart-shades-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "plump-pink-open-shades",
        "selections": {
          "appearance": "plump",
          "colors": "pink",
          "face": "open",
          "accessories": "shades"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-pink-heart-shades-adjustments-v1:appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-lavender-open-shades",
        "selections": {
          "appearance": "classic",
          "colors": "lavender",
          "face": "open",
          "accessories": "shades"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-pink-heart-shades-adjustments-v1:colors",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-pink-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "pink",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-pink-heart-shades-adjustments-v1:bare",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-pink-closed-none",
        "selections": {
          "appearance": "classic",
          "colors": "pink",
          "face": "closed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-pink-heart-shades-adjustments-v1:closed",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "dots-blue-cloud-adjustments-v2",
    "version": "v2",
    "family": "dots",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "dots-blue-beret-cloud",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1254,
      "height": 1254
    },
    "identitySemanticsByLanguage": {
      "en": "One Dots character with a continuous short-dense-plush body and simple paired black eyes. No arms, hands, legs, feet, mouth or screen face.",
      "zh-CN": "单个 Dots 角色，连续短密绒身体与简洁成对黑眼。无手臂、手、腿、脚、嘴或屏幕脸。"
    },
    "defaultOptions": {
      "appearance": "cloud",
      "colors": "blue",
      "face": "open",
      "accessories": "beret"
    },
    "options": {
      "appearance": [
        {
          "id": "cloud",
          "labelByLanguage": {
            "en": "Cloud",
            "zh-CN": "云团"
          },
          "semanticByLanguage": {
            "en": "a low continuous cloud mound with rounded scallops",
            "zh-CN": "低矮连续、带圆润起伏的云团"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-blue-cloud-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "broad-lobes",
          "labelByLanguage": {
            "en": "Broad cloud",
            "zh-CN": "宽圆云团"
          },
          "semanticByLanguage": {
            "en": "a continuous cloud mound with three broad lower lobes",
            "zh-CN": "下缘呈三个宽圆起伏的连续云团"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-blue-cloud-adjustments-v2:round",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "blue",
          "labelByLanguage": {
            "en": "Electric blue",
            "zh-CN": "亮蓝色"
          },
          "semanticByLanguage": {
            "en": "electric blue short dense fur",
            "zh-CN": "亮蓝色短密绒"
          },
          "zoneColors": {
            "body": "#2389f1"
          }
        },
        {
          "id": "rose",
          "labelByLanguage": {
            "en": "Rose pink",
            "zh-CN": "玫瑰粉"
          },
          "semanticByLanguage": {
            "en": "rose pink short dense fur",
            "zh-CN": "玫瑰粉色短密绒"
          },
          "zoneColors": {
            "body": "#e36cb7"
          }
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "en": "Oval eyes",
            "zh-CN": "椭圆眼"
          },
          "semanticByLanguage": {
            "en": "two glossy black vertical oval eyes",
            "zh-CN": "两枚有高光的黑色竖椭圆眼"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-blue-cloud-adjustments-v2:eyesOpen",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        },
        {
          "id": "closed",
          "labelByLanguage": {
            "en": "Closed eyes",
            "zh-CN": "闭眼"
          },
          "semanticByLanguage": {
            "en": "two black closed-eye arcs, a static expression",
            "zh-CN": "两道黑色闭眼弧线，静态表情"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-blue-cloud-adjustments-v2:eyesClosed",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "beret",
          "labelByLanguage": {
            "en": "Black beret",
            "zh-CN": "黑色贝雷帽"
          },
          "semanticByLanguage": {
            "en": "a fitted black wool beret",
            "zh-CN": "贴合头顶的黑色毛呢贝雷帽"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-blue-cloud-adjustments-v2:beret",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          ]
        },
        {
          "id": "none",
          "labelByLanguage": {
            "en": "No accessories",
            "zh-CN": "无配饰"
          },
          "semanticByLanguage": {
            "en": "no accessories",
            "zh-CN": "不佩戴配饰"
          }
        }
      ]
    },
    "conflicts": [],
    "recipes": [
      {
        "id": "cloud-blue-open-beret",
        "selections": {
          "appearance": "cloud",
          "colors": "blue",
          "face": "open",
          "accessories": "beret"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-blue-cloud-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:eyesOpen",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "beret-front",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:beret",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-blue-open-none",
        "selections": {
          "appearance": "cloud",
          "colors": "blue",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-blue-cloud-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:eyesOpen",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-blue-closed-beret",
        "selections": {
          "appearance": "cloud",
          "colors": "blue",
          "face": "closed",
          "accessories": "beret"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-blue-cloud-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:eyesClosed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "beret-front",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:beret",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-blue-closed-none",
        "selections": {
          "appearance": "cloud",
          "colors": "blue",
          "face": "closed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-blue-cloud-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:eyesClosed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-rose-open-beret",
        "selections": {
          "appearance": "cloud",
          "colors": "rose",
          "face": "open",
          "accessories": "beret"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-blue-cloud-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:eyesOpen",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "beret-front",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:beret",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-rose-open-none",
        "selections": {
          "appearance": "cloud",
          "colors": "rose",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-blue-cloud-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:eyesOpen",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-rose-closed-beret",
        "selections": {
          "appearance": "cloud",
          "colors": "rose",
          "face": "closed",
          "accessories": "beret"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-blue-cloud-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:eyesClosed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "beret-front",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:beret",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "cloud-rose-closed-none",
        "selections": {
          "appearance": "cloud",
          "colors": "rose",
          "face": "closed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-blue-cloud-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:eyesClosed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "broad-lobes-blue-open-beret",
        "selections": {
          "appearance": "broad-lobes",
          "colors": "blue",
          "face": "open",
          "accessories": "beret"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:round",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-blue-cloud-adjustments-v2:roundMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:eyesOpen",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "beret-front",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:beret",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "broad-lobes-blue-open-none",
        "selections": {
          "appearance": "broad-lobes",
          "colors": "blue",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:round",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-blue-cloud-adjustments-v2:roundMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:eyesOpen",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "broad-lobes-blue-closed-beret",
        "selections": {
          "appearance": "broad-lobes",
          "colors": "blue",
          "face": "closed",
          "accessories": "beret"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:round",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-blue-cloud-adjustments-v2:roundMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:eyesClosed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "beret-front",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:beret",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "broad-lobes-blue-closed-none",
        "selections": {
          "appearance": "broad-lobes",
          "colors": "blue",
          "face": "closed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:round",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-blue-cloud-adjustments-v2:roundMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:eyesClosed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "broad-lobes-rose-open-beret",
        "selections": {
          "appearance": "broad-lobes",
          "colors": "rose",
          "face": "open",
          "accessories": "beret"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:round",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-blue-cloud-adjustments-v2:roundMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:eyesOpen",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "beret-front",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:beret",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "broad-lobes-rose-open-none",
        "selections": {
          "appearance": "broad-lobes",
          "colors": "rose",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:round",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-blue-cloud-adjustments-v2:roundMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:eyesOpen",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "broad-lobes-rose-closed-beret",
        "selections": {
          "appearance": "broad-lobes",
          "colors": "rose",
          "face": "closed",
          "accessories": "beret"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:round",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-blue-cloud-adjustments-v2:roundMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:eyesClosed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "beret-front",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:beret",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "broad-lobes-rose-closed-none",
        "selections": {
          "appearance": "broad-lobes",
          "colors": "rose",
          "face": "closed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:round",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-blue-cloud-adjustments-v2:roundMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-blue-cloud-adjustments-v2:eyesClosed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "dots-yellow-glasses-triangle-adjustments-v2",
    "version": "v2",
    "family": "dots",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "dots-yellow-glasses-triangle",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1254,
      "height": 1254
    },
    "identitySemanticsByLanguage": {
      "zh-CN": "单个 Dots 角色，连续细密短绒身体，成对简单黑眼。无手臂、手、腿、脚、嘴或屏幕脸。",
      "en": "One Dots character with one continuous dense short-plush body and paired simple black eyes. No arms, hands, legs, feet, mouth or screen face."
    },
    "defaultOptions": {
      "appearance": "classic",
      "colors": "original",
      "face": "closed",
      "accessories": "glasses"
    },
    "options": {
      "appearance": [
        {
          "id": "classic",
          "labelByLanguage": {
            "zh-CN": "圆角三角",
            "en": "Rounded triangle"
          },
          "semanticByLanguage": {
            "zh-CN": "无肢体圆角三角身体",
            "en": "one rounded triangular body without limbs"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "soft",
          "labelByLanguage": {
            "zh-CN": "高窄三角",
            "en": "Taller triangle"
          },
          "semanticByLanguage": {
            "zh-CN": "更高窄的圆角三角身体",
            "en": "a taller narrower rounded triangle"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "original",
          "labelByLanguage": {
            "zh-CN": "暖黄",
            "en": "Warm yellow"
          },
          "semanticByLanguage": {
            "zh-CN": "暖黄色细密短绒",
            "en": "warm yellow dense short plush"
          },
          "zoneColors": {
            "body": "#f3bf43"
          },
          "swatches": [
            "#f3bf43"
          ]
        },
        {
          "id": "rose",
          "labelByLanguage": {
            "zh-CN": "玫瑰粉",
            "en": "Rose pink"
          },
          "semanticByLanguage": {
            "zh-CN": "玫瑰粉色细密短绒",
            "en": "rose pink dense short plush"
          },
          "zoneColors": {
            "body": "#e76695"
          },
          "swatches": [
            "#e76695"
          ]
        }
      ],
      "face": [
        {
          "id": "closed",
          "labelByLanguage": {
            "zh-CN": "弯弯闭眼",
            "en": "Closed eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "成对黑色弯弯闭眼，无嘴",
            "en": "paired simple black curved closed eyes; no mouth"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        },
        {
          "id": "open",
          "labelByLanguage": {
            "zh-CN": "黑色圆眼",
            "en": "Black oval eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "成对黑色椭圆眼，无嘴",
            "en": "paired simple black oval eyes; no mouth"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "zh-CN": "无配饰",
            "en": "No accessories"
          },
          "semanticByLanguage": {
            "zh-CN": "不佩戴配饰",
            "en": "no accessories"
          }
        },
        {
          "id": "glasses",
          "labelByLanguage": {
            "zh-CN": "圆框眼镜",
            "en": "Round glasses"
          },
          "semanticByLanguage": {
            "zh-CN": "贴合双眼的黑色圆框眼镜",
            "en": "fitted black round eyeglasses around both eyes"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:glasses",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [],
    "recipes": [
      {
        "id": "classic-original-closed-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-closed-glasses",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "accessories": "glasses"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:glasses",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-glasses",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "glasses"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:glasses",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-rose-closed-none",
        "selections": {
          "appearance": "classic",
          "colors": "rose",
          "face": "closed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-yellow-glasses-triangle-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-rose-closed-glasses",
        "selections": {
          "appearance": "classic",
          "colors": "rose",
          "face": "closed",
          "accessories": "glasses"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-yellow-glasses-triangle-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:glasses",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-rose-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "rose",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-yellow-glasses-triangle-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-rose-open-glasses",
        "selections": {
          "appearance": "classic",
          "colors": "rose",
          "face": "open",
          "accessories": "glasses"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-yellow-glasses-triangle-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:glasses",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-closed-none",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "closed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-closed-glasses",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "closed",
          "accessories": "glasses"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:glasses",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-open-none",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-open-glasses",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "open",
          "accessories": "glasses"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:glasses",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-rose-closed-none",
        "selections": {
          "appearance": "soft",
          "colors": "rose",
          "face": "closed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-yellow-glasses-triangle-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-rose-closed-glasses",
        "selections": {
          "appearance": "soft",
          "colors": "rose",
          "face": "closed",
          "accessories": "glasses"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-yellow-glasses-triangle-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:glasses",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-rose-open-none",
        "selections": {
          "appearance": "soft",
          "colors": "rose",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-yellow-glasses-triangle-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-rose-open-glasses",
        "selections": {
          "appearance": "soft",
          "colors": "rose",
          "face": "open",
          "accessories": "glasses"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:dots-yellow-glasses-triangle-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:dots-yellow-glasses-triangle-adjustments-v2:glasses",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "dots-leaf-pear-adjustments-v1",
    "version": "v1",
    "family": "dots",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "dots-leaf-pear",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1214,
      "height": 1295
    },
    "identitySemanticsByLanguage": {
      "zh-CN": "单个 Dots 角色，连续短密绒身体与简洁成对黑眼。无手臂、手、腿、脚、嘴、屏幕脸和服装。",
      "en": "One Dots character with a continuous short-dense-plush body and simple paired black eyes. No arms, hands, legs, feet, mouth, screen face or clothing."
    },
    "defaultOptions": {
      "appearance": "classic",
      "colors": "original",
      "face": "open",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "classic",
          "labelByLanguage": {
            "zh-CN": "经典轮廓",
            "en": "Classic outline"
          },
          "semanticByLanguage": {
            "zh-CN": "带两片顶芽叶的柔圆梨形连续身体",
            "en": "a continuous rounded pear body with two top sprout leaves"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-leaf-pear-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "soft",
          "labelByLanguage": {
            "zh-CN": "柔圆轮廓",
            "en": "Softer outline"
          },
          "semanticByLanguage": {
            "zh-CN": "更低宽的饱满梨形身体，保留两片芽叶",
            "en": "a lower wider pear body preserving both sprout leaves"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-leaf-pear-adjustments-v1:appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "original",
          "labelByLanguage": {
            "zh-CN": "薄荷绿",
            "en": "Mint green"
          },
          "semanticByLanguage": {
            "zh-CN": "薄荷绿短密绒",
            "en": "Mint green short dense plush"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-leaf-pear-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "swatches": [
            "#84d3b4"
          ],
          "zoneColors": {
            "body": "#84d3b4"
          }
        },
        {
          "id": "alternate",
          "labelByLanguage": {
            "zh-CN": "杏橙色",
            "en": "Apricot orange"
          },
          "semanticByLanguage": {
            "zh-CN": "仅主身体改为杏橙短绒，两片顶芽叶保持薄荷绿",
            "en": "apricot-orange short plush on the main body only; both top leaves stay mint green"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-leaf-pear-adjustments-v1:colors",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "swatches": [
            "#ec974e"
          ],
          "zoneColors": {
            "body": "#ec974e"
          }
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "zh-CN": "黑色双眼",
            "en": "Black paired eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "成对简洁黑色眼睛，无嘴",
            "en": "simple paired black eyes, no mouth"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-leaf-pear-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "closed",
          "labelByLanguage": {
            "zh-CN": "弯弯闭眼",
            "en": "Closed eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "成对简洁黑色闭合弧线眼，无嘴；静态表情",
            "en": "simple paired black closed curved eyelids, no mouth; a static expression"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-leaf-pear-adjustments-v1:face",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "zh-CN": "无配饰",
            "en": "No accessory"
          },
          "semanticByLanguage": {
            "zh-CN": "不佩戴额外配饰",
            "en": "no extra accessory"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-leaf-pear-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "fitted",
          "labelByLanguage": {
            "zh-CN": "芽叶布结",
            "en": "Sprout bow"
          },
          "semanticByLanguage": {
            "zh-CN": "海军蓝小布结系在右侧顶芽叶根部",
            "en": "a small navy bow tied to the base of the right top sprout leaf"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-leaf-pear-adjustments-v1:accessories",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [
      {
        "when": {
          "appearance": "soft",
          "colors": "alternate"
        },
        "code": "appearance-colors-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "appearance": "soft",
          "face": "closed"
        },
        "code": "appearance-face-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "appearance": "soft",
          "accessories": "fitted"
        },
        "code": "appearance-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "colors": "alternate",
          "face": "closed"
        },
        "code": "colors-face-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "colors": "alternate",
          "accessories": "fitted"
        },
        "code": "colors-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "face": "closed",
          "accessories": "fitted"
        },
        "code": "face-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      }
    ],
    "recipes": [
      {
        "id": "classic-original-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-leaf-pear-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-open-none",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-leaf-pear-adjustments-v1:appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-alternate-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "alternate",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-leaf-pear-adjustments-v1:colors",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-closed-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-leaf-pear-adjustments-v1:face",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-fitted",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "fitted"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-leaf-pear-adjustments-v1:accessories",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "dots-violet-star-adjustments-v1",
    "version": "v1",
    "family": "dots",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "dots-violet-star",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1312,
      "height": 1199
    },
    "identitySemanticsByLanguage": {
      "zh-CN": "单个 Dots 角色，连续短密绒身体与简洁成对黑眼。无手臂、手、腿、脚、嘴、屏幕脸和服装。",
      "en": "One Dots character with a continuous short-dense-plush body and simple paired black eyes. No arms, hands, legs, feet, mouth, screen face or clothing."
    },
    "defaultOptions": {
      "appearance": "classic",
      "colors": "original",
      "face": "open",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "classic",
          "labelByLanguage": {
            "zh-CN": "经典轮廓",
            "en": "Classic outline"
          },
          "semanticByLanguage": {
            "zh-CN": "五个圆润星角构成的连续星形身体",
            "en": "a continuous five-point star body with rounded points"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-violet-star-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "soft",
          "labelByLanguage": {
            "zh-CN": "柔圆轮廓",
            "en": "Softer outline"
          },
          "semanticByLanguage": {
            "zh-CN": "五个星角更圆钝、凹处更浅的饱满星团",
            "en": "a plumper five-point star with rounded tips and shallower valleys"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-violet-star-adjustments-v1:appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "original",
          "labelByLanguage": {
            "zh-CN": "淡紫色",
            "en": "Violet"
          },
          "semanticByLanguage": {
            "zh-CN": "淡紫色短密绒",
            "en": "Violet short dense plush"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-violet-star-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "swatches": [
            "#b88bee"
          ],
          "zoneColors": {
            "body": "#b88bee"
          }
        },
        {
          "id": "alternate",
          "labelByLanguage": {
            "zh-CN": "天空蓝",
            "en": "Sky blue"
          },
          "semanticByLanguage": {
            "zh-CN": "天空蓝短绒，保持成对黑眼",
            "en": "sky-blue short plush preserving the paired black eyes"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-violet-star-adjustments-v1:colors",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "swatches": [
            "#79b8ed"
          ],
          "zoneColors": {
            "body": "#79b8ed"
          }
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "zh-CN": "黑色双眼",
            "en": "Black paired eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "成对简洁黑色眼睛，无嘴",
            "en": "simple paired black eyes, no mouth"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-violet-star-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "closed",
          "labelByLanguage": {
            "zh-CN": "弯弯闭眼",
            "en": "Closed eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "成对简洁黑色闭合弧线眼，无嘴；静态表情",
            "en": "simple paired black closed curved eyelids, no mouth; a static expression"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-violet-star-adjustments-v1:face",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "zh-CN": "无配饰",
            "en": "No accessory"
          },
          "semanticByLanguage": {
            "zh-CN": "不佩戴额外配饰",
            "en": "no extra accessory"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-violet-star-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "fitted",
          "labelByLanguage": {
            "zh-CN": "月牙徽章",
            "en": "Moon pin"
          },
          "semanticByLanguage": {
            "zh-CN": "身体左上区域贴合小型金色月牙徽章，位于眼睛上方",
            "en": "a tiny gold crescent-moon pin fitted inside the upper-left body contour above the eyes"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-violet-star-adjustments-v1:accessories",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [
      {
        "when": {
          "appearance": "soft",
          "colors": "alternate"
        },
        "code": "appearance-colors-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "appearance": "soft",
          "face": "closed"
        },
        "code": "appearance-face-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "appearance": "soft",
          "accessories": "fitted"
        },
        "code": "appearance-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "colors": "alternate",
          "face": "closed"
        },
        "code": "colors-face-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "colors": "alternate",
          "accessories": "fitted"
        },
        "code": "colors-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "face": "closed",
          "accessories": "fitted"
        },
        "code": "face-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      }
    ],
    "recipes": [
      {
        "id": "classic-original-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-violet-star-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-open-none",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-violet-star-adjustments-v1:appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-alternate-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "alternate",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-violet-star-adjustments-v1:colors",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-closed-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-violet-star-adjustments-v1:face",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-fitted",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "fitted"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-violet-star-adjustments-v1:accessories",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "dots-flower-cloud-adjustments-v1",
    "version": "v1",
    "family": "dots",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "dots-flower-cloud",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1402,
      "height": 1122
    },
    "identitySemanticsByLanguage": {
      "zh-CN": "单个 Dots 角色，连续短密绒身体与简洁成对黑眼。无手臂、手、腿、脚、嘴、屏幕脸和服装。",
      "en": "One Dots character with a continuous short-dense-plush body and simple paired black eyes. No arms, hands, legs, feet, mouth, screen face or clothing."
    },
    "defaultOptions": {
      "appearance": "classic",
      "colors": "original",
      "face": "open",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "classic",
          "labelByLanguage": {
            "zh-CN": "经典轮廓",
            "en": "Classic outline"
          },
          "semanticByLanguage": {
            "zh-CN": "低矮连续、圆润起伏的紫色花云轮廓",
            "en": "a low continuous purple flower-cloud outline with rounded scallops"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-flower-cloud-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "soft",
          "labelByLanguage": {
            "zh-CN": "柔圆轮廓",
            "en": "Softer outline"
          },
          "semanticByLanguage": {
            "zh-CN": "更低宽、三个上方圆瓣清晰的连续云团",
            "en": "a lower wider continuous cloud mound with three pronounced upper lobes"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-flower-cloud-adjustments-v1:appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "original",
          "labelByLanguage": {
            "zh-CN": "紫色",
            "en": "Purple"
          },
          "semanticByLanguage": {
            "zh-CN": "紫色短密绒",
            "en": "Purple short dense plush"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-flower-cloud-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "swatches": [
            "#944ae5"
          ],
          "zoneColors": {
            "body": "#944ae5"
          }
        },
        {
          "id": "alternate",
          "labelByLanguage": {
            "zh-CN": "玫瑰粉",
            "en": "Rose pink"
          },
          "semanticByLanguage": {
            "zh-CN": "玫瑰粉短绒，保持成对黑眼",
            "en": "rose-pink short plush preserving the paired black eyes"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-flower-cloud-adjustments-v1:colors",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "swatches": [
            "#eb71af"
          ],
          "zoneColors": {
            "body": "#eb71af"
          }
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "zh-CN": "黑色双眼",
            "en": "Black paired eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "成对简洁黑色眼睛，无嘴",
            "en": "simple paired black eyes, no mouth"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-flower-cloud-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "closed",
          "labelByLanguage": {
            "zh-CN": "弯弯闭眼",
            "en": "Closed eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "成对简洁黑色闭合弧线眼，无嘴；静态表情",
            "en": "simple paired black closed curved eyelids, no mouth; a static expression"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-flower-cloud-adjustments-v1:face",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "zh-CN": "无配饰",
            "en": "No accessory"
          },
          "semanticByLanguage": {
            "zh-CN": "不佩戴额外配饰",
            "en": "no extra accessory"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-flower-cloud-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "fitted",
          "labelByLanguage": {
            "zh-CN": "黑贝雷帽",
            "en": "Black beret"
          },
          "semanticByLanguage": {
            "zh-CN": "黑色毛呢贝雷帽贴合中央云瓣顶部，双眼无遮挡",
            "en": "a black wool beret fitted to the top of the center cloud lobe without covering either eye"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-flower-cloud-adjustments-v1:accessories",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [
      {
        "when": {
          "appearance": "soft",
          "colors": "alternate"
        },
        "code": "appearance-colors-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "appearance": "soft",
          "face": "closed"
        },
        "code": "appearance-face-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "appearance": "soft",
          "accessories": "fitted"
        },
        "code": "appearance-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "colors": "alternate",
          "face": "closed"
        },
        "code": "colors-face-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "colors": "alternate",
          "accessories": "fitted"
        },
        "code": "colors-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "face": "closed",
          "accessories": "fitted"
        },
        "code": "face-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      }
    ],
    "recipes": [
      {
        "id": "classic-original-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-flower-cloud-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-open-none",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-flower-cloud-adjustments-v1:appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-alternate-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "alternate",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-flower-cloud-adjustments-v1:colors",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-closed-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-flower-cloud-adjustments-v1:face",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-fitted",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "fitted"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-flower-cloud-adjustments-v1:accessories",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "dots-lime-rounded-square-adjustments-v1",
    "version": "v1",
    "family": "dots",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "dots-lime-rounded-square",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1367,
      "height": 1151
    },
    "identitySemanticsByLanguage": {
      "zh-CN": "单个 Dots 角色，连续短密绒身体与简洁成对黑眼。无手臂、手、腿、脚、嘴、屏幕脸和服装。",
      "en": "One Dots character with a continuous short-dense-plush body and simple paired black eyes. No arms, hands, legs, feet, mouth, screen face or clothing."
    },
    "defaultOptions": {
      "appearance": "classic",
      "colors": "original",
      "face": "open",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "classic",
          "labelByLanguage": {
            "zh-CN": "经典轮廓",
            "en": "Classic outline"
          },
          "semanticByLanguage": {
            "zh-CN": "厚圆角的短密绒近方形块体",
            "en": "a short-dense-plush square block with thick rounded corners"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-lime-rounded-square-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "soft",
          "labelByLanguage": {
            "zh-CN": "柔圆轮廓",
            "en": "Softer outline"
          },
          "semanticByLanguage": {
            "zh-CN": "明显更横宽、保留厚圆角的绒感长方块体",
            "en": "a distinctly wider plush rounded rectangle preserving thick round corners"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-lime-rounded-square-adjustments-v1:appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "original",
          "labelByLanguage": {
            "zh-CN": "青绿色",
            "en": "Lime green"
          },
          "semanticByLanguage": {
            "zh-CN": "青绿色短密绒",
            "en": "Lime green short dense plush"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-lime-rounded-square-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "swatches": [
            "#55d989"
          ],
          "zoneColors": {
            "body": "#55d989"
          }
        },
        {
          "id": "alternate",
          "labelByLanguage": {
            "zh-CN": "亮蓝色",
            "en": "Cobalt blue"
          },
          "semanticByLanguage": {
            "zh-CN": "亮蓝色短密绒，保持成对黑眼",
            "en": "cobalt-blue short dense plush preserving the paired black eyes"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-lime-rounded-square-adjustments-v1:colors",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "swatches": [
            "#2688e9"
          ],
          "zoneColors": {
            "body": "#2688e9"
          }
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "zh-CN": "黑色双眼",
            "en": "Black paired eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "成对简洁黑色眼睛，无嘴",
            "en": "simple paired black eyes, no mouth"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-lime-rounded-square-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "closed",
          "labelByLanguage": {
            "zh-CN": "弯弯闭眼",
            "en": "Closed eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "成对简洁黑色闭合弧线眼，无嘴；静态表情",
            "en": "simple paired black closed curved eyelids, no mouth; a static expression"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-lime-rounded-square-adjustments-v1:face",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "zh-CN": "无配饰",
            "en": "No accessory"
          },
          "semanticByLanguage": {
            "zh-CN": "不佩戴额外配饰",
            "en": "no extra accessory"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-lime-rounded-square-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "fitted",
          "labelByLanguage": {
            "zh-CN": "贴合耳机",
            "en": "Fitted headphones"
          },
          "semanticByLanguage": {
            "zh-CN": "炭黑耳机的耳罩贴合两侧、头梁顺应顶部轮廓",
            "en": "charcoal headphones with both earcups touching the sides and a padded band following the top contour"
          },
          "thumbnailAssets": [
            {
              "id": "template:dots-lime-rounded-square-adjustments-v1:accessories",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [
      {
        "when": {
          "appearance": "soft",
          "colors": "alternate"
        },
        "code": "appearance-colors-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "appearance": "soft",
          "face": "closed"
        },
        "code": "appearance-face-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "appearance": "soft",
          "accessories": "fitted"
        },
        "code": "appearance-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "colors": "alternate",
          "face": "closed"
        },
        "code": "colors-face-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "colors": "alternate",
          "accessories": "fitted"
        },
        "code": "colors-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "face": "closed",
          "accessories": "fitted"
        },
        "code": "face-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      }
    ],
    "recipes": [
      {
        "id": "classic-original-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-lime-rounded-square-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-open-none",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-lime-rounded-square-adjustments-v1:appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-alternate-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "alternate",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-lime-rounded-square-adjustments-v1:colors",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-closed-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-lime-rounded-square-adjustments-v1:face",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-fitted",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "fitted"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:dots-lime-rounded-square-adjustments-v1:accessories",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "grok-purple-orb-adjustments-v2",
    "version": "v2",
    "family": "grok",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "candidate-grok-20261005",
      "artworkVersion": "v2"
    },
    "canvas": {
      "width": 1254,
      "height": 1254
    },
    "identitySemanticsByLanguage": {
      "zh-CN": "单个 Grok Bot，连续光滑软几何身体与成对胶囊眼。无手臂、手、腿、脚、嘴或屏幕脸。",
      "en": "One Grok Bot with a continuous smooth soft geometric body and paired capsule eyes. No arms, hands, legs, feet, mouth or screen face."
    },
    "defaultOptions": {
      "appearance": "classic",
      "colors": "original",
      "face": "angled",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "classic",
          "labelByLanguage": {
            "zh-CN": "经典圆团",
            "en": "Classic orb"
          },
          "semanticByLanguage": {
            "zh-CN": "无肢体软圆团",
            "en": "one soft spherical body without limbs"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-purple-orb-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "soft",
          "labelByLanguage": {
            "zh-CN": "低宽椭团",
            "en": "Low wide ovoid"
          },
          "semanticByLanguage": {
            "zh-CN": "更低矮横宽的柔软椭圆身体",
            "en": "a low wide soft ovoid body"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-purple-orb-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "original",
          "labelByLanguage": {
            "zh-CN": "紫色",
            "en": "Purple"
          },
          "semanticByLanguage": {
            "zh-CN": "紫色光滑软硅胶",
            "en": "purple smooth soft silicone"
          },
          "zoneColors": {
            "body": "#7846d4"
          },
          "swatches": [
            "#7846d4"
          ]
        },
        {
          "id": "mint",
          "labelByLanguage": {
            "zh-CN": "薄荷青",
            "en": "Mint teal"
          },
          "semanticByLanguage": {
            "zh-CN": "薄荷青色光滑软硅胶",
            "en": "mint teal smooth soft silicone"
          },
          "zoneColors": {
            "body": "#39ba9e"
          },
          "swatches": [
            "#39ba9e"
          ]
        }
      ],
      "face": [
        {
          "id": "angled",
          "labelByLanguage": {
            "zh-CN": "斜胶囊眼",
            "en": "Angled capsule eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "成对象牙白斜胶囊眼，无嘴",
            "en": "paired angled ivory capsule eyes, no mouth"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-purple-orb-adjustments-v2:angled",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        },
        {
          "id": "upright",
          "labelByLanguage": {
            "zh-CN": "直胶囊眼",
            "en": "Upright capsule eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "成对象牙白直胶囊眼，无嘴",
            "en": "paired upright ivory capsule eyes, no mouth"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-purple-orb-adjustments-v2:upright",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "zh-CN": "无配饰",
            "en": "No accessories"
          },
          "semanticByLanguage": {
            "zh-CN": "不佩戴配饰",
            "en": "no accessories"
          }
        },
        {
          "id": "glasses",
          "labelByLanguage": {
            "zh-CN": "圆框眼镜",
            "en": "Round glasses"
          },
          "semanticByLanguage": {
            "zh-CN": "贴合双眼的黑色圆框眼镜",
            "en": "fitted black round eyeglasses around both eyes"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-purple-orb-adjustments-v2:glassesFront",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          ]
        },
        {
          "id": "cap",
          "labelByLanguage": {
            "zh-CN": "软帽",
            "en": "Soft cap"
          },
          "semanticByLanguage": {
            "zh-CN": "戴贴合头顶的软帽",
            "en": "a fitted soft cap"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-purple-orb-adjustments-v2:capFront",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          ]
        },
        {
          "id": "glasses-cap",
          "labelByLanguage": {
            "zh-CN": "眼镜与软帽",
            "en": "Glasses and cap"
          },
          "semanticByLanguage": {
            "zh-CN": "佩戴贴合双眼的圆框眼镜与贴合头顶的软帽",
            "en": "fitted round glasses and a fitted soft cap"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-purple-orb-adjustments-v2:capFront",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [
      {
        "when": {
          "appearance": "soft",
          "accessories": "glasses"
        },
        "code": "accessory-classic-only-glasses",
        "messageByLanguage": {
          "zh-CN": "这组配饰适配经典圆团，请先切回经典圆团或取下配饰。",
          "en": "These accessories fit the classic orb. Choose Classic or remove them first."
        }
      },
      {
        "when": {
          "appearance": "soft",
          "accessories": "cap"
        },
        "code": "accessory-classic-only-cap",
        "messageByLanguage": {
          "zh-CN": "这组配饰适配经典圆团，请先切回经典圆团或取下配饰。",
          "en": "These accessories fit the classic orb. Choose Classic or remove them first."
        }
      },
      {
        "when": {
          "appearance": "soft",
          "accessories": "glasses-cap"
        },
        "code": "accessory-classic-only-glasses-cap",
        "messageByLanguage": {
          "zh-CN": "这组配饰适配经典圆团，请先切回经典圆团或取下配饰。",
          "en": "These accessories fit the classic orb. Choose Classic or remove them first."
        }
      }
    ],
    "recipes": [
      {
        "id": "classic-original-angled-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "angled",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:angled",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-angled-glasses",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "angled",
          "accessories": "glasses"
        },
        "layers": [
          {
            "slot": "glasses-rear",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:glassesRear",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          },
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:angled",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:glassesFront",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-angled-cap",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "angled",
          "accessories": "cap"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "cap-rear",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:capRear",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:angled",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "cap-front",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:capFront",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-angled-glasses-cap",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "angled",
          "accessories": "glasses-cap"
        },
        "layers": [
          {
            "slot": "glasses-rear",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:glassesRear",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          },
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "cap-rear",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:capRear",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:angled",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:glassesFront",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          },
          {
            "slot": "cap-front",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:capFront",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-upright-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "upright",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:upright",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-upright-glasses",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "upright",
          "accessories": "glasses"
        },
        "layers": [
          {
            "slot": "glasses-rear",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:glassesRear",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          },
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:upright",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:glassesFront",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-upright-cap",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "upright",
          "accessories": "cap"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "cap-rear",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:capRear",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:upright",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "cap-front",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:capFront",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-upright-glasses-cap",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "upright",
          "accessories": "glasses-cap"
        },
        "layers": [
          {
            "slot": "glasses-rear",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:glassesRear",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          },
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "cap-rear",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:capRear",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:upright",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:glassesFront",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          },
          {
            "slot": "cap-front",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:capFront",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-angled-none",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "angled",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-purple-orb-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:angled",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-angled-glasses",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "angled",
          "accessories": "glasses"
        },
        "layers": [
          {
            "slot": "glasses-rear",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:glassesRear",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          },
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-purple-orb-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:angled",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:glassesFront",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-angled-cap",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "angled",
          "accessories": "cap"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-purple-orb-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "cap-rear",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:capRear",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:angled",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "cap-front",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:capFront",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-angled-glasses-cap",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "angled",
          "accessories": "glasses-cap"
        },
        "layers": [
          {
            "slot": "glasses-rear",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:glassesRear",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          },
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-purple-orb-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "cap-rear",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:capRear",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:angled",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:glassesFront",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          },
          {
            "slot": "cap-front",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:capFront",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-upright-none",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "upright",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-purple-orb-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:upright",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-upright-glasses",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "upright",
          "accessories": "glasses"
        },
        "layers": [
          {
            "slot": "glasses-rear",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:glassesRear",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          },
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-purple-orb-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:upright",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:glassesFront",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-upright-cap",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "upright",
          "accessories": "cap"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-purple-orb-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "cap-rear",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:capRear",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:upright",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "cap-front",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:capFront",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-upright-glasses-cap",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "upright",
          "accessories": "glasses-cap"
        },
        "layers": [
          {
            "slot": "glasses-rear",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:glassesRear",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          },
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-purple-orb-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "cap-rear",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:capRear",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:upright",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "glasses-front",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:glassesFront",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          },
          {
            "slot": "cap-front",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:capFront",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-angled-none",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "angled",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:angled-soft",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-upright-none",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "upright",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:upright-soft",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-angled-none",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "angled",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-purple-orb-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:angled-soft",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-upright-none",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "upright",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-purple-orb-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-purple-orb-adjustments-v2:upright-soft",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "grok-green-cloud-adjustments-v2",
    "version": "v2",
    "family": "grok",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "grok-green-cloud",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1254,
      "height": 1254
    },
    "identitySemanticsByLanguage": {
      "en": "One Grok Bot character with one continuous smooth soft geometric body and paired capsule eyes. No arms, hands, legs, feet, mouth, fur, robotic mechanism or screen face.",
      "zh-CN": "单个 Grok Bot 角色，连续光滑软几何身体与成对胶囊眼。无手臂、手、腿、脚、嘴、绒毛、机械构造或屏幕脸。"
    },
    "defaultOptions": {
      "appearance": "classic",
      "colors": "original",
      "face": "open",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "classic",
          "labelByLanguage": {
            "en": "Classic outline",
            "zh-CN": "经典轮廓"
          },
          "semanticByLanguage": {
            "en": "a cloud silhouette of connected round lobes",
            "zh-CN": "圆瓣相连的云朵轮廓"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-green-cloud-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "soft",
          "labelByLanguage": {
            "en": "Softer outline",
            "zh-CN": "柔圆轮廓"
          },
          "semanticByLanguage": {
            "en": "a wider cloud silhouette with spread round lobes",
            "zh-CN": "更横向舒展的多瓣云朵"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-green-cloud-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "original",
          "labelByLanguage": {
            "en": "green",
            "zh-CN": "鲜绿"
          },
          "semanticByLanguage": {
            "en": "green smooth soft silicone",
            "zh-CN": "鲜绿光滑软硅胶材质"
          },
          "zoneColors": {
            "body": "#5bcc64"
          },
          "swatches": [
            "#5bcc64"
          ]
        },
        {
          "id": "mint",
          "labelByLanguage": {
            "en": "Soft blue",
            "zh-CN": "浅蓝"
          },
          "semanticByLanguage": {
            "en": "soft blue smooth soft silicone",
            "zh-CN": "浅蓝色光滑软硅胶材质"
          },
          "zoneColors": {
            "body": "#6f9bd8"
          },
          "swatches": [
            "#6f9bd8"
          ]
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "en": "Capsule eyes",
            "zh-CN": "胶囊眼"
          },
          "semanticByLanguage": {
            "en": "paired vertical ivory capsule eyes",
            "zh-CN": "成对竖向象牙白胶囊眼"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-green-cloud-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        },
        {
          "id": "relaxed",
          "labelByLanguage": {
            "en": "Short capsule eyes",
            "zh-CN": "短胶囊眼"
          },
          "semanticByLanguage": {
            "en": "paired shorter vertical ivory capsules, a static relaxed expression",
            "zh-CN": "成对短竖胶囊眼，静态放松表情"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-green-cloud-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "No accessories",
            "zh-CN": "无配饰"
          },
          "semanticByLanguage": {
            "en": "no accessories",
            "zh-CN": "不佩戴配饰"
          }
        },
        {
          "id": "pin",
          "labelByLanguage": {
            "en": "Star pin",
            "zh-CN": "星形胸针"
          },
          "semanticByLanguage": {
            "en": "one small gold star pin fitted on the side front of the body",
            "zh-CN": "身体侧前方贴合一枚小型金色星形胸针"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-green-cloud-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [],
    "recipes": [
      {
        "id": "classic-original-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-pin",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-relaxed-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-relaxed-pin",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-green-cloud-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-open-pin",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-green-cloud-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-relaxed-none",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-green-cloud-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-relaxed-pin",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-green-cloud-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-open-none",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-open-pin",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-relaxed-none",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-relaxed-pin",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-open-none",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-green-cloud-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-open-pin",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-green-cloud-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-relaxed-none",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-green-cloud-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-relaxed-pin",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-green-cloud-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-green-cloud-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "grok-teal-square-adjustments-v2",
    "version": "v2",
    "family": "grok",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "grok-teal-square",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1254,
      "height": 1254
    },
    "identitySemanticsByLanguage": {
      "en": "One Grok Bot character with one continuous smooth soft geometric body and paired capsule eyes. No arms, hands, legs, feet, mouth, fur, robotic mechanism or screen face.",
      "zh-CN": "单个 Grok Bot 角色，连续光滑软几何身体与成对胶囊眼。无手臂、手、腿、脚、嘴、绒毛、机械构造或屏幕脸。"
    },
    "defaultOptions": {
      "appearance": "classic",
      "colors": "original",
      "face": "open",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "classic",
          "labelByLanguage": {
            "en": "Classic outline",
            "zh-CN": "经典轮廓"
          },
          "semanticByLanguage": {
            "en": "a near-square softly rounded block",
            "zh-CN": "近方形柔圆块"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-teal-square-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "soft",
          "labelByLanguage": {
            "en": "Softer outline",
            "zh-CN": "柔圆轮廓"
          },
          "semanticByLanguage": {
            "en": "a taller narrower rounded rectangular block",
            "zh-CN": "高窄圆角长方块"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-teal-square-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "original",
          "labelByLanguage": {
            "en": "teal",
            "zh-CN": "青绿"
          },
          "semanticByLanguage": {
            "en": "teal smooth soft silicone",
            "zh-CN": "青绿光滑软硅胶材质"
          },
          "zoneColors": {
            "body": "#12bea8"
          },
          "swatches": [
            "#12bea8"
          ]
        },
        {
          "id": "mint",
          "labelByLanguage": {
            "en": "Soft blue",
            "zh-CN": "浅蓝"
          },
          "semanticByLanguage": {
            "en": "soft blue smooth soft silicone",
            "zh-CN": "浅蓝色光滑软硅胶材质"
          },
          "zoneColors": {
            "body": "#6f9bd8"
          },
          "swatches": [
            "#6f9bd8"
          ]
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "en": "Capsule eyes",
            "zh-CN": "胶囊眼"
          },
          "semanticByLanguage": {
            "en": "paired vertical ivory capsule eyes",
            "zh-CN": "成对竖向象牙白胶囊眼"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-teal-square-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        },
        {
          "id": "relaxed",
          "labelByLanguage": {
            "en": "Short capsule eyes",
            "zh-CN": "短胶囊眼"
          },
          "semanticByLanguage": {
            "en": "paired shorter vertical ivory capsules, a static relaxed expression",
            "zh-CN": "成对短竖胶囊眼，静态放松表情"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-teal-square-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "No accessories",
            "zh-CN": "无配饰"
          },
          "semanticByLanguage": {
            "en": "no accessories",
            "zh-CN": "不佩戴配饰"
          }
        },
        {
          "id": "pin",
          "labelByLanguage": {
            "en": "Star pin",
            "zh-CN": "星形胸针"
          },
          "semanticByLanguage": {
            "en": "one small gold star pin fitted on the side front of the body",
            "zh-CN": "身体侧前方贴合一枚小型金色星形胸针"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-teal-square-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [],
    "recipes": [
      {
        "id": "classic-original-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-pin",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-relaxed-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-relaxed-pin",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-teal-square-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-open-pin",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-teal-square-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-relaxed-none",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-teal-square-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-relaxed-pin",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-teal-square-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-open-none",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:open-soft",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-open-pin",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:open-soft",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:pin-soft",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-relaxed-none",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:relaxed-soft",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-relaxed-pin",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:relaxed-soft",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:pin-soft",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-open-none",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-teal-square-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:open-soft",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-open-pin",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-teal-square-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:open-soft",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:pin-soft",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-relaxed-none",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-teal-square-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:relaxed-soft",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-relaxed-pin",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-teal-square-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:relaxed-soft",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-teal-square-adjustments-v2:pin-soft",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "grok-coral-drop-adjustments-v2",
    "version": "v2",
    "family": "grok",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "grok-coral-drop",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1254,
      "height": 1254
    },
    "identitySemanticsByLanguage": {
      "en": "One Grok Bot character with one continuous smooth soft geometric body and paired capsule eyes. No arms, hands, legs, feet, mouth, fur, robotic mechanism or screen face.",
      "zh-CN": "单个 Grok Bot 角色，连续光滑软几何身体与成对胶囊眼。无手臂、手、腿、脚、嘴、绒毛、机械构造或屏幕脸。"
    },
    "defaultOptions": {
      "appearance": "classic",
      "colors": "original",
      "face": "open",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "classic",
          "labelByLanguage": {
            "en": "Classic outline",
            "zh-CN": "经典轮廓"
          },
          "semanticByLanguage": {
            "en": "a soft teardrop with tapered top and round lower body",
            "zh-CN": "上尖下圆的软水滴"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-coral-drop-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "soft",
          "labelByLanguage": {
            "en": "Softer outline",
            "zh-CN": "柔圆轮廓"
          },
          "semanticByLanguage": {
            "en": "a broader softly leaning teardrop",
            "zh-CN": "更宽且偏斜的软水滴"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-coral-drop-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "original",
          "labelByLanguage": {
            "en": "coral red",
            "zh-CN": "珊瑚红"
          },
          "semanticByLanguage": {
            "en": "coral red smooth soft silicone",
            "zh-CN": "珊瑚红光滑软硅胶材质"
          },
          "zoneColors": {
            "body": "#ff5c57"
          },
          "swatches": [
            "#ff5c57"
          ]
        },
        {
          "id": "mint",
          "labelByLanguage": {
            "en": "Soft blue",
            "zh-CN": "浅蓝"
          },
          "semanticByLanguage": {
            "en": "soft blue smooth soft silicone",
            "zh-CN": "浅蓝色光滑软硅胶材质"
          },
          "zoneColors": {
            "body": "#6f9bd8"
          },
          "swatches": [
            "#6f9bd8"
          ]
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "en": "Capsule eyes",
            "zh-CN": "胶囊眼"
          },
          "semanticByLanguage": {
            "en": "paired vertical ivory capsule eyes",
            "zh-CN": "成对竖向象牙白胶囊眼"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-coral-drop-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        },
        {
          "id": "relaxed",
          "labelByLanguage": {
            "en": "Short capsule eyes",
            "zh-CN": "短胶囊眼"
          },
          "semanticByLanguage": {
            "en": "paired shorter vertical ivory capsules, a static relaxed expression",
            "zh-CN": "成对短竖胶囊眼，静态放松表情"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-coral-drop-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "No accessories",
            "zh-CN": "无配饰"
          },
          "semanticByLanguage": {
            "en": "no accessories",
            "zh-CN": "不佩戴配饰"
          }
        },
        {
          "id": "pin",
          "labelByLanguage": {
            "en": "Star pin",
            "zh-CN": "星形胸针"
          },
          "semanticByLanguage": {
            "en": "one small gold star pin fitted on the side front of the body",
            "zh-CN": "身体侧前方贴合一枚小型金色星形胸针"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-coral-drop-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [],
    "recipes": [
      {
        "id": "classic-original-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-pin",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-relaxed-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-relaxed-pin",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-coral-drop-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-open-pin",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-coral-drop-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-relaxed-none",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-coral-drop-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-relaxed-pin",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-coral-drop-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-open-none",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-open-pin",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-relaxed-none",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-relaxed-pin",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-open-none",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-coral-drop-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-open-pin",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-coral-drop-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-relaxed-none",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-coral-drop-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-relaxed-pin",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-coral-drop-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-coral-drop-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "grok-white-arch-adjustments-v2",
    "version": "v2",
    "family": "grok",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "grok-white-arch",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1254,
      "height": 1254
    },
    "identitySemanticsByLanguage": {
      "en": "One Grok Bot character with one continuous smooth soft geometric body and paired capsule eyes. No arms, hands, legs, feet, mouth, fur, robotic mechanism or screen face.",
      "zh-CN": "单个 Grok Bot 角色，连续光滑软几何身体与成对胶囊眼。无手臂、手、腿、脚、嘴、绒毛、机械构造或屏幕脸。"
    },
    "defaultOptions": {
      "appearance": "classic",
      "colors": "original",
      "face": "open",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "classic",
          "labelByLanguage": {
            "en": "Classic outline",
            "zh-CN": "经典轮廓"
          },
          "semanticByLanguage": {
            "en": "a low rounded arch silhouette with a broad gentle base",
            "zh-CN": "低圆拱轮廓与平缓底面"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-white-arch-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "soft",
          "labelByLanguage": {
            "en": "Softer outline",
            "zh-CN": "柔圆轮廓"
          },
          "semanticByLanguage": {
            "en": "a taller narrower arch silhouette",
            "zh-CN": "高窄拱团轮廓"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-white-arch-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "original",
          "labelByLanguage": {
            "en": "ivory white",
            "zh-CN": "象牙白"
          },
          "semanticByLanguage": {
            "en": "ivory white smooth soft silicone",
            "zh-CN": "象牙白光滑软硅胶材质"
          },
          "zoneColors": {
            "body": "#f2f1ee"
          },
          "swatches": [
            "#f2f1ee"
          ]
        },
        {
          "id": "mint",
          "labelByLanguage": {
            "zh-CN": "冰蓝渐影",
            "en": "Icy blue shading"
          },
          "semanticByLanguage": {
            "zh-CN": "象牙白主体与浅蓝渐变暗部，保持光滑软硅胶质感",
            "en": "an ivory body with pale blue gradient shading, retaining smooth soft silicone material"
          },
          "zoneColors": {
            "body": "#6f9bd8"
          },
          "swatches": [
            "#6f9bd8"
          ]
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "en": "Capsule eyes",
            "zh-CN": "胶囊眼"
          },
          "semanticByLanguage": {
            "en": "paired vertical black capsule eyes",
            "zh-CN": "成对竖向黑色胶囊眼"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-white-arch-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        },
        {
          "id": "relaxed",
          "labelByLanguage": {
            "en": "Short capsule eyes",
            "zh-CN": "短胶囊眼"
          },
          "semanticByLanguage": {
            "en": "paired shorter vertical black capsules, a static relaxed expression",
            "zh-CN": "成对短竖胶囊眼，静态放松表情"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-white-arch-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "No accessories",
            "zh-CN": "无配饰"
          },
          "semanticByLanguage": {
            "en": "no accessories",
            "zh-CN": "不佩戴配饰"
          }
        },
        {
          "id": "pin",
          "labelByLanguage": {
            "en": "Star pin",
            "zh-CN": "星形胸针"
          },
          "semanticByLanguage": {
            "zh-CN": "额头上方贴合一枚金色星形饰针，避开双眼",
            "en": "one gold star pin fitted on the forehead above and clear of both eyes"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-white-arch-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [],
    "recipes": [
      {
        "id": "classic-original-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-pin",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-relaxed-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-relaxed-pin",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-white-arch-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-open-pin",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-white-arch-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-relaxed-none",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-white-arch-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-relaxed-pin",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-white-arch-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-open-none",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-open-pin",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-relaxed-none",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-relaxed-pin",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-open-none",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-white-arch-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-open-pin",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-white-arch-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-relaxed-none",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-white-arch-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-relaxed-pin",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-white-arch-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-white-arch-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "grok-horizontal-capsule-adjustments-v2",
    "version": "v2",
    "family": "grok",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "grok-horizontal-capsule",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1635,
      "height": 962
    },
    "identitySemanticsByLanguage": {
      "en": "One Grok Bot character with one continuous smooth soft geometric body and paired capsule eyes. No arms, hands, legs, feet, mouth, fur, robotic mechanism or screen face.",
      "zh-CN": "单个 Grok Bot 角色，连续光滑软几何身体与成对胶囊眼。无手臂、手、腿、脚、嘴、绒毛、机械构造或屏幕脸。"
    },
    "defaultOptions": {
      "appearance": "classic",
      "colors": "original",
      "face": "open",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "classic",
          "labelByLanguage": {
            "en": "Classic outline",
            "zh-CN": "经典轮廓"
          },
          "semanticByLanguage": {
            "en": "a wide short horizontal capsule silhouette",
            "zh-CN": "横向宽短胶囊轮廓"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-horizontal-capsule-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "soft",
          "labelByLanguage": {
            "en": "Softer outline",
            "zh-CN": "柔圆轮廓"
          },
          "semanticByLanguage": {
            "en": "a fuller horizontal capsule with rounder ends",
            "zh-CN": "更加柔圆的横向胶囊"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-horizontal-capsule-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "original",
          "labelByLanguage": {
            "en": "orange",
            "zh-CN": "橙色"
          },
          "semanticByLanguage": {
            "en": "orange smooth soft silicone",
            "zh-CN": "橙色光滑软硅胶材质"
          },
          "zoneColors": {
            "body": "#ff951d"
          },
          "swatches": [
            "#ff951d"
          ]
        },
        {
          "id": "mint",
          "labelByLanguage": {
            "en": "Mint teal",
            "zh-CN": "薄荷青"
          },
          "semanticByLanguage": {
            "en": "mint teal smooth soft silicone",
            "zh-CN": "薄荷青色光滑软硅胶材质"
          },
          "zoneColors": {
            "body": "#34b8a5"
          },
          "swatches": [
            "#34b8a5"
          ]
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "en": "Capsule eyes",
            "zh-CN": "胶囊眼"
          },
          "semanticByLanguage": {
            "en": "paired vertical ivory capsule eyes",
            "zh-CN": "成对竖向象牙白胶囊眼"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-horizontal-capsule-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        },
        {
          "id": "relaxed",
          "labelByLanguage": {
            "en": "Short capsule eyes",
            "zh-CN": "短胶囊眼"
          },
          "semanticByLanguage": {
            "en": "paired shorter vertical ivory capsules, a static relaxed expression",
            "zh-CN": "成对短竖胶囊眼，静态放松表情"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-horizontal-capsule-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "No accessories",
            "zh-CN": "无配饰"
          },
          "semanticByLanguage": {
            "en": "no accessories",
            "zh-CN": "不佩戴配饰"
          }
        },
        {
          "id": "pin",
          "labelByLanguage": {
            "en": "Star pin",
            "zh-CN": "星形胸针"
          },
          "semanticByLanguage": {
            "en": "one small gold star pin fitted on the side front of the body",
            "zh-CN": "身体侧前方贴合一枚小型金色星形胸针"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-horizontal-capsule-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [],
    "recipes": [
      {
        "id": "classic-original-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-pin",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-relaxed-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-relaxed-pin",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-horizontal-capsule-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-open-pin",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-horizontal-capsule-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-relaxed-none",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-horizontal-capsule-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-relaxed-pin",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-horizontal-capsule-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-open-none",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-open-pin",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-relaxed-none",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-relaxed-pin",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-open-none",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-horizontal-capsule-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-open-pin",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-horizontal-capsule-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-relaxed-none",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-horizontal-capsule-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-relaxed-pin",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-horizontal-capsule-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-horizontal-capsule-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "grok-soft-triangle-adjustments-v2",
    "version": "v2",
    "family": "grok",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "grok-soft-triangle",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1254,
      "height": 1254
    },
    "identitySemanticsByLanguage": {
      "en": "One Grok Bot character with one continuous smooth soft geometric body and paired capsule eyes. No arms, hands, legs, feet, mouth, fur, robotic mechanism or screen face.",
      "zh-CN": "单个 Grok Bot 角色，连续光滑软几何身体与成对胶囊眼。无手臂、手、腿、脚、嘴、绒毛、机械构造或屏幕脸。"
    },
    "defaultOptions": {
      "appearance": "classic",
      "colors": "original",
      "face": "open",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "classic",
          "labelByLanguage": {
            "en": "Classic outline",
            "zh-CN": "经典轮廓"
          },
          "semanticByLanguage": {
            "en": "a soft triangular silhouette",
            "zh-CN": "软三角轮廓"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-soft-triangle-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "soft",
          "labelByLanguage": {
            "en": "Softer outline",
            "zh-CN": "柔圆轮廓"
          },
          "semanticByLanguage": {
            "en": "a broader triangular silhouette with softer rounded corners",
            "zh-CN": "更圆润宽缓的三角轮廓"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-soft-triangle-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "original",
          "labelByLanguage": {
            "en": "coral pink",
            "zh-CN": "珊瑚粉"
          },
          "semanticByLanguage": {
            "en": "coral pink smooth soft silicone",
            "zh-CN": "珊瑚粉光滑软硅胶材质"
          },
          "zoneColors": {
            "body": "#f75c79"
          },
          "swatches": [
            "#f75c79"
          ]
        },
        {
          "id": "mint",
          "labelByLanguage": {
            "en": "Mint teal",
            "zh-CN": "薄荷青"
          },
          "semanticByLanguage": {
            "en": "mint teal smooth soft silicone",
            "zh-CN": "薄荷青色光滑软硅胶材质"
          },
          "zoneColors": {
            "body": "#34b8a5"
          },
          "swatches": [
            "#34b8a5"
          ]
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "en": "Capsule eyes",
            "zh-CN": "胶囊眼"
          },
          "semanticByLanguage": {
            "en": "paired vertical ivory capsule eyes",
            "zh-CN": "成对竖向象牙白胶囊眼"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-soft-triangle-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        },
        {
          "id": "relaxed",
          "labelByLanguage": {
            "en": "Short capsule eyes",
            "zh-CN": "短胶囊眼"
          },
          "semanticByLanguage": {
            "en": "paired shorter vertical ivory capsules, a static relaxed expression",
            "zh-CN": "成对短竖胶囊眼，静态放松表情"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-soft-triangle-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "No accessories",
            "zh-CN": "无配饰"
          },
          "semanticByLanguage": {
            "en": "no accessories",
            "zh-CN": "不佩戴配饰"
          }
        },
        {
          "id": "pin",
          "labelByLanguage": {
            "en": "Star pin",
            "zh-CN": "星形胸针"
          },
          "semanticByLanguage": {
            "en": "one small gold star pin fitted on the side front of the body",
            "zh-CN": "身体侧前方贴合一枚小型金色星形胸针"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-soft-triangle-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [],
    "recipes": [
      {
        "id": "classic-original-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-pin",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-relaxed-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-relaxed-pin",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-soft-triangle-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-open-pin",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-soft-triangle-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-relaxed-none",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-soft-triangle-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-relaxed-pin",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-soft-triangle-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-open-none",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-open-pin",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-relaxed-none",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-relaxed-pin",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-open-none",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-soft-triangle-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-open-pin",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-soft-triangle-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-relaxed-none",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-soft-triangle-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-relaxed-pin",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-soft-triangle-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-soft-triangle-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "grok-soft-diamond-adjustments-v2",
    "version": "v2",
    "family": "grok",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "grok-soft-diamond",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1254,
      "height": 1254
    },
    "identitySemanticsByLanguage": {
      "en": "One Grok Bot character with one continuous smooth soft geometric body and paired capsule eyes. No arms, hands, legs, feet, mouth, fur, robotic mechanism or screen face.",
      "zh-CN": "单个 Grok Bot 角色，连续光滑软几何身体与成对胶囊眼。无手臂、手、腿、脚、嘴、绒毛、机械构造或屏幕脸。"
    },
    "defaultOptions": {
      "appearance": "classic",
      "colors": "original",
      "face": "open",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "classic",
          "labelByLanguage": {
            "en": "Classic outline",
            "zh-CN": "经典轮廓"
          },
          "semanticByLanguage": {
            "en": "a rounded diamond silhouette",
            "zh-CN": "圆钝菱形轮廓"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-soft-diamond-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "soft",
          "labelByLanguage": {
            "en": "Softer outline",
            "zh-CN": "柔圆轮廓"
          },
          "semanticByLanguage": {
            "en": "a softer round-cornered diamond silhouette",
            "zh-CN": "更圆润的菱形轮廓"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-soft-diamond-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "original",
          "labelByLanguage": {
            "en": "berry pink",
            "zh-CN": "莓果粉"
          },
          "semanticByLanguage": {
            "en": "berry pink smooth soft silicone",
            "zh-CN": "莓果粉光滑软硅胶材质"
          },
          "zoneColors": {
            "body": "#df228b"
          },
          "swatches": [
            "#df228b"
          ]
        },
        {
          "id": "mint",
          "labelByLanguage": {
            "en": "Mint teal",
            "zh-CN": "薄荷青"
          },
          "semanticByLanguage": {
            "en": "mint teal smooth soft silicone",
            "zh-CN": "薄荷青色光滑软硅胶材质"
          },
          "zoneColors": {
            "body": "#34b8a5"
          },
          "swatches": [
            "#34b8a5"
          ]
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "en": "Capsule eyes",
            "zh-CN": "胶囊眼"
          },
          "semanticByLanguage": {
            "en": "paired vertical ivory capsule eyes",
            "zh-CN": "成对竖向象牙白胶囊眼"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-soft-diamond-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        },
        {
          "id": "relaxed",
          "labelByLanguage": {
            "en": "Short capsule eyes",
            "zh-CN": "短胶囊眼"
          },
          "semanticByLanguage": {
            "en": "paired shorter vertical ivory capsules, a static relaxed expression",
            "zh-CN": "成对短竖胶囊眼，静态放松表情"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-soft-diamond-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "No accessories",
            "zh-CN": "无配饰"
          },
          "semanticByLanguage": {
            "en": "no accessories",
            "zh-CN": "不佩戴配饰"
          }
        },
        {
          "id": "pin",
          "labelByLanguage": {
            "en": "Star pin",
            "zh-CN": "星形胸针"
          },
          "semanticByLanguage": {
            "en": "one small gold star pin fitted on the side front of the body",
            "zh-CN": "身体侧前方贴合一枚小型金色星形胸针"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-soft-diamond-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [],
    "recipes": [
      {
        "id": "classic-original-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-pin",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-relaxed-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-relaxed-pin",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-soft-diamond-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-open-pin",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-soft-diamond-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-relaxed-none",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-soft-diamond-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-relaxed-pin",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-soft-diamond-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-open-none",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-open-pin",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-relaxed-none",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-relaxed-pin",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-open-none",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-soft-diamond-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-open-pin",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-soft-diamond-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-relaxed-none",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-soft-diamond-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-relaxed-pin",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-soft-diamond-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-soft-diamond-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "grok-half-dome-adjustments-v2",
    "version": "v2",
    "family": "grok",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "grok-half-dome",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1254,
      "height": 1254
    },
    "identitySemanticsByLanguage": {
      "en": "One Grok Bot character with one continuous smooth soft geometric body and paired capsule eyes. No arms, hands, legs, feet, mouth, fur, robotic mechanism or screen face.",
      "zh-CN": "单个 Grok Bot 角色，连续光滑软几何身体与成对胶囊眼。无手臂、手、腿、脚、嘴、绒毛、机械构造或屏幕脸。"
    },
    "defaultOptions": {
      "appearance": "classic",
      "colors": "original",
      "face": "open",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "classic",
          "labelByLanguage": {
            "en": "Classic outline",
            "zh-CN": "经典轮廓"
          },
          "semanticByLanguage": {
            "en": "a semicircular dome with a gently flattened base",
            "zh-CN": "半圆穹顶与平缓底缘"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-half-dome-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "soft",
          "labelByLanguage": {
            "en": "Softer outline",
            "zh-CN": "柔圆轮廓"
          },
          "semanticByLanguage": {
            "en": "a softer rounded dome silhouette",
            "zh-CN": "更圆缓的穹顶轮廓"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-half-dome-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "original",
          "labelByLanguage": {
            "en": "graphite blue",
            "zh-CN": "石墨蓝"
          },
          "semanticByLanguage": {
            "en": "graphite blue smooth soft silicone",
            "zh-CN": "石墨蓝光滑软硅胶材质"
          },
          "zoneColors": {
            "body": "#465877"
          },
          "swatches": [
            "#465877"
          ]
        },
        {
          "id": "mint",
          "labelByLanguage": {
            "en": "Mint teal",
            "zh-CN": "薄荷青"
          },
          "semanticByLanguage": {
            "en": "mint teal smooth soft silicone",
            "zh-CN": "薄荷青色光滑软硅胶材质"
          },
          "zoneColors": {
            "body": "#34b8a5"
          },
          "swatches": [
            "#34b8a5"
          ]
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "en": "Capsule eyes",
            "zh-CN": "胶囊眼"
          },
          "semanticByLanguage": {
            "en": "paired vertical ivory capsule eyes",
            "zh-CN": "成对竖向象牙白胶囊眼"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-half-dome-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        },
        {
          "id": "relaxed",
          "labelByLanguage": {
            "en": "Short capsule eyes",
            "zh-CN": "短胶囊眼"
          },
          "semanticByLanguage": {
            "en": "paired shorter vertical ivory capsules, a static relaxed expression",
            "zh-CN": "成对短竖胶囊眼，静态放松表情"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-half-dome-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "No accessories",
            "zh-CN": "无配饰"
          },
          "semanticByLanguage": {
            "en": "no accessories",
            "zh-CN": "不佩戴配饰"
          }
        },
        {
          "id": "pin",
          "labelByLanguage": {
            "en": "Star pin",
            "zh-CN": "星形胸针"
          },
          "semanticByLanguage": {
            "en": "one small gold star pin fitted on the side front of the body",
            "zh-CN": "身体侧前方贴合一枚小型金色星形胸针"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-half-dome-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [],
    "recipes": [
      {
        "id": "classic-original-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-pin",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-relaxed-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-relaxed-pin",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-half-dome-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-open-pin",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-half-dome-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-relaxed-none",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-half-dome-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-relaxed-pin",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-half-dome-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-open-none",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-open-pin",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-relaxed-none",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-relaxed-pin",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-open-none",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-half-dome-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-open-pin",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-half-dome-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-relaxed-none",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-half-dome-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-relaxed-pin",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-half-dome-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-half-dome-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "grok-cylinder-adjustments-v2",
    "version": "v2",
    "family": "grok",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "grok-cylinder",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1226,
      "height": 1283
    },
    "identitySemanticsByLanguage": {
      "en": "One Grok Bot character with one continuous smooth soft geometric body and paired capsule eyes. No arms, hands, legs, feet, mouth, fur, robotic mechanism or screen face.",
      "zh-CN": "单个 Grok Bot 角色，连续光滑软几何身体与成对胶囊眼。无手臂、手、腿、脚、嘴、绒毛、机械构造或屏幕脸。"
    },
    "defaultOptions": {
      "appearance": "classic",
      "colors": "original",
      "face": "open",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "classic",
          "labelByLanguage": {
            "en": "Classic outline",
            "zh-CN": "经典轮廓"
          },
          "semanticByLanguage": {
            "en": "an upright cylinder with a visible elliptical top",
            "zh-CN": "可见椭圆顶面的圆柱轮廓"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-cylinder-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "soft",
          "labelByLanguage": {
            "en": "Softer outline",
            "zh-CN": "柔圆轮廓"
          },
          "semanticByLanguage": {
            "en": "a shorter wider cylinder silhouette",
            "zh-CN": "矮宽圆柱轮廓"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-cylinder-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "original",
          "labelByLanguage": {
            "en": "red",
            "zh-CN": "朱红"
          },
          "semanticByLanguage": {
            "en": "red smooth soft silicone",
            "zh-CN": "朱红光滑软硅胶材质"
          },
          "zoneColors": {
            "body": "#ec233b"
          },
          "swatches": [
            "#ec233b"
          ]
        },
        {
          "id": "mint",
          "labelByLanguage": {
            "en": "Mint teal",
            "zh-CN": "薄荷青"
          },
          "semanticByLanguage": {
            "en": "mint teal smooth soft silicone",
            "zh-CN": "薄荷青色光滑软硅胶材质"
          },
          "zoneColors": {
            "body": "#34b8a5"
          },
          "swatches": [
            "#34b8a5"
          ]
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "en": "Capsule eyes",
            "zh-CN": "胶囊眼"
          },
          "semanticByLanguage": {
            "en": "paired vertical ivory capsule eyes",
            "zh-CN": "成对竖向象牙白胶囊眼"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-cylinder-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        },
        {
          "id": "relaxed",
          "labelByLanguage": {
            "en": "Short capsule eyes",
            "zh-CN": "短胶囊眼"
          },
          "semanticByLanguage": {
            "en": "paired shorter vertical ivory capsules, a static relaxed expression",
            "zh-CN": "成对短竖胶囊眼，静态放松表情"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-cylinder-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "No accessories",
            "zh-CN": "无配饰"
          },
          "semanticByLanguage": {
            "en": "no accessories",
            "zh-CN": "不佩戴配饰"
          }
        },
        {
          "id": "pin",
          "labelByLanguage": {
            "en": "Star pin",
            "zh-CN": "星形胸针"
          },
          "semanticByLanguage": {
            "en": "one small gold star pin fitted on the side front of the body",
            "zh-CN": "身体侧前方贴合一枚小型金色星形胸针"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-cylinder-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [],
    "recipes": [
      {
        "id": "classic-original-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-pin",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-relaxed-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-relaxed-pin",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-cylinder-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-open-pin",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-cylinder-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-relaxed-none",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-cylinder-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-relaxed-pin",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-cylinder-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-open-none",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-open-pin",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:pin-soft",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-relaxed-none",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-relaxed-pin",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:pin-soft",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-open-none",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-cylinder-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-open-pin",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-cylinder-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:pin-soft",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-relaxed-none",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-cylinder-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-relaxed-pin",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-cylinder-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-cylinder-adjustments-v2:pin-soft",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "grok-egg-adjustments-v2",
    "version": "v2",
    "family": "grok",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "grok-egg",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1230,
      "height": 1278
    },
    "identitySemanticsByLanguage": {
      "en": "One Grok Bot character with one continuous smooth soft geometric body and paired capsule eyes. No arms, hands, legs, feet, mouth, fur, robotic mechanism or screen face.",
      "zh-CN": "单个 Grok Bot 角色，连续光滑软几何身体与成对胶囊眼。无手臂、手、腿、脚、嘴、绒毛、机械构造或屏幕脸。"
    },
    "defaultOptions": {
      "appearance": "classic",
      "colors": "original",
      "face": "open",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "classic",
          "labelByLanguage": {
            "en": "Classic outline",
            "zh-CN": "经典轮廓"
          },
          "semanticByLanguage": {
            "en": "a rounded egg silhouette without a pointed tip",
            "zh-CN": "无尖端的圆滑卵形轮廓"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-egg-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "soft",
          "labelByLanguage": {
            "en": "Softer outline",
            "zh-CN": "柔圆轮廓"
          },
          "semanticByLanguage": {
            "en": "a fuller rounded egg silhouette",
            "zh-CN": "更加饱满的卵形轮廓"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-egg-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "original",
          "labelByLanguage": {
            "en": "apricot orange",
            "zh-CN": "杏橙"
          },
          "semanticByLanguage": {
            "en": "apricot orange smooth soft silicone",
            "zh-CN": "杏橙光滑软硅胶材质"
          },
          "zoneColors": {
            "body": "#fbae43"
          },
          "swatches": [
            "#fbae43"
          ]
        },
        {
          "id": "mint",
          "labelByLanguage": {
            "en": "Mint teal",
            "zh-CN": "薄荷青"
          },
          "semanticByLanguage": {
            "en": "mint teal smooth soft silicone",
            "zh-CN": "薄荷青色光滑软硅胶材质"
          },
          "zoneColors": {
            "body": "#34b8a5"
          },
          "swatches": [
            "#34b8a5"
          ]
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "en": "Capsule eyes",
            "zh-CN": "胶囊眼"
          },
          "semanticByLanguage": {
            "en": "paired vertical ivory capsule eyes",
            "zh-CN": "成对竖向象牙白胶囊眼"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-egg-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        },
        {
          "id": "relaxed",
          "labelByLanguage": {
            "en": "Short capsule eyes",
            "zh-CN": "短胶囊眼"
          },
          "semanticByLanguage": {
            "en": "paired shorter vertical ivory capsules, a static relaxed expression",
            "zh-CN": "成对短竖胶囊眼，静态放松表情"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-egg-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "No accessories",
            "zh-CN": "无配饰"
          },
          "semanticByLanguage": {
            "en": "no accessories",
            "zh-CN": "不佩戴配饰"
          }
        },
        {
          "id": "pin",
          "labelByLanguage": {
            "en": "Star pin",
            "zh-CN": "星形胸针"
          },
          "semanticByLanguage": {
            "en": "one small gold star pin fitted on the side front of the body",
            "zh-CN": "身体侧前方贴合一枚小型金色星形胸针"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-egg-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [],
    "recipes": [
      {
        "id": "classic-original-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-pin",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-relaxed-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-relaxed-pin",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-egg-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-open-pin",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-egg-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-relaxed-none",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-egg-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-relaxed-pin",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-egg-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-open-none",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-open-pin",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-relaxed-none",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-relaxed-pin",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-open-none",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-egg-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-open-pin",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-egg-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-relaxed-none",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-egg-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-relaxed-pin",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-egg-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-egg-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "grok-rounded-cube-adjustments-v2",
    "version": "v2",
    "family": "grok",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "grok-rounded-cube",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1372,
      "height": 1147
    },
    "identitySemanticsByLanguage": {
      "en": "One Grok Bot character with one continuous smooth soft geometric body and paired capsule eyes. No arms, hands, legs, feet, mouth, fur, robotic mechanism or screen face.",
      "zh-CN": "单个 Grok Bot 角色，连续光滑软几何身体与成对胶囊眼。无手臂、手、腿、脚、嘴、绒毛、机械构造或屏幕脸。"
    },
    "defaultOptions": {
      "appearance": "classic",
      "colors": "original",
      "face": "open",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "classic",
          "labelByLanguage": {
            "en": "Classic outline",
            "zh-CN": "经典轮廓"
          },
          "semanticByLanguage": {
            "en": "a rounded cube with visible top and two side planes",
            "zh-CN": "顶面和两侧面可见的圆角立方轮廓"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-rounded-cube-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "soft",
          "labelByLanguage": {
            "en": "Softer outline",
            "zh-CN": "柔圆轮廓"
          },
          "semanticByLanguage": {
            "en": "a cube with softer corners and visible volume",
            "zh-CN": "边角更柔和的立方轮廓"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-rounded-cube-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "original",
          "labelByLanguage": {
            "en": "emerald green",
            "zh-CN": "翠绿"
          },
          "semanticByLanguage": {
            "en": "emerald green smooth soft silicone",
            "zh-CN": "翠绿光滑软硅胶材质"
          },
          "zoneColors": {
            "body": "#09b980"
          },
          "swatches": [
            "#09b980"
          ]
        },
        {
          "id": "mint",
          "labelByLanguage": {
            "en": "Mint teal",
            "zh-CN": "薄荷青"
          },
          "semanticByLanguage": {
            "en": "mint teal smooth soft silicone",
            "zh-CN": "薄荷青色光滑软硅胶材质"
          },
          "zoneColors": {
            "body": "#34b8a5"
          },
          "swatches": [
            "#34b8a5"
          ]
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "en": "Capsule eyes",
            "zh-CN": "胶囊眼"
          },
          "semanticByLanguage": {
            "en": "paired vertical ivory capsule eyes",
            "zh-CN": "成对竖向象牙白胶囊眼"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-rounded-cube-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        },
        {
          "id": "relaxed",
          "labelByLanguage": {
            "en": "Short capsule eyes",
            "zh-CN": "短胶囊眼"
          },
          "semanticByLanguage": {
            "en": "paired shorter vertical ivory capsules, a static relaxed expression",
            "zh-CN": "成对短竖胶囊眼，静态放松表情"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-rounded-cube-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "No accessories",
            "zh-CN": "无配饰"
          },
          "semanticByLanguage": {
            "en": "no accessories",
            "zh-CN": "不佩戴配饰"
          }
        },
        {
          "id": "pin",
          "labelByLanguage": {
            "en": "Star pin",
            "zh-CN": "星形胸针"
          },
          "semanticByLanguage": {
            "en": "one small gold star pin fitted on the side front of the body",
            "zh-CN": "身体侧前方贴合一枚小型金色星形胸针"
          },
          "thumbnailAssets": [
            {
              "id": "template:grok-rounded-cube-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [],
    "recipes": [
      {
        "id": "classic-original-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-pin",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-relaxed-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-relaxed-pin",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-open-none",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-rounded-cube-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-open-pin",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-rounded-cube-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-relaxed-none",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-rounded-cube-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-mint-relaxed-pin",
        "selections": {
          "appearance": "classic",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:body",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-rounded-cube-adjustments-v2:bodyMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-open-none",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-open-pin",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-relaxed-none",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-original-relaxed-pin",
        "selections": {
          "appearance": "soft",
          "colors": "original",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-open-none",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "open",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-rounded-cube-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-open-pin",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "open",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-rounded-cube-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-relaxed-none",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-rounded-cube-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "soft-mint-relaxed-pin",
        "selections": {
          "appearance": "soft",
          "colors": "mint",
          "face": "relaxed",
          "accessories": "pin"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:soft",
              "version": "v1",
              "purpose": "body-layer"
            },
            "tint": {
              "optionField": "colors",
              "zone": "body",
              "mask": {
                "id": "template:grok-rounded-cube-adjustments-v2:softMask",
                "version": "v1",
                "purpose": "color-zone-mask"
              },
              "mode": "preserve-lightness"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:relaxed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory",
            "asset": {
              "id": "template:grok-rounded-cube-adjustments-v2:pin",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "muse-cream-core-adjustments-v1",
    "version": "v1",
    "family": "muse",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "candidate-meta-muse-20261005",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1235,
      "height": 1274
    },
    "identitySemanticsByLanguage": {
      "zh-CN": "单个 Muse 角色，柔软连续绒布包覆体、内嵌桃色脸、小眼睛与短圆肢体。保持头身一体和道具真实承托。",
      "en": "One Muse character with a continuous soft plush hooded body, inset peach face, small eyes and short rounded limbs. Preserve the unified hood/body and natural support of any held prop."
    },
    "defaultOptions": {
      "appearance": "classic",
      "colors": "original",
      "face": "open",
      "clothing": "none",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "classic",
          "labelByLanguage": {
            "zh-CN": "经典包覆体",
            "en": "Classic hood"
          },
          "semanticByLanguage": {
            "zh-CN": "经典连续包覆身体与内嵌脸，双臂自然下垂，无持物",
            "en": "a continuous hooded body with an inset face; no handheld objects; both short round arms relaxed"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-cream-core-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "broad",
          "labelByLanguage": {
            "zh-CN": "宽圆包覆体",
            "en": "Broader hood"
          },
          "semanticByLanguage": {
            "zh-CN": "更宽圆的包覆身体与内嵌脸，双臂自然下垂，无持物",
            "en": "a broader squat hooded body with an inset face; no handheld objects; both short round arms relaxed"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-cream-core-adjustments-v1:broad",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "original",
          "labelByLanguage": {
            "zh-CN": "奶油白",
            "en": "cream white"
          },
          "semanticByLanguage": {
            "zh-CN": "奶油白短绒身体，肤色与道具保持原色",
            "en": "cream white short-plush body; preserve peach face and prop colors"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-cream-core-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "swatches": [
            "#f2e6d4"
          ],
          "zoneColors": {
            "plush": "#f2e6d4"
          }
        },
        {
          "id": "blue",
          "labelByLanguage": {
            "zh-CN": "柔雾蓝",
            "en": "Powder blue"
          },
          "semanticByLanguage": {
            "zh-CN": "仅绒布包覆体和短圆肢体为柔雾蓝，脸部肤色、所有道具保持原色",
            "en": "powder blue plush hood, body and short limbs only; preserve peach skin and all prop colors"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-cream-core-adjustments-v1:blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "swatches": [
            "#a2bfdc"
          ],
          "zoneColors": {
            "plush": "#a2bfdc"
          }
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "zh-CN": "睁眼微笑",
            "en": "Open eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "内嵌桃色脸、睁开小圆眼与轻柔微笑",
            "en": "an inset peach face with small open dark eyes and a gentle smile"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-cream-core-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "closed",
          "labelByLanguage": {
            "zh-CN": "闭眼微笑",
            "en": "Closed eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "内嵌桃色脸、双眼放松闭合并轻柔微笑，静态表情",
            "en": "an inset peach face with relaxed closed curved eyes and a gentle smile; static expression"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-cream-core-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        }
      ],
      "clothing": [
        {
          "id": "none",
          "labelByLanguage": {
            "zh-CN": "无外套",
            "en": "No vest"
          },
          "semanticByLanguage": {
            "zh-CN": "原有绒布包覆身体，不另穿外套",
            "en": "the original plush-covered body without an extra vest"
          }
        },
        {
          "id": "vest",
          "labelByLanguage": {
            "zh-CN": "针织背心",
            "en": "Knit vest"
          },
          "semanticByLanguage": {
            "zh-CN": "贴合身体的浅蓝针织背心，位于手臂和持物后方",
            "en": "a fitted powder-blue knit vest behind the arms and held object"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-cream-core-adjustments-v1:vest",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "zh-CN": "无头饰",
            "en": "No headwear"
          },
          "semanticByLanguage": {
            "zh-CN": "双臂自然下垂，无持物，不戴头饰",
            "en": "no handheld objects; both short round arms relaxed; no headwear"
          }
        },
        {
          "id": "crown",
          "labelByLanguage": {
            "zh-CN": "雏菊花冠",
            "en": "Daisy crown"
          },
          "semanticByLanguage": {
            "zh-CN": "双臂自然下垂，无持物，小型雏菊花冠贴合帽兜顶部",
            "en": "no handheld objects; both short round arms relaxed; a small daisy crown fitted on top of the hood"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-cream-core-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [
      {
        "when": {
          "appearance": "broad",
          "colors": "blue"
        },
        "code": "classic-fit-colors",
        "messageByLanguage": {
          "zh-CN": "这项调整适配经典包覆体，请先切回经典外观，或移除该调整后切换宽圆外观。",
          "en": "This adjustment fits the classic hood. Choose Classic first, or remove the adjustment before choosing Broader."
        }
      },
      {
        "when": {
          "appearance": "broad",
          "face": "closed"
        },
        "code": "classic-fit-face",
        "messageByLanguage": {
          "zh-CN": "这项调整适配经典包覆体，请先切回经典外观，或移除该调整后切换宽圆外观。",
          "en": "This adjustment fits the classic hood. Choose Classic first, or remove the adjustment before choosing Broader."
        }
      },
      {
        "when": {
          "appearance": "broad",
          "clothing": "vest"
        },
        "code": "classic-fit-clothing",
        "messageByLanguage": {
          "zh-CN": "这项调整适配经典包覆体，请先切回经典外观，或移除该调整后切换宽圆外观。",
          "en": "This adjustment fits the classic hood. Choose Classic first, or remove the adjustment before choosing Broader."
        }
      },
      {
        "when": {
          "appearance": "broad",
          "accessories": "crown"
        },
        "code": "classic-fit-accessories",
        "messageByLanguage": {
          "zh-CN": "这项调整适配经典包覆体，请先切回经典外观，或移除该调整后切换宽圆外观。",
          "en": "This adjustment fits the classic hood. Choose Classic first, or remove the adjustment before choosing Broader."
        }
      },
      {
        "when": {
          "colors": "blue",
          "clothing": "vest"
        },
        "code": "vest-original-colors",
        "messageByLanguage": {
          "zh-CN": "这件背心适配原色身体。请先选择原色或脱下背心。",
          "en": "This vest fits the original body colors. Choose the original color or remove the vest first."
        }
      }
    ],
    "recipes": [
      {
        "id": "classic-original-open-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-cream-core-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-none-crown",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "none",
          "accessories": "crown"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-cream-core-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "head-accessory",
            "asset": {
              "id": "template:muse-cream-core-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-vest-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "vest",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-cream-core-adjustments-v1:vest",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-vest-crown",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "vest",
          "accessories": "crown"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-cream-core-adjustments-v1:vest",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "head-accessory",
            "asset": {
              "id": "template:muse-cream-core-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-closed-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-cream-core-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:muse-cream-core-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-closed-none-crown",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "clothing": "none",
          "accessories": "crown"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-cream-core-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:muse-cream-core-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "head-accessory",
            "asset": {
              "id": "template:muse-cream-core-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-closed-vest-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "clothing": "vest",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-cream-core-adjustments-v1:vest",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:muse-cream-core-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-closed-vest-crown",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "clothing": "vest",
          "accessories": "crown"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-cream-core-adjustments-v1:vest",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:muse-cream-core-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "head-accessory",
            "asset": {
              "id": "template:muse-cream-core-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-blue-open-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "blue",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-cream-core-adjustments-v1:blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-blue-open-none-crown",
        "selections": {
          "appearance": "classic",
          "colors": "blue",
          "face": "open",
          "clothing": "none",
          "accessories": "crown"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-cream-core-adjustments-v1:blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "head-accessory",
            "asset": {
              "id": "template:muse-cream-core-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-blue-closed-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "blue",
          "face": "closed",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-cream-core-adjustments-v1:blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:muse-cream-core-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-blue-closed-none-crown",
        "selections": {
          "appearance": "classic",
          "colors": "blue",
          "face": "closed",
          "clothing": "none",
          "accessories": "crown"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-cream-core-adjustments-v1:blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:muse-cream-core-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "head-accessory",
            "asset": {
              "id": "template:muse-cream-core-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "broad-original-open-none-none",
        "selections": {
          "appearance": "broad",
          "colors": "original",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-cream-core-adjustments-v1:broad",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "muse-rose-flowers-adjustments-v1",
    "version": "v1",
    "family": "muse",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "muse-rose-flowers",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1254,
      "height": 1254
    },
    "identitySemanticsByLanguage": {
      "zh-CN": "单个 Muse 角色，柔软连续绒布包覆体、内嵌桃色脸、小眼睛与短圆肢体。保持头身一体和道具真实承托。",
      "en": "One Muse character with a continuous soft plush hooded body, inset peach face, small eyes and short rounded limbs. Preserve the unified hood/body and natural support of any held prop."
    },
    "defaultOptions": {
      "appearance": "classic",
      "colors": "original",
      "face": "open",
      "clothing": "none",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "classic",
          "labelByLanguage": {
            "zh-CN": "经典包覆体",
            "en": "Classic hood"
          },
          "semanticByLanguage": {
            "zh-CN": "经典连续包覆身体与内嵌脸，双手自然捧白色雏菊花束",
            "en": "a continuous hooded body with an inset face; keep the white daisy bouquet naturally held by both short round hands"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-rose-flowers-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "broad",
          "labelByLanguage": {
            "zh-CN": "宽圆包覆体",
            "en": "Broader hood"
          },
          "semanticByLanguage": {
            "zh-CN": "更宽圆的包覆身体与内嵌脸，双手自然捧白色雏菊花束",
            "en": "a broader squat hooded body with an inset face; keep the white daisy bouquet naturally held by both short round hands"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-rose-flowers-adjustments-v1:broad",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "original",
          "labelByLanguage": {
            "zh-CN": "玫瑰粉",
            "en": "rose pink"
          },
          "semanticByLanguage": {
            "zh-CN": "玫瑰粉短绒身体，肤色与道具保持原色",
            "en": "rose pink short-plush body; preserve peach face and prop colors"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-rose-flowers-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "swatches": [
            "#edafbf"
          ],
          "zoneColors": {
            "plush": "#edafbf"
          }
        },
        {
          "id": "blue",
          "labelByLanguage": {
            "zh-CN": "柔雾蓝",
            "en": "Powder blue"
          },
          "semanticByLanguage": {
            "zh-CN": "仅绒布包覆体和短圆肢体为柔雾蓝，脸部肤色、所有道具保持原色",
            "en": "powder blue plush hood, body and short limbs only; preserve peach skin and all prop colors"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-rose-flowers-adjustments-v1:blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "swatches": [
            "#a2bfdc"
          ],
          "zoneColors": {
            "plush": "#a2bfdc"
          }
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "zh-CN": "睁眼微笑",
            "en": "Open eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "内嵌桃色脸、睁开小圆眼与轻柔微笑",
            "en": "an inset peach face with small open dark eyes and a gentle smile"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-rose-flowers-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "closed",
          "labelByLanguage": {
            "zh-CN": "闭眼微笑",
            "en": "Closed eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "内嵌桃色脸、双眼放松闭合并轻柔微笑，静态表情",
            "en": "an inset peach face with relaxed closed curved eyes and a gentle smile; static expression"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-rose-flowers-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        }
      ],
      "clothing": [
        {
          "id": "none",
          "labelByLanguage": {
            "zh-CN": "无外套",
            "en": "No vest"
          },
          "semanticByLanguage": {
            "zh-CN": "原有绒布包覆身体，不另穿外套",
            "en": "the original plush-covered body without an extra vest"
          }
        },
        {
          "id": "vest",
          "labelByLanguage": {
            "zh-CN": "针织背心",
            "en": "Knit vest"
          },
          "semanticByLanguage": {
            "zh-CN": "贴合身体的浅蓝针织背心，位于手臂和持物后方",
            "en": "a fitted powder-blue knit vest behind the arms and held object"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-rose-flowers-adjustments-v1:vest",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "zh-CN": "无头饰",
            "en": "No headwear"
          },
          "semanticByLanguage": {
            "zh-CN": "双手自然捧白色雏菊花束，不戴头饰",
            "en": "keep the white daisy bouquet naturally held by both short round hands; no headwear"
          }
        },
        {
          "id": "crown",
          "labelByLanguage": {
            "zh-CN": "雏菊花冠",
            "en": "Daisy crown"
          },
          "semanticByLanguage": {
            "zh-CN": "双手自然捧白色雏菊花束，小型雏菊花冠贴合帽兜顶部",
            "en": "keep the white daisy bouquet naturally held by both short round hands; a small daisy crown fitted on top of the hood"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-rose-flowers-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [
      {
        "when": {
          "appearance": "broad",
          "colors": "blue"
        },
        "code": "classic-fit-colors",
        "messageByLanguage": {
          "zh-CN": "这项调整适配经典包覆体，请先切回经典外观，或移除该调整后切换宽圆外观。",
          "en": "This adjustment fits the classic hood. Choose Classic first, or remove the adjustment before choosing Broader."
        }
      },
      {
        "when": {
          "appearance": "broad",
          "face": "closed"
        },
        "code": "classic-fit-face",
        "messageByLanguage": {
          "zh-CN": "这项调整适配经典包覆体，请先切回经典外观，或移除该调整后切换宽圆外观。",
          "en": "This adjustment fits the classic hood. Choose Classic first, or remove the adjustment before choosing Broader."
        }
      },
      {
        "when": {
          "appearance": "broad",
          "clothing": "vest"
        },
        "code": "classic-fit-clothing",
        "messageByLanguage": {
          "zh-CN": "这项调整适配经典包覆体，请先切回经典外观，或移除该调整后切换宽圆外观。",
          "en": "This adjustment fits the classic hood. Choose Classic first, or remove the adjustment before choosing Broader."
        }
      },
      {
        "when": {
          "appearance": "broad",
          "accessories": "crown"
        },
        "code": "classic-fit-accessories",
        "messageByLanguage": {
          "zh-CN": "这项调整适配经典包覆体，请先切回经典外观，或移除该调整后切换宽圆外观。",
          "en": "This adjustment fits the classic hood. Choose Classic first, or remove the adjustment before choosing Broader."
        }
      },
      {
        "when": {
          "colors": "blue",
          "clothing": "vest"
        },
        "code": "vest-original-colors",
        "messageByLanguage": {
          "zh-CN": "这件背心适配原色身体。请先选择原色或脱下背心。",
          "en": "This vest fits the original body colors. Choose the original color or remove the vest first."
        }
      }
    ],
    "recipes": [
      {
        "id": "classic-original-open-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-rose-flowers-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-none-crown",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "none",
          "accessories": "crown"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-rose-flowers-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "head-accessory",
            "asset": {
              "id": "template:muse-rose-flowers-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-vest-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "vest",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-rose-flowers-adjustments-v1:vest",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-vest-crown",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "vest",
          "accessories": "crown"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-rose-flowers-adjustments-v1:vest",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "head-accessory",
            "asset": {
              "id": "template:muse-rose-flowers-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-closed-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-rose-flowers-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:muse-rose-flowers-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-closed-none-crown",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "clothing": "none",
          "accessories": "crown"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-rose-flowers-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:muse-rose-flowers-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "head-accessory",
            "asset": {
              "id": "template:muse-rose-flowers-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-closed-vest-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "clothing": "vest",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-rose-flowers-adjustments-v1:vest",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:muse-rose-flowers-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-closed-vest-crown",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "clothing": "vest",
          "accessories": "crown"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-rose-flowers-adjustments-v1:vest",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:muse-rose-flowers-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "head-accessory",
            "asset": {
              "id": "template:muse-rose-flowers-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-blue-open-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "blue",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-rose-flowers-adjustments-v1:blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-blue-open-none-crown",
        "selections": {
          "appearance": "classic",
          "colors": "blue",
          "face": "open",
          "clothing": "none",
          "accessories": "crown"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-rose-flowers-adjustments-v1:blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "head-accessory",
            "asset": {
              "id": "template:muse-rose-flowers-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-blue-closed-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "blue",
          "face": "closed",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-rose-flowers-adjustments-v1:blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:muse-rose-flowers-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-blue-closed-none-crown",
        "selections": {
          "appearance": "classic",
          "colors": "blue",
          "face": "closed",
          "clothing": "none",
          "accessories": "crown"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-rose-flowers-adjustments-v1:blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:muse-rose-flowers-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "head-accessory",
            "asset": {
              "id": "template:muse-rose-flowers-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "broad-original-open-none-none",
        "selections": {
          "appearance": "broad",
          "colors": "original",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-rose-flowers-adjustments-v1:broad",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "muse-sage-reading-adjustments-v1",
    "version": "v1",
    "family": "muse",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "muse-sage-reading",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1254,
      "height": 1254
    },
    "identitySemanticsByLanguage": {
      "zh-CN": "单个 Muse 角色，柔软连续绒布包覆体、内嵌桃色脸、小眼睛与短圆肢体。保持头身一体和道具真实承托。",
      "en": "One Muse character with a continuous soft plush hooded body, inset peach face, small eyes and short rounded limbs. Preserve the unified hood/body and natural support of any held prop."
    },
    "defaultOptions": {
      "appearance": "classic",
      "colors": "original",
      "face": "open",
      "clothing": "none",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "classic",
          "labelByLanguage": {
            "zh-CN": "经典包覆体",
            "en": "Classic hood"
          },
          "semanticByLanguage": {
            "zh-CN": "经典连续包覆身体与内嵌脸，双手真实承托鼠尾草绿布面书本",
            "en": "a continuous hooded body with an inset face; keep the sage cloth-bound book naturally held by both short round hands"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-sage-reading-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "broad",
          "labelByLanguage": {
            "zh-CN": "宽圆包覆体",
            "en": "Broader hood"
          },
          "semanticByLanguage": {
            "zh-CN": "更宽圆的包覆身体与内嵌脸，双手真实承托鼠尾草绿布面书本",
            "en": "a broader squat hooded body with an inset face; keep the sage cloth-bound book naturally held by both short round hands"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-sage-reading-adjustments-v1:broad",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "original",
          "labelByLanguage": {
            "zh-CN": "鼠尾草绿",
            "en": "sage green"
          },
          "semanticByLanguage": {
            "zh-CN": "鼠尾草绿短绒身体，肤色与道具保持原色",
            "en": "sage green short-plush body; preserve peach face and prop colors"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-sage-reading-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "swatches": [
            "#a6b69a"
          ],
          "zoneColors": {
            "plush": "#a6b69a"
          }
        },
        {
          "id": "blue",
          "labelByLanguage": {
            "zh-CN": "柔雾蓝",
            "en": "Powder blue"
          },
          "semanticByLanguage": {
            "zh-CN": "仅绒布包覆体和短圆肢体为柔雾蓝，脸部肤色、所有道具保持原色",
            "en": "powder blue plush hood, body and short limbs only; preserve peach skin and all prop colors"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-sage-reading-adjustments-v1:blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "swatches": [
            "#a2bfdc"
          ],
          "zoneColors": {
            "plush": "#a2bfdc"
          }
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "zh-CN": "睁眼微笑",
            "en": "Open eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "内嵌桃色脸、睁开小圆眼与轻柔微笑",
            "en": "an inset peach face with small open dark eyes and a gentle smile"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-sage-reading-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "closed",
          "labelByLanguage": {
            "zh-CN": "闭眼微笑",
            "en": "Closed eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "内嵌桃色脸、双眼放松闭合并轻柔微笑，静态表情",
            "en": "an inset peach face with relaxed closed curved eyes and a gentle smile; static expression"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-sage-reading-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        }
      ],
      "clothing": [
        {
          "id": "none",
          "labelByLanguage": {
            "zh-CN": "无外套",
            "en": "No vest"
          },
          "semanticByLanguage": {
            "zh-CN": "原有绒布包覆身体，不另穿外套",
            "en": "the original plush-covered body without an extra vest"
          }
        },
        {
          "id": "vest",
          "labelByLanguage": {
            "zh-CN": "针织背心",
            "en": "Knit vest"
          },
          "semanticByLanguage": {
            "zh-CN": "贴合身体的浅蓝针织背心，位于手臂和持物后方",
            "en": "a fitted powder-blue knit vest behind the arms and held object"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-sage-reading-adjustments-v1:vest",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "zh-CN": "无头饰",
            "en": "No headwear"
          },
          "semanticByLanguage": {
            "zh-CN": "双手真实承托鼠尾草绿布面书本，不戴头饰",
            "en": "keep the sage cloth-bound book naturally held by both short round hands; no headwear"
          }
        },
        {
          "id": "crown",
          "labelByLanguage": {
            "zh-CN": "雏菊花冠",
            "en": "Daisy crown"
          },
          "semanticByLanguage": {
            "zh-CN": "双手真实承托鼠尾草绿布面书本，小型雏菊花冠贴合帽兜顶部",
            "en": "keep the sage cloth-bound book naturally held by both short round hands; a small daisy crown fitted on top of the hood"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-sage-reading-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [
      {
        "when": {
          "appearance": "broad",
          "colors": "blue"
        },
        "code": "classic-fit-colors",
        "messageByLanguage": {
          "zh-CN": "这项调整适配经典包覆体，请先切回经典外观，或移除该调整后切换宽圆外观。",
          "en": "This adjustment fits the classic hood. Choose Classic first, or remove the adjustment before choosing Broader."
        }
      },
      {
        "when": {
          "appearance": "broad",
          "face": "closed"
        },
        "code": "classic-fit-face",
        "messageByLanguage": {
          "zh-CN": "这项调整适配经典包覆体，请先切回经典外观，或移除该调整后切换宽圆外观。",
          "en": "This adjustment fits the classic hood. Choose Classic first, or remove the adjustment before choosing Broader."
        }
      },
      {
        "when": {
          "appearance": "broad",
          "clothing": "vest"
        },
        "code": "classic-fit-clothing",
        "messageByLanguage": {
          "zh-CN": "这项调整适配经典包覆体，请先切回经典外观，或移除该调整后切换宽圆外观。",
          "en": "This adjustment fits the classic hood. Choose Classic first, or remove the adjustment before choosing Broader."
        }
      },
      {
        "when": {
          "appearance": "broad",
          "accessories": "crown"
        },
        "code": "classic-fit-accessories",
        "messageByLanguage": {
          "zh-CN": "这项调整适配经典包覆体，请先切回经典外观，或移除该调整后切换宽圆外观。",
          "en": "This adjustment fits the classic hood. Choose Classic first, or remove the adjustment before choosing Broader."
        }
      },
      {
        "when": {
          "colors": "blue",
          "clothing": "vest"
        },
        "code": "vest-original-colors",
        "messageByLanguage": {
          "zh-CN": "这件背心适配原色身体。请先选择原色或脱下背心。",
          "en": "This vest fits the original body colors. Choose the original color or remove the vest first."
        }
      }
    ],
    "recipes": [
      {
        "id": "classic-original-open-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-sage-reading-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-none-crown",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "none",
          "accessories": "crown"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-sage-reading-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "head-accessory",
            "asset": {
              "id": "template:muse-sage-reading-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-vest-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "vest",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-sage-reading-adjustments-v1:vest",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-vest-crown",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "vest",
          "accessories": "crown"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-sage-reading-adjustments-v1:vest",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "head-accessory",
            "asset": {
              "id": "template:muse-sage-reading-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-closed-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-sage-reading-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:muse-sage-reading-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-closed-none-crown",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "clothing": "none",
          "accessories": "crown"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-sage-reading-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:muse-sage-reading-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "head-accessory",
            "asset": {
              "id": "template:muse-sage-reading-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-closed-vest-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "clothing": "vest",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-sage-reading-adjustments-v1:vest",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:muse-sage-reading-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-closed-vest-crown",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "clothing": "vest",
          "accessories": "crown"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-sage-reading-adjustments-v1:vest",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:muse-sage-reading-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "head-accessory",
            "asset": {
              "id": "template:muse-sage-reading-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-blue-open-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "blue",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-sage-reading-adjustments-v1:blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-blue-open-none-crown",
        "selections": {
          "appearance": "classic",
          "colors": "blue",
          "face": "open",
          "clothing": "none",
          "accessories": "crown"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-sage-reading-adjustments-v1:blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "head-accessory",
            "asset": {
              "id": "template:muse-sage-reading-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-blue-closed-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "blue",
          "face": "closed",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-sage-reading-adjustments-v1:blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:muse-sage-reading-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-blue-closed-none-crown",
        "selections": {
          "appearance": "classic",
          "colors": "blue",
          "face": "closed",
          "clothing": "none",
          "accessories": "crown"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-sage-reading-adjustments-v1:blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:muse-sage-reading-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "head-accessory",
            "asset": {
              "id": "template:muse-sage-reading-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "broad-original-open-none-none",
        "selections": {
          "appearance": "broad",
          "colors": "original",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-sage-reading-adjustments-v1:broad",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "muse-lavender-lantern-adjustments-v1",
    "version": "v1",
    "family": "muse",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "muse-lavender-lantern",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1254,
      "height": 1254
    },
    "identitySemanticsByLanguage": {
      "zh-CN": "单个 Muse 角色，柔软连续绒布包覆体、内嵌桃色脸、小眼睛与短圆肢体。保持头身一体和道具真实承托。",
      "en": "One Muse character with a continuous soft plush hooded body, inset peach face, small eyes and short rounded limbs. Preserve the unified hood/body and natural support of any held prop."
    },
    "defaultOptions": {
      "appearance": "classic",
      "colors": "original",
      "face": "open",
      "clothing": "none",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "classic",
          "labelByLanguage": {
            "zh-CN": "经典包覆体",
            "en": "Classic hood"
          },
          "semanticByLanguage": {
            "zh-CN": "经典连续包覆身体与内嵌脸，双手提暖光黄铜灯笼",
            "en": "a continuous hooded body with an inset face; keep the warm brass lantern naturally held by both short round hands"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-lavender-lantern-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "broad",
          "labelByLanguage": {
            "zh-CN": "宽圆包覆体",
            "en": "Broader hood"
          },
          "semanticByLanguage": {
            "zh-CN": "更宽圆的包覆身体与内嵌脸，双手提暖光黄铜灯笼",
            "en": "a broader squat hooded body with an inset face; keep the warm brass lantern naturally held by both short round hands"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-lavender-lantern-adjustments-v1:broad",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "original",
          "labelByLanguage": {
            "zh-CN": "浅薰衣草紫",
            "en": "pale lavender"
          },
          "semanticByLanguage": {
            "zh-CN": "浅薰衣草紫短绒身体，肤色与道具保持原色",
            "en": "pale lavender short-plush body; preserve peach face and prop colors"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-lavender-lantern-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "swatches": [
            "#d4cbdc"
          ],
          "zoneColors": {
            "plush": "#d4cbdc"
          }
        },
        {
          "id": "blue",
          "labelByLanguage": {
            "zh-CN": "柔雾蓝",
            "en": "Powder blue"
          },
          "semanticByLanguage": {
            "zh-CN": "仅绒布包覆体和短圆肢体为柔雾蓝，脸部肤色、所有道具保持原色",
            "en": "powder blue plush hood, body and short limbs only; preserve peach skin and all prop colors"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-lavender-lantern-adjustments-v1:blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "swatches": [
            "#a2bfdc"
          ],
          "zoneColors": {
            "plush": "#a2bfdc"
          }
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "zh-CN": "睁眼微笑",
            "en": "Open eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "内嵌桃色脸、睁开小圆眼与轻柔微笑",
            "en": "an inset peach face with small open dark eyes and a gentle smile"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-lavender-lantern-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "closed",
          "labelByLanguage": {
            "zh-CN": "闭眼微笑",
            "en": "Closed eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "内嵌桃色脸、双眼放松闭合并轻柔微笑，静态表情",
            "en": "an inset peach face with relaxed closed curved eyes and a gentle smile; static expression"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-lavender-lantern-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        }
      ],
      "clothing": [
        {
          "id": "none",
          "labelByLanguage": {
            "zh-CN": "无外套",
            "en": "No vest"
          },
          "semanticByLanguage": {
            "zh-CN": "原有绒布包覆身体，不另穿外套",
            "en": "the original plush-covered body without an extra vest"
          }
        },
        {
          "id": "vest",
          "labelByLanguage": {
            "zh-CN": "针织背心",
            "en": "Knit vest"
          },
          "semanticByLanguage": {
            "zh-CN": "贴合身体的浅蓝针织背心，位于手臂和持物后方",
            "en": "a fitted powder-blue knit vest behind the arms and held object"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-lavender-lantern-adjustments-v1:vest",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "zh-CN": "无头饰",
            "en": "No headwear"
          },
          "semanticByLanguage": {
            "zh-CN": "双手提暖光黄铜灯笼，不戴头饰",
            "en": "keep the warm brass lantern naturally held by both short round hands; no headwear"
          }
        },
        {
          "id": "crown",
          "labelByLanguage": {
            "zh-CN": "雏菊花冠",
            "en": "Daisy crown"
          },
          "semanticByLanguage": {
            "zh-CN": "双手提暖光黄铜灯笼，小型雏菊花冠贴合帽兜顶部",
            "en": "keep the warm brass lantern naturally held by both short round hands; a small daisy crown fitted on top of the hood"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-lavender-lantern-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [
      {
        "when": {
          "appearance": "broad",
          "colors": "blue"
        },
        "code": "classic-fit-colors",
        "messageByLanguage": {
          "zh-CN": "这项调整适配经典包覆体，请先切回经典外观，或移除该调整后切换宽圆外观。",
          "en": "This adjustment fits the classic hood. Choose Classic first, or remove the adjustment before choosing Broader."
        }
      },
      {
        "when": {
          "appearance": "broad",
          "face": "closed"
        },
        "code": "classic-fit-face",
        "messageByLanguage": {
          "zh-CN": "这项调整适配经典包覆体，请先切回经典外观，或移除该调整后切换宽圆外观。",
          "en": "This adjustment fits the classic hood. Choose Classic first, or remove the adjustment before choosing Broader."
        }
      },
      {
        "when": {
          "appearance": "broad",
          "clothing": "vest"
        },
        "code": "classic-fit-clothing",
        "messageByLanguage": {
          "zh-CN": "这项调整适配经典包覆体，请先切回经典外观，或移除该调整后切换宽圆外观。",
          "en": "This adjustment fits the classic hood. Choose Classic first, or remove the adjustment before choosing Broader."
        }
      },
      {
        "when": {
          "appearance": "broad",
          "accessories": "crown"
        },
        "code": "classic-fit-accessories",
        "messageByLanguage": {
          "zh-CN": "这项调整适配经典包覆体，请先切回经典外观，或移除该调整后切换宽圆外观。",
          "en": "This adjustment fits the classic hood. Choose Classic first, or remove the adjustment before choosing Broader."
        }
      },
      {
        "when": {
          "colors": "blue",
          "clothing": "vest"
        },
        "code": "vest-original-colors",
        "messageByLanguage": {
          "zh-CN": "这件背心适配原色身体。请先选择原色或脱下背心。",
          "en": "This vest fits the original body colors. Choose the original color or remove the vest first."
        }
      }
    ],
    "recipes": [
      {
        "id": "classic-original-open-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-lavender-lantern-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-none-crown",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "none",
          "accessories": "crown"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-lavender-lantern-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "head-accessory",
            "asset": {
              "id": "template:muse-lavender-lantern-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-vest-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "vest",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-lavender-lantern-adjustments-v1:vest",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-vest-crown",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "vest",
          "accessories": "crown"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-lavender-lantern-adjustments-v1:vest",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "head-accessory",
            "asset": {
              "id": "template:muse-lavender-lantern-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-closed-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-lavender-lantern-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:muse-lavender-lantern-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-closed-none-crown",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "clothing": "none",
          "accessories": "crown"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-lavender-lantern-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:muse-lavender-lantern-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "head-accessory",
            "asset": {
              "id": "template:muse-lavender-lantern-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-closed-vest-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "clothing": "vest",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-lavender-lantern-adjustments-v1:vest",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:muse-lavender-lantern-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-closed-vest-crown",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "clothing": "vest",
          "accessories": "crown"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-lavender-lantern-adjustments-v1:vest",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:muse-lavender-lantern-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "head-accessory",
            "asset": {
              "id": "template:muse-lavender-lantern-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-blue-open-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "blue",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-lavender-lantern-adjustments-v1:blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-blue-open-none-crown",
        "selections": {
          "appearance": "classic",
          "colors": "blue",
          "face": "open",
          "clothing": "none",
          "accessories": "crown"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-lavender-lantern-adjustments-v1:blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "head-accessory",
            "asset": {
              "id": "template:muse-lavender-lantern-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-blue-closed-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "blue",
          "face": "closed",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-lavender-lantern-adjustments-v1:blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:muse-lavender-lantern-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-blue-closed-none-crown",
        "selections": {
          "appearance": "classic",
          "colors": "blue",
          "face": "closed",
          "clothing": "none",
          "accessories": "crown"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-lavender-lantern-adjustments-v1:blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:muse-lavender-lantern-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "head-accessory",
            "asset": {
              "id": "template:muse-lavender-lantern-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "broad-original-open-none-none",
        "selections": {
          "appearance": "broad",
          "colors": "original",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-lavender-lantern-adjustments-v1:broad",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "muse-holding-star-adjustments-v1",
    "version": "v1",
    "family": "muse",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "muse-holding-star",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1203,
      "height": 1308
    },
    "identitySemanticsByLanguage": {
      "zh-CN": "单个 Muse 角色，柔软连续绒布包覆体、内嵌桃色脸、小眼睛与短圆肢体。保持头身一体和道具真实承托。",
      "en": "One Muse character with a continuous soft plush hooded body, inset peach face, small eyes and short rounded limbs. Preserve the unified hood/body and natural support of any held prop."
    },
    "defaultOptions": {
      "appearance": "classic",
      "colors": "original",
      "face": "open",
      "clothing": "none",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "classic",
          "labelByLanguage": {
            "zh-CN": "经典包覆体",
            "en": "Classic hood"
          },
          "semanticByLanguage": {
            "zh-CN": "经典连续包覆身体与内嵌脸，坐姿，双手在胸前自然承托黄色星星",
            "en": "a continuous hooded body with an inset face; keep the yellow star naturally supported by both short round hands"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-holding-star-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "broad",
          "labelByLanguage": {
            "zh-CN": "宽圆包覆体",
            "en": "Broader hood"
          },
          "semanticByLanguage": {
            "zh-CN": "更宽圆的包覆身体与内嵌脸，坐姿，双手在胸前自然承托黄色星星",
            "en": "a broader squat hooded body with an inset face; keep the yellow star naturally supported by both short round hands"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-holding-star-adjustments-v1:broad",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "original",
          "labelByLanguage": {
            "zh-CN": "奶油白",
            "en": "cream white"
          },
          "semanticByLanguage": {
            "zh-CN": "奶油白短绒身体，肤色与道具保持原色",
            "en": "cream white short-plush body; preserve peach face and prop colors"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-holding-star-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "swatches": [
            "#f2e6d4"
          ],
          "zoneColors": {
            "plush": "#f2e6d4"
          }
        },
        {
          "id": "blue",
          "labelByLanguage": {
            "zh-CN": "柔雾蓝",
            "en": "Powder blue"
          },
          "semanticByLanguage": {
            "zh-CN": "仅绒布包覆体和短圆肢体为柔雾蓝，脸部肤色、所有道具保持原色",
            "en": "powder blue plush hood, body and short limbs only; preserve peach skin and all prop colors"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-holding-star-adjustments-v1:blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "swatches": [
            "#a2bfdc"
          ],
          "zoneColors": {
            "plush": "#a2bfdc"
          }
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "zh-CN": "睁眼微笑",
            "en": "Open eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "内嵌桃色脸、睁开小圆眼与轻柔微笑",
            "en": "an inset peach face with small open dark eyes and a gentle smile"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-holding-star-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "closed",
          "labelByLanguage": {
            "zh-CN": "闭眼微笑",
            "en": "Closed eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "内嵌桃色脸、双眼放松闭合并轻柔微笑，静态表情",
            "en": "an inset peach face with relaxed closed curved eyes and a gentle smile; static expression"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-holding-star-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        }
      ],
      "clothing": [
        {
          "id": "none",
          "labelByLanguage": {
            "zh-CN": "无外套",
            "en": "No vest"
          },
          "semanticByLanguage": {
            "zh-CN": "原有绒布包覆身体，不另穿外套",
            "en": "the original plush-covered body without an extra vest"
          }
        },
        {
          "id": "vest",
          "labelByLanguage": {
            "zh-CN": "针织背心",
            "en": "Knit vest"
          },
          "semanticByLanguage": {
            "zh-CN": "贴合身体的浅蓝针织背心，位于手臂和持物后方",
            "en": "a fitted powder-blue knit vest behind the arms and held object"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-holding-star-adjustments-v1:vest",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "zh-CN": "无头饰",
            "en": "No headwear"
          },
          "semanticByLanguage": {
            "zh-CN": "坐姿，双手在胸前自然承托黄色星星，不戴头饰",
            "en": "keep the yellow star naturally supported by both short round hands; no headwear"
          }
        },
        {
          "id": "crown",
          "labelByLanguage": {
            "zh-CN": "雏菊花冠",
            "en": "Daisy crown"
          },
          "semanticByLanguage": {
            "zh-CN": "坐姿，双手在胸前自然承托黄色星星，小型雏菊花冠贴合帽兜顶部",
            "en": "keep the yellow star naturally supported by both short round hands; a small daisy crown fitted on top of the hood"
          },
          "thumbnailAssets": [
            {
              "id": "template:muse-holding-star-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [
      {
        "when": {
          "appearance": "broad",
          "colors": "blue"
        },
        "code": "classic-fit-colors",
        "messageByLanguage": {
          "zh-CN": "这项调整适配经典包覆体，请先切回经典外观，或移除该调整后切换宽圆外观。",
          "en": "This adjustment fits the classic hood. Choose Classic first, or remove the adjustment before choosing Broader."
        }
      },
      {
        "when": {
          "appearance": "broad",
          "face": "closed"
        },
        "code": "classic-fit-face",
        "messageByLanguage": {
          "zh-CN": "这项调整适配经典包覆体，请先切回经典外观，或移除该调整后切换宽圆外观。",
          "en": "This adjustment fits the classic hood. Choose Classic first, or remove the adjustment before choosing Broader."
        }
      },
      {
        "when": {
          "appearance": "broad",
          "clothing": "vest"
        },
        "code": "classic-fit-clothing",
        "messageByLanguage": {
          "zh-CN": "这项调整适配经典包覆体，请先切回经典外观，或移除该调整后切换宽圆外观。",
          "en": "This adjustment fits the classic hood. Choose Classic first, or remove the adjustment before choosing Broader."
        }
      },
      {
        "when": {
          "appearance": "broad",
          "accessories": "crown"
        },
        "code": "classic-fit-accessories",
        "messageByLanguage": {
          "zh-CN": "这项调整适配经典包覆体，请先切回经典外观，或移除该调整后切换宽圆外观。",
          "en": "This adjustment fits the classic hood. Choose Classic first, or remove the adjustment before choosing Broader."
        }
      },
      {
        "when": {
          "colors": "blue",
          "clothing": "vest"
        },
        "code": "vest-original-colors",
        "messageByLanguage": {
          "zh-CN": "这件背心适配原色身体。请先选择原色或脱下背心。",
          "en": "This vest fits the original body colors. Choose the original color or remove the vest first."
        }
      }
    ],
    "recipes": [
      {
        "id": "classic-original-open-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-holding-star-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-none-crown",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "none",
          "accessories": "crown"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-holding-star-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "head-accessory",
            "asset": {
              "id": "template:muse-holding-star-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-vest-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "vest",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-holding-star-adjustments-v1:vest",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-vest-crown",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "vest",
          "accessories": "crown"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-holding-star-adjustments-v1:vest",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "head-accessory",
            "asset": {
              "id": "template:muse-holding-star-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-closed-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-holding-star-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:muse-holding-star-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-closed-none-crown",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "clothing": "none",
          "accessories": "crown"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-holding-star-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:muse-holding-star-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "head-accessory",
            "asset": {
              "id": "template:muse-holding-star-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-closed-vest-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "clothing": "vest",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-holding-star-adjustments-v1:vest",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:muse-holding-star-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-closed-vest-crown",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "clothing": "vest",
          "accessories": "crown"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-holding-star-adjustments-v1:vest",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:muse-holding-star-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "head-accessory",
            "asset": {
              "id": "template:muse-holding-star-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-blue-open-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "blue",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-holding-star-adjustments-v1:blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-blue-open-none-crown",
        "selections": {
          "appearance": "classic",
          "colors": "blue",
          "face": "open",
          "clothing": "none",
          "accessories": "crown"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-holding-star-adjustments-v1:blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "head-accessory",
            "asset": {
              "id": "template:muse-holding-star-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "classic-blue-closed-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "blue",
          "face": "closed",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-holding-star-adjustments-v1:blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:muse-holding-star-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "classic-blue-closed-none-crown",
        "selections": {
          "appearance": "classic",
          "colors": "blue",
          "face": "closed",
          "clothing": "none",
          "accessories": "crown"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-holding-star-adjustments-v1:blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:muse-holding-star-adjustments-v1:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "head-accessory",
            "asset": {
              "id": "template:muse-holding-star-adjustments-v1:crown",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "broad-original-open-none-none",
        "selections": {
          "appearance": "broad",
          "colors": "original",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:muse-holding-star-adjustments-v1:broad",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "animal-shiba-adjustments-v1",
    "version": "v1",
    "family": "animals",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "candidate-animals-20261005",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1254,
      "height": 1254
    },
    "identitySemanticsByLanguage": {
      "zh-CN": "单只短绒柴犬，三角立耳、犬科口鼻、四爪和卷尾；保留物种结构。",
      "en": "One short-plush Shiba with upright triangular ears, a canine muzzle, four paws and a curled tail. Preserve species anatomy."
    },
    "defaultOptions": {
      "appearance": "classic",
      "colors": "original",
      "face": "open",
      "clothing": "none",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "classic",
          "labelByLanguage": {
            "zh-CN": "经典坐姿",
            "en": "Classic seated"
          },
          "semanticByLanguage": {
            "zh-CN": "原有圆头坐姿，保留立耳、口鼻、四爪与卷尾结构",
            "en": "the original round-headed seated silhouette with upright ears, muzzle, four paws and curled tail"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-shiba-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "broad",
          "labelByLanguage": {
            "zh-CN": "蓬松宽圆",
            "en": "Fluffy broad silhouette"
          },
          "semanticByLanguage": {
            "zh-CN": "脸颊和身体更蓬松宽圆，仍为原物种坐姿与卷尾",
            "en": "fluffier broader cheeks and torso preserving the original species, seated pose and curled tail"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-shiba-adjustments-v1:appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "original",
          "labelByLanguage": {
            "zh-CN": "赤柴毛色",
            "en": "Red Shiba"
          },
          "semanticByLanguage": {
            "zh-CN": "橙褐色主毛、奶油白口鼻胸口与爪，保留棕眼黑鼻",
            "en": "orange-tan fur with cream-white muzzle, chest and paws; preserve brown eyes and black nose"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-shiba-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "swatches": [
            "#dd9149"
          ],
          "zoneColors": {
            "fur": "#dd9149"
          }
        },
        {
          "id": "alternate",
          "labelByLanguage": {
            "zh-CN": "黑褐毛色",
            "en": "Black and tan"
          },
          "semanticByLanguage": {
            "zh-CN": "炭黑与褐色主毛，保留奶油白口鼻胸口与爪及棕眼黑鼻",
            "en": "charcoal and tan main fur preserving cream-white muzzle, chest and paws, brown eyes and black nose"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-shiba-adjustments-v1:colors",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "swatches": [
            "#302b27"
          ],
          "zoneColors": {
            "fur": "#302b27"
          }
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "zh-CN": "睁眼微笑",
            "en": "Open eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "双眼睁开，保留犬鼻与轻柔微笑",
            "en": "open brown eyes with the original canine nose and gentle smile"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-shiba-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "closed",
          "labelByLanguage": {
            "zh-CN": "闭眼微笑",
            "en": "Closed eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "两条闭合弧形眼睑，保留犬鼻与轻柔微笑；静态表情",
            "en": "two softly closed curved eyelids preserving the canine nose and smile; a static expression"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-shiba-adjustments-v1:face",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "clothing": [
        {
          "id": "none",
          "labelByLanguage": {
            "zh-CN": "无服装",
            "en": "No clothing"
          },
          "semanticByLanguage": {
            "zh-CN": "保留原有毛绒身体，不穿衣物",
            "en": "original fur-covered body without clothing"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-shiba-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "vest",
          "labelByLanguage": {
            "zh-CN": "针织背心",
            "en": "Knit vest"
          },
          "semanticByLanguage": {
            "zh-CN": "贴合肩颈与胸部的鼠尾草绿针织背心，前爪在衣物前方",
            "en": "a fitted sage-green knitted vest supported by the shoulders, with front paws in front of the garment"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-shiba-adjustments-v1:clothing",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "zh-CN": "无配饰",
            "en": "No accessory"
          },
          "semanticByLanguage": {
            "zh-CN": "不佩戴额外配饰",
            "en": "no extra accessory"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-shiba-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "collar",
          "labelByLanguage": {
            "zh-CN": "小吊牌项圈",
            "en": "Collar and tag"
          },
          "semanticByLanguage": {
            "zh-CN": "靛蓝细项圈贴合颈部，小黄铜圆牌位于口鼻下方",
            "en": "a narrow indigo collar fitted around the neck with a small brass tag below the muzzle"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-shiba-adjustments-v1:accessories",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [
      {
        "when": {
          "appearance": "broad",
          "colors": "alternate"
        },
        "code": "appearance-colors-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "appearance": "broad",
          "face": "closed"
        },
        "code": "appearance-face-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "appearance": "broad",
          "clothing": "vest"
        },
        "code": "appearance-clothing-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "appearance": "broad",
          "accessories": "collar"
        },
        "code": "appearance-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "colors": "alternate",
          "face": "closed"
        },
        "code": "colors-face-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "colors": "alternate",
          "clothing": "vest"
        },
        "code": "colors-clothing-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "colors": "alternate",
          "accessories": "collar"
        },
        "code": "colors-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "face": "closed",
          "clothing": "vest"
        },
        "code": "face-clothing-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "face": "closed",
          "accessories": "collar"
        },
        "code": "face-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "clothing": "vest",
          "accessories": "collar"
        },
        "code": "clothing-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      }
    ],
    "recipes": [
      {
        "id": "classic-original-open-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-shiba-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "broad-original-open-none-none",
        "selections": {
          "appearance": "broad",
          "colors": "original",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-shiba-adjustments-v1:appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-alternate-open-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "alternate",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-shiba-adjustments-v1:colors",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-closed-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-shiba-adjustments-v1:face",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-vest-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "vest",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-shiba-adjustments-v1:clothing",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-none-collar",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "none",
          "accessories": "collar"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-shiba-adjustments-v1:accessories",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "animal-white-cat-adjustments-v1",
    "version": "v1",
    "family": "animals",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "animal-white-cat",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1254,
      "height": 1254
    },
    "identitySemanticsByLanguage": {
      "zh-CN": "单只短绒猫，尖耳、猫科口鼻、四爪与尾巴，不改变物种解剖。",
      "en": "One short-plush cat with pointed ears, a feline muzzle, four paws and a tail. Preserve feline anatomy."
    },
    "defaultOptions": {
      "appearance": "classic",
      "colors": "original",
      "face": "open",
      "clothing": "none",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "classic",
          "labelByLanguage": {
            "zh-CN": "经典坐姿",
            "en": "Classic seated"
          },
          "semanticByLanguage": {
            "zh-CN": "原有圆头坐姿，保留该物种耳形、口鼻、四爪与尾部结构",
            "en": "the original round-headed seated silhouette with the species-specific ears, muzzle, four paws and tail structure"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-white-cat-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "broad",
          "labelByLanguage": {
            "zh-CN": "宽圆轮廓",
            "en": "Broader silhouette"
          },
          "semanticByLanguage": {
            "zh-CN": "头颊与坐姿躯干更加宽圆，耳、口鼻和四爪结构不变",
            "en": "a broader round head and seated torso preserving species-specific ears, muzzle and four paws"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-white-cat-adjustments-v1:appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "original",
          "labelByLanguage": {
            "zh-CN": "白色",
            "en": "White"
          },
          "semanticByLanguage": {
            "zh-CN": "白色短绒、灰色耳内与尾部，保留蓝色眼睛和粉鼻",
            "en": "white short fur, gray ear interiors and tail; blue eyes and pink nose"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-white-cat-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "swatches": [
            "#f3f0eb"
          ],
          "zoneColors": {
            "fur": "#f3f0eb"
          }
        },
        {
          "id": "alternate",
          "labelByLanguage": {
            "zh-CN": "黑白毛色",
            "en": "Black and white"
          },
          "semanticByLanguage": {
            "zh-CN": "主毛色为炭黑，口鼻和胸口保持白色，保留蓝眼与粉鼻",
            "en": "charcoal black main fur with a white muzzle and chest, preserving blue eyes and pink nose"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-white-cat-adjustments-v1:colors",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "swatches": [
            "#27282a"
          ],
          "zoneColors": {
            "fur": "#27282a"
          }
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "zh-CN": "睁眼微笑",
            "en": "Open eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "双眼睁开，保留鼻和轻柔微笑",
            "en": "open eyes with the original nose and gentle smile"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-white-cat-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "closed",
          "labelByLanguage": {
            "zh-CN": "闭眼微笑",
            "en": "Closed eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "两条闭合弧形眼睑，保留原有鼻与轻柔微笑；静态表情",
            "en": "two softly closed curved eyelids preserving the original nose and smile; a static expression"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-white-cat-adjustments-v1:face",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "clothing": [
        {
          "id": "none",
          "labelByLanguage": {
            "zh-CN": "无服装",
            "en": "No clothing"
          },
          "semanticByLanguage": {
            "zh-CN": "保留原有毛绒身体，不穿衣物",
            "en": "original fur-covered body without clothing"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-white-cat-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "vest",
          "labelByLanguage": {
            "zh-CN": "针织背心",
            "en": "Knit vest"
          },
          "semanticByLanguage": {
            "zh-CN": "贴合肩颈与胸部的鼠尾草绿针织背心，前爪在衣物前方",
            "en": "a fitted sage-green knitted vest supported by the shoulders, with front paws in front of the garment"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-white-cat-adjustments-v1:clothing",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "zh-CN": "无配饰",
            "en": "No accessory"
          },
          "semanticByLanguage": {
            "zh-CN": "不佩戴额外配饰",
            "en": "no extra accessory"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-white-cat-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "bow",
          "labelByLanguage": {
            "zh-CN": "耳边蝴蝶结",
            "en": "Ear bow"
          },
          "semanticByLanguage": {
            "zh-CN": "淡紫布结固定在耳根处，不遮眼睛",
            "en": "a small lavender fabric bow clipped at the ear base without covering the eyes"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-white-cat-adjustments-v1:accessories",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [
      {
        "when": {
          "appearance": "broad",
          "colors": "alternate"
        },
        "code": "appearance-colors-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "appearance": "broad",
          "face": "closed"
        },
        "code": "appearance-face-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "appearance": "broad",
          "clothing": "vest"
        },
        "code": "appearance-clothing-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "appearance": "broad",
          "accessories": "bow"
        },
        "code": "appearance-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "colors": "alternate",
          "face": "closed"
        },
        "code": "colors-face-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "colors": "alternate",
          "clothing": "vest"
        },
        "code": "colors-clothing-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "colors": "alternate",
          "accessories": "bow"
        },
        "code": "colors-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "face": "closed",
          "clothing": "vest"
        },
        "code": "face-clothing-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "face": "closed",
          "accessories": "bow"
        },
        "code": "face-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "clothing": "vest",
          "accessories": "bow"
        },
        "code": "clothing-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      }
    ],
    "recipes": [
      {
        "id": "classic-original-open-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-white-cat-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "broad-original-open-none-none",
        "selections": {
          "appearance": "broad",
          "colors": "original",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-white-cat-adjustments-v1:appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-alternate-open-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "alternate",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-white-cat-adjustments-v1:colors",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-closed-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-white-cat-adjustments-v1:face",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-vest-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "vest",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-white-cat-adjustments-v1:clothing",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-none-bow",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "none",
          "accessories": "bow"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-white-cat-adjustments-v1:accessories",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "animal-gray-husky-adjustments-v1",
    "version": "v1",
    "family": "animals",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "animal-gray-husky",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1254,
      "height": 1254
    },
    "identitySemanticsByLanguage": {
      "zh-CN": "单只短绒哈士奇，立耳、分明的额头面罩纹、犬科口鼻、四爪和蓬松卷尾；保留物种结构。",
      "en": "One short-plush husky with upright ears, a distinct forehead mask, a canine muzzle, four paws and a fluffy curled tail. Preserve species anatomy."
    },
    "defaultOptions": {
      "appearance": "classic",
      "colors": "original",
      "face": "open",
      "clothing": "none",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "classic",
          "labelByLanguage": {
            "zh-CN": "经典坐姿",
            "en": "Classic seated"
          },
          "semanticByLanguage": {
            "zh-CN": "原有圆头坐姿，保留立耳、口鼻、四爪与卷尾结构",
            "en": "the original round-headed seated silhouette with upright ears, muzzle, four paws and curled tail"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-gray-husky-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "broad",
          "labelByLanguage": {
            "zh-CN": "蓬松宽圆",
            "en": "Fluffy broad silhouette"
          },
          "semanticByLanguage": {
            "zh-CN": "脸颊和身体更蓬松宽圆，仍为原物种坐姿与卷尾",
            "en": "fluffier broader cheeks and torso preserving the original species, seated pose and curled tail"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-gray-husky-adjustments-v1:appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "original",
          "labelByLanguage": {
            "zh-CN": "灰白毛色",
            "en": "Gray and white"
          },
          "semanticByLanguage": {
            "zh-CN": "灰白主毛与额头面罩，保留棕眼黑鼻",
            "en": "gray-white fur with a forehead mask; preserve brown eyes and black nose"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-gray-husky-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "swatches": [
            "#77767a"
          ],
          "zoneColors": {
            "fur": "#77767a"
          }
        },
        {
          "id": "alternate",
          "labelByLanguage": {
            "zh-CN": "铜棕白毛色",
            "en": "Copper and white"
          },
          "semanticByLanguage": {
            "zh-CN": "铜棕与白色主毛，保持额头面罩及棕眼黑鼻",
            "en": "copper-brown and white fur preserving the forehead mask, brown eyes and black nose"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-gray-husky-adjustments-v1:colors",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "swatches": [
            "#8b4b2d"
          ],
          "zoneColors": {
            "fur": "#8b4b2d"
          }
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "zh-CN": "睁眼微笑",
            "en": "Open eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "双眼睁开，保留犬鼻与轻柔微笑",
            "en": "open brown eyes with the original canine nose and gentle smile"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-gray-husky-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "closed",
          "labelByLanguage": {
            "zh-CN": "闭眼微笑",
            "en": "Closed eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "两条闭合弧形眼睑，保留犬鼻与轻柔微笑；静态表情",
            "en": "two softly closed curved eyelids preserving the canine nose and smile; a static expression"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-gray-husky-adjustments-v1:face",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "clothing": [
        {
          "id": "none",
          "labelByLanguage": {
            "zh-CN": "无服装",
            "en": "No clothing"
          },
          "semanticByLanguage": {
            "zh-CN": "保留原有毛绒身体，不穿衣物",
            "en": "original fur-covered body without clothing"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-gray-husky-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "vest",
          "labelByLanguage": {
            "zh-CN": "针织背心",
            "en": "Knit vest"
          },
          "semanticByLanguage": {
            "zh-CN": "贴合肩颈与胸部的柔雾蓝针织背心，前爪在衣物前方",
            "en": "a fitted muted-blue knitted vest supported by the shoulders, with front paws in front of the garment"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-gray-husky-adjustments-v1:clothing",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "zh-CN": "无配饰",
            "en": "No accessory"
          },
          "semanticByLanguage": {
            "zh-CN": "不佩戴额外配饰",
            "en": "no extra accessory"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-gray-husky-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "collar",
          "labelByLanguage": {
            "zh-CN": "小吊牌项圈",
            "en": "Collar and tag"
          },
          "semanticByLanguage": {
            "zh-CN": "砖红细项圈贴合颈部，小黄铜圆牌位于口鼻下方",
            "en": "a narrow rust-red collar fitted around the neck with a small brass tag below the muzzle"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-gray-husky-adjustments-v1:accessories",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [
      {
        "when": {
          "appearance": "broad",
          "colors": "alternate"
        },
        "code": "appearance-colors-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "appearance": "broad",
          "face": "closed"
        },
        "code": "appearance-face-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "appearance": "broad",
          "clothing": "vest"
        },
        "code": "appearance-clothing-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "appearance": "broad",
          "accessories": "collar"
        },
        "code": "appearance-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "colors": "alternate",
          "face": "closed"
        },
        "code": "colors-face-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "colors": "alternate",
          "clothing": "vest"
        },
        "code": "colors-clothing-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "colors": "alternate",
          "accessories": "collar"
        },
        "code": "colors-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "face": "closed",
          "clothing": "vest"
        },
        "code": "face-clothing-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "face": "closed",
          "accessories": "collar"
        },
        "code": "face-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "clothing": "vest",
          "accessories": "collar"
        },
        "code": "clothing-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      }
    ],
    "recipes": [
      {
        "id": "classic-original-open-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-gray-husky-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "broad-original-open-none-none",
        "selections": {
          "appearance": "broad",
          "colors": "original",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-gray-husky-adjustments-v1:appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-alternate-open-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "alternate",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-gray-husky-adjustments-v1:colors",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-closed-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-gray-husky-adjustments-v1:face",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-vest-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "vest",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-gray-husky-adjustments-v1:clothing",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-none-collar",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "none",
          "accessories": "collar"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-gray-husky-adjustments-v1:accessories",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "animal-white-rabbit-adjustments-v2",
    "version": "v2",
    "family": "animals",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "animal-white-rabbit-v98-candidate",
      "artworkVersion": "v2"
    },
    "canvas": {
      "width": 1133,
      "height": 1388
    },
    "identitySemanticsByLanguage": {
      "en": "One seated white rabbit with two full upright ears with pink inner ears, a soft broad muzzle, a round tail, and four paws. Preserve the same rabbit identity, plush fur material, face placement, pose, and silhouette unless a selected appearance option changes the body silhouette. Coat color may change only through its registered body-layer variant; inner-ear pink remains distinct. No human limbs, extra appendages, props, or additional characters.",
      "zh-CN": "单只坐姿白兔，具有完整的两只直立耳朵、粉色耳内、柔软宽口鼻、圆尾巴和四只爪子。保持同一角色身份、绒毛材质、五官位置和姿势；仅当用户选择对应外观时才改变身体轮廓。毛色只使用已注册的身体图层变体；耳内粉色保持独立。不得增加人类四肢、额外附肢、道具或其他角色。"
    },
    "defaultOptions": {
      "appearance": "seated",
      "colors": "snow",
      "face": "open",
      "clothing": "none",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "seated",
          "labelByLanguage": {
            "en": "Seated",
            "zh-CN": "坐姿"
          },
          "semanticByLanguage": {
            "en": "the original compact seated rabbit silhouette",
            "zh-CN": "原本紧凑的坐姿兔子轮廓"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-white-rabbit-adjustments-v2:body-seated-snow",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "plump",
          "labelByLanguage": {
            "en": "Plumper",
            "zh-CN": "更圆润"
          },
          "semanticByLanguage": {
            "en": "a visibly fuller seated silhouette with broader rounded cheeks and torso",
            "zh-CN": "脸颊与躯干更宽、更圆润的坐姿轮廓"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-white-rabbit-adjustments-v2:body-plump-snow",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "snow",
          "labelByLanguage": {
            "en": "Snow white",
            "zh-CN": "雪白"
          },
          "semanticByLanguage": {
            "en": "a cool snow-white plush coat, retaining distinct pink inner ears",
            "zh-CN": "雪白色绒毛，保留清晰的粉色耳内"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-white-rabbit-adjustments-v2:body-seated-snow",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "zoneColors": {
            "body": "#f5f2ee"
          }
        },
        {
          "id": "warm-ivory",
          "labelByLanguage": {
            "en": "Warm ivory",
            "zh-CN": "暖象牙白"
          },
          "semanticByLanguage": {
            "en": "a warm ivory plush coat, with the pink inner ears unchanged",
            "zh-CN": "暖象牙白绒毛，粉色耳内保持原样"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-white-rabbit-adjustments-v2:body-seated-ivory",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "zoneColors": {
            "body": "#f1e2c9"
          }
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "en": "Bright eyes",
            "zh-CN": "明亮眼睛"
          },
          "semanticByLanguage": {
            "en": "large glossy warm-brown open eyes with small brows, pink nose and a tiny mouth",
            "zh-CN": "明亮的暖棕色大眼、细眉、粉鼻和小嘴"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-white-rabbit-adjustments-v2:face-open",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        },
        {
          "id": "closed",
          "labelByLanguage": {
            "en": "Gently closed",
            "zh-CN": "轻轻闭眼"
          },
          "semanticByLanguage": {
            "en": "gently closed curved warm-brown eyes with the same pink nose and tiny mouth",
            "zh-CN": "轻弯的暖棕色闭眼，保留同样的粉鼻和小嘴"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-white-rabbit-adjustments-v2:face-closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        }
      ],
      "clothing": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "No clothing",
            "zh-CN": "无服装"
          },
          "semanticByLanguage": {
            "en": "no clothing",
            "zh-CN": "不穿服装"
          }
        },
        {
          "id": "fitted-knit-bib",
          "labelByLanguage": {
            "en": "Fitted knit bib",
            "zh-CN": "贴合针织小围兜"
          },
          "semanticByLanguage": {
            "en": "a compact lavender-blue rib-knit chest bib collar tucked beneath the rabbit’s muzzle and fitted to the upper chest, ending above the front paws",
            "zh-CN": "紧凑的薰衣草蓝罗纹针织小围兜，贴合上胸并藏在兔子口鼻下方，底边停在前爪上方"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-white-rabbit-adjustments-v2:fitted-bib",
              "version": "v1",
              "purpose": "clothing-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "No accessory",
            "zh-CN": "无配饰"
          },
          "semanticByLanguage": {
            "en": "no accessories",
            "zh-CN": "不佩戴配饰"
          }
        },
        {
          "id": "rose-bow",
          "labelByLanguage": {
            "en": "Rose bow",
            "zh-CN": "玫瑰粉蝴蝶结"
          },
          "semanticByLanguage": {
            "en": "one small dusty-rose fabric bow clipped at the base of the viewer-left ear",
            "zh-CN": "一个小巧的灰玫瑰粉布蝴蝶结，夹在角色左侧耳根"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-white-rabbit-adjustments-v2:bow",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          ]
        },
        {
          "id": "lavender-over-ear-headphones",
          "labelByLanguage": {
            "en": "Lavender over-ear headphones",
            "zh-CN": "薰衣草紫头戴式耳机"
          },
          "semanticByLanguage": {
            "en": "one compact pair of lavender over-ear headphones fitted against both sides of the rabbit’s head; the padded band follows the crown behind the ear roots, both long pink-lined ears remain upright and fully visible, and the cups touch the fur without covering the eyes or muzzle",
            "zh-CN": "一副紧凑的薰衣草紫头戴式耳机，耳罩贴合兔子头部两侧，软垫头梁沿头顶并位于耳根之后；两只粉耳保持直立完整，耳罩贴合绒毛且不遮挡眼睛或口鼻"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-white-rabbit-adjustments-v2:headphones-full",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [
      {
        "when": {
          "accessories": "lavender-over-ear-headphones",
          "appearance": "plump"
        },
        "code": "headphones-seated-only",
        "messageByLanguage": {
          "en": "These headphones were fitted to the original seated rabbit. Return to the seated appearance to use them.",
          "zh-CN": "这副耳机按原坐姿兔子制作。请改回坐姿外观再使用。"
        }
      },
      {
        "when": {
          "accessories": "lavender-over-ear-headphones",
          "colors": "warm-ivory"
        },
        "code": "headphones-snow-only",
        "messageByLanguage": {
          "en": "This headphone variant is available with the snow-white coat.",
          "zh-CN": "此耳机版本仅适配雪白毛色。"
        }
      },
      {
        "when": {
          "accessories": "lavender-over-ear-headphones",
          "face": "closed"
        },
        "code": "headphones-open-face-only",
        "messageByLanguage": {
          "en": "This headphone variant is paired with the bright open-eyed face.",
          "zh-CN": "此耳机版本与明亮睁眼表情配套。"
        }
      },
      {
        "when": {
          "accessories": "lavender-over-ear-headphones",
          "clothing": "fitted-knit-bib"
        },
        "code": "headphones-bib-conflict",
        "messageByLanguage": {
          "en": "The full headphone artwork is paired with no clothing. Remove the bib to use it.",
          "zh-CN": "耳机全角色版本与无服装造型配套。请移除围兜后使用。"
        }
      }
    ],
    "recipes": [
      {
        "id": "seated-snow-open-none-none",
        "selections": {
          "appearance": "seated",
          "colors": "snow",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-white-rabbit-adjustments-v2:body-seated-snow",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:animal-white-rabbit-adjustments-v2:face-open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "plump-snow-open-none-none",
        "selections": {
          "appearance": "plump",
          "colors": "snow",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-white-rabbit-adjustments-v2:body-plump-snow",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:animal-white-rabbit-adjustments-v2:face-open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "seated-ivory-open-none-none",
        "selections": {
          "appearance": "seated",
          "colors": "warm-ivory",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-white-rabbit-adjustments-v2:body-seated-ivory",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:animal-white-rabbit-adjustments-v2:face-open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "plump-ivory-open-none-none",
        "selections": {
          "appearance": "plump",
          "colors": "warm-ivory",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-white-rabbit-adjustments-v2:body-plump-ivory",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:animal-white-rabbit-adjustments-v2:face-open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "seated-snow-closed-none-none",
        "selections": {
          "appearance": "seated",
          "colors": "snow",
          "face": "closed",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-white-rabbit-adjustments-v2:body-seated-snow",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:animal-white-rabbit-adjustments-v2:face-closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "seated-snow-open-fitted-knit-bib-none",
        "selections": {
          "appearance": "seated",
          "colors": "snow",
          "face": "open",
          "clothing": "fitted-knit-bib",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-white-rabbit-adjustments-v2:body-seated-snow",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "clothing-front",
            "asset": {
              "id": "template:animal-white-rabbit-adjustments-v2:fitted-bib",
              "version": "v1",
              "purpose": "clothing-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:animal-white-rabbit-adjustments-v2:face-open",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "seated-snow-open-none-bow",
        "selections": {
          "appearance": "seated",
          "colors": "snow",
          "face": "open",
          "clothing": "none",
          "accessories": "rose-bow"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-white-rabbit-adjustments-v2:body-seated-snow",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:animal-white-rabbit-adjustments-v2:face-open",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:animal-white-rabbit-adjustments-v2:bow",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "seated-ivory-closed-none-none",
        "selections": {
          "appearance": "seated",
          "colors": "warm-ivory",
          "face": "closed",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-white-rabbit-adjustments-v2:body-seated-ivory",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:animal-white-rabbit-adjustments-v2:face-closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "seated-ivory-closed-fitted-knit-bib-none",
        "selections": {
          "appearance": "seated",
          "colors": "warm-ivory",
          "face": "closed",
          "clothing": "fitted-knit-bib",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-white-rabbit-adjustments-v2:body-seated-ivory",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "clothing-front",
            "asset": {
              "id": "template:animal-white-rabbit-adjustments-v2:fitted-bib",
              "version": "v1",
              "purpose": "clothing-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:animal-white-rabbit-adjustments-v2:face-closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "seated-ivory-closed-fitted-knit-bib-bow",
        "selections": {
          "appearance": "seated",
          "colors": "warm-ivory",
          "face": "closed",
          "clothing": "fitted-knit-bib",
          "accessories": "rose-bow"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-white-rabbit-adjustments-v2:body-seated-ivory",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "clothing-front",
            "asset": {
              "id": "template:animal-white-rabbit-adjustments-v2:fitted-bib",
              "version": "v1",
              "purpose": "clothing-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:animal-white-rabbit-adjustments-v2:face-closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:animal-white-rabbit-adjustments-v2:bow",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "seated-snow-open-none-lavender-headphones",
        "selections": {
          "appearance": "seated",
          "colors": "snow",
          "face": "open",
          "clothing": "none",
          "accessories": "lavender-over-ear-headphones"
        },
        "layers": [
          {
            "slot": "whole-character",
            "asset": {
              "id": "template:animal-white-rabbit-adjustments-v2:headphones-full",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      }
    ],
    "rules": {
      "colorApplication": "Registered, image-generated body variants only; no runtime hue tint or inferred mask. Pink inner-ear regions are preserved in each body variant.",
      "composition": "One body layer, one aligned face layer, optional fitted clothing, optional isolated accessory; transparent source-over compositing in declared order."
    },
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "animal-cocoa-bear-adjustments-v1",
    "version": "v1",
    "family": "animals",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "animal-cocoa-bear",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1254,
      "height": 1254
    },
    "identitySemanticsByLanguage": {
      "zh-CN": "单只短绒熊幼崽，圆耳、短口鼻与四只熊爪，不改变物种解剖。",
      "en": "One short-plush bear cub with round ears, a short muzzle and four bear paws. Preserve bear anatomy."
    },
    "defaultOptions": {
      "appearance": "classic",
      "colors": "original",
      "face": "open",
      "clothing": "none",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "classic",
          "labelByLanguage": {
            "zh-CN": "经典坐姿",
            "en": "Classic seated"
          },
          "semanticByLanguage": {
            "zh-CN": "原有圆头坐姿，保留该物种耳形、口鼻、四爪与尾部结构",
            "en": "the original round-headed seated silhouette with the species-specific ears, muzzle, four paws and tail structure"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-cocoa-bear-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "broad",
          "labelByLanguage": {
            "zh-CN": "宽圆轮廓",
            "en": "Broader silhouette"
          },
          "semanticByLanguage": {
            "zh-CN": "头颊与坐姿躯干更加宽圆，耳、口鼻和四爪结构不变",
            "en": "a broader round head and seated torso preserving species-specific ears, muzzle and four paws"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-cocoa-bear-adjustments-v1:appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "original",
          "labelByLanguage": {
            "zh-CN": "可可棕",
            "en": "Cocoa"
          },
          "semanticByLanguage": {
            "zh-CN": "可可棕短绒与浅色口鼻，保留黑鼻",
            "en": "cocoa brown short fur and lighter muzzle; preserve black nose"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-cocoa-bear-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "swatches": [
            "#805036"
          ],
          "zoneColors": {
            "fur": "#805036"
          }
        },
        {
          "id": "alternate",
          "labelByLanguage": {
            "zh-CN": "蜂蜜金",
            "en": "Honey gold"
          },
          "semanticByLanguage": {
            "zh-CN": "蜂蜜金短绒、浅奶油色口鼻和足垫，鼻眼颜色不变",
            "en": "honey-gold short fur with lighter cream muzzle and paw pads; unchanged nose and eye colors"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-cocoa-bear-adjustments-v1:colors",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "swatches": [
            "#d89a45"
          ],
          "zoneColors": {
            "fur": "#d89a45"
          }
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "zh-CN": "睁眼微笑",
            "en": "Open eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "双眼睁开，保留鼻和轻柔微笑",
            "en": "open eyes with the original nose and gentle smile"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-cocoa-bear-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "closed",
          "labelByLanguage": {
            "zh-CN": "闭眼微笑",
            "en": "Closed eyes"
          },
          "semanticByLanguage": {
            "zh-CN": "两条闭合弧形眼睑，保留原有鼻与轻柔微笑；静态表情",
            "en": "two softly closed curved eyelids preserving the original nose and smile; a static expression"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-cocoa-bear-adjustments-v1:face",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "clothing": [
        {
          "id": "none",
          "labelByLanguage": {
            "zh-CN": "无服装",
            "en": "No clothing"
          },
          "semanticByLanguage": {
            "zh-CN": "保留原有毛绒身体，不穿衣物",
            "en": "original fur-covered body without clothing"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-cocoa-bear-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "vest",
          "labelByLanguage": {
            "zh-CN": "针织背心",
            "en": "Knit vest"
          },
          "semanticByLanguage": {
            "zh-CN": "贴合肩颈与胸部的柔雾蓝针织背心，前爪在衣物前方",
            "en": "a fitted muted-blue knitted vest supported by the shoulders, with front paws in front of the garment"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-cocoa-bear-adjustments-v1:clothing",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "zh-CN": "无配饰",
            "en": "No accessory"
          },
          "semanticByLanguage": {
            "zh-CN": "不佩戴额外配饰",
            "en": "no extra accessory"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-cocoa-bear-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "bow",
          "labelByLanguage": {
            "zh-CN": "小领结",
            "en": "Bow tie"
          },
          "semanticByLanguage": {
            "zh-CN": "鼠尾草绿小领结通过窄领带贴合颈部、位于口鼻下方",
            "en": "a small sage-green bow tie secured by a narrow collar below the muzzle"
          },
          "thumbnailAssets": [
            {
              "id": "template:animal-cocoa-bear-adjustments-v1:accessories",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [
      {
        "when": {
          "appearance": "broad",
          "colors": "alternate"
        },
        "code": "appearance-colors-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "appearance": "broad",
          "face": "closed"
        },
        "code": "appearance-face-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "appearance": "broad",
          "clothing": "vest"
        },
        "code": "appearance-clothing-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "appearance": "broad",
          "accessories": "bow"
        },
        "code": "appearance-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "colors": "alternate",
          "face": "closed"
        },
        "code": "colors-face-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "colors": "alternate",
          "clothing": "vest"
        },
        "code": "colors-clothing-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "colors": "alternate",
          "accessories": "bow"
        },
        "code": "colors-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "face": "closed",
          "clothing": "vest"
        },
        "code": "face-clothing-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "face": "closed",
          "accessories": "bow"
        },
        "code": "face-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      },
      {
        "when": {
          "clothing": "vest",
          "accessories": "bow"
        },
        "code": "clothing-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项尚无匹配的组合素材。请先将另一项切回默认，再选择这项调整。",
          "en": "These options do not have a matching combined asset. Restore the other option to its default before choosing this adjustment."
        }
      }
    ],
    "recipes": [
      {
        "id": "classic-original-open-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-cocoa-bear-adjustments-v1:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "broad-original-open-none-none",
        "selections": {
          "appearance": "broad",
          "colors": "original",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-cocoa-bear-adjustments-v1:appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-alternate-open-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "alternate",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-cocoa-bear-adjustments-v1:colors",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-closed-none-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "closed",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-cocoa-bear-adjustments-v1:face",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-vest-none",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "vest",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-cocoa-bear-adjustments-v1:clothing",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "classic-original-open-none-bow",
        "selections": {
          "appearance": "classic",
          "colors": "original",
          "face": "open",
          "clothing": "none",
          "accessories": "bow"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:animal-cocoa-bear-adjustments-v1:accessories",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "candidate-animal-panda-adjustments-v1",
    "version": "v1",
    "family": "animals",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "candidate-animal-panda",
      "artworkVersion": "v2"
    },
    "canvas": {
      "width": 1230,
      "height": 1278
    },
    "anchors": {
      "face.center": {
        "point": [
          615,
          561
        ]
      },
      "body.chest": {
        "point": [
          615,
          930
        ]
      },
      "panda.left-ear.clip": {
        "point": [
          352,
          252
        ]
      }
    },
    "identitySemanticsByLanguage": {
      "en": "One compact plush panda cub with round black ears, paired dark eye patches, a small muzzle and integrated short limbs. Preserve panda species markings and the same identity. No extra arms, hands, legs, feet, props or background.",
      "zh-CN": "一只紧凑的绒面熊猫幼崽，具有圆形黑耳、成对深色眼斑、小口鼻和连为整体的短肢。保持熊猫物种斑纹与同一角色身份。不增加手臂、手、腿、脚、道具或背景。"
    },
    "defaultOptions": {
      "appearance": "seated",
      "colors": "classic",
      "face": "open",
      "clothing": "none",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "seated",
          "labelByLanguage": {
            "en": "Seated",
            "zh-CN": "坐姿"
          },
          "semanticByLanguage": {
            "en": "a compact front-facing seated panda with round ears, paired eye patches and short integrated limbs",
            "zh-CN": "正面紧凑坐姿的熊猫，圆耳、成对眼斑与短小连体四肢清楚"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-panda-adjustments-v1:appearance:seated",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "crouched",
          "labelByLanguage": {
            "en": "Tucked crouch",
            "zh-CN": "蜷坐"
          },
          "semanticByLanguage": {
            "en": "the same panda in a lower softly tucked crouch, preserving its round ears, face markings and plush identity",
            "zh-CN": "同一只熊猫采用更低、更收拢的自然蜷坐姿，保留圆耳、脸部斑纹与绒面身份"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-panda-adjustments-v1:appearance:crouched",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "classic",
          "labelByLanguage": {
            "en": "Ivory and charcoal",
            "zh-CN": "象牙白与炭黑"
          },
          "semanticByLanguage": {
            "en": "warm ivory fur with charcoal-black ears, eye patches, forearms and feet",
            "zh-CN": "暖象牙白体毛，配炭黑色耳朵、眼斑、前臂和脚掌"
          },
          "zoneColors": {
            "ivory-fur": "#F1ECE4",
            "panda-markings": "#242124"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-panda-adjustments-v1:appearance:seated",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "espresso",
          "labelByLanguage": {
            "en": "Cream and espresso",
            "zh-CN": "奶油白与浓咖"
          },
          "semanticByLanguage": {
            "en": "pale cream fur with warm espresso-brown panda ears, eye patches, forearms and feet",
            "zh-CN": "浅奶油色体毛，配暖浓咖色熊猫耳朵、眼斑、前臂和脚掌"
          },
          "zoneColors": {
            "cream-fur": "#FFF0D6",
            "espresso-markings": "#593620"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-panda-adjustments-v1:colors:espresso",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "en": "Open eyes",
            "zh-CN": "睁眼"
          },
          "semanticByLanguage": {
            "en": "large glossy dark eyes centered inside the original black patches, with the small friendly muzzle and smile",
            "zh-CN": "原有黑色眼斑中间的大而明亮的深色眼睛，保留小巧友好的口鼻与微笑"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-panda-adjustments-v1:appearance:seated",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "closed-smile",
          "labelByLanguage": {
            "en": "Closed-eye smile",
            "zh-CN": "闭眼微笑"
          },
          "semanticByLanguage": {
            "en": "two matching warm-ivory curved closed eyelids fitted inside the panda's charcoal eye patches; keep the nose and smile unchanged",
            "zh-CN": "熊猫炭黑眼斑中的两道匹配暖象牙白闭眼弧线；鼻子与微笑保持不变"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-panda-adjustments-v1:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        }
      ],
      "clothing": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "No clothing",
            "zh-CN": "无服装"
          },
          "semanticByLanguage": {
            "en": "no clothing",
            "zh-CN": "不穿服装"
          }
        },
        {
          "id": "knit-vest",
          "labelByLanguage": {
            "en": "Forest knit vest",
            "zh-CN": "森林绿针织背心"
          },
          "semanticByLanguage": {
            "en": "a fitted forest-green knit vest wrapping over the torso and around both shoulders and visible sides, with the panda’s black forearms layered naturally in front",
            "zh-CN": "贴合穿着的森林绿针织背心包覆躯干、双肩与可见侧面，熊猫黑色前臂自然位于衣物前层"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-panda-adjustments-v1:clothing:knit-vest-open-fullbody",
              "version": "v1",
              "purpose": "body-layer"
            },
            {
              "id": "template:candidate-animal-panda-adjustments-v1:clothing:knit-vest-closed-fullbody",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "No accessories",
            "zh-CN": "无配饰"
          },
          "semanticByLanguage": {
            "en": "no accessories",
            "zh-CN": "不佩戴配饰"
          }
        },
        {
          "id": "sage-leaf-clip",
          "labelByLanguage": {
            "en": "Sage leaf clip",
            "zh-CN": "鼠尾草绿叶夹"
          },
          "semanticByLanguage": {
            "en": "a small sage-green two-leaf felt clip attached to the outer upper edge of the panda's left ear",
            "zh-CN": "固定在熊猫左耳外上缘的鼠尾草绿色双叶毛毡小夹"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-panda-adjustments-v1:accessories:sage-leaf-clip",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [
      {
        "when": {
          "appearance": "crouched",
          "clothing": "knit-vest"
        },
        "code": "panda-vest-registered-for-seated-appearance",
        "messageByLanguage": {
          "en": "The vest placement is registered only for the seated Panda artwork. Choose Seated or remove the vest.",
          "zh-CN": "背心定位目前仅登记在熊猫坐姿图上。请切回坐姿或脱下背心。"
        }
      },
      {
        "when": {
          "appearance": "crouched",
          "accessories": "sage-leaf-clip"
        },
        "code": "panda-leaf-clip-registered-for-seated-appearance",
        "messageByLanguage": {
          "en": "The leaf clip placement is registered only for the seated Panda artwork. Choose Seated or remove the clip.",
          "zh-CN": "叶夹定位目前仅登记在熊猫坐姿图上。请切回坐姿或取下叶夹。"
        }
      },
      {
        "when": {
          "colors": "espresso",
          "face": "closed-smile"
        },
        "code": "panda-closed-eyes-registered-for-classic-palette",
        "messageByLanguage": {
          "en": "The closed-eye patch overlay is registered only for the classic palette. Choose the classic palette or open eyes.",
          "zh-CN": "闭眼眼斑层目前仅登记于经典配色。请切回经典配色或选择睁眼。"
        }
      },
      {
        "when": {
          "colors": "espresso",
          "clothing": "knit-vest"
        },
        "code": "panda-vest-registered-for-classic-palette",
        "messageByLanguage": {
          "en": "The vest is registered only for the classic palette. Choose the classic palette or remove the vest.",
          "zh-CN": "背心目前仅登记于经典配色。请切回经典配色或脱下背心。"
        }
      },
      {
        "when": {
          "colors": "espresso",
          "accessories": "sage-leaf-clip"
        },
        "code": "panda-leaf-clip-registered-for-classic-palette",
        "messageByLanguage": {
          "en": "The leaf clip is registered only for the classic palette. Choose the classic palette or remove the clip.",
          "zh-CN": "叶夹目前仅登记于经典配色。请切回经典配色或取下叶夹。"
        }
      }
    ],
    "recipes": [
      {
        "id": "seated-classic-open-none-none",
        "selections": {
          "appearance": "seated",
          "colors": "classic",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body-and-open-face",
            "asset": {
              "id": "template:candidate-animal-panda-adjustments-v1:appearance:seated",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "seated-classic-open-none-sage-leaf-clip",
        "selections": {
          "appearance": "seated",
          "colors": "classic",
          "face": "open",
          "clothing": "none",
          "accessories": "sage-leaf-clip"
        },
        "layers": [
          {
            "slot": "body-and-open-face",
            "asset": {
              "id": "template:candidate-animal-panda-adjustments-v1:appearance:seated",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "left-ear-leaf-clip",
            "asset": {
              "id": "template:candidate-animal-panda-adjustments-v1:accessories:sage-leaf-clip",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "seated-classic-open-knit-vest-none",
        "selections": {
          "appearance": "seated",
          "colors": "classic",
          "face": "open",
          "clothing": "knit-vest",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "complete-body-face-and-worn-vest",
            "asset": {
              "id": "template:candidate-animal-panda-adjustments-v1:clothing:knit-vest-open-fullbody",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "seated-classic-open-knit-vest-sage-leaf-clip",
        "selections": {
          "appearance": "seated",
          "colors": "classic",
          "face": "open",
          "clothing": "knit-vest",
          "accessories": "sage-leaf-clip"
        },
        "layers": [
          {
            "slot": "complete-body-face-and-worn-vest",
            "asset": {
              "id": "template:candidate-animal-panda-adjustments-v1:clothing:knit-vest-open-fullbody",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "left-ear-leaf-clip",
            "asset": {
              "id": "template:candidate-animal-panda-adjustments-v1:accessories:sage-leaf-clip",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "seated-classic-closed-smile-none-none",
        "selections": {
          "appearance": "seated",
          "colors": "classic",
          "face": "closed-smile",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body-and-open-face",
            "asset": {
              "id": "template:candidate-animal-panda-adjustments-v1:appearance:seated",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "closed-eye-patches",
            "asset": {
              "id": "template:candidate-animal-panda-adjustments-v1:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "seated-classic-closed-smile-none-sage-leaf-clip",
        "selections": {
          "appearance": "seated",
          "colors": "classic",
          "face": "closed-smile",
          "clothing": "none",
          "accessories": "sage-leaf-clip"
        },
        "layers": [
          {
            "slot": "body-and-open-face",
            "asset": {
              "id": "template:candidate-animal-panda-adjustments-v1:appearance:seated",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "closed-eye-patches",
            "asset": {
              "id": "template:candidate-animal-panda-adjustments-v1:face:closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "left-ear-leaf-clip",
            "asset": {
              "id": "template:candidate-animal-panda-adjustments-v1:accessories:sage-leaf-clip",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "seated-classic-closed-smile-knit-vest-none",
        "selections": {
          "appearance": "seated",
          "colors": "classic",
          "face": "closed-smile",
          "clothing": "knit-vest",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "complete-body-face-and-worn-vest",
            "asset": {
              "id": "template:candidate-animal-panda-adjustments-v1:clothing:knit-vest-closed-fullbody",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "seated-classic-closed-smile-knit-vest-sage-leaf-clip",
        "selections": {
          "appearance": "seated",
          "colors": "classic",
          "face": "closed-smile",
          "clothing": "knit-vest",
          "accessories": "sage-leaf-clip"
        },
        "layers": [
          {
            "slot": "complete-body-face-and-worn-vest",
            "asset": {
              "id": "template:candidate-animal-panda-adjustments-v1:clothing:knit-vest-closed-fullbody",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "left-ear-leaf-clip",
            "asset": {
              "id": "template:candidate-animal-panda-adjustments-v1:accessories:sage-leaf-clip",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "crouched-classic-open-none-none",
        "selections": {
          "appearance": "crouched",
          "colors": "classic",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body-and-open-face",
            "asset": {
              "id": "template:candidate-animal-panda-adjustments-v1:appearance:crouched",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "seated-espresso-open-none-none",
        "selections": {
          "appearance": "seated",
          "colors": "espresso",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body-and-open-face",
            "asset": {
              "id": "template:candidate-animal-panda-adjustments-v1:colors:espresso",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "candidate-animal-pig-adjustments-v1",
    "version": "v1",
    "family": "animals",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "candidate-animal-pig",
      "artworkVersion": "v2"
    },
    "canvas": {
      "width": 1347,
      "height": 1168
    },
    "anchors": {
      "face.center": {
        "point": [
          674,
          470
        ]
      },
      "pig.left-eye": {
        "point": [
          486,
          431
        ]
      },
      "pig.right-eye": {
        "point": [
          791,
          511
        ]
      },
      "body.chest": {
        "point": [
          680,
          820
        ]
      },
      "pig.left-ear.clip": {
        "point": [
          320,
          215
        ]
      }
    },
    "identitySemanticsByLanguage": {
      "en": "One compact blush-pink plush piglet with two projecting ears, a broad snout with exactly two nostrils, two friendly eyes, short integrated legs with cloven hooves, and a small curled tail. Preserve pig anatomy and the same identity. Do not add extra limbs or human hands.",
      "zh-CN": "一只紧凑的腮红粉色绒面小猪，具有两只突出的耳朵、带两个鼻孔的宽鼻盘、两只友善的眼睛、带分趾蹄的短腿和小卷尾。保持猪的解剖特征与同一角色身份，不增加多余肢体或人手。"
    },
    "defaultOptions": {
      "appearance": "seated",
      "colors": "classic",
      "face": "open",
      "clothing": "none",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "seated",
          "labelByLanguage": {
            "en": "Seated",
            "zh-CN": "坐姿"
          },
          "semanticByLanguage": {
            "en": "the original compact seated plush piglet with visible hooves and curled tail",
            "zh-CN": "原始紧凑坐姿绒面小猪，蹄子和卷尾清楚可见"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-pig-adjustments-v1:body-seated",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "standing",
          "labelByLanguage": {
            "en": "Standing",
            "zh-CN": "站姿"
          },
          "semanticByLanguage": {
            "en": "the same piglet in a natural four-legged standing pose with a clear snout, hooves, and curled tail",
            "zh-CN": "同一小猪采用自然四足站姿，猪鼻、蹄子和卷尾清楚可见"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-pig-adjustments-v1:body-standing",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "classic",
          "labelByLanguage": {
            "en": "Blush rose",
            "zh-CN": "经典粉"
          },
          "semanticByLanguage": {
            "en": "warm blush-pink plush coat with deeper rose snout, inner ears, and hooves",
            "zh-CN": "暖腮红粉色绒毛，配较深玫瑰色鼻盘、耳内与蹄子"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-pig-adjustments-v1:body-seated",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "zoneColors": {
            "coat-palette": "#F2A19C"
          }
        },
        {
          "id": "peach-rose",
          "labelByLanguage": {
            "en": "Peach rose",
            "zh-CN": "桃粉"
          },
          "semanticByLanguage": {
            "en": "a complete alternate soft peach-pink plush palette with berry-rose snout and inner ears",
            "zh-CN": "完整的柔和桃粉色替代配色，配莓果玫瑰色鼻盘和耳内"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-pig-adjustments-v1:body-peach-rose",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "zoneColors": {
            "coat-palette": "#F3AC99"
          }
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "en": "Bright eyes",
            "zh-CN": "睁眼"
          },
          "semanticByLanguage": {
            "en": "two glossy dark open eyes, as in the original seated artwork",
            "zh-CN": "保留坐姿母图中的两只明亮深色睁眼"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-pig-adjustments-v1:body-seated",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "closed-smile",
          "labelByLanguage": {
            "en": "Closed-eye smile",
            "zh-CN": "闭眼微笑"
          },
          "semanticByLanguage": {
            "en": "a complete alternate seated body with both open eyes replaced by integrated curved closed eyelids",
            "zh-CN": "完整坐姿替代母图，已将两只睁眼自然替换成闭眼弧线"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-pig-adjustments-v1:body-closed-smile",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "clothing": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "No clothing",
            "zh-CN": "无服装"
          },
          "semanticByLanguage": {
            "en": "no clothing",
            "zh-CN": "不穿服装"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-pig-adjustments-v1:body-seated",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "knit-vest",
          "labelByLanguage": {
            "en": "Forest knit vest",
            "zh-CN": "森林绿针织背心"
          },
          "semanticByLanguage": {
            "en": "a complete seated body wearing a fitted sage-green knit vest wrapping the shoulders and torso, with the forelegs naturally in front",
            "zh-CN": "完整坐姿替代母图，穿合身鼠尾草绿针织背心并包覆肩部和躯干，前腿自然位于衣服前方"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-pig-adjustments-v1:body-knit-vest",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "No accessories",
            "zh-CN": "无配饰"
          },
          "semanticByLanguage": {
            "en": "no accessories",
            "zh-CN": "不佩戴配饰"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-pig-adjustments-v1:body-seated",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "flower-clip",
          "labelByLanguage": {
            "en": "Marigold flower clip",
            "zh-CN": "金盏花夹"
          },
          "semanticByLanguage": {
            "en": "a compact warm-yellow felt flower clip placed at the outer edge of the viewer-left ear",
            "zh-CN": "固定在画面左侧耳朵外沿的小号暖黄色毛毡花夹"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-pig-adjustments-v1:accessory-flower-clip",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [
      {
        "when": {
          "appearance": "standing",
          "colors": "peach-rose"
        },
        "code": "pig-peach-palette-is-seated-artwork",
        "messageByLanguage": {
          "en": "The peach-rose palette is a complete seated artwork. Choose Seated or the classic palette.",
          "zh-CN": "桃粉配色是一张完整坐姿作品。请切回坐姿或选择经典粉色。"
        }
      },
      {
        "when": {
          "appearance": "standing",
          "face": "closed-smile"
        },
        "code": "pig-closed-eyes-registered-for-seated-artwork",
        "messageByLanguage": {
          "en": "Closed-eye patches are anchored to the seated face. Choose Seated or open eyes.",
          "zh-CN": "闭眼层目前锚定在坐姿面部。请切回坐姿或选择睁眼。"
        }
      },
      {
        "when": {
          "appearance": "standing",
          "clothing": "knit-vest"
        },
        "code": "pig-vest-registered-for-seated-artwork",
        "messageByLanguage": {
          "en": "The vest is fitted to the seated torso. Choose Seated or remove the vest.",
          "zh-CN": "背心目前按坐姿躯干定位。请切回坐姿或脱下背心。"
        }
      },
      {
        "when": {
          "appearance": "standing",
          "accessories": "flower-clip"
        },
        "code": "pig-clip-registered-for-seated-artwork",
        "messageByLanguage": {
          "en": "The flower clip is anchored to the seated ear. Choose Seated or remove the clip.",
          "zh-CN": "花夹目前锚定在坐姿作品的耳朵上。请切回坐姿或取下花夹。"
        }
      },
      {
        "when": {
          "colors": "peach-rose",
          "face": "closed-smile"
        },
        "code": "pig-closed-eyes-matched-to-classic-palette",
        "messageByLanguage": {
          "en": "Closed-eye fur patches are color-matched to the classic pig artwork. Choose Classic or open eyes.",
          "zh-CN": "闭眼绒面替换层按经典粉色母图配色。请切回经典粉或选择睁眼。"
        }
      }
    ],
    "recipes": [
      {
        "id": "seated-classic-open-none-none",
        "selections": {
          "appearance": "seated",
          "colors": "classic",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-pig-adjustments-v1:body-seated",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "seated-classic-open-none-flower-clip",
        "selections": {
          "appearance": "seated",
          "colors": "classic",
          "face": "open",
          "clothing": "none",
          "accessories": "flower-clip"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-pig-adjustments-v1:body-seated",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:candidate-animal-pig-adjustments-v1:accessory-flower-clip",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "seated-classic-open-knit-vest-none",
        "selections": {
          "appearance": "seated",
          "colors": "classic",
          "face": "open",
          "clothing": "knit-vest",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-pig-adjustments-v1:body-knit-vest",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "seated-classic-open-knit-vest-flower-clip",
        "selections": {
          "appearance": "seated",
          "colors": "classic",
          "face": "open",
          "clothing": "knit-vest",
          "accessories": "flower-clip"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-pig-adjustments-v1:body-knit-vest",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:candidate-animal-pig-adjustments-v1:accessory-flower-clip",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "seated-classic-closed-smile-none-none",
        "selections": {
          "appearance": "seated",
          "colors": "classic",
          "face": "closed-smile",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-pig-adjustments-v1:body-closed-smile",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "seated-classic-closed-smile-none-flower-clip",
        "selections": {
          "appearance": "seated",
          "colors": "classic",
          "face": "closed-smile",
          "clothing": "none",
          "accessories": "flower-clip"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-pig-adjustments-v1:body-closed-smile",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:candidate-animal-pig-adjustments-v1:accessory-flower-clip",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "seated-classic-closed-smile-knit-vest-none",
        "selections": {
          "appearance": "seated",
          "colors": "classic",
          "face": "closed-smile",
          "clothing": "knit-vest",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-pig-adjustments-v1:body-closed-knit-vest",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "seated-classic-closed-smile-knit-vest-flower-clip",
        "selections": {
          "appearance": "seated",
          "colors": "classic",
          "face": "closed-smile",
          "clothing": "knit-vest",
          "accessories": "flower-clip"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-pig-adjustments-v1:body-closed-knit-vest",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:candidate-animal-pig-adjustments-v1:accessory-flower-clip",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "standing-classic-open-none-none",
        "selections": {
          "appearance": "standing",
          "colors": "classic",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-pig-adjustments-v1:body-standing",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "seated-peach-open-none-none",
        "selections": {
          "appearance": "seated",
          "colors": "peach-rose",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-pig-adjustments-v1:body-peach-rose",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "candidate-animal-monkey-adjustments-v1",
    "version": "v1",
    "family": "animals",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "candidate-animal-monkey",
      "artworkVersion": "v2"
    },
    "canvas": {
      "width": 1245,
      "height": 1263
    },
    "anchors": {
      "face.center": {
        "point": [
          620,
          470
        ]
      },
      "monkey.left-eye": {
        "point": [
          418,
          452
        ]
      },
      "monkey.right-eye": {
        "point": [
          696,
          500
        ]
      },
      "monkey.chest": {
        "point": [
          620,
          900
        ]
      },
      "monkey.left-ear.clip": {
        "point": [
          165,
          350
        ]
      }
    },
    "identitySemanticsByLanguage": {
      "en": "One compact seated chestnut plush monkey with a tan heart-shaped face, rounded ears, large brown eyes, cream chest patch, short animal hands and feet, and an attached curved tail. Preserve primate anatomy and the same original candidate identity; never add human hands, detached parts, or extra limbs.",
      "zh-CN": "一只紧凑坐姿的栗棕绒面猴，带暖棕心形脸、圆耳、大棕眼、奶油色胸口斑、短动物手足和相连卷尾。保持灵长类结构与同一原创候选身份，不添加人手、脱离主体的部件或多余肢体。"
    },
    "defaultOptions": {
      "appearance": "seated",
      "colors": "chestnut",
      "face": "open",
      "clothing": "none",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "seated",
          "labelByLanguage": {
            "en": "Seated",
            "zh-CN": "坐姿"
          },
          "semanticByLanguage": {
            "en": "the original seated pose, with the full attached tail visible",
            "zh-CN": "原始坐姿，完整相连卷尾清晰可见"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-monkey-adjustments-v1:body-seated",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "standing",
          "labelByLanguage": {
            "en": "Standing",
            "zh-CN": "站姿"
          },
          "semanticByLanguage": {
            "en": "the same monkey in a natural four-limbed standing pose, with a clear attached tail",
            "zh-CN": "同一只猴子的自然四肢站姿，卷尾清楚相连"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-monkey-adjustments-v1:body-standing",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "chestnut",
          "labelByLanguage": {
            "en": "Chestnut",
            "zh-CN": "栗棕"
          },
          "semanticByLanguage": {
            "en": "warm chestnut coat, tan face and chest patch, cocoa details",
            "zh-CN": "暖栗棕毛色、浅棕脸与胸口斑、可可色细节"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-monkey-adjustments-v1:body-seated",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "zoneColors": {
            "coat": "#A7653D"
          }
        },
        {
          "id": "golden-caramel",
          "labelByLanguage": {
            "en": "Golden caramel",
            "zh-CN": "金棕"
          },
          "semanticByLanguage": {
            "en": "golden-caramel body and darker cocoa ears and tail; tan face and chest retained",
            "zh-CN": "金棕色身体、深可可色耳尾，保留浅棕脸和胸口斑"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-monkey-adjustments-v1:body-golden",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "zoneColors": {
            "coat": "#D09A5F"
          }
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "en": "Bright eyes",
            "zh-CN": "明亮睁眼"
          },
          "semanticByLanguage": {
            "en": "the original two large friendly brown open eyes and smile",
            "zh-CN": "原始两只明亮棕色眼睛与微笑"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-monkey-adjustments-v1:body-seated",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "closed-smile",
          "labelByLanguage": {
            "en": "Closed-eye smile",
            "zh-CN": "闭眼微笑"
          },
          "semanticByLanguage": {
            "en": "the same seated monkey with gently closed smiling eyes and the exact same body, mouth, fur, and pose",
            "zh-CN": "同一只坐姿猴子的轻柔闭眼微笑，身体、嘴型、绒毛与姿势保持一致"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-monkey-adjustments-v1:body-closed-face",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "clothing": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "No clothing",
            "zh-CN": "无服装"
          },
          "semanticByLanguage": {
            "en": "no clothing; preserve the original chest patch",
            "zh-CN": "不穿衣服，保留原有胸口斑"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-monkey-adjustments-v1:body-seated",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "knit-vest",
          "labelByLanguage": {
            "en": "Forest knit vest",
            "zh-CN": "森林绿针织背心"
          },
          "semanticByLanguage": {
            "en": "a fitted sleeveless forest-green knit vest with cream piping and two wooden buttons",
            "zh-CN": "贴身森林绿无袖针织背心，带奶油色滚边和两颗木扣"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-monkey-adjustments-v1:clothing-knit-vest",
              "version": "v1",
              "purpose": "clothing-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "None",
            "zh-CN": "无配饰"
          },
          "semanticByLanguage": {
            "en": "no head or body accessory",
            "zh-CN": "不添加头部或身体配饰"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-monkey-adjustments-v1:body-seated",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "blue-bow-clip",
          "labelByLanguage": {
            "en": "Blue bow clip",
            "zh-CN": "蓝色蝴蝶结夹"
          },
          "semanticByLanguage": {
            "en": "one small sky-blue felt bow attached to the outer rim of the viewer-left ear",
            "zh-CN": "一个小号天蓝毛毡蝴蝶结，附着在画面左侧耳朵外缘"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-monkey-adjustments-v1:accessory-blue-bow",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [
      {
        "when": {
          "appearance": "standing",
          "colors": "golden-caramel"
        },
        "code": "monkey-standing-palette-unverified",
        "messageByLanguage": {
          "en": "The standing pose and golden palette have not been composed together. Return to the seated chestnut combination.",
          "zh-CN": "站姿与金棕配色尚未合成验证。请切回坐姿栗棕组合。"
        }
      },
      {
        "when": {
          "appearance": "standing",
          "face": "closed-smile"
        },
        "code": "monkey-standing-face-unverified",
        "messageByLanguage": {
          "en": "The closed-eye patches are aligned to the seated face. Return to Seated or Bright eyes.",
          "zh-CN": "闭眼补丁按坐姿面部定位。请切回坐姿或选择睁眼。"
        }
      },
      {
        "when": {
          "appearance": "standing",
          "clothing": "knit-vest"
        },
        "code": "monkey-standing-clothing-unverified",
        "messageByLanguage": {
          "en": "The vest is fitted to the seated torso. Return to Seated or remove the vest.",
          "zh-CN": "背心按坐姿躯干定位。请切回坐姿或脱下背心。"
        }
      },
      {
        "when": {
          "appearance": "standing",
          "accessories": "blue-bow-clip"
        },
        "code": "monkey-standing-accessory-unverified",
        "messageByLanguage": {
          "en": "The bow clip is positioned for the seated ear. Return to Seated or remove the clip.",
          "zh-CN": "蝴蝶结夹按坐姿耳朵定位。请切回坐姿或取下配饰。"
        }
      },
      {
        "when": {
          "colors": "golden-caramel",
          "face": "closed-smile"
        },
        "code": "monkey-golden-face-unverified",
        "messageByLanguage": {
          "en": "The closed-eye patches are color-matched to the chestnut face. Return to Chestnut or Bright eyes.",
          "zh-CN": "闭眼补丁按栗棕版本的脸部颜色制作。请切回栗棕或选择睁眼。"
        }
      },
      {
        "when": {
          "colors": "golden-caramel",
          "clothing": "knit-vest"
        },
        "code": "monkey-golden-clothing-unverified",
        "messageByLanguage": {
          "en": "The vest is fitted to the chestnut body. Return to Chestnut or remove the vest.",
          "zh-CN": "背心按栗棕版本的身体定位。请切回栗棕或脱下背心。"
        }
      },
      {
        "when": {
          "colors": "golden-caramel",
          "accessories": "blue-bow-clip"
        },
        "code": "monkey-golden-accessory-unverified",
        "messageByLanguage": {
          "en": "The bow clip is positioned for the chestnut artwork. Return to Chestnut or remove the clip.",
          "zh-CN": "蝴蝶结夹按栗棕作品定位。请切回栗棕或取下配饰。"
        }
      }
    ],
    "recipes": [
      {
        "id": "seated-chestnut-open-none-none",
        "selections": {
          "appearance": "seated",
          "colors": "chestnut",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-monkey-adjustments-v1:body-seated",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "seated-chestnut-open-none-blue-bow-clip",
        "selections": {
          "appearance": "seated",
          "colors": "chestnut",
          "face": "open",
          "clothing": "none",
          "accessories": "blue-bow-clip"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-monkey-adjustments-v1:body-seated",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "ear-bow",
            "asset": {
              "id": "template:candidate-animal-monkey-adjustments-v1:accessory-blue-bow",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "seated-chestnut-open-knit-vest-none",
        "selections": {
          "appearance": "seated",
          "colors": "chestnut",
          "face": "open",
          "clothing": "knit-vest",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-monkey-adjustments-v1:body-seated",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "clothing-front",
            "asset": {
              "id": "template:candidate-animal-monkey-adjustments-v1:clothing-knit-vest",
              "version": "v1",
              "purpose": "clothing-layer"
            }
          }
        ]
      },
      {
        "id": "seated-chestnut-open-knit-vest-blue-bow-clip",
        "selections": {
          "appearance": "seated",
          "colors": "chestnut",
          "face": "open",
          "clothing": "knit-vest",
          "accessories": "blue-bow-clip"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-monkey-adjustments-v1:body-seated",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "clothing-front",
            "asset": {
              "id": "template:candidate-animal-monkey-adjustments-v1:clothing-knit-vest",
              "version": "v1",
              "purpose": "clothing-layer"
            }
          },
          {
            "slot": "ear-bow",
            "asset": {
              "id": "template:candidate-animal-monkey-adjustments-v1:accessory-blue-bow",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "seated-chestnut-closed-smile-none-none",
        "selections": {
          "appearance": "seated",
          "colors": "chestnut",
          "face": "closed-smile",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-monkey-adjustments-v1:body-closed-face",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "seated-chestnut-closed-smile-none-blue-bow-clip",
        "selections": {
          "appearance": "seated",
          "colors": "chestnut",
          "face": "closed-smile",
          "clothing": "none",
          "accessories": "blue-bow-clip"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-monkey-adjustments-v1:body-closed-face",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "ear-bow",
            "asset": {
              "id": "template:candidate-animal-monkey-adjustments-v1:accessory-blue-bow",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "seated-chestnut-closed-smile-knit-vest-none",
        "selections": {
          "appearance": "seated",
          "colors": "chestnut",
          "face": "closed-smile",
          "clothing": "knit-vest",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-monkey-adjustments-v1:body-closed-face",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "clothing-front",
            "asset": {
              "id": "template:candidate-animal-monkey-adjustments-v1:clothing-knit-vest",
              "version": "v1",
              "purpose": "clothing-layer"
            }
          }
        ]
      },
      {
        "id": "seated-chestnut-closed-smile-knit-vest-blue-bow-clip",
        "selections": {
          "appearance": "seated",
          "colors": "chestnut",
          "face": "closed-smile",
          "clothing": "knit-vest",
          "accessories": "blue-bow-clip"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-monkey-adjustments-v1:body-closed-face",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "clothing-front",
            "asset": {
              "id": "template:candidate-animal-monkey-adjustments-v1:clothing-knit-vest",
              "version": "v1",
              "purpose": "clothing-layer"
            }
          },
          {
            "slot": "ear-bow",
            "asset": {
              "id": "template:candidate-animal-monkey-adjustments-v1:accessory-blue-bow",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "standing-chestnut-open-none-none",
        "selections": {
          "appearance": "standing",
          "colors": "chestnut",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-monkey-adjustments-v1:body-standing",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "seated-golden-open-none-none",
        "selections": {
          "appearance": "seated",
          "colors": "golden-caramel",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-monkey-adjustments-v1:body-golden",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "candidate-animal-small-bird-adjustments-v1",
    "version": "v1",
    "family": "animals",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "candidate-animal-small-bird",
      "artworkVersion": "v2"
    },
    "canvas": {
      "width": 1374,
      "height": 1145
    },
    "anchors": {
      "bird.crown.clip": {
        "point": [
          780,
          170
        ]
      }
    },
    "identitySemanticsByLanguage": {
      "en": "One small plush songbird with a rounded turquoise-blue head and back, butter-yellow belly, short orange beak, two expressive eyes, paired feathered wings, a short crest, tail feathers, and two small orange feet. Preserve its bird anatomy, silhouette, and plush material; do not add human arms or hands.",
      "zh-CN": "一只小型绒面鸣禽，圆润青蓝色头背、奶油黄腹部、短橙喙、双眼、一对羽翼、短羽冠、尾羽与两只小橙脚。保持鸟类结构、轮廓和毛绒材质，不添加人手或人类手臂。"
    },
    "defaultOptions": {
      "appearance": "standing",
      "colors": "blue-yellow",
      "face": "open",
      "clothing": "none",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "standing",
          "labelByLanguage": {
            "en": "Blue-yellow",
            "zh-CN": "蓝黄原色"
          },
          "semanticByLanguage": {
            "en": "the original standing plush songbird with a compact upright body and visible feet",
            "zh-CN": "原始站姿绒面小鸟，身体紧凑直立且双脚清楚可见"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-small-bird-adjustments-v1:body-base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "turned",
          "labelByLanguage": {
            "en": "Turned pose",
            "zh-CN": "转身姿态"
          },
          "semanticByLanguage": {
            "en": "the same bird in a taller turned three-quarter pose with its feather tail clearly visible",
            "zh-CN": "同一小鸟采用较高的三分之四转身姿态，尾羽清晰可见"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-small-bird-adjustments-v1:body-appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "blue-yellow",
          "labelByLanguage": {
            "en": "Blue and butter yellow",
            "zh-CN": "蓝黄配色"
          },
          "semanticByLanguage": {
            "en": "turquoise-blue plumage with a pale butter-yellow belly and orange beak and feet",
            "zh-CN": "青蓝色羽毛、浅奶油黄色腹部、橙色喙和双脚"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-small-bird-adjustments-v1:body-base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "zoneColors": {
            "plumage": "#36B9C6",
            "belly": "#F8DE9A"
          }
        },
        {
          "id": "teal-cream",
          "labelByLanguage": {
            "en": "Soft teal and cream",
            "zh-CN": "柔青奶油色"
          },
          "semanticByLanguage": {
            "en": "a softer teal-blue plumage with a warm cream-yellow belly, preserving the orange beak and feet",
            "zh-CN": "更柔和的青绿色羽毛和暖奶油黄腹部，保留橙色喙和双脚"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-small-bird-adjustments-v1:body-color",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "zoneColors": {
            "plumage": "#47C4C2",
            "belly": "#FAE6B1"
          }
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "en": "Open eyes",
            "zh-CN": "睁眼"
          },
          "semanticByLanguage": {
            "en": "two glossy brown open eyes and the original small open beak",
            "zh-CN": "两只亮泽棕色睁眼和原有微张小喙"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-small-bird-adjustments-v1:body-base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "closed-smile",
          "labelByLanguage": {
            "en": "Closed-eye smile",
            "zh-CN": "闭眼微笑"
          },
          "semanticByLanguage": {
            "en": "two dark embroidered curved closed eyelids, keeping the beak and blush unchanged",
            "zh-CN": "两条深色刺绣弧形闭眼，喙和腮红保持不变"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-small-bird-adjustments-v1:body-closed",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "clothing": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "No clothing",
            "zh-CN": "无服装"
          },
          "semanticByLanguage": {
            "en": "the original feathered body without clothing",
            "zh-CN": "保留原羽毛身体，不穿服装"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-small-bird-adjustments-v1:body-base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "butter-bib",
          "labelByLanguage": {
            "en": "Butter knit bib",
            "zh-CN": "奶油黄针织围兜"
          },
          "semanticByLanguage": {
            "en": "a fitted butter-yellow knitted bib with teal edging and shoulder straps wrapped over the torso, wings in front, tail and feet clear",
            "zh-CN": "合身奶油黄针织围兜，青蓝滚边与肩带贴合躯干，翅膀位于衣物前方，尾羽和双脚清楚"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-small-bird-adjustments-v1:body-clothing-open",
              "version": "v1",
              "purpose": "body-layer"
            },
            {
              "id": "template:candidate-animal-small-bird-adjustments-v1:body-clothing-closed",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "No accessory",
            "zh-CN": "无配饰"
          },
          "semanticByLanguage": {
            "en": "no extra accessory",
            "zh-CN": "不添加额外配饰"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-small-bird-adjustments-v1:body-base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "coral-flower-clip",
          "labelByLanguage": {
            "en": "Coral flower clip",
            "zh-CN": "珊瑚花夹"
          },
          "semanticByLanguage": {
            "en": "a small coral plush flower clip placed on the upper crown without covering the eyes or feather tuft",
            "zh-CN": "位于头顶上部的小型珊瑚色绒面花夹，不遮挡双眼或羽冠"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-small-bird-adjustments-v1:accessory",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [
      {
        "when": {
          "appearance": "turned",
          "colors": "teal-cream"
        },
        "code": "appearance-colors-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项目前没有匹配的组合素材。先将另一项恢复默认，再切换此项。",
          "en": "These selections have no matching combined asset yet. Restore the other option to its default before changing this one."
        }
      },
      {
        "when": {
          "appearance": "turned",
          "face": "closed-smile"
        },
        "code": "appearance-face-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项目前没有匹配的组合素材。先将另一项恢复默认，再切换此项。",
          "en": "These selections have no matching combined asset yet. Restore the other option to its default before changing this one."
        }
      },
      {
        "when": {
          "appearance": "turned",
          "clothing": "butter-bib"
        },
        "code": "appearance-clothing-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项目前没有匹配的组合素材。先将另一项恢复默认，再切换此项。",
          "en": "These selections have no matching combined asset yet. Restore the other option to its default before changing this one."
        }
      },
      {
        "when": {
          "appearance": "turned",
          "accessories": "coral-flower-clip"
        },
        "code": "appearance-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项目前没有匹配的组合素材。先将另一项恢复默认，再切换此项。",
          "en": "These selections have no matching combined asset yet. Restore the other option to its default before changing this one."
        }
      },
      {
        "when": {
          "colors": "teal-cream",
          "face": "closed-smile"
        },
        "code": "colors-face-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项目前没有匹配的组合素材。先将另一项恢复默认，再切换此项。",
          "en": "These selections have no matching combined asset yet. Restore the other option to its default before changing this one."
        }
      },
      {
        "when": {
          "colors": "teal-cream",
          "clothing": "butter-bib"
        },
        "code": "colors-clothing-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项目前没有匹配的组合素材。先将另一项恢复默认，再切换此项。",
          "en": "These selections have no matching combined asset yet. Restore the other option to its default before changing this one."
        }
      },
      {
        "when": {
          "colors": "teal-cream",
          "accessories": "coral-flower-clip"
        },
        "code": "colors-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项目前没有匹配的组合素材。先将另一项恢复默认，再切换此项。",
          "en": "These selections have no matching combined asset yet. Restore the other option to its default before changing this one."
        }
      }
    ],
    "recipes": [
      {
        "id": "standing-blue-yellow-open-none-none",
        "selections": {
          "appearance": "standing",
          "colors": "blue-yellow",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-small-bird-adjustments-v1:body-base",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "standing-blue-yellow-open-none-coral-flower-clip",
        "selections": {
          "appearance": "standing",
          "colors": "blue-yellow",
          "face": "open",
          "clothing": "none",
          "accessories": "coral-flower-clip"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-small-bird-adjustments-v1:body-base",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:candidate-animal-small-bird-adjustments-v1:accessory",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "standing-blue-yellow-open-butter-bib-none",
        "selections": {
          "appearance": "standing",
          "colors": "blue-yellow",
          "face": "open",
          "clothing": "butter-bib",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-small-bird-adjustments-v1:body-clothing-open",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "standing-blue-yellow-open-butter-bib-coral-flower-clip",
        "selections": {
          "appearance": "standing",
          "colors": "blue-yellow",
          "face": "open",
          "clothing": "butter-bib",
          "accessories": "coral-flower-clip"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-small-bird-adjustments-v1:body-clothing-open",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:candidate-animal-small-bird-adjustments-v1:accessory",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "standing-blue-yellow-closed-smile-none-none",
        "selections": {
          "appearance": "standing",
          "colors": "blue-yellow",
          "face": "closed-smile",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-small-bird-adjustments-v1:body-closed",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "standing-blue-yellow-closed-smile-none-coral-flower-clip",
        "selections": {
          "appearance": "standing",
          "colors": "blue-yellow",
          "face": "closed-smile",
          "clothing": "none",
          "accessories": "coral-flower-clip"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-small-bird-adjustments-v1:body-closed",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:candidate-animal-small-bird-adjustments-v1:accessory",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "standing-blue-yellow-closed-smile-butter-bib-none",
        "selections": {
          "appearance": "standing",
          "colors": "blue-yellow",
          "face": "closed-smile",
          "clothing": "butter-bib",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-small-bird-adjustments-v1:body-clothing-closed",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "standing-blue-yellow-closed-smile-butter-bib-coral-flower-clip",
        "selections": {
          "appearance": "standing",
          "colors": "blue-yellow",
          "face": "closed-smile",
          "clothing": "butter-bib",
          "accessories": "coral-flower-clip"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-small-bird-adjustments-v1:body-clothing-closed",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:candidate-animal-small-bird-adjustments-v1:accessory",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "turned-blue-yellow-open-none-none",
        "selections": {
          "appearance": "turned",
          "colors": "blue-yellow",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-small-bird-adjustments-v1:body-appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "standing-teal-cream-open-none-none",
        "selections": {
          "appearance": "standing",
          "colors": "teal-cream",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-small-bird-adjustments-v1:body-color",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "candidate-animal-penguin-adjustments-v1",
    "version": "v1",
    "family": "animals",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "candidate-animal-penguin",
      "artworkVersion": "v2"
    },
    "canvas": {
      "width": 1230,
      "height": 1278
    },
    "anchors": {
      "penguin.crown.hat": {
        "point": [
          615,
          220
        ]
      }
    },
    "identitySemanticsByLanguage": {
      "en": "One rounded plush penguin with a charcoal head, back and flippers; broad ivory face and belly; short orange beak; two glossy dark eyes; pink blush; and two orange webbed feet. Preserve clear penguin proportions, natural flippers, and soft plush material; do not add human arms or hands.",
      "zh-CN": "一只圆润绒面企鹅，炭灰色头部、背部与鳍肢，宽阔象牙白脸部和腹部，短橙喙、两只亮泽深色眼睛、粉色腮红及橙色蹼足。保持企鹅比例、自然鳍肢和柔软绒面，不添加人类手臂或手掌。"
    },
    "defaultOptions": {
      "appearance": "front",
      "colors": "charcoal-ivory",
      "face": "open",
      "clothing": "none",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "front",
          "labelByLanguage": {
            "en": "Front view",
            "zh-CN": "正面"
          },
          "semanticByLanguage": {
            "en": "the original front-facing rounded penguin with both flippers visible",
            "zh-CN": "原始圆润正面企鹅，双侧鳍肢均可见"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-penguin-adjustments-v1:body-base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "wave",
          "labelByLanguage": {
            "en": "Raised flipper",
            "zh-CN": "抬鳍姿态"
          },
          "semanticByLanguage": {
            "en": "the same penguin in a gentle three-quarter pose with one flipper raised and the other visible",
            "zh-CN": "同一企鹅采用柔和三分之四侧身姿态，一侧鳍肢抬起，另一侧仍清楚可见"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-penguin-adjustments-v1:body-appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "charcoal-ivory",
          "labelByLanguage": {
            "en": "Charcoal and ivory",
            "zh-CN": "炭灰象牙白"
          },
          "semanticByLanguage": {
            "en": "charcoal plush head, back and flippers with an ivory face and belly and orange beak and feet",
            "zh-CN": "炭灰色绒面头背和鳍肢，象牙白脸腹及橙色喙足"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-penguin-adjustments-v1:body-base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "zoneColors": {
            "plumage": "#37343B",
            "belly": "#F4F0E7"
          }
        },
        {
          "id": "navy-ivory",
          "labelByLanguage": {
            "en": "Navy and ivory",
            "zh-CN": "海军蓝象牙白"
          },
          "semanticByLanguage": {
            "en": "deep navy plush head, back and flippers with an ivory face and belly and unchanged orange beak and feet",
            "zh-CN": "深海军蓝绒面头背和鳍肢，象牙白脸腹，橙色喙足不变"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-penguin-adjustments-v1:body-color",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "zoneColors": {
            "plumage": "#172C53",
            "belly": "#F6F1E6"
          }
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "en": "Open eyes",
            "zh-CN": "睁眼"
          },
          "semanticByLanguage": {
            "en": "two glossy dark open eyes and the original short beak",
            "zh-CN": "两只亮泽深色睁眼和原有短喙"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-penguin-adjustments-v1:body-base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "closed-smile",
          "labelByLanguage": {
            "en": "Closed-eye smile",
            "zh-CN": "闭眼微笑"
          },
          "semanticByLanguage": {
            "en": "two dark embroidered curved closed eyelids, keeping the beak and blush unchanged",
            "zh-CN": "两条深色刺绣弧形闭眼，喙和腮红保持不变"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-penguin-adjustments-v1:body-closed",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "clothing": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "No clothing",
            "zh-CN": "无服装"
          },
          "semanticByLanguage": {
            "en": "the original plush body without clothing",
            "zh-CN": "保留原绒面身体，不穿服装"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-penguin-adjustments-v1:body-base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "teal-scarf",
          "labelByLanguage": {
            "en": "Teal knitted scarf",
            "zh-CN": "青绿色针织围巾"
          },
          "semanticByLanguage": {
            "en": "a muted teal scarf naturally wrapped around the neck, with a short front end, both flippers and feet unobstructed",
            "zh-CN": "柔和青绿色围巾自然环绕颈部，短前垂片，双侧鳍肢和双脚无遮挡"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-penguin-adjustments-v1:body-clothing-open",
              "version": "v1",
              "purpose": "body-layer"
            },
            {
              "id": "template:candidate-animal-penguin-adjustments-v1:body-clothing-closed",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "No accessory",
            "zh-CN": "无配饰"
          },
          "semanticByLanguage": {
            "en": "no extra accessory",
            "zh-CN": "不添加额外配饰"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-penguin-adjustments-v1:body-base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "coral-beanie",
          "labelByLanguage": {
            "en": "Coral beanie",
            "zh-CN": "珊瑚色针织帽"
          },
          "semanticByLanguage": {
            "en": "a compact coral knitted beanie seated on top of the head, leaving both eyes and beak clear",
            "zh-CN": "稳固戴在头顶的小型珊瑚色针织帽，双眼和喙清晰可见"
          },
          "thumbnailAssets": [
            {
              "id": "template:candidate-animal-penguin-adjustments-v1:accessory",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [
      {
        "when": {
          "appearance": "wave",
          "colors": "navy-ivory"
        },
        "code": "appearance-colors-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项目前没有匹配的组合素材。先将另一项恢复默认，再切换此项。",
          "en": "These selections have no matching combined asset yet. Restore the other option to its default before changing this one."
        }
      },
      {
        "when": {
          "appearance": "wave",
          "face": "closed-smile"
        },
        "code": "appearance-face-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项目前没有匹配的组合素材。先将另一项恢复默认，再切换此项。",
          "en": "These selections have no matching combined asset yet. Restore the other option to its default before changing this one."
        }
      },
      {
        "when": {
          "appearance": "wave",
          "clothing": "teal-scarf"
        },
        "code": "appearance-clothing-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项目前没有匹配的组合素材。先将另一项恢复默认，再切换此项。",
          "en": "These selections have no matching combined asset yet. Restore the other option to its default before changing this one."
        }
      },
      {
        "when": {
          "appearance": "wave",
          "accessories": "coral-beanie"
        },
        "code": "appearance-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项目前没有匹配的组合素材。先将另一项恢复默认，再切换此项。",
          "en": "These selections have no matching combined asset yet. Restore the other option to its default before changing this one."
        }
      },
      {
        "when": {
          "colors": "navy-ivory",
          "face": "closed-smile"
        },
        "code": "colors-face-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项目前没有匹配的组合素材。先将另一项恢复默认，再切换此项。",
          "en": "These selections have no matching combined asset yet. Restore the other option to its default before changing this one."
        }
      },
      {
        "when": {
          "colors": "navy-ivory",
          "clothing": "teal-scarf"
        },
        "code": "colors-clothing-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项目前没有匹配的组合素材。先将另一项恢复默认，再切换此项。",
          "en": "These selections have no matching combined asset yet. Restore the other option to its default before changing this one."
        }
      },
      {
        "when": {
          "colors": "navy-ivory",
          "accessories": "coral-beanie"
        },
        "code": "colors-accessories-separate-fit",
        "messageByLanguage": {
          "zh-CN": "这两个选项目前没有匹配的组合素材。先将另一项恢复默认，再切换此项。",
          "en": "These selections have no matching combined asset yet. Restore the other option to its default before changing this one."
        }
      }
    ],
    "recipes": [
      {
        "id": "front-charcoal-ivory-open-none-none",
        "selections": {
          "appearance": "front",
          "colors": "charcoal-ivory",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-penguin-adjustments-v1:body-base",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "front-charcoal-ivory-open-none-coral-beanie",
        "selections": {
          "appearance": "front",
          "colors": "charcoal-ivory",
          "face": "open",
          "clothing": "none",
          "accessories": "coral-beanie"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-penguin-adjustments-v1:body-base",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:candidate-animal-penguin-adjustments-v1:accessory",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "front-charcoal-ivory-open-teal-scarf-none",
        "selections": {
          "appearance": "front",
          "colors": "charcoal-ivory",
          "face": "open",
          "clothing": "teal-scarf",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-penguin-adjustments-v1:body-clothing-open",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "front-charcoal-ivory-open-teal-scarf-coral-beanie",
        "selections": {
          "appearance": "front",
          "colors": "charcoal-ivory",
          "face": "open",
          "clothing": "teal-scarf",
          "accessories": "coral-beanie"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-penguin-adjustments-v1:body-clothing-open",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:candidate-animal-penguin-adjustments-v1:accessory",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "front-charcoal-ivory-closed-smile-none-none",
        "selections": {
          "appearance": "front",
          "colors": "charcoal-ivory",
          "face": "closed-smile",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-penguin-adjustments-v1:body-closed",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "front-charcoal-ivory-closed-smile-none-coral-beanie",
        "selections": {
          "appearance": "front",
          "colors": "charcoal-ivory",
          "face": "closed-smile",
          "clothing": "none",
          "accessories": "coral-beanie"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-penguin-adjustments-v1:body-closed",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:candidate-animal-penguin-adjustments-v1:accessory",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "front-charcoal-ivory-closed-smile-teal-scarf-none",
        "selections": {
          "appearance": "front",
          "colors": "charcoal-ivory",
          "face": "closed-smile",
          "clothing": "teal-scarf",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-penguin-adjustments-v1:body-clothing-closed",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "front-charcoal-ivory-closed-smile-teal-scarf-coral-beanie",
        "selections": {
          "appearance": "front",
          "colors": "charcoal-ivory",
          "face": "closed-smile",
          "clothing": "teal-scarf",
          "accessories": "coral-beanie"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-penguin-adjustments-v1:body-clothing-closed",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:candidate-animal-penguin-adjustments-v1:accessory",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "wave-charcoal-ivory-open-none-none",
        "selections": {
          "appearance": "wave",
          "colors": "charcoal-ivory",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-penguin-adjustments-v1:body-appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "front-navy-ivory-open-none-none",
        "selections": {
          "appearance": "front",
          "colors": "navy-ivory",
          "face": "open",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:candidate-animal-penguin-adjustments-v1:body-color",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "human-chestnut-boy-adjustments-v3",
    "version": "v3",
    "family": "humans",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "candidate-humans-20261005",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1254,
      "height": 1254
    },
    "identitySemanticsByLanguage": {
      "en": "One original chibi person. Preserve the same individual, facial identity, skin tone, age impression, body proportions and hand count. The original pose, hand placement, hair arrangement, garment color, expression, clothing and accessories may change only when the selected registered option explicitly names that change. Keep the complete person in a single transparent PNG; do not add another character, typography or a scene.",
      "zh-CN": "单个原创 Q 版人物。保持同一人物、面部身份、肤色、年龄感、身体比例和手部数量。原始姿势、手部位置、发型整理、衣料配色、表情、衣着和配饰，只有在所选注册选项明确说明时才允许改变。完整人物保留在单张透明 PNG 中；不得增加其他人物、文字或场景。"
    },
    "defaultOptions": {
      "appearance": "layered-chestnut",
      "colors": "teal",
      "face": "open",
      "clothing": "knit-top",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "layered-chestnut",
          "labelByLanguage": {
            "en": "Original hairstyle",
            "zh-CN": "原有发型"
          },
          "semanticByLanguage": {
            "en": "the original hairstyle and hair color; preserve the face, body scale, pose and outfit",
            "zh-CN": "保留原有发型和发色，脸、体型比例、姿势与衣着不变"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-chestnut-boy-adjustments-v3:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "neat-side-swept-crop",
          "labelByLanguage": {
            "en": "Neat side-swept crop",
            "zh-CN": "整齐侧梳短发"
          },
          "semanticByLanguage": {
            "en": "the same person with a neat short side-swept crop with a clearly open forehead wedge; preserve chestnut hair color, face, expression, knit top, clasped hands and standing pose",
            "zh-CN": "同一人物，整齐的短款侧梳发型，额前留出明显侧向分开的额头区域；保留栗色发色、脸、表情、针织上衣、交握双手与站姿"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-chestnut-boy-adjustments-v3:appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "laptop-ready-standing",
          "labelByLanguage": {
            "en": "Standing, ready to hold laptop",
            "zh-CN": "站姿，准备托住笔电"
          },
          "semanticByLanguage": {
            "en": "the same person standing upright with the same lower-body pose, chestnut hair, face, teal knit top, ivory shorts and light shoes; move both forearms forward and apart at mid-torso, with relaxed open palms facing upward and fingers naturally curved to support a laptop; hands are empty in this option",
            "zh-CN": "同一人物保持直立站姿、下半身姿势、栗色头发、面容、青绿针织上衣、米白短裤和浅色鞋不变；仅将双前臂调整到躯干前方并自然分开，双掌放松朝上、手指微弯以便托住笔电；此选项双手保持空置"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-chestnut-boy-adjustments-v3:ready-pose",
              "version": "v2",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "teal",
          "labelByLanguage": {
            "en": "Teal knit",
            "zh-CN": "青绿色针织"
          },
          "semanticByLanguage": {
            "en": "the original teal knit top color; preserve skin, hair and all other garment zones",
            "zh-CN": "保留原有青绿色针织上衣配色；肤色、头发和其他衣物区域不变"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-chestnut-boy-adjustments-v3:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "zoneColors": {
            "garment": "#38AFA4"
          }
        },
        {
          "id": "periwinkle",
          "labelByLanguage": {
            "en": "Periwinkle knit",
            "zh-CN": "薰衣草蓝针织"
          },
          "semanticByLanguage": {
            "en": "periwinkle knit top; preserve original skin, chestnut hair, shorts and shoes",
            "zh-CN": "薰衣草蓝针织上衣；保留原肤色、栗色头发、短裤和鞋子"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-chestnut-boy-adjustments-v3:colors",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "zoneColors": {
            "garment": "#9D9BE8"
          }
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "en": "Open-eye smile",
            "zh-CN": "睁眼微笑"
          },
          "semanticByLanguage": {
            "en": "the original open eyes and gentle smile",
            "zh-CN": "保留原有睁眼与柔和微笑"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-chestnut-boy-adjustments-v3:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "closed",
          "labelByLanguage": {
            "en": "Closed-eye smile",
            "zh-CN": "闭眼微笑"
          },
          "semanticByLanguage": {
            "en": "two matching gentle closed eyes; preserve the original smile, face shape, hair, outfit and clasped hands",
            "zh-CN": "两只对称柔和的闭合眼睛；保留原有微笑、脸型、发型、衣着和交握双手"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-chestnut-boy-adjustments-v3:face",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "clothing": [
        {
          "id": "knit-top",
          "labelByLanguage": {
            "en": "Original outfit",
            "zh-CN": "原有衣着"
          },
          "semanticByLanguage": {
            "en": "the original outfit with its fit and natural hand occlusion",
            "zh-CN": "保留原有衣着、合身关系与手部自然遮挡"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-chestnut-boy-adjustments-v3:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "navy-vest",
          "labelByLanguage": {
            "en": "Navy vest",
            "zh-CN": "藏青背心"
          },
          "semanticByLanguage": {
            "en": "a fitted navy vest layered over the original knit top, following the torso contour; preserve clasped-hand occlusion and pose",
            "zh-CN": "在原针织上衣外穿合体藏青背心，沿躯干贴合；保留交握双手的遮挡关系与姿势"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-chestnut-boy-adjustments-v3:clothing",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "Original accessories",
            "zh-CN": "原有配饰"
          },
          "semanticByLanguage": {
            "en": "no added accessories",
            "zh-CN": "不增加配饰"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-chestnut-boy-adjustments-v3:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "mustard-beret",
          "labelByLanguage": {
            "en": "Mustard beret",
            "zh-CN": "芥末黄贝雷帽"
          },
          "semanticByLanguage": {
            "en": "one a fitted mustard-yellow wool beret following the hair and head perspective without covering the eyes",
            "zh-CN": "贴合头顶并顺应发型和透视的芥末黄色羊毛贝雷帽，不遮眼睛"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-chestnut-boy-adjustments-v3:accessories",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "laptop-held",
          "labelByLanguage": {
            "en": "Holding a laptop",
            "zh-CN": "手持笔电"
          },
          "semanticByLanguage": {
            "en": "a compact open silver laptop held at mid-torso; both palms visibly support the lower corners of its base, fingers contact and naturally wrap the edges, with clear hand-object occlusion and no floating parts",
            "zh-CN": "一台在躯干中部打开的紧凑银色笔电；双掌清楚托住底座下方两角，手指与边缘接触并自然环抱，手与物体有明确遮挡关系，笔电不悬浮"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-chestnut-boy-adjustments-v3:held-prop",
              "version": "v2",
              "purpose": "body-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [
      {
        "when": {
          "appearance": "neat-side-swept-crop",
          "colors": "periwinkle"
        },
        "code": "appearance-colors-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "appearance": "neat-side-swept-crop",
          "face": "closed"
        },
        "code": "appearance-face-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "appearance": "neat-side-swept-crop",
          "clothing": "navy-vest"
        },
        "code": "appearance-clothing-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "appearance": "neat-side-swept-crop",
          "accessories": "mustard-beret"
        },
        "code": "appearance-accessories-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "colors": "periwinkle",
          "face": "closed"
        },
        "code": "colors-face-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "colors": "periwinkle",
          "clothing": "navy-vest"
        },
        "code": "colors-clothing-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "colors": "periwinkle",
          "accessories": "mustard-beret"
        },
        "code": "colors-accessories-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "face": "closed",
          "clothing": "navy-vest"
        },
        "code": "face-clothing-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "face": "closed",
          "accessories": "mustard-beret"
        },
        "code": "face-accessories-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "clothing": "navy-vest",
          "accessories": "mustard-beret"
        },
        "code": "clothing-accessories-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "laptop-ready-standing": "laptop-ready-standing",
          "colors": "periwinkle"
        },
        "code": "ready-pose-colors-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "This complete-character branch is compatible only with the registered ready-to-hold pose and its matching prop. Return to the default choices before changing another field.",
          "zh-CN": "此完整角色分支只兼容对应的“准备托持”姿势与配套道具。更改其他字段前，请恢复默认选项。"
        }
      },
      {
        "when": {
          "laptop-ready-standing": "laptop-ready-standing",
          "face": "closed"
        },
        "code": "ready-pose-face-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "This complete-character branch is compatible only with the registered ready-to-hold pose and its matching prop. Return to the default choices before changing another field.",
          "zh-CN": "此完整角色分支只兼容对应的“准备托持”姿势与配套道具。更改其他字段前，请恢复默认选项。"
        }
      },
      {
        "when": {
          "laptop-ready-standing": "laptop-ready-standing",
          "clothing": "navy-vest"
        },
        "code": "ready-pose-clothing-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "This complete-character branch is compatible only with the registered ready-to-hold pose and its matching prop. Return to the default choices before changing another field.",
          "zh-CN": "此完整角色分支只兼容对应的“准备托持”姿势与配套道具。更改其他字段前，请恢复默认选项。"
        }
      },
      {
        "when": {
          "laptop-ready-standing": "laptop-ready-standing",
          "accessories": "mustard-beret"
        },
        "code": "ready-pose-accessories-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "This complete-character branch is compatible only with the registered ready-to-hold pose and its matching prop. Return to the default choices before changing another field.",
          "zh-CN": "此完整角色分支只兼容对应的“准备托持”姿势与配套道具。更改其他字段前，请恢复默认选项。"
        }
      },
      {
        "when": {
          "laptop-held": "laptop-held",
          "appearance": "layered-chestnut"
        },
        "code": "held-prop-appearance-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "This complete-character branch is compatible only with the registered ready-to-hold pose and its matching prop. Return to the default choices before changing another field.",
          "zh-CN": "此完整角色分支只兼容对应的“准备托持”姿势与配套道具。更改其他字段前，请恢复默认选项。"
        }
      },
      {
        "when": {
          "laptop-held": "laptop-held",
          "appearance": "neat-side-swept-crop"
        },
        "code": "held-prop-appearance-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "This complete-character branch is compatible only with the registered ready-to-hold pose and its matching prop. Return to the default choices before changing another field.",
          "zh-CN": "此完整角色分支只兼容对应的“准备托持”姿势与配套道具。更改其他字段前，请恢复默认选项。"
        }
      },
      {
        "when": {
          "laptop-held": "laptop-held",
          "colors": "periwinkle"
        },
        "code": "held-prop-colors-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "This complete-character branch is compatible only with the registered ready-to-hold pose and its matching prop. Return to the default choices before changing another field.",
          "zh-CN": "此完整角色分支只兼容对应的“准备托持”姿势与配套道具。更改其他字段前，请恢复默认选项。"
        }
      },
      {
        "when": {
          "laptop-held": "laptop-held",
          "face": "closed"
        },
        "code": "held-prop-face-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "This complete-character branch is compatible only with the registered ready-to-hold pose and its matching prop. Return to the default choices before changing another field.",
          "zh-CN": "此完整角色分支只兼容对应的“准备托持”姿势与配套道具。更改其他字段前，请恢复默认选项。"
        }
      },
      {
        "when": {
          "laptop-held": "laptop-held",
          "clothing": "navy-vest"
        },
        "code": "held-prop-clothing-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "This complete-character branch is compatible only with the registered ready-to-hold pose and its matching prop. Return to the default choices before changing another field.",
          "zh-CN": "此完整角色分支只兼容对应的“准备托持”姿势与配套道具。更改其他字段前，请恢复默认选项。"
        }
      },
      {
        "when": {
          "laptop-held": "laptop-held",
          "accessories": "mustard-beret"
        },
        "code": "held-prop-accessories-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "This complete-character branch is compatible only with the registered ready-to-hold pose and its matching prop. Return to the default choices before changing another field.",
          "zh-CN": "此完整角色分支只兼容对应的“准备托持”姿势与配套道具。更改其他字段前，请恢复默认选项。"
        }
      }
    ],
    "recipes": [
      {
        "id": "chestnut-boy-default",
        "selections": {
          "appearance": "layered-chestnut",
          "colors": "teal",
          "face": "open",
          "clothing": "knit-top",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "whole-character",
            "asset": {
              "id": "template:human-chestnut-boy-adjustments-v3:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "chestnut-boy-appearance",
        "selections": {
          "appearance": "neat-side-swept-crop",
          "colors": "teal",
          "face": "open",
          "clothing": "knit-top",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "whole-character",
            "asset": {
              "id": "template:human-chestnut-boy-adjustments-v3:appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "chestnut-boy-colors",
        "selections": {
          "appearance": "layered-chestnut",
          "colors": "periwinkle",
          "face": "open",
          "clothing": "knit-top",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "whole-character",
            "asset": {
              "id": "template:human-chestnut-boy-adjustments-v3:colors",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "chestnut-boy-face",
        "selections": {
          "appearance": "layered-chestnut",
          "colors": "teal",
          "face": "closed",
          "clothing": "knit-top",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "whole-character",
            "asset": {
              "id": "template:human-chestnut-boy-adjustments-v3:face",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "chestnut-boy-clothing",
        "selections": {
          "appearance": "layered-chestnut",
          "colors": "teal",
          "face": "open",
          "clothing": "navy-vest",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "whole-character",
            "asset": {
              "id": "template:human-chestnut-boy-adjustments-v3:clothing",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "chestnut-boy-accessories",
        "selections": {
          "appearance": "layered-chestnut",
          "colors": "teal",
          "face": "open",
          "clothing": "knit-top",
          "accessories": "mustard-beret"
        },
        "layers": [
          {
            "slot": "whole-character",
            "asset": {
              "id": "template:human-chestnut-boy-adjustments-v3:accessories",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "chestnut-boy-ready-to-hold",
        "selections": {
          "appearance": "laptop-ready-standing",
          "colors": "teal",
          "face": "open",
          "clothing": "knit-top",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "whole-character",
            "asset": {
              "id": "template:human-chestnut-boy-adjustments-v3:ready-pose",
              "version": "v2",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "chestnut-boy-holding-prop",
        "selections": {
          "appearance": "laptop-ready-standing",
          "colors": "teal",
          "face": "open",
          "clothing": "knit-top",
          "accessories": "laptop-held"
        },
        "layers": [
          {
            "slot": "whole-character",
            "asset": {
              "id": "template:human-chestnut-boy-adjustments-v3:held-prop",
              "version": "v2",
              "purpose": "body-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "human-bun-girl-adjustments-v3",
    "version": "v3",
    "family": "humans",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "human-bun-yellow",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1254,
      "height": 1254
    },
    "identitySemanticsByLanguage": {
      "en": "One original chibi person. Preserve the same individual, facial identity, skin tone, age impression, body proportions and hand count. The original pose, hand placement, hair arrangement, garment color, expression, clothing and accessories may change only when the selected registered option explicitly names that change. Keep the complete person in a single transparent PNG; do not add another character, typography or a scene.",
      "zh-CN": "单个原创 Q 版人物。保持同一人物、面部身份、肤色、年龄感、身体比例和手部数量。原始姿势、手部位置、发型整理、衣料配色、表情、衣着和配饰，只有在所选注册选项明确说明时才允许改变。完整人物保留在单张透明 PNG 中；不得增加其他人物、文字或场景。"
    },
    "defaultOptions": {
      "appearance": "high-bun",
      "colors": "warm-yellow",
      "face": "open",
      "clothing": "hoodie",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "high-bun",
          "labelByLanguage": {
            "en": "Original hairstyle",
            "zh-CN": "原有发型"
          },
          "semanticByLanguage": {
            "en": "the original hairstyle and hair color; preserve the face, body scale, pose and outfit",
            "zh-CN": "保留原有发型和发色，脸、体型比例、姿势与衣着不变"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-bun-girl-adjustments-v3:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "twin-buns",
          "labelByLanguage": {
            "en": "Twin buns",
            "zh-CN": "双丸子头"
          },
          "semanticByLanguage": {
            "en": "the same person with hair arranged into two balanced buns; preserve face, waving gesture, outfit and shoes",
            "zh-CN": "同一人物，头发整理为对称双丸子头；保留脸、挥手手势、衣服和鞋子"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-bun-girl-adjustments-v3:appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "camera-ready-standing",
          "labelByLanguage": {
            "en": "Standing, ready to hold camera",
            "zh-CN": "站姿，准备托住相机"
          },
          "semanticByLanguage": {
            "en": "the same girl standing upright with the same legs, high chestnut bun, face, warm-yellow hoodie, ivory shorts and yellow-white shoes; lower the waving arm and bring both forearms forward to chest height, with relaxed hands open around a small empty grip space; this option contains no camera",
            "zh-CN": "同一女孩保持直立站姿、双腿姿势、高栗色丸子头、面容、暖黄色连帽衫、米白短裤和黄白鞋不变；放下挥手的手臂并将双前臂调整到胸前高度，双手放松、围出一处空的握持空间；此选项不含相机"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-bun-girl-adjustments-v3:ready-pose",
              "version": "v2",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "warm-yellow",
          "labelByLanguage": {
            "en": "Warm-yellow hoodie",
            "zh-CN": "暖黄色连帽衫"
          },
          "semanticByLanguage": {
            "en": "the original warm-yellow hoodie color; preserve skin, hair and all other garment zones",
            "zh-CN": "保留原有暖黄色连帽衫配色；肤色、头发和其他衣物区域不变"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-bun-girl-adjustments-v3:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "zoneColors": {
            "garment": "#F2BE43"
          }
        },
        {
          "id": "lavender",
          "labelByLanguage": {
            "en": "Lavender hoodie",
            "zh-CN": "薰衣草紫连帽衫"
          },
          "semanticByLanguage": {
            "en": "only the hoodie changes to soft lavender; preserve skin, chestnut hair, shorts, shoes and waving pose",
            "zh-CN": "仅连帽衫改为柔和薰衣草紫；保留肤色、栗色头发、短裤、鞋和挥手姿势"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-bun-girl-adjustments-v3:colors",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "zoneColors": {
            "garment": "#A77BD1"
          }
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "en": "Open-eye smile",
            "zh-CN": "睁眼微笑"
          },
          "semanticByLanguage": {
            "en": "the original open eyes and gentle smile",
            "zh-CN": "保留原有睁眼与柔和微笑"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-bun-girl-adjustments-v3:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "closed",
          "labelByLanguage": {
            "en": "Closed-eye smile",
            "zh-CN": "闭眼微笑"
          },
          "semanticByLanguage": {
            "en": "two matching gentle closed eyes; preserve the original smile, face shape, high-bun hairstyle, outfit and waving pose",
            "zh-CN": "两只对称柔和的闭合眼睛；保留原有微笑、脸型、高丸子头、衣着与挥手姿势"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-bun-girl-adjustments-v3:face",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "clothing": [
        {
          "id": "hoodie",
          "labelByLanguage": {
            "en": "Original outfit",
            "zh-CN": "原有衣着"
          },
          "semanticByLanguage": {
            "en": "the original outfit with its fit and natural hand occlusion",
            "zh-CN": "保留原有衣着、合身关系与手部自然遮挡"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-bun-girl-adjustments-v3:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "coral-pinafore",
          "labelByLanguage": {
            "en": "Coral pinafore",
            "zh-CN": "珊瑚色背带裙"
          },
          "semanticByLanguage": {
            "en": "a fitted coral pinafore over a light blouse; keep straps naturally on the shoulders, garment fitted to the torso and waving hand unobstructed",
            "zh-CN": "浅色上衣外穿合体珊瑚色背带裙；肩带自然落肩、裙身贴合躯干且不遮挡挥手"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-bun-girl-adjustments-v3:clothing",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "Original accessories",
            "zh-CN": "原有配饰"
          },
          "semanticByLanguage": {
            "en": "no added accessories",
            "zh-CN": "不增加配饰"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-bun-girl-adjustments-v3:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "lavender-flower-clip",
          "labelByLanguage": {
            "en": "Lavender flower clip",
            "zh-CN": "薰衣草花朵发夹"
          },
          "semanticByLanguage": {
            "en": "one a small lavender flower clip attached naturally to the hair beside the high bun",
            "zh-CN": "固定在高丸子头旁发丝上的小巧薰衣草色花朵发夹"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-bun-girl-adjustments-v3:accessories",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "camera-held",
          "labelByLanguage": {
            "en": "Holding a camera",
            "zh-CN": "手持相机"
          },
          "semanticByLanguage": {
            "en": "one compact mirrorless camera held at chest height; the right hand grips the body near the shutter while the left hand visibly supports the lens from below, with natural contact and hand-camera occlusion; no floating strap or detached parts",
            "zh-CN": "一台在胸前高度手持的紧凑微单相机；右手握住靠近快门的机身，左手从下方清楚托住镜头，手与相机自然接触并有正确遮挡；肩带和部件不得悬浮或脱离"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-bun-girl-adjustments-v3:held-prop",
              "version": "v2",
              "purpose": "body-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [
      {
        "when": {
          "appearance": "twin-buns",
          "colors": "lavender"
        },
        "code": "appearance-colors-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "appearance": "twin-buns",
          "face": "closed"
        },
        "code": "appearance-face-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "appearance": "twin-buns",
          "clothing": "coral-pinafore"
        },
        "code": "appearance-clothing-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "appearance": "twin-buns",
          "accessories": "lavender-flower-clip"
        },
        "code": "appearance-accessories-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "colors": "lavender",
          "face": "closed"
        },
        "code": "colors-face-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "colors": "lavender",
          "clothing": "coral-pinafore"
        },
        "code": "colors-clothing-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "colors": "lavender",
          "accessories": "lavender-flower-clip"
        },
        "code": "colors-accessories-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "face": "closed",
          "clothing": "coral-pinafore"
        },
        "code": "face-clothing-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "face": "closed",
          "accessories": "lavender-flower-clip"
        },
        "code": "face-accessories-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "clothing": "coral-pinafore",
          "accessories": "lavender-flower-clip"
        },
        "code": "clothing-accessories-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "camera-ready-standing": "camera-ready-standing",
          "colors": "lavender"
        },
        "code": "ready-pose-colors-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "This complete-character branch is compatible only with the registered ready-to-hold pose and its matching prop. Return to the default choices before changing another field.",
          "zh-CN": "此完整角色分支只兼容对应的“准备托持”姿势与配套道具。更改其他字段前，请恢复默认选项。"
        }
      },
      {
        "when": {
          "camera-ready-standing": "camera-ready-standing",
          "face": "closed"
        },
        "code": "ready-pose-face-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "This complete-character branch is compatible only with the registered ready-to-hold pose and its matching prop. Return to the default choices before changing another field.",
          "zh-CN": "此完整角色分支只兼容对应的“准备托持”姿势与配套道具。更改其他字段前，请恢复默认选项。"
        }
      },
      {
        "when": {
          "camera-ready-standing": "camera-ready-standing",
          "clothing": "coral-pinafore"
        },
        "code": "ready-pose-clothing-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "This complete-character branch is compatible only with the registered ready-to-hold pose and its matching prop. Return to the default choices before changing another field.",
          "zh-CN": "此完整角色分支只兼容对应的“准备托持”姿势与配套道具。更改其他字段前，请恢复默认选项。"
        }
      },
      {
        "when": {
          "camera-ready-standing": "camera-ready-standing",
          "accessories": "lavender-flower-clip"
        },
        "code": "ready-pose-accessories-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "This complete-character branch is compatible only with the registered ready-to-hold pose and its matching prop. Return to the default choices before changing another field.",
          "zh-CN": "此完整角色分支只兼容对应的“准备托持”姿势与配套道具。更改其他字段前，请恢复默认选项。"
        }
      },
      {
        "when": {
          "camera-held": "camera-held",
          "appearance": "high-bun"
        },
        "code": "held-prop-appearance-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "This complete-character branch is compatible only with the registered ready-to-hold pose and its matching prop. Return to the default choices before changing another field.",
          "zh-CN": "此完整角色分支只兼容对应的“准备托持”姿势与配套道具。更改其他字段前，请恢复默认选项。"
        }
      },
      {
        "when": {
          "camera-held": "camera-held",
          "appearance": "twin-buns"
        },
        "code": "held-prop-appearance-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "This complete-character branch is compatible only with the registered ready-to-hold pose and its matching prop. Return to the default choices before changing another field.",
          "zh-CN": "此完整角色分支只兼容对应的“准备托持”姿势与配套道具。更改其他字段前，请恢复默认选项。"
        }
      },
      {
        "when": {
          "camera-held": "camera-held",
          "colors": "lavender"
        },
        "code": "held-prop-colors-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "This complete-character branch is compatible only with the registered ready-to-hold pose and its matching prop. Return to the default choices before changing another field.",
          "zh-CN": "此完整角色分支只兼容对应的“准备托持”姿势与配套道具。更改其他字段前，请恢复默认选项。"
        }
      },
      {
        "when": {
          "camera-held": "camera-held",
          "face": "closed"
        },
        "code": "held-prop-face-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "This complete-character branch is compatible only with the registered ready-to-hold pose and its matching prop. Return to the default choices before changing another field.",
          "zh-CN": "此完整角色分支只兼容对应的“准备托持”姿势与配套道具。更改其他字段前，请恢复默认选项。"
        }
      },
      {
        "when": {
          "camera-held": "camera-held",
          "clothing": "coral-pinafore"
        },
        "code": "held-prop-clothing-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "This complete-character branch is compatible only with the registered ready-to-hold pose and its matching prop. Return to the default choices before changing another field.",
          "zh-CN": "此完整角色分支只兼容对应的“准备托持”姿势与配套道具。更改其他字段前，请恢复默认选项。"
        }
      },
      {
        "when": {
          "camera-held": "camera-held",
          "accessories": "lavender-flower-clip"
        },
        "code": "held-prop-accessories-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "This complete-character branch is compatible only with the registered ready-to-hold pose and its matching prop. Return to the default choices before changing another field.",
          "zh-CN": "此完整角色分支只兼容对应的“准备托持”姿势与配套道具。更改其他字段前，请恢复默认选项。"
        }
      }
    ],
    "recipes": [
      {
        "id": "bun-girl-default",
        "selections": {
          "appearance": "high-bun",
          "colors": "warm-yellow",
          "face": "open",
          "clothing": "hoodie",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "whole-character",
            "asset": {
              "id": "template:human-bun-girl-adjustments-v3:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "bun-girl-appearance",
        "selections": {
          "appearance": "twin-buns",
          "colors": "warm-yellow",
          "face": "open",
          "clothing": "hoodie",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "whole-character",
            "asset": {
              "id": "template:human-bun-girl-adjustments-v3:appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "bun-girl-colors",
        "selections": {
          "appearance": "high-bun",
          "colors": "lavender",
          "face": "open",
          "clothing": "hoodie",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "whole-character",
            "asset": {
              "id": "template:human-bun-girl-adjustments-v3:colors",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "bun-girl-face",
        "selections": {
          "appearance": "high-bun",
          "colors": "warm-yellow",
          "face": "closed",
          "clothing": "hoodie",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "whole-character",
            "asset": {
              "id": "template:human-bun-girl-adjustments-v3:face",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "bun-girl-clothing",
        "selections": {
          "appearance": "high-bun",
          "colors": "warm-yellow",
          "face": "open",
          "clothing": "coral-pinafore",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "whole-character",
            "asset": {
              "id": "template:human-bun-girl-adjustments-v3:clothing",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "bun-girl-accessories",
        "selections": {
          "appearance": "high-bun",
          "colors": "warm-yellow",
          "face": "open",
          "clothing": "hoodie",
          "accessories": "lavender-flower-clip"
        },
        "layers": [
          {
            "slot": "whole-character",
            "asset": {
              "id": "template:human-bun-girl-adjustments-v3:accessories",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "bun-girl-ready-to-hold",
        "selections": {
          "appearance": "camera-ready-standing",
          "colors": "warm-yellow",
          "face": "open",
          "clothing": "hoodie",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "whole-character",
            "asset": {
              "id": "template:human-bun-girl-adjustments-v3:ready-pose",
              "version": "v2",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "bun-girl-holding-prop",
        "selections": {
          "appearance": "camera-ready-standing",
          "colors": "warm-yellow",
          "face": "open",
          "clothing": "hoodie",
          "accessories": "camera-held"
        },
        "layers": [
          {
            "slot": "whole-character",
            "asset": {
              "id": "template:human-bun-girl-adjustments-v3:held-prop",
              "version": "v2",
              "purpose": "body-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "human-blond-child-adjustments-v2",
    "version": "v2",
    "family": "humans",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "human-blond-glasses",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1254,
      "height": 1254
    },
    "identitySemanticsByLanguage": {
      "en": "One original chibi person. Preserve the same individual, facial identity, skin tone, age impression, body proportions, original pose, hand count and hand placement. Hair arrangement, garment color, facial expression, clothing and accessories may change only when selected by a registered option. Keep the complete person in a single transparent PNG; do not add another character, props, typography or a scene.",
      "zh-CN": "单个原创 Q 版人物。保持同一人物、面部身份、肤色、年龄感、身体比例、原始姿势、手部数量与位置。只有选择对应注册选项时，才允许改变发型整理、衣料配色、面部表情、衣着或配饰。完整人物保留在单张透明 PNG 中；不得增加其他人物、道具、文字或场景。"
    },
    "defaultOptions": {
      "appearance": "short-blond",
      "colors": "ivory",
      "face": "open",
      "clothing": "cardigan",
      "accessories": "clear-glasses"
    },
    "options": {
      "appearance": [
        {
          "id": "short-blond",
          "labelByLanguage": {
            "en": "Original hairstyle",
            "zh-CN": "原有发型"
          },
          "semanticByLanguage": {
            "en": "the original hairstyle and hair color; preserve the face, body scale, pose and outfit",
            "zh-CN": "保留原有发型和发色，脸、体型比例、姿势与衣着不变"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-blond-child-adjustments-v2:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "short-soft-curls",
          "labelByLanguage": {
            "en": "Short soft curls",
            "zh-CN": "柔软短卷发"
          },
          "semanticByLanguage": {
            "en": "the same person with short soft golden curls with distinct rounded curl texture around the crown and sides; preserve blond color, clear round glasses, face, outfit and clasped hands",
            "zh-CN": "同一人物，头顶与两侧具有清楚圆润卷曲质感的浅金短卷发；保留浅金发色、透明圆框眼镜、脸、衣物与交握双手"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-blond-child-adjustments-v2:appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "ivory",
          "labelByLanguage": {
            "en": "Ivory cardigan",
            "zh-CN": "米白开衫"
          },
          "semanticByLanguage": {
            "en": "the original ivory knit cardigan color; preserve skin, hair and all other garment zones",
            "zh-CN": "保留原有米白针织开衫配色；肤色、头发和其他衣物区域不变"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-blond-child-adjustments-v2:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "zoneColors": {
            "garment": "#E8E3D9"
          }
        },
        {
          "id": "sage",
          "labelByLanguage": {
            "en": "Sage cardigan",
            "zh-CN": "鼠尾草绿开衫"
          },
          "semanticByLanguage": {
            "en": "only the knit cardigan changes to sage green; preserve skin, blond hair, shirt, trousers and clear round glasses",
            "zh-CN": "仅针织开衫改为鼠尾草绿；保留肤色、浅金头发、衬衣、裤子和透明圆框眼镜"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-blond-child-adjustments-v2:colors",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "zoneColors": {
            "garment": "#A6B69A"
          }
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "en": "Open-eye smile",
            "zh-CN": "睁眼微笑"
          },
          "semanticByLanguage": {
            "en": "the original open eyes and gentle smile",
            "zh-CN": "保留原有睁眼与柔和微笑"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-blond-child-adjustments-v2:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "closed",
          "labelByLanguage": {
            "en": "Closed-eye smile",
            "zh-CN": "闭眼微笑"
          },
          "semanticByLanguage": {
            "en": "two matching gentle closed eyes visible behind the glasses; preserve frames, lenses, nose, smile and clasped hands",
            "zh-CN": "眼镜后方两只对称柔和的闭合眼睛；镜框、镜片、鼻子、微笑和交握双手保持不变"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-blond-child-adjustments-v2:face",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "clothing": [
        {
          "id": "cardigan",
          "labelByLanguage": {
            "en": "Original outfit",
            "zh-CN": "原有衣着"
          },
          "semanticByLanguage": {
            "en": "the original outfit with its fit and natural hand occlusion",
            "zh-CN": "保留原有衣着、合身关系与手部自然遮挡"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-blond-child-adjustments-v2:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "sky-duffle",
          "labelByLanguage": {
            "en": "Sky-blue duffle coat",
            "zh-CN": "天蓝色牛角扣外套"
          },
          "semanticByLanguage": {
            "en": "a fitted sky-blue duffle coat with natural front closure and sleeves; keep clasped hands unobstructed and preserve shirt, trousers and glasses",
            "zh-CN": "合体天蓝色牛角扣外套，门襟和袖子贴合自然；不遮住交握双手，保留衬衣、裤子和眼镜"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-blond-child-adjustments-v2:clothing",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "clear-glasses",
          "labelByLanguage": {
            "en": "Original accessories",
            "zh-CN": "原有配饰"
          },
          "semanticByLanguage": {
            "en": "clear round glasses",
            "zh-CN": "透明圆框眼镜"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-blond-child-adjustments-v2:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "glasses-bowtie",
          "labelByLanguage": {
            "en": "Glasses with teal bow tie",
            "zh-CN": "圆框眼镜与蓝绿色领结"
          },
          "semanticByLanguage": {
            "en": "clear round glasses plus a teal bow tie fitted naturally to the shirt collar",
            "zh-CN": "透明圆框眼镜与自然贴合衬衣领口的蓝绿色领结"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-blond-child-adjustments-v2:accessories",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [
      {
        "when": {
          "appearance": "short-soft-curls",
          "colors": "sage"
        },
        "code": "appearance-colors-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "appearance": "short-soft-curls",
          "face": "closed"
        },
        "code": "appearance-face-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "appearance": "short-soft-curls",
          "clothing": "sky-duffle"
        },
        "code": "appearance-clothing-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "appearance": "short-soft-curls",
          "accessories": "glasses-bowtie"
        },
        "code": "appearance-accessories-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "colors": "sage",
          "face": "closed"
        },
        "code": "colors-face-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "colors": "sage",
          "clothing": "sky-duffle"
        },
        "code": "colors-clothing-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "colors": "sage",
          "accessories": "glasses-bowtie"
        },
        "code": "colors-accessories-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "face": "closed",
          "clothing": "sky-duffle"
        },
        "code": "face-clothing-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "face": "closed",
          "accessories": "glasses-bowtie"
        },
        "code": "face-accessories-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "clothing": "sky-duffle",
          "accessories": "glasses-bowtie"
        },
        "code": "clothing-accessories-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      }
    ],
    "recipes": [
      {
        "id": "blond-child-default",
        "selections": {
          "appearance": "short-blond",
          "colors": "ivory",
          "face": "open",
          "clothing": "cardigan",
          "accessories": "clear-glasses"
        },
        "layers": [
          {
            "slot": "whole-character",
            "asset": {
              "id": "template:human-blond-child-adjustments-v2:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "blond-child-appearance",
        "selections": {
          "appearance": "short-soft-curls",
          "colors": "ivory",
          "face": "open",
          "clothing": "cardigan",
          "accessories": "clear-glasses"
        },
        "layers": [
          {
            "slot": "whole-character",
            "asset": {
              "id": "template:human-blond-child-adjustments-v2:appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "blond-child-colors",
        "selections": {
          "appearance": "short-blond",
          "colors": "sage",
          "face": "open",
          "clothing": "cardigan",
          "accessories": "clear-glasses"
        },
        "layers": [
          {
            "slot": "whole-character",
            "asset": {
              "id": "template:human-blond-child-adjustments-v2:colors",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "blond-child-face",
        "selections": {
          "appearance": "short-blond",
          "colors": "ivory",
          "face": "closed",
          "clothing": "cardigan",
          "accessories": "clear-glasses"
        },
        "layers": [
          {
            "slot": "whole-character",
            "asset": {
              "id": "template:human-blond-child-adjustments-v2:face",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "blond-child-clothing",
        "selections": {
          "appearance": "short-blond",
          "colors": "ivory",
          "face": "open",
          "clothing": "sky-duffle",
          "accessories": "clear-glasses"
        },
        "layers": [
          {
            "slot": "whole-character",
            "asset": {
              "id": "template:human-blond-child-adjustments-v2:clothing",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "blond-child-accessories",
        "selections": {
          "appearance": "short-blond",
          "colors": "ivory",
          "face": "open",
          "clothing": "cardigan",
          "accessories": "glasses-bowtie"
        },
        "layers": [
          {
            "slot": "whole-character",
            "asset": {
              "id": "template:human-blond-child-adjustments-v2:accessories",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "human-rust-girl-adjustments-v2",
    "version": "v2",
    "family": "humans",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "human-rust-jacket",
      "artworkVersion": "v1"
    },
    "canvas": {
      "width": 1254,
      "height": 1254
    },
    "identitySemanticsByLanguage": {
      "en": "One original chibi person. Preserve the same individual, facial identity, skin tone, age impression, body proportions, original pose, hand count and hand placement. Hair arrangement, garment color, facial expression, clothing and accessories may change only when selected by a registered option. Keep the complete person in a single transparent PNG; do not add another character, props, typography or a scene.",
      "zh-CN": "单个原创 Q 版人物。保持同一人物、面部身份、肤色、年龄感、身体比例、原始姿势、手部数量与位置。只有选择对应注册选项时，才允许改变发型整理、衣料配色、面部表情、衣着或配饰。完整人物保留在单张透明 PNG 中；不得增加其他人物、道具、文字或场景。"
    },
    "defaultOptions": {
      "appearance": "wavy-bob",
      "colors": "rust",
      "face": "open",
      "clothing": "jacket",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "wavy-bob",
          "labelByLanguage": {
            "en": "Original hairstyle",
            "zh-CN": "原有发型"
          },
          "semanticByLanguage": {
            "en": "the original hairstyle and hair color; preserve the face, body scale, pose and outfit",
            "zh-CN": "保留原有发型和发色，脸、体型比例、姿势与衣着不变"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-rust-girl-adjustments-v2:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "curl-puffs",
          "labelByLanguage": {
            "en": "Soft curl puffs",
            "zh-CN": "蓬松卷发"
          },
          "semanticByLanguage": {
            "en": "the same person with dark-brown hair arranged into soft rounded curl puffs; preserve skin, face, jacket, hands and standing pose",
            "zh-CN": "同一人物，深棕头发整理为柔软蓬松的小卷发束；保留肤色、脸、夹克、手和站姿"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-rust-girl-adjustments-v2:appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "rust",
          "labelByLanguage": {
            "en": "Rust jacket",
            "zh-CN": "铁锈色夹克"
          },
          "semanticByLanguage": {
            "en": "the original rust jacket color; preserve skin, hair and all other garment zones",
            "zh-CN": "保留原有铁锈色夹克配色；肤色、头发和其他衣物区域不变"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-rust-girl-adjustments-v2:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "zoneColors": {
            "garment": "#A45536"
          }
        },
        {
          "id": "teal",
          "labelByLanguage": {
            "en": "Teal jacket",
            "zh-CN": "蓝绿色夹克"
          },
          "semanticByLanguage": {
            "en": "only the jacket changes to teal; preserve warm-brown skin, dark-brown hair, top, trousers and shoes",
            "zh-CN": "仅夹克改为蓝绿色；保留暖棕肤色、深棕头发、上衣、长裤和鞋子"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-rust-girl-adjustments-v2:colors",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "zoneColors": {
            "garment": "#318F8D"
          }
        }
      ],
      "face": [
        {
          "id": "open",
          "labelByLanguage": {
            "en": "Open-eye smile",
            "zh-CN": "睁眼微笑"
          },
          "semanticByLanguage": {
            "en": "the original open eyes and gentle smile",
            "zh-CN": "保留原有睁眼与柔和微笑"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-rust-girl-adjustments-v2:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "closed",
          "labelByLanguage": {
            "en": "Closed-eye smile",
            "zh-CN": "闭眼微笑"
          },
          "semanticByLanguage": {
            "en": "two matching gentle closed eyes; preserve the original smile, face shape, hair, outfit and pose",
            "zh-CN": "两只对称柔和的闭合眼睛；保留原有微笑、脸型、头发、衣着和姿势"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-rust-girl-adjustments-v2:face",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "clothing": [
        {
          "id": "jacket",
          "labelByLanguage": {
            "en": "Original outfit",
            "zh-CN": "原有衣着"
          },
          "semanticByLanguage": {
            "en": "the original outfit with its fit and natural hand occlusion",
            "zh-CN": "保留原有衣着、合身关系与手部自然遮挡"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-rust-girl-adjustments-v2:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "ivory-cardigan",
          "labelByLanguage": {
            "en": "Ivory cardigan",
            "zh-CN": "象牙白开衫"
          },
          "semanticByLanguage": {
            "en": "a fitted ivory cardigan with natural wrist-length sleeves that leave the hands visible; follow the torso contour and preserve trousers and shoes",
            "zh-CN": "合体象牙白开衫，袖口自然落在手腕且露出双手；衣身沿躯干贴合，保留长裤和鞋子"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-rust-girl-adjustments-v2:clothing",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "Original accessories",
            "zh-CN": "原有配饰"
          },
          "semanticByLanguage": {
            "en": "no added accessories",
            "zh-CN": "不增加配饰"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-rust-girl-adjustments-v2:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "gold-leaf-clip",
          "labelByLanguage": {
            "en": "Gold leaf hair clip",
            "zh-CN": "金色叶片发夹"
          },
          "semanticByLanguage": {
            "en": "one a small gold leaf hair clip fitted to the hair above the ear and following the short-hair silhouette",
            "zh-CN": "贴合在耳侧短发上的小巧金色叶片发夹"
          },
          "thumbnailAssets": [
            {
              "id": "template:human-rust-girl-adjustments-v2:accessories",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [
      {
        "when": {
          "appearance": "curl-puffs",
          "colors": "teal"
        },
        "code": "appearance-colors-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "appearance": "curl-puffs",
          "face": "closed"
        },
        "code": "appearance-face-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "appearance": "curl-puffs",
          "clothing": "ivory-cardigan"
        },
        "code": "appearance-clothing-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "appearance": "curl-puffs",
          "accessories": "gold-leaf-clip"
        },
        "code": "appearance-accessories-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "colors": "teal",
          "face": "closed"
        },
        "code": "colors-face-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "colors": "teal",
          "clothing": "ivory-cardigan"
        },
        "code": "colors-clothing-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "colors": "teal",
          "accessories": "gold-leaf-clip"
        },
        "code": "colors-accessories-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "face": "closed",
          "clothing": "ivory-cardigan"
        },
        "code": "face-clothing-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "face": "closed",
          "accessories": "gold-leaf-clip"
        },
        "code": "face-accessories-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      },
      {
        "when": {
          "clothing": "ivory-cardigan",
          "accessories": "gold-leaf-clip"
        },
        "code": "clothing-accessories-whole-character-branch-conflict",
        "messageByLanguage": {
          "en": "These options are separate complete-character artwork branches. Return to the original choices before selecting a different edit category.",
          "zh-CN": "这些选项分别对应完整角色图分支。更换调整类别前，请先恢复原有选择。"
        }
      }
    ],
    "recipes": [
      {
        "id": "rust-girl-default",
        "selections": {
          "appearance": "wavy-bob",
          "colors": "rust",
          "face": "open",
          "clothing": "jacket",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "whole-character",
            "asset": {
              "id": "template:human-rust-girl-adjustments-v2:base",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "rust-girl-appearance",
        "selections": {
          "appearance": "curl-puffs",
          "colors": "rust",
          "face": "open",
          "clothing": "jacket",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "whole-character",
            "asset": {
              "id": "template:human-rust-girl-adjustments-v2:appearance",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "rust-girl-colors",
        "selections": {
          "appearance": "wavy-bob",
          "colors": "teal",
          "face": "open",
          "clothing": "jacket",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "whole-character",
            "asset": {
              "id": "template:human-rust-girl-adjustments-v2:colors",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "rust-girl-face",
        "selections": {
          "appearance": "wavy-bob",
          "colors": "rust",
          "face": "closed",
          "clothing": "jacket",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "whole-character",
            "asset": {
              "id": "template:human-rust-girl-adjustments-v2:face",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "rust-girl-clothing",
        "selections": {
          "appearance": "wavy-bob",
          "colors": "rust",
          "face": "open",
          "clothing": "ivory-cardigan",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "whole-character",
            "asset": {
              "id": "template:human-rust-girl-adjustments-v2:clothing",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      },
      {
        "id": "rust-girl-accessories",
        "selections": {
          "appearance": "wavy-bob",
          "colors": "rust",
          "face": "open",
          "clothing": "jacket",
          "accessories": "gold-leaf-clip"
        },
        "layers": [
          {
            "slot": "whole-character",
            "asset": {
              "id": "template:human-rust-girl-adjustments-v2:accessories",
              "version": "v1",
              "purpose": "body-layer"
            }
          }
        ]
      }
    ],
    "publicEditable": true
  },
  {
    "schemaVersion": 2,
    "id": "robot-capsule-independent-adjustments-v1",
    "version": "v1",
    "family": "independent-original",
    "status": "approved",
    "engineeringStatus": "passed",
    "artApproval": {
      "status": "approved",
      "record": "design/acceptance/20261011-character-adjustments-v1/approval.json",
      "approvalId": "character-adjustments-20261011-v1"
    },
    "artworkBinding": {
      "artworkId": "robot-ivory-capsule-face-v98-candidate",
      "artworkVersion": "v2"
    },
    "canvas": {
      "width": 1215,
      "height": 1295
    },
    "anchors": {
      "crown": [
        607,
        80
      ]
    },
    "identitySemanticsByLanguage": {
      "en": "One independent friendly capsule robot with a smooth shell, one inset dark display, two side pods, short rounded arms, two feet and one amber chest light. Preserve the same robot identity, count and placement of these parts, the dark display and amber lamp. The registered appearance option may broaden only the lower torso; the registered colors option may recolor the enamel shell; the selected face and accessory options may change only their named details. No extra characters or unregistered anatomy.",
      "zh-CN": "单个独立的友好胶囊机器人，具有光滑外壳、一块内嵌深色屏幕、两个侧舱、短圆手臂、两只脚和一盏琥珀胸灯。保持同一机器人身份、部件数量与位置、深色屏幕和琥珀灯。已注册的外观选项只可加宽下躯干，配色选项只可改变釉面外壳颜色；五官与配件选项只改变各自对应细节。不得增加其他角色或未注册的身体部件。"
    },
    "defaultOptions": {
      "appearance": "standard",
      "colors": "ivory",
      "face": "capsule-eyes",
      "clothing": "none",
      "accessories": "none"
    },
    "options": {
      "appearance": [
        {
          "id": "standard",
          "labelByLanguage": {
            "en": "Original balance",
            "zh-CN": "原始比例"
          },
          "semanticByLanguage": {
            "en": "the original balanced capsule silhouette",
            "zh-CN": "原始均衡的胶囊外形"
          },
          "thumbnailAssets": [
            {
              "id": "template:robot-capsule-independent-adjustments-v1:body-standard-ivory",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        },
        {
          "id": "broad-torso",
          "labelByLanguage": {
            "en": "Broader torso",
            "zh-CN": "宽圆躯干"
          },
          "semanticByLanguage": {
            "en": "a visibly broader rounded torso while keeping the head, screen, side pods and limbs unchanged",
            "zh-CN": "更宽圆的躯干，头部、屏幕、侧舱和肢体保持不变"
          },
          "thumbnailAssets": [
            {
              "id": "template:robot-capsule-independent-adjustments-v1:body-broad-ivory",
              "version": "v1",
              "purpose": "body-layer"
            }
          ]
        }
      ],
      "colors": [
        {
          "id": "ivory",
          "labelByLanguage": {
            "en": "Ivory enamel",
            "zh-CN": "象牙白釉面"
          },
          "semanticByLanguage": {
            "en": "soft ivory enamel on all shell parts, with the black display and amber chest light unchanged",
            "zh-CN": "所有外壳部件为柔和象牙白釉面，黑色屏幕与琥珀胸灯不变"
          },
          "thumbnailAssets": [
            {
              "id": "template:robot-capsule-independent-adjustments-v1:body-standard-ivory",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "zoneColors": {
            "shell": "#f1e6d4"
          }
        },
        {
          "id": "glacier-blue",
          "labelByLanguage": {
            "en": "Glacier blue",
            "zh-CN": "冰川蓝"
          },
          "semanticByLanguage": {
            "en": "soft glacier-blue enamel on all shell parts, with the black display and amber chest light unchanged",
            "zh-CN": "所有外壳部件为柔和冰川蓝釉面，黑色屏幕与琥珀胸灯不变"
          },
          "thumbnailAssets": [
            {
              "id": "template:robot-capsule-independent-adjustments-v1:body-standard-blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          ],
          "zoneColors": {
            "shell": "#8fc8ed"
          }
        }
      ],
      "face": [
        {
          "id": "capsule-eyes",
          "labelByLanguage": {
            "en": "Capsule eyes",
            "zh-CN": "胶囊眼"
          },
          "semanticByLanguage": {
            "en": "two softly glowing white vertical capsule eyes on the dark display",
            "zh-CN": "深色屏幕上的两枚柔和发光白色竖胶囊眼"
          },
          "thumbnailAssets": [
            {
              "id": "template:robot-capsule-independent-adjustments-v1:face-capsules",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        },
        {
          "id": "closed-cyan",
          "labelByLanguage": {
            "en": "Sleepy cyan",
            "zh-CN": "青色闭眼"
          },
          "semanticByLanguage": {
            "en": "two small softly glowing cyan closed-eye arcs on the dark display, a static expression",
            "zh-CN": "深色屏幕上的两道小巧柔和发光青色闭眼弧线，静态表情"
          },
          "thumbnailAssets": [
            {
              "id": "template:robot-capsule-independent-adjustments-v1:face-closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          ]
        }
      ],
      "clothing": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "No clothing",
            "zh-CN": "无服装"
          },
          "semanticByLanguage": {
            "en": "no clothing",
            "zh-CN": "不穿服装"
          }
        },
        {
          "id": "seam-collar",
          "labelByLanguage": {
            "en": "Teal seam collar",
            "zh-CN": "青绿色接缝衣领"
          },
          "semanticByLanguage": {
            "en": "a slim muted-teal fabric collar fitted flush around the head-to-torso seam below the head",
            "zh-CN": "紧贴头部下沿与躯干接缝处的低矮灰青绿色布质衣领"
          },
          "thumbnailAssets": [
            {
              "id": "template:robot-capsule-independent-adjustments-v1:collar",
              "version": "v1",
              "purpose": "clothing-layer"
            }
          ]
        }
      ],
      "accessories": [
        {
          "id": "none",
          "labelByLanguage": {
            "en": "No accessory",
            "zh-CN": "无配饰"
          },
          "semanticByLanguage": {
            "en": "no accessories",
            "zh-CN": "不佩戴配饰"
          }
        },
        {
          "id": "mint-antenna",
          "labelByLanguage": {
            "en": "Mint antenna",
            "zh-CN": "薄荷色天线"
          },
          "semanticByLanguage": {
            "en": "one compact mint orb antenna mounted at the top center of the head",
            "zh-CN": "一枚安装在头顶中央的小巧薄荷色球形天线"
          },
          "thumbnailAssets": [
            {
              "id": "template:robot-capsule-independent-adjustments-v1:antenna",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          ]
        }
      ]
    },
    "conflicts": [],
    "recipes": [
      {
        "id": "standard-ivory-capsule-eyes-none-none",
        "selections": {
          "appearance": "standard",
          "colors": "ivory",
          "face": "capsule-eyes",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-standard-ivory",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-capsules",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "standard-ivory-capsule-eyes-none-mint-antenna",
        "selections": {
          "appearance": "standard",
          "colors": "ivory",
          "face": "capsule-eyes",
          "clothing": "none",
          "accessories": "mint-antenna"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-standard-ivory",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-capsules",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:antenna",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "standard-ivory-capsule-eyes-seam-collar-none",
        "selections": {
          "appearance": "standard",
          "colors": "ivory",
          "face": "capsule-eyes",
          "clothing": "seam-collar",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-standard-ivory",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "clothing-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:collar",
              "version": "v1",
              "purpose": "clothing-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-capsules",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "standard-ivory-capsule-eyes-seam-collar-mint-antenna",
        "selections": {
          "appearance": "standard",
          "colors": "ivory",
          "face": "capsule-eyes",
          "clothing": "seam-collar",
          "accessories": "mint-antenna"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-standard-ivory",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "clothing-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:collar",
              "version": "v1",
              "purpose": "clothing-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-capsules",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:antenna",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "standard-ivory-closed-cyan-none-none",
        "selections": {
          "appearance": "standard",
          "colors": "ivory",
          "face": "closed-cyan",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-standard-ivory",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "standard-ivory-closed-cyan-none-mint-antenna",
        "selections": {
          "appearance": "standard",
          "colors": "ivory",
          "face": "closed-cyan",
          "clothing": "none",
          "accessories": "mint-antenna"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-standard-ivory",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:antenna",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "standard-ivory-closed-cyan-seam-collar-none",
        "selections": {
          "appearance": "standard",
          "colors": "ivory",
          "face": "closed-cyan",
          "clothing": "seam-collar",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-standard-ivory",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "clothing-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:collar",
              "version": "v1",
              "purpose": "clothing-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "standard-ivory-closed-cyan-seam-collar-mint-antenna",
        "selections": {
          "appearance": "standard",
          "colors": "ivory",
          "face": "closed-cyan",
          "clothing": "seam-collar",
          "accessories": "mint-antenna"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-standard-ivory",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "clothing-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:collar",
              "version": "v1",
              "purpose": "clothing-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:antenna",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "standard-glacier-blue-capsule-eyes-none-none",
        "selections": {
          "appearance": "standard",
          "colors": "glacier-blue",
          "face": "capsule-eyes",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-standard-blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-capsules",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "standard-glacier-blue-capsule-eyes-none-mint-antenna",
        "selections": {
          "appearance": "standard",
          "colors": "glacier-blue",
          "face": "capsule-eyes",
          "clothing": "none",
          "accessories": "mint-antenna"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-standard-blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-capsules",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:antenna",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "standard-glacier-blue-capsule-eyes-seam-collar-none",
        "selections": {
          "appearance": "standard",
          "colors": "glacier-blue",
          "face": "capsule-eyes",
          "clothing": "seam-collar",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-standard-blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "clothing-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:collar",
              "version": "v1",
              "purpose": "clothing-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-capsules",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "standard-glacier-blue-capsule-eyes-seam-collar-mint-antenna",
        "selections": {
          "appearance": "standard",
          "colors": "glacier-blue",
          "face": "capsule-eyes",
          "clothing": "seam-collar",
          "accessories": "mint-antenna"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-standard-blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "clothing-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:collar",
              "version": "v1",
              "purpose": "clothing-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-capsules",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:antenna",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "standard-glacier-blue-closed-cyan-none-none",
        "selections": {
          "appearance": "standard",
          "colors": "glacier-blue",
          "face": "closed-cyan",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-standard-blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "standard-glacier-blue-closed-cyan-none-mint-antenna",
        "selections": {
          "appearance": "standard",
          "colors": "glacier-blue",
          "face": "closed-cyan",
          "clothing": "none",
          "accessories": "mint-antenna"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-standard-blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:antenna",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "standard-glacier-blue-closed-cyan-seam-collar-none",
        "selections": {
          "appearance": "standard",
          "colors": "glacier-blue",
          "face": "closed-cyan",
          "clothing": "seam-collar",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-standard-blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "clothing-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:collar",
              "version": "v1",
              "purpose": "clothing-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "standard-glacier-blue-closed-cyan-seam-collar-mint-antenna",
        "selections": {
          "appearance": "standard",
          "colors": "glacier-blue",
          "face": "closed-cyan",
          "clothing": "seam-collar",
          "accessories": "mint-antenna"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-standard-blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "clothing-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:collar",
              "version": "v1",
              "purpose": "clothing-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:antenna",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "broad-torso-ivory-capsule-eyes-none-none",
        "selections": {
          "appearance": "broad-torso",
          "colors": "ivory",
          "face": "capsule-eyes",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-broad-ivory",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-capsules",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "broad-torso-ivory-capsule-eyes-none-mint-antenna",
        "selections": {
          "appearance": "broad-torso",
          "colors": "ivory",
          "face": "capsule-eyes",
          "clothing": "none",
          "accessories": "mint-antenna"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-broad-ivory",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-capsules",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:antenna",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "broad-torso-ivory-capsule-eyes-seam-collar-none",
        "selections": {
          "appearance": "broad-torso",
          "colors": "ivory",
          "face": "capsule-eyes",
          "clothing": "seam-collar",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-broad-ivory",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "clothing-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:collar",
              "version": "v1",
              "purpose": "clothing-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-capsules",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "broad-torso-ivory-capsule-eyes-seam-collar-mint-antenna",
        "selections": {
          "appearance": "broad-torso",
          "colors": "ivory",
          "face": "capsule-eyes",
          "clothing": "seam-collar",
          "accessories": "mint-antenna"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-broad-ivory",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "clothing-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:collar",
              "version": "v1",
              "purpose": "clothing-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-capsules",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:antenna",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "broad-torso-ivory-closed-cyan-none-none",
        "selections": {
          "appearance": "broad-torso",
          "colors": "ivory",
          "face": "closed-cyan",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-broad-ivory",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "broad-torso-ivory-closed-cyan-none-mint-antenna",
        "selections": {
          "appearance": "broad-torso",
          "colors": "ivory",
          "face": "closed-cyan",
          "clothing": "none",
          "accessories": "mint-antenna"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-broad-ivory",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:antenna",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "broad-torso-ivory-closed-cyan-seam-collar-none",
        "selections": {
          "appearance": "broad-torso",
          "colors": "ivory",
          "face": "closed-cyan",
          "clothing": "seam-collar",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-broad-ivory",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "clothing-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:collar",
              "version": "v1",
              "purpose": "clothing-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "broad-torso-ivory-closed-cyan-seam-collar-mint-antenna",
        "selections": {
          "appearance": "broad-torso",
          "colors": "ivory",
          "face": "closed-cyan",
          "clothing": "seam-collar",
          "accessories": "mint-antenna"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-broad-ivory",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "clothing-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:collar",
              "version": "v1",
              "purpose": "clothing-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:antenna",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "broad-torso-glacier-blue-capsule-eyes-none-none",
        "selections": {
          "appearance": "broad-torso",
          "colors": "glacier-blue",
          "face": "capsule-eyes",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-broad-blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-capsules",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "broad-torso-glacier-blue-capsule-eyes-none-mint-antenna",
        "selections": {
          "appearance": "broad-torso",
          "colors": "glacier-blue",
          "face": "capsule-eyes",
          "clothing": "none",
          "accessories": "mint-antenna"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-broad-blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-capsules",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:antenna",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "broad-torso-glacier-blue-capsule-eyes-seam-collar-none",
        "selections": {
          "appearance": "broad-torso",
          "colors": "glacier-blue",
          "face": "capsule-eyes",
          "clothing": "seam-collar",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-broad-blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "clothing-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:collar",
              "version": "v1",
              "purpose": "clothing-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-capsules",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "broad-torso-glacier-blue-capsule-eyes-seam-collar-mint-antenna",
        "selections": {
          "appearance": "broad-torso",
          "colors": "glacier-blue",
          "face": "capsule-eyes",
          "clothing": "seam-collar",
          "accessories": "mint-antenna"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-broad-blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "clothing-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:collar",
              "version": "v1",
              "purpose": "clothing-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-capsules",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:antenna",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "broad-torso-glacier-blue-closed-cyan-none-none",
        "selections": {
          "appearance": "broad-torso",
          "colors": "glacier-blue",
          "face": "closed-cyan",
          "clothing": "none",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-broad-blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "broad-torso-glacier-blue-closed-cyan-none-mint-antenna",
        "selections": {
          "appearance": "broad-torso",
          "colors": "glacier-blue",
          "face": "closed-cyan",
          "clothing": "none",
          "accessories": "mint-antenna"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-broad-blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:antenna",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      },
      {
        "id": "broad-torso-glacier-blue-closed-cyan-seam-collar-none",
        "selections": {
          "appearance": "broad-torso",
          "colors": "glacier-blue",
          "face": "closed-cyan",
          "clothing": "seam-collar",
          "accessories": "none"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-broad-blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "clothing-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:collar",
              "version": "v1",
              "purpose": "clothing-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          }
        ]
      },
      {
        "id": "broad-torso-glacier-blue-closed-cyan-seam-collar-mint-antenna",
        "selections": {
          "appearance": "broad-torso",
          "colors": "glacier-blue",
          "face": "closed-cyan",
          "clothing": "seam-collar",
          "accessories": "mint-antenna"
        },
        "layers": [
          {
            "slot": "body",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:body-broad-blue",
              "version": "v1",
              "purpose": "body-layer"
            }
          },
          {
            "slot": "clothing-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:collar",
              "version": "v1",
              "purpose": "clothing-layer"
            }
          },
          {
            "slot": "face",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:face-closed",
              "version": "v1",
              "purpose": "face-layer"
            }
          },
          {
            "slot": "accessory-front",
            "asset": {
              "id": "template:robot-capsule-independent-adjustments-v1:antenna",
              "version": "v1",
              "purpose": "accessory-layer"
            }
          }
        ]
      }
    ],
    "rules": {
      "colorApplication": "Registered image-generated full-body variants only. No runtime tint; dark display, bronze seams and amber chest lamp remain unchanged.",
      "composition": "Transparent full-canvas body, seam collar before face overlay, display face and optional top-mounted antenna in explicit source-over order."
    },
    "publicEditable": true
  }
];
