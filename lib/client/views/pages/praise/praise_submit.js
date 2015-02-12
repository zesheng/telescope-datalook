AutoForm.hooks({
  insertPraiseForm: {
    onSuccess: function(operation, result, template) {
      Router.go('praise_edit', {_id: result});
      Meteor.call('getTwitterDetails', result, function (error, result) {
        if(error)
          console.log("Failed to update Twitter follower count.");
          console.log(error);
        console.log(result);
      });
    }
  }
});
