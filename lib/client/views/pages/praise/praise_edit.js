Template.praise_edit.events({
  'click #refresh-twitter': function (e, t) {
    e.preventDefault();
    var twitter = $('input[name=twitter]').val();

    Meteor.call('getTwitterDetails', this._id, twitter, function (error, result) {
      if(error) {
        console.log("Failed to update Twitter follower count.");
        console.log(error);
      }
      clog(result);
    });
  }
});

AutoForm.hooks({
  editPraiseForm: {
    onSuccess: function(operation, result, template) {
      Router.go('praise_list');
    }
  }
});
