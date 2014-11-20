/**
 *  Global Helpers
 */

///// Date Helpers /////

// Format "MM/DD/YYYY, hh:mm"
Template.registerHelper('formattedDatetime', function(date, options) {
  if (date)
      return moment(date).format('MM/DD/YYYY, hh:mm');
});

// Format "MM/DD/YYYY"
Template.registerHelper('formattedDate', function(date, options) {
  if (date)
      return moment(date).format('MM/DD/YYYY');
});

// Time from date
Template.registerHelper('fromNow', function(date, options) {
  if (date)
      return moment(date).fromNow();
});

// Get the current year
Template.registerHelper('currentYear', function() {
  year = new Date().getFullYear();
  return year;
});


///// Template Utilities /////

// Return true if current route is any of the following
Template.registerHelper('isHomePage', function () {
  var r = Router.current().route.getName();
  return r == 'posts_default' ? true :
         r == 'posts_top' ? true :
         r == 'posts_best' ? true :
         r == 'posts_new' ? true :
         r == 'posts_digest' ? true : false;
});