Package.describe({summary: "Telescope module for DataForGood.co"});

Package.onUse(function (api) {

  api.use([
    'templating',
    'ui',
    'bengott:avatar'
    ], 'client');

  api.use([
    'telescope-lib',
    'telescope-base',
    'telescope-search',
    'telescope-tags',
    'meteorhacks:fast-render@1.0.0',
    'meteorhacks:subs-manager@1.1.0'
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

    // Vendor
    'lib/client/vendor/drop.js',

    // Config
    'lib/client/config/avatar.js',

    // Helpers
    'lib/client/helpers/spacebars.js',

    // Layouts
    'lib/client/views/layouts/press_layout.html',
    'lib/client/views/layouts/press_layout.js',

    // Templates
    'lib/client/views/main.html',
    'lib/client/views/custom_templates.js',
    'lib/client/views/d4g_atForm.js',
    'lib/client/views/d4g_layout.html',
    'lib/client/views/d4g_nav.html',
    'lib/client/views/d4g_search.html',
    'lib/client/views/d4g_userMenu.html',
    'lib/client/views/d4g_categories_menu.html',
    'lib/client/views/d4g_categories_menu.js',
    'lib/client/views/d4g_postInfo.html',
    'lib/client/views/d4g_postUpvote.html',
    'lib/client/views/d4g_post_submit.html',
    'lib/client/views/d4g_post_edit.html',
    'lib/client/views/d4g_hero.html',
    'lib/client/views/d4g_button_bar.html',
    'lib/client/views/d4g_user_profile.html',
    'lib/client/views/d4g_user_edit.html',

    // Pages
    'lib/client/views/pages/about.html',
    'lib/client/views/pages/press.html',
    'lib/client/views/pages/press.js'

  ], 'client');


  /*
  *  Server
  */
  api.addFiles([
    'lib/server/publications.js',
    'lib/server/seed.js'
  ], 'server');


  /*
  *  Client & Server
  */
  api.addFiles([
    'lib/router/routes.js'
  ], ['client', 'server']);

});
