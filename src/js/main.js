$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoerPause: true
    });

    /*
    * 1. js或服务器响应式的图片预览
    * */

/*    function makeImage() {
        var width = $(window).width();
        var img = $('ele img');
        if (width <= 480 ){
            img.attr('src', 'img/480.png');
        }else if (width <= 800){
            img.attr('src', 'img/800.png');
        }else{
            img.attr('src', 'img/1600.png');
        }
    }
    $(window).on('resize load', makeImage);*/


});
