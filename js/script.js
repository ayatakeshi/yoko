$(function(){

    $('.c-slider__list').slick({
        autoplay: true, //自動再生
        autoplaySpeed: 3000, //再生スピード
        infinite: true //無限スライド
    });

    $(".c-hamburgermenu__btn").click(function () {
        $(".p-gnavSp").toggleClass('active');
    });

    $(".p-gnavSp a").click(function () {
        $(".p-gnavSp").removeClass('active');
        $('#menu-btn-check').prop('checked', false);
    });

    $(window).scroll(function () {
        $(".p-gnavSp").removeClass('active');
        $('#menu-btn-check').prop('checked', false);
    });

    $(".c-ecBtn").click(function () {
        $(".c-ec__list").toggleClass('active');
    });

    $(".c-ecBtn a").click(function () {
        $(".c-ec__list").removeClass('active');
    });

    $(window).scroll(function () {
        $(".c-ec__list").removeClass('active');
    });

    $('a[href^="#"]').click(function(){
        let href = $(this).attr('href');
        let target = $(href == '#' || href == '' ? 'html' : href);
        let position = target.offset().top;
        $('body,html').animate({scrollTop:position}, 400, 'swing');
        return false;
        });

});

