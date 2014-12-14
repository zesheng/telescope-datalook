// On first start, seed the database with some default data if none exists.

Meteor.startup(function() {

  if (Meteor.users.find().count() < 1) {

    Accounts.createUser({
      username: 'admin',
      email: 'jeremy.shimko@gmail.com',
      password: 'admin'
    });

    Settings.insert({
      title: 'DataLook',
      logoUrl: 'https://datalook.s3.amazonaws.com/images/logo-datalook.svg'
    });

  };

});