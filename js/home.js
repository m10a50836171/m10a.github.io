$(window).on('load', function(){
  $("#splash_logo").delay(3000).fadeOut('slow');
  $("#splash").delay(3000).fadeOut('slow', function(){
      $('body').addClass('appear');
  });
  $('.swipeBackground').on('animationend', function(){
  });
});


