//Nasir Uddin

// to fix the menubar on top always during the scrolling
$(document).ready(function(){

    $(window).scroll(function(){

        if ($(window).scrollTop() > 640) {
            $('.navbar').addClass('navbar-fixed-top');
        }
        if ($(window).scrollTop() < 641) {
            $('.navbar').removeClass('navbar-fixed-top');
        }

    });
});

//slow scrolling effect for navigation bar


$(".navbar-dark ul li a[href^='#']").on('click', function(e) {

   e.preventDefault();

   var hash = this.hash;

   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 350, function(){

       window.location.hash = hash;
     });

});

//slow scrolling effect parallax section

$("#section-parallax .col-sm-8 a[href^='#']").on('click', function(e) {

   e.preventDefault();

   var hash = this.hash;

   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 350, function(){

       window.location.hash = hash;
     });

});

// slow scrolling effect footer button

$(".footer .scroll-to-top-button a[href^='#']").on('click', function(e) {

   e.preventDefault();

   var hash = this.hash;

   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 300, function(){

       window.location.hash = hash;
     });

});

// waypoint animation
$('.js-wp-1').waypoint(function(direction) {
    $('.js-wp-1').addClass('animated fadeInDown');
}, {
    offset: '50%'
});

$('.js-wp-2').waypoint(function(direction) {
    $('.js-wp-2').addClass('animated fadeInLeft');
}, {
    offset: '50%'
});

$('.js-wp-3').waypoint(function(direction) {
    $('.js-wp-3').addClass('animated fadeInRight');
}, {
    offset: '50%'
});

$('.js-wp-4').waypoint(function(direction) {
    $('.js-wp-4').addClass('animated zoomIn');
}, {
    offset: '50%'
});







