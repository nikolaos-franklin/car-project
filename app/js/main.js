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

// $('.comments__pages').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     prevArrow: $('.comments__arrows-left'),
//     nextArrow: $('.comments__arrows-right'),
//     infinite: false,
//   });
  
//     var $status = $('.pagingInfo');
//     var $slickElement = $('.slideshow');

//     $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
//   //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
//   var i = (currentSlide ? currentSlide : 0) + 1;
//   $status.text(i + '/' + slick.slideCount);
// });


//     $slickElement.slick({
//         slide: '.slide-placeholder',
//         autoplay: true,
//         dots: true
//     });

 $('.comments__pages').on('init', function(event, slick) {
    $(this).append('<div class="slideCount"><span class="current"></span> / <span class="total"></span></div>');
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