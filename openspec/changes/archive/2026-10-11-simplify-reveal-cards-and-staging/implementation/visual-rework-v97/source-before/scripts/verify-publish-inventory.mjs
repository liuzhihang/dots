import assert from 'node:assert/strict';
import {checkInventory} from './build-studio.mjs';
const valid=['dist/index.html','dist/new-approved.png'];
checkInventory(valid,valid);
assert.throws(()=>checkInventory([...valid,'dist/orphan.png'],valid));
assert.throws(()=>checkInventory([valid[0]],valid));
assert.throws(()=>checkInventory(['dist/../secrets'],['dist/../secrets']));
assert.throws(()=>checkInventory(valid,[...valid,valid[0]]));
console.log('Publish inventory: valid additions, orphan, missing, unsafe and duplicate fixtures passed');
