(function ($) {

  "use strict";

  // COLOR MODE
  $('.color-mode').click(function(){
    $('.color-mode-icon').toggleClass('active');
    $('body').toggleClass('dark-mode');
  });

  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  $('.owl-carousel').owlCarousel({
    items: 3,
    loop: true,
    margin: 30,
    nav: true,
    center: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

  // SMOOTH SCROLL
  $(function() {
    $('.nav-link, .custom-btn-link').on('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });

  // TOOLTIP
  $('.social-links a').tooltip();

  // HONORS CAROUSEL
  $('.owl-carousel').owlCarousel({
    items: 3,
    loop: true,
    margin: 30,
    nav: true,
    center: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

})(jQuery);
