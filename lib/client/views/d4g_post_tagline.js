Template.d4g_post_tagline.helpers({
  postTagline: function () {
    var tagline = this.tagline;

    if (! tagline)
      return

    if (tagline.length >= 210)
      return tagline.substr(0, 209) + '...';

    return tagline;
  }
});