$(function(){

  // для плавного скролла:

$('.scrollto a').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 700,   // по умолчанию «400» 
        easing: "swing" // по умолчанию «swing» 
    });

    return false;
});

  // анимация для бургера

  document.querySelector('.burger').addEventListener('click', function(){
  document.querySelector('.burger span').classList.toggle('active');
  document.querySelector('.menu__list').classList.toggle('menu__list--active');
  document.querySelector('.contacts').classList.toggle('contacts--active');
})
 
$('#swap').click(function(){
    var v1 = $('#s1').val(),
        v2 = $('#s2').val();
    $('#s1').val(v2);
    $('#s2').val(v1);
});

  // слайдер

$('.comments__pages').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.comments__arrows-left'),
    nextArrow: $('.comments__arrows-right'),
    infinite: false,
  });
  
    var $status = $('.pagingInfo');
    var $slickElement = $('.slideshow');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
    });

    $slickElement.slick({
        slide: '.slide-placeholder',
        autoplay: true,
        dots: true
    });

});

$(document).ready(function(){
   $('.partners').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
    {
      breakpoint: 1300,
      settings: {
       slidesToShow: 5,
      }
    },
    {
      breakpoint: 1100,
      settings: {
       slidesToShow: 4,
      }
    },
    {
      breakpoint: 830,
      settings: {
       slidesToShow: 3,
      }
    },
    {
      breakpoint: 620,
      settings: {
       slidesToShow: 2,
      }
    },
    {
      breakpoint: 410,
      settings: {
       slidesToShow: 1,
      }
    },
  ]
  });
});