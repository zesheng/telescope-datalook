
Template.d4g_post_submit_form.helpers({
  isPostEdit: function () {
    return (Router.current().route.getName() === 'post_edit');
  }
});
