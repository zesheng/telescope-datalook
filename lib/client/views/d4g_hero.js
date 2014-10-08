
Template.d4g_hero.helpers({

  isHomePage: function () {
    var r = Router.current().route.name;
    return r == 'posts_default' ? true :
           r == 'posts_top' ? true :
           r == 'posts_best' ? true :
           r == 'posts_new' ? true :
           r == 'posts_digest' ? true : false;
  }

});