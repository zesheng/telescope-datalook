
Template.press.helpers({
  datetime: function() {
    return new Date();
  },
  today: function() {
    return moment(new Date()).format("dddd, MMMM Do YYYY");
  },
  totalProjects: function() {
    return Posts.find().count();
  },
  totalUsers: function() {
    return Meteor.users.find().count();
  }
});
