
// Set default avatar

Meteor.startup(function () {
  Avatar.options = {
    defaultAvatarUrl: 'https://dataforgood.s3.amazonaws.com/images/d4g_avatar.svg'
  };
});