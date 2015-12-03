var path = require('path');
var bourbon = require('node-bourbon');
var fearCoreUiEntryPoint = require.resolve('fear-core-ui');

var sassDir = path.dirname(fearCoreUiEntryPoint) + '/app/sass';
var assetsDir = path.dirname(fearCoreUiEntryPoint) + '/app/assets';
var assetImageDir = path.dirname(fearCoreUiEntryPoint) + '/app/assets/images';
var assetFontDir = path.dirname(fearCoreUiEntryPoint) + '/app/assets/fonts';

module.exports = {
    sassPaths: [sassDir, bourbon.includePaths],
    assetPaths: assetsDir,
    assetImagePaths: assetImageDir,
    assetFontPaths: assetFontDir
};
