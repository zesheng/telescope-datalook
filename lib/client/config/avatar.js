
// Set default avatar

Meteor.startup(function () {
  Avatar.options = {
    defaultAvatarUrl: 'https://dataforgood.s3.amazonaws.com/d4g_avatar.jpg'
  };
});