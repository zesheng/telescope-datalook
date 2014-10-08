Package.describe({summary: "Telescope module for DataForGood.co"});

Package.onUse(function (api) {

  api.use([
    'templating',
    'ui'
    ], 'client');

  api.use([
    'telescope-lib',
    'telescope-base',
    'telescope-search'
    ], ['client', 'server']);


  var path = Npm.require('path'),
      asset_path = path.join('lib/client');

  /*
  *  Client
  */
  api.addFiles([

    // Styles
    'lib/client/css/screen.css',

    // Icon fonts
    path.join(asset_path, 'fonts', 'icomoon.eot'),
    path.join(asset_path, 'fonts', 'icomoon.ttf'),
    path.join(asset_path, 'fonts', 'icomoon.svg'),
    path.join(asset_path, 'fonts', 'icomoon.woff'),

    // Templates
    'lib/client/views/custom_templates.js',
    'lib/client/views/d4g_layout.html',
    'lib/client/views/d4g_nav.html',
    'lib/client/views/d4g_search.html',
    'lib/client/views/d4g_userMenu.html',
    'lib/client/views/d4g_postUpvote.html',
    'lib/client/views/d4g_hero.html',
    'lib/client/views/d4g_hero.js',
    'lib/client/views/d4g_button_bar.html'
  ], 'client');


});