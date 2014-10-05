Package.describe({summary: "Telescope module for DataForGood.co"});

Package.onUse(function (api) {

  api.use(['telescope-lib', 'telescope-base'], ['client', 'server']);

  api.addFiles([
    'lib/client/css/screen.css',
    ], ['client']);

});