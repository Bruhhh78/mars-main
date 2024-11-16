$(document).ready(function(){
    // Cache DOM elements
    const $navbarBox = $('.navbar-box');
    const $navbarShowBtn = $('.navbar-show-btn');
    const $navbarHideBtn = $('.navbar-hide-btn');
    const $navbarLinks = $('.navbar-box a'); // All links in navbar (including sub-menu)

    // Initialize Owl Carousel
    $('.feedback-slider').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        items: 1,
        autoplay: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"]
    });

    // Stop animation on window resize
    let resizeTimer;
    $(window).resize(function(){
        $('body').addClass('resize-animation-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            $('body').removeClass('resize-animation-stopper');
        }, 400);
    });

    // Show navbar
    $navbarShowBtn.on('click', function() {
        $navbarBox.addClass('navbar-box-show');
    });

    // Hide navbar
    $navbarHideBtn.on('click', function() {
        $navbarBox.removeClass('navbar-box-show');
    });

    // Close navbar when any link is clicked (including sub-menu links)
    $navbarLinks.on('click', function() {
        $navbarBox.removeClass('navbar-box-show');
    });
});
