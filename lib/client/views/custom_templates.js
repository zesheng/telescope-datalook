
/**
 * Define dynamic templates
 */

Meteor.startup(function(){
  Template.d4g_layout.replaces('layout');
  Template.d4g_nav.replaces('nav');
  Template.d4g_search.replaces('search');
  Template.d4g_postAuthor.replaces('postAuthor');
  Template.d4g_postInfo.replaces('postInfo');
  Template.d4g_postUpvote.replaces('postUpvote');
  Template.d4g_postContent.replaces('postContent');
  Template.d4g_postDiscuss.replaces('postDiscuss');
  Template.d4g_post_submit.replaces('post_submit');
  Template.d4g_post_edit.replaces('post_edit');
  // Template.d4g_user_profile.replaces('user_profile');
  Template.d4g_newsletterBanner.replaces('newsletterBanner');
  Template.d4g_comment_submit.replaces('comment_submit');
  // Template.d4g_post_page.replaces('post_page');
});

/**
 * Define custom modules
 */

// Hero
Telescope.modules.remove('hero', 'newsletterBanner');
Telescope.modules.remove('hero', 'currentRelease');
Telescope.modules.remove('hero', 'updateBanner');

Telescope.modules.register('hero', [{
    template: 'newsletterBanner',
    order: 10
  },{
    template: 'd4g_button_bar',
    order: 100  // always last
  }]
);

// Users
Telescope.modules.remove('profileEdit', 'userInvites');
Telescope.modules.remove('profileEdit', 'user_subscribed_posts');

