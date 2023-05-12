$('.slick-newsletter').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay:true,
    autoplaySpeed:2000,
  });

  $('#slick-videos').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    infinite: true,
    arrows: false,
    autoplaySpeed:2000,
    pauseOnFocus:true,
  });

  $('#slick-videos').click(function() {
    $('.slider').slick('slickPause');
  });