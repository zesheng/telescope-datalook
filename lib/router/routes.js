
Meteor.startup(function () {

  PressController = FastRender.RouteController.extend({
    layoutTemplate: 'press_layout',
    waitOn: function() {
      return [Meteor.subscribe('postsCount'),
              Meteor.subscribe('usersCount')]
    }
  });

  Router.map(function() {
    this.route('about', {path: '/about'});
    this.route('press', {
      path: '/press',
      controller: PressController
    });
  });

});