Meteor.startup(function() {

  $.noty.defaults = {
    layout: 'top',
    theme: 'relax',
    type: 'alert',  // alert, success, error, warning, confirm
    text: '', // can be html or string
    dismissQueue: true, // If you want to use queue feature set this true
    template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
    animation: {
      open: 'animated bounceInRight',
      close: 'animated bounceOutRight',
      easing: 'swing',
      speed: 1000
    },
    timeout: 3000, // delay for closing event. Set false for sticky notifications
    force: false, // adds notification to the beginning of queue when set to true
    modal: false,
    maxVisible: 5, // you can set max visible notification for dismissQueue true option,
    killer: false, // for close all notifications before show
    closeWith: ['click'], // ['click', 'button', 'hover', 'backdrop'] // backdrop click will close all notifications
    callback: {
        onShow: function() {},
        afterShow: function() {},
        onClose: function() {},
        afterClose: function() {},
        onCloseClick: function() {},
    },
    buttons: false // an array of buttons
  };

});


Notify = {

  alert: function(text, location) {
    noty({
      type: 'alert',
      layout: location || 'top',
      text: text
    });
  },

  success: function(text, location) {
    noty({
      type: 'success',
      layout: location || 'top',
      text: text
    });
  },

  error: function(text, location) {
    noty({
      type: 'error',
      layout: location || 'top',
      text: text,
      timeout: 7000
    });
  },

  warning: function(text, location) {
    noty({
      type: 'warning',
      layout: location || 'top',
      text: text
    });
  },

  info: function(text, location) {
    noty({
      type: 'information',
      layout: location || 'top',
      text: text
    });
  },

  confirm: function(text, location) {
    noty({
      type: 'confirm',
      layout: location || 'top',
      text: text
    });
  }
}