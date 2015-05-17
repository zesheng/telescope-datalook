var confirmSubscription = function () {
  $('.newsletter-banner form').css('opacity', 0);
  $('.newsletter-banner .newsletter-subscribed').css('display', 'block').css('opacity', 1);

  Meteor.setInterval(function () {
    dismissBanner();
  }, 2000)
}

var dismissBanner = function () {
  $('.newsletter-banner').removeClass('fadeInUp');
  $('.newsletter-banner').addClass('fadeOutDown');

  Meteor.setInterval(function () {
    Router.go('/');
  }, 1500)
}

Meteor.startup(function () {
  Template.d4g_newsletterSignup.helpers({
    siteName: function () {
      return Settings.get('title');
    },
    isNotConnected: function () {
      return !Meteor.user()
    }
  });

  Template.d4g_newsletterSignup.events({
    'click .newsletter-button': function (e) {
      e.preventDefault();
      var $banner = $('.newsletter-banner');
      if(Meteor.user()){
        $banner.addClass('show-loader');
        Meteor.call('addCurrentUserToMailChimpList', function (error, result) {
          $banner.removeClass('show-loader');
          if(error){
            console.log(error);
            Messages.flash(error.message, "error");
          }else{
            console.log(result);
            confirmSubscription();
          }
        });
      }else{
        var email = $('.newsletter-email').val();
        if(!email){
          alert('Please fill in your email.');
          return
        }
        $banner.addClass('show-loader');
        Meteor.call('addEmailToMailChimpList', email, function (error, result) {
          $banner.removeClass('show-loader');
          if(error){
            console.log(error);
            Messages.flash(error.reason, "error");
          }else{
            Messages.clearSeen();
            console.log(result);
            confirmSubscription();
          }
        });
      }
    },
    'click .newsletter-dismiss': function (e) {
      $('.newsletter-banner').fadeOut('fast');
      dismissBanner();
      e.preventDefault();
    }
  });
});