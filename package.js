Package.describe({summary: "Telescope module for DataLook.io"});

Package.onUse(function (api) {

  api.use([
    'templating',
    'ui',
    'jquery',
    'bengott:avatar'
    ], 'client');

  api.use([
    'telescope-lib',
    'telescope-base',
    'telescope-newsletter',
    'telescope-search',
    'telescope-tags',
    'iron:router',
    'aldeed:autoform',
    'meteorhacks:fast-render',
    'meteorhacks:subs-manager',
    'percolatestudio:segment.io',
    'jeremy:velocity-animate',
    'jeremy:noty'
    ], ['client', 'server']);

  api.use('cmather:handlebars-server');

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

    // Libs
    'lib/client/js/noty.js',

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
    'lib/client/views/d4g_postAuthor.html',
    'lib/client/views/d4g_postInfo.html',
    'lib/client/views/d4g_postUpvote.html',
    'lib/client/views/d4g_post_content.html',
    'lib/client/views/d4g_post_tagline.html',
    'lib/client/views/d4g_post_tagline.js',
    'lib/client/views/d4g_post_discuss.html',
    'lib/client/views/d4g_post_submit.html',
    'lib/client/views/d4g_post_edit.html',
    'lib/client/views/d4g_hero.html',
    'lib/client/views/d4g_button_bar.html',
    'lib/client/views/d4g_user_profile.html',
    'lib/client/views/d4g_userInfo.html',
    'lib/client/views/d4g_userInfo.js',
    'lib/client/views/d4g_user_edit.html',
    'lib/client/views/d4g_user_edit.js',
    'lib/client/views/d4g_newsletterBanner.html',
    'lib/client/views/d4g_newsletter_signup.html',
    'lib/client/views/d4g_newsletter_signup.js',

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
    'lib/server/seed.js',
    'lib/server/email/d4g_emailWrapper.handlebars',
    'lib/server/email/d4g_emailDigest.handlebars',
    'lib/server/email/d4g_emailPostItem.handlebars',
    'lib/server/email/d4g_emailNewPost.handlebars',
    'lib/server/email/custom_email_templates.js'
  ], 'server');


  /*
  *  Client & Server
  */
  api.addFiles([
    'lib/collections.js',
    'lib/router/routes.js'
  ], ['client', 'server']);


  /*
  *  Exports
  */
  api.export(['Notify']);

});
