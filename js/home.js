$(window).on('load', function(){
  $("#splash_logo").delay(2000).fadeOut('slow');
  $("#splash").delay(1000).fadeOut('slow', function(){
      $('body').addClass('swipeOn');
  });
  $('.swipeBackground').on('animationend', function(){
  });
});


