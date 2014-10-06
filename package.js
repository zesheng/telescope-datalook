Package.describe({summary: "Telescope module for DataForGood.co"});

Package.onUse(function (api) {

  api.use(['telescope-lib', 'telescope-base'], ['client', 'server']);

  var path = Npm.require('path');
  var asset_path = path.join('lib/client');

  api.addFiles([
    'lib/client/css/screen.css',
    path.join(asset_path, 'fonts', 'icomoon.eot'),
    path.join(asset_path, 'fonts', 'icomoon.ttf'),
    path.join(asset_path, 'fonts', 'icomoon.svg'),
    path.join(asset_path, 'fonts', 'icomoon.woff')
    ], 'client');

});