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


/*
*  Users
*/

// https://github.com/aslagle/reactive-table#server-side-pagination-and-filtering-beta
ReactiveTable.publish("all-users", function() {
  if(isAdminById(this.userId)){
    return Meteor.users;
  } else {
    return [];
  }
});
