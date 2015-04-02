/*
*  Press Page counts
*/
Meteor.publish('postsCount', function() {
  return Posts.find({status: 2}, {fields: {title: true}});
});

Meteor.publish('usersCount', function() {
  return Meteor.users.find({}, {fields: {username: true}});
});


/*
*  Praise
*/
Meteor.publish('praises', function() {
  return Praises.find();
});

Meteor.publish('praise', function (id) {
    return Praises.find({_id: id});
});
