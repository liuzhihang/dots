const historicalArtwork = (artwork) => Object.freeze({
  ...artwork,
  provenance: Object.freeze({ ...artwork.provenance })
});

export const CREATION_ARTWORKS = Object.freeze([
  historicalArtwork({
    id: 'historical-dots-plush-headphones-v2',
    family: 'dots',
    name: '蓝色绒面耳机角色（历史作品）',
    src: './assets/atelier/dot-plush-headphones-v2.png',
    width: 1254,
    height: 1254,
    kind: 'historical-example',
    status: 'unreviewed',
    provenance: {
      origin: 'imported-sites-v27',
      official: false,
      detail: '原站历史作品；作者与生成来源未记录'
    },
    description: '旧版蓝色绒面圆角色与耳机的固定整图示例；不代表官方 Dots 身份，不是当前基准，也不是可编辑组合结果。'
  }),
  historicalArtwork({
    id: 'historical-grok-matte-work-v2',
    family: 'grok',
    name: '浅色眼镜工作角色（历史作品）',
    src: './assets/atelier/grok-matte-work-v2.png',
    width: 1254,
    height: 1254,
    kind: 'historical-example',
    status: 'unreviewed',
    provenance: {
      origin: 'imported-sites-v27',
      official: false,
      detail: '原站历史作品；作者与生成来源未记录'
    },
    description: '旧版浅色软形角色、眼镜与电脑的固定整图示例；不代表官方 Grok Bot 身份，不是当前基准，也不是可编辑组合结果。'
  }),
  historicalArtwork({
    id: 'historical-human-reading-v2',
    family: 'humans',
    name: '卷发阅读人物（历史作品）',
    src: './assets/atelier/muse-fabric-reading-v2.png',
    width: 1254,
    height: 1254,
    kind: 'historical-example',
    status: 'unreviewed',
    provenance: {
      origin: 'imported-sites-v27',
      official: false,
      detail: '原站历史作品；作者与生成来源未记录'
    },
    description: '旧版卷发针织人物与阅读造型的固定整图示例；归入人物历史作品，不是 Meta Muse，不是当前人物基准，也不是可编辑组合结果。'
  }),
  historicalArtwork({
    id: 'historical-animal-shiba-scarf-v2',
    family: 'animals',
    name: '围巾柴犬（历史作品）',
    src: './assets/atelier/pet-shiba-scarf-v2.png',
    width: 1254,
    height: 1254,
    kind: 'historical-example',
    status: 'unreviewed',
    provenance: {
      origin: 'imported-sites-v27',
      official: false,
      detail: '原站历史作品；作者与生成来源未记录'
    },
    description: '旧版戴蓝色围巾的柴犬固定整图示例；不是当前动物基准，也不是可编辑组合结果。'
  })
]);

export const COMPOSITION_PACKS = Object.freeze([]);

export function getCreationArtwork(id) {
  return CREATION_ARTWORKS.find((artwork) => artwork.id === id) ?? null;
}

export function getFamilyArtwork(family) {
  return CREATION_ARTWORKS.find((artwork) => artwork.family === family) ?? null;
}

export function getCompositionPack(family) {
  return COMPOSITION_PACKS.find((pack) => pack.family === family) ?? null;
}
