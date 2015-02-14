
Template.d4g_post_submit_form.helpers({
  hasGoogleApiKey: function () {
    return !!getSetting('googleMapsAPI');
  },
  isPostEdit: function () {
    return (Router.current().route.getName() === 'post_edit');
  }
});

Template.d4g_post_submit_form.rendered = function () {
  Tracker.autorun(function () {
    if (GoogleMaps.loaded()) {
      $('#location').geocomplete()
    }
  });
};
