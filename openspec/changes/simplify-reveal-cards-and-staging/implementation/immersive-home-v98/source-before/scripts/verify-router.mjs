import assert from 'node:assert/strict';
import {parseRoute,galleryURL,artworkURL} from '../dist/studio-router.js';
assert.deepEqual(parseRoute(''),{page:'home'});
assert.deepEqual(parseRoute(galleryURL({text:'蓝色 dots',seriesId:'dots'})),{page:'gallery',text:'蓝色 dots',seriesId:'dots'});
assert.deepEqual(parseRoute(artworkURL('candidate-dots-20261005','v2')),{page:'artwork',id:'candidate-dots-20261005',version:'v2'});
for(const hash of ['#home','#/game','#/artwork/x','#/artwork/../y?v=v1','#/other'])assert.equal(parseRoute(hash).page,'notFound');
console.log('Routes: new URLs, unicode query and invalid/legacy rejection passed');
