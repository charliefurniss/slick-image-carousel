$(document).ready(function(){
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    centerMode: true,
    focusOnSelect: true,
    variableWidth: true
  });
});
