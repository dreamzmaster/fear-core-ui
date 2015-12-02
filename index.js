var path = require('path');
var fearCoreUiEntryPoint = require.resolve('fear-core-ui');

var sassDir = path.dirname(fearCoreUiEntryPoint) + '/app/sass';
var assetsDir = path.dirname(fearCoreUiEntryPoint) + '/app/assets';
var assetsImagesDir = path.dirname(fearCoreUiEntryPoint) + '/app/assets/images';
var assetsFontsDir = path.dirname(fearCoreUiEntryPoint) + '/app/assets/fonts';

module.exports = {
    sassPaths: [sassDir],
    assetsPaths: assetsDir,
    assetsImagesPaths: assetsImagesDir,
    assetsFontsPaths: assetsFontsDir
};
