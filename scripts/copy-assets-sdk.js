const fs = require('fs');
const path = require('path');
const packageJson = require('../../../package.json');

// This ceremony is needed due to:
// http://krasimirtsonev.com/blog/article/Fun-playing-with-npm-dependencies-and-postinstall-script

const mkDirByPathSync = (targetDir, {isRelativeToScript = false} = {}) => {
    const sep = path.sep;
    const initDir = path.isAbsolute(targetDir) ? sep : '';
    const baseDir = isRelativeToScript ? __dirname : '.';

    return targetDir.split(sep).reduce((parentDir, childDir) => {
        const curDir = path.resolve(baseDir, parentDir, childDir);
        try {
            fs.mkdirSync(curDir);
        } catch (err) {
            if (err.code === 'EEXIST') {
                return curDir;
            }

            if (err.code === 'ENOENT') {
                throw new Error(`EACCES: permission denied, mkdir '${parentDir}'`);
            }

            const caughtErr = ['EACCES', 'EPERM', 'EISDIR'].indexOf(err.code) > -1;
            if (!caughtErr || caughtErr && curDir === path.resolve(targetDir)) {
                throw err;
            }
        }

        return curDir;
    }, initDir);
}

const copyFileSync = (source, target) => {

    let targetFile = target;

    if (fs.existsSync(target)) {
        if (fs.lstatSync(target).isDirectory()) {
            targetFile = path.join(target, path.basename(source));
        }
    }

    fs.writeFileSync(targetFile, fs.readFileSync(source));
};

const copyFolderRecursiveSync = (source, target) => {
    let files = [];

    const targetFolder = path.join(target, path.basename(source));
    if (!fs.existsSync(targetFolder)) {
        mkDirByPathSync(targetFolder);
    }

    if (fs.lstatSync(source).isDirectory()) {
        files = fs.readdirSync(source);
        files.forEach(function (file) {
            var curSource = path.join(source, file);
            if (fs.lstatSync(curSource).isDirectory()) {
                copyFolderRecursiveSync(curSource, targetFolder);
            } else {
                copyFileSync(curSource, targetFolder);
            }
        });
    }
}

const roomleAssetTarget = (packageJson.roomle && packageJson.roomle.assetTarget) ? path.resolve(__dirname, '..', '..', '..', packageJson.roomle.assetTarget) : undefined;

if (!roomleAssetTarget) {
    console.log('[Roomle]: Warning, you did not provide an asset target in your package.json');
    console.log('[Roomle]: please add   "roomle": { "assetTarget": "__YOUR__PATH__TO__STORE__ASSETS__" }');
    return;
}
const src = path.resolve(__dirname, '..', 'lib', 'static');
console.log('[Roomle]: copy roomle assets from: ' + src + ' to ' + roomleAssetTarget);
copyFolderRecursiveSync(src, roomleAssetTarget);
