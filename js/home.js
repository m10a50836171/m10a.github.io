$(window).on('load', function(){
  $("#splash_logo").delay(2000).fadeOut('slow');
  $("#splash").delay(2000).fadeOut('slow', function(){
      $('body').addClass('swipeOn');
  });
  $('.swipeBackground').on('animationend', function(){
  });
});

function FixedAnime(){
  var headerH = $('#header').outerHeight(true);
  var scroll = $(window).scrollTop();
  if (scroll >= headerH){
    $('#header').addClass('fixed');
  } else {
    $('#header').removeClass('fixed');
  }
}

$(window).scroll(function () {
  FixedAnime();
});

$(window).on('load', function () {
  FixedAnime();
});


