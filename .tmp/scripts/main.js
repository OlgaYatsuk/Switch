$(document).ready(function () {
  $('.js-slider').slick({
    dots: false,
    appendArrows: $('.blockquote-slider-controls'),
    prevArrow: '<a href="#" class="arrow-link arrow-link--prev"><i class="icon-left-open-big prev"></i></a>',
    nextArrow: '<a href="#" class="arrow-link arrow-link--next"><i class="icon-right-open-big next"></i></a>',

    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    draggable: true
  });
});

$('.work-with-us__scroll').on('click', '.js-go-to', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $root.animate({ scrollTop: $($.attr(this, 'href')).offset().top });
});