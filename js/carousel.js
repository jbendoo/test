$(function () {

    "use strict";

        var fullHeight = function () {

            $('.js-fullheight').css('height', $(window).height());
            $(window).resize(function () {
                $('.js-fullheight').css('height', $(window).height());
            });

        };
    fullHeight();

    var carousel = function () 
        {
            $('.featured-carousel').owlCarousel({
                loop: true,
                autoplay: true,
                margin: 30,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                smartSpeed: 15000,
                nav: true,
                dots: true,
                autoplayHoverPause: false,
                URLhashListener: true,
                startPosition: 'URLHash',
                items: 1,
                navText: ["<span class='ion-ios-arrow-back'></span>", "<span class='ion-ios-arrow-forward'></span>"],
            });

        };
    carousel();

});

$(function () {

    var owl = $('.featured-carousel');
    owl.owlCarousel();
    // Listen to owl events:
    owl.on('changed.owl.carousel', function (event) {
        var index = event.page.index;
        // Select all list items
        var listItems = $(".list-group-item ");

        // Remove 'active' tag for all list items
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].classList.remove("active");

        }

        // Add 'active' tag for currently selected item
        $('#list' + index).addClass('active');
    });

});

$(function () {
    $('#menu li').on('click', function () {
        $('li.active').removeClass('active');
        $(this).addClass('active');
    });
});


$(function () {

    var owl = $('.nav-carousel');
    owl.owlCarousel();
    // Listen to owl events:
    owl.on('changed.owl.carousel', function (event) {
        var index = event.page.index;
        // Select all list items
        //alert(index);
    });

});