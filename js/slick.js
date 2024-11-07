$(function () {
  $('.gallery__list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    centerMode: true,
    cssEase: 'linear',
    // nextArrow: '.reviews__button--right',
  });
});

$(function () {
  $('.advantages__list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    centerMode: true,
    cssEase: 'linear',
    // nextArrow: '.reviews__button--right',
  });
});

$(function () {
  $('.play__list').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
   
    centerMode: true,
    cssEase: 'linear',
    nextArrow: '.play__button',
    prevArrow: '.play__button',
    
  });
});







