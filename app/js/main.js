$(function(){
 
$('#swap').click(function(){
    var v1 = $('#s1').val(),
        v2 = $('#s2').val();
    $('#s1').val(v2);
    $('#s2').val(v1);
});

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