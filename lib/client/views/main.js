///////////////
// SEO stuff //
///////////////

Meteor.startup(function() {

  var seoProperties = {
    meta: {},
    og: {},
    twitter: {}
  };

  var title = 'DataLook';

  seoProperties.title = title;
  seoProperties.meta.description = 'DataLook showcases reusable data-driven projects for social good.';
  seoProperties.meta.keywords = 'data, social, good, common, public, civic, hacking, tech';

  seoProperties.og.title = 'http://datalook.io/';
  seoProperties.og.url = 'http://datalook.io/';
  seoProperties.og.image = 'https://s3.amazonaws.com/datalook.io/img/logo-datalook-fb.jpg';
  seoProperties.og.site_name = 'DataLook';
  seoProperties.og.type = 'website';

  seoProperties.twitter.title = title;
  seoProperties.twitter.card = 'summary';
  seoProperties.twitter.url = 'http://datalook.io/';
  seoProperties.twitter.image = 'https://s3.amazonaws.com/datalook.io/img/logo-datalook-twitter.jpg';
  seoProperties.twitter.site = '@DataLook';
  seoProperties.twitter.creator = '@DataLook';

  seoProperties.auto = {
    twitter: true,
    og: true,
    set: ['description', 'url', 'title']
  }

  SEO.config(seoProperties);

});


Router._filters.setSEOProperties = function () {
  // var props = {meta: {}, og: {}};
  // var title = this.getTitle && this.getTitle();
  // var description = this.getDescription && this.getDescription();
  // var image = Settings.get("siteImage");

  // SEO.set(props);
};