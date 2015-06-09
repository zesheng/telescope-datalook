Template.d4g_post_share.helpers({
  sourceLink: function(){
    return !!this.url ? this.url : Telescope.utils.getSiteUrl() + "posts/"+this._id;
  },
  viaTwitter: function () {
    return !!Settings.get('twitterAccount') ? 'via='+Settings.get('twitterAccount') : '';
  },
  dropdownId: function () {
    return 'dropdown-' + this._id;
  }
});

Template.d4g_post_share.events({
  'click .share-link': function(e){
    var $this = $(e.target).parents('.post-share').find('.share-link');
    var $share = $this.parents('.post-share').find('.share-options');
    e.preventDefault();
    $('.share-link').not($this).removeClass("active");
    $(".share-options").not($share).addClass("hidden");
    $this.toggleClass("active");
    $share.toggleClass("hidden");
  }
});