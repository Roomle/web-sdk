const fs = require('fs-extra');
const path = require('path');
const packageJson = require('../../../package.json');

const roomleAssetTarget = (packageJson.roomle) ? path.resolve(__dirname, '..', '..', '..', packageJson.roomle.assetTarget) : undefined;

if (!roomleAssetTarget) {
    console.log('[Roomle]: Warning, you did not provide an asset target in your package.json');
    console.log('[Roomle]: please add   "roomle": { "assetTarget": "__YOUR__PATH__TO__STORE__ASSETS__" }');
    return;
}
const src = path.resolve(__dirname, '..', 'lib', 'static');
console.log('[Roomle]: copy roomle assets from: ' + src + ' to ' + roomleAssetTarget);
fs.copySync(src, roomleAssetTarget);