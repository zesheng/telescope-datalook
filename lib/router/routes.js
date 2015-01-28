
Meteor.startup(function () {

  /*
  *  Controllers
  */

  PressController = RouteController.extend({
    layoutTemplate: 'press_layout',
    waitOn: function() {
      return [Meteor.subscribe('postsCount'),
              Meteor.subscribe('usersCount')]
    },
    fastRender: true
  });


  /*
  *  Routes
  */

  Router.route('/about');
  Router.route('/press');


});