
/**
 * Define dynamic templates
 */

templates["layout"] = "d4g_layout";
templates["nav"] = "d4g_nav";
templates["search"] = "d4g_search";
templates["userMenu"] = "d4g_userMenu";
templates["posts_list"] = "d4g_posts_list";
templates["postAuthor"] = "d4g_postAuthor";
templates["postInfo"] = "d4g_postInfo";
templates["postUpvote"] = "d4g_postUpvote";
templates["postContent"] = "d4g_postContent";
templates["postDiscuss"] = "d4g_postDiscuss";
templates["post_submit"] = "d4g_post_submit";
templates["post_edit"] = "d4g_post_edit";
templates["user_profile"] = "d4g_user_profile";
templates["user_edit"] = "d4g_user_edit";
templates["newsletterBanner"] = "d4g_newsletterBanner";


/**
 * Define custom modules
 */

heroModules.unshift({
  template: 'd4g_hero'
});

heroModules.push({
  template: 'd4g_button_bar'
});