var path = require('path');
var bourbon = require('node-bourbon');
var fearCoreUiEntryPoint = require.resolve('fear-core-ui');

var sassDir = path.dirname(fearCoreUiEntryPoint) + '/lib/sass';
var assetsDir = path.dirname(fearCoreUiEntryPoint) + '/lib/assets';
var assetImageDir = path.dirname(fearCoreUiEntryPoint) + '/lib/assets/images';
var assetFontDir = path.dirname(fearCoreUiEntryPoint) + '/lib/assets/fonts';

module.exports = {
    sassPaths: [sassDir, bourbon.includePaths],
    assetPaths: assetsDir,
    assetImagePaths: assetImageDir,
    assetFontPaths: assetFontDir
};
