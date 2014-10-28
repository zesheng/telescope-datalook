/*
*  Press Page counts
*/
Meteor.publish('postsCount', function() {
  return Posts.find({status: 2}, {fields: {title: true}});
});

Meteor.publish('usersCount', function() {
  return Meteor.users.find({}, {fields: {username: true}});
});