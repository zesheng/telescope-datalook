
// Set default avatar

Meteor.startup(function () {
  Avatar.options = {
    defaultType: 'image',
    defaultImageUrl: 'https://dataforgood.s3.amazonaws.com/images/d4g_avatar.jpg'
  };
});