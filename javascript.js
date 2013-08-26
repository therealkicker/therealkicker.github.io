$(function() {
  $(window).scroll(function(){
      if( $(window).scrollTop() < 71 ) {
        $('.feature.lamp').removeClass("fixed");
        $('.feature.lamp').removeClass("absolute");
        $('.feature.lamp .explanation').fadeIn();
        }
      if( $(window).scrollTop() > 70 && $(window).scrollTop() < 221 ) {
          $('.feature.lamp').addClass("fixed");
          $('.feature.lamp').removeClass("absolute");
          $('.feature.lamp .explanation').fadeOut();
          $('h1').removeClass("absolute");
        }
      if( $(window).scrollTop() > 222 ) {
          $('.feature.lamp').removeClass("fixed");
          $('.feature.lamp').addClass("absolute");
          $('h1').addClass("absolute");
      }
  });
});
