import assert from 'node:assert/strict';
import {parseRoute,galleryURL,artworkURL} from '../dist/studio-router.js';
import {canOpenArtwork,ARTWORKS} from '../dist/studio-artwork-catalog.js';
assert.deepEqual(parseRoute(''),{page:'gallery',text:'',seriesId:'',sort:'curated'});
assert.deepEqual(parseRoute(galleryURL({text:'蓝色 dots',seriesId:'dots',sort:'name'})),{page:'gallery',text:'蓝色 dots',seriesId:'dots',sort:'name'});
assert.deepEqual(parseRoute(artworkURL('candidate-dots-20261005','v2')),{page:'artwork',id:'candidate-dots-20261005',version:'v2'});
for(const hash of ['#home','#/home','#/gallery','#/random','#/workspace','#/game','#/guide','#/artwork/x','#/artwork/../y?v=v1','#/other','#/artwork/a?v=v1&mode=edit','#/artwork/a?v=v1&mode=view','#/artwork/a?v=x&v=y','#/?upload=yes','#/artwork/%XX?v=v1'])assert.equal(parseRoute(hash).page,'notFound',hash);
assert.equal(canOpenArtwork('unknown','v1'),false);assert.equal(canOpenArtwork(ARTWORKS[0],'wrong'),false);
console.log('Routes: canonical gallery, single CharacterStudio artwork route, unicode AND query and invalid/legacy rejection passed');
