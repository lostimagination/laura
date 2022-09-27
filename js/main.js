;(function ($) {
    "use strict";
    var introSlider = $('.ba-intro-slider'),
        bgSlider = $('.ba-bg-slider');
    introSlider.slick({
        prevArrow: '.ba-intro-slider-prev',
		nextArrow: '.ba-intro-slider-next',
        asNavFor: bgSlider,
        speed: 500,
        dots: true,
        appendDots: '.ba-intro-slider-nav'
    });
    bgSlider.slick({
		arrows: false,
        asNavFor: introSlider,
        speed: 500
	});
//toggle- mob-menu
    var nav = $('.ba-nav'),
       menuToggle = $('.ba-menu-toggle');
    menuToggle.on('click', function (e){
        e.preventDefault();
        nav.toggleClass('ba-open');
    });
    $('[data-overlay]').on('click', function (e){
        $('.ba-modal-open').removeClass('ba-modal-open');
    });
    var modal = $('[data-modal]');
    modal.on('click', function(e){
        e.preventDefault();
        console.log(this);
        var modalId = $(this).attr('href');
$(modalId).toggleClass('ba-modal-open');

    // popup

    });

})(jQuery);

