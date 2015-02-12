
/*
*  Config
*/

var isAdmin = function(user) {
  user = (typeof user === 'undefined') ? Meteor.user() : user;
  return !!user && !!user.isAdmin;
};

// Must be admin to access route
var adminRequired = function() {
  if(!this.ready()) return;
  if(!isAdmin()){
    this.render('no_rights');
  } else {
    this.next();
  }
}

Router.onBeforeAction(adminRequired, {
  only: [
    'praise_list',
    'praise_submit',
    'praise_edit'
  ]
});


/*
*  Controllers
*/

PraisesController = RouteController.extend({
  waitOn: function() {
    return Meteor.subscribe('praises');
  },
  data: function() {
    return {
      praises: Praises.find()
    }
  }
});

PraisesUpdateController = RouteController.extend({
  waitOn: function () {
    var id = this.params._id;
    return Meteor.subscribe('praise', id);
  },

  data: function () {
    var id = this.params._id;
    var praise = Praises.findOne({_id: id});
    return praise;
  },

  action: function () {
    this.render();
  }
});

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

Meteor.startup(function () {

  Router.route('/about');

  Router.route('/praise', {
    controller: PraisesController
  });

  Router.route('/praise/list', {
    name: 'praise_list',
    controller: PraisesController
  });

  Router.route('/praise/new', {
    name: 'praise_submit'
  });

  Router.route('/praise/:_id/edit', {
    name: 'praise_edit',
    controller: PraisesUpdateController
  });

  Router.route('/press');

  Router.route('/newsletter', function(){
    this.render('d4g_newsletterSignup');
  });

});
