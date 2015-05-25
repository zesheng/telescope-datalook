
// Template.praise.rendered = function () {
//   var $timeline_block = $('.praise-timeline-block');

//   //hide blocks that are outside the viewport
//   $timeline_block.each(function(){
//     if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
//       $(this).find('.praise-timeline-img, .praise-timeline-content').addClass('is-hidden');
//     }
//   });

//   //on scoll, animate timeline blocks in as they enter the viewport
//   $(window).on('scroll', function(){
//     $timeline_block.each(function(){
//       if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.praise-timeline-img').hasClass('is-hidden') ) {
//         $(this).find('.praise-timeline-img, .praise-timeline-content').removeClass('is-hidden').addClass('bounce-in');
//       }
//     });
//   });
// };

Template.praise.helpers({
  praise: function () {
    var p = Praises.find({}, {sort: {followers: -1}});
    return p;
  }
});
