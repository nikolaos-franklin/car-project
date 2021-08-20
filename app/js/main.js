$(function(){

   wow = new WOW(
   {
   boxClass:     'wow',      // default
   animateClass: 'animate__animated', // default
   offset:       0,          // default
   mobile:       true,       // default
   live:         true        // default
  }
  )
  wow.init();

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

  $('.burger').on('click', function(){
    $('.burger span').toggleClass('active');
    $('.menu__list').toggleClass('menu__list--active');
    $('.contacts').toggleClass('contacts--active');  
  });

  $('.menu__list-link').on('click', function(){
    $('.burger span').removeClass('active');
    $('.menu__list').removeClass('menu__list--active');
    $('.contacts').removeClass('contacts--active');
  });
 
$('#swap').click(function(){
    var v1 = $('#s1').val(),
        v2 = $('#s2').val();
    $('#s1').val(v2);
    $('#s2').val(v1);
});

  // слайдер

 $('.comments__pages').on('init', function(event, slick) {
    $('.current').text(slick.currentSlide + 1);
    $('.total').text(slick.slideCount);
  })
  .slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.comments__arrows-left'),
    nextArrow: $('.comments__arrows-right'),
    infinite: false,
  })
  .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.current').text(nextSlide + 1);
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