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
                margin: 20,
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

        // get slide index 

        var index = event.page.index;

        // Select all list items
        var listItems = $(".nav-item");

        // Remove 'current' tag for all list items
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].classList.remove("current");
        }
        // Add 'current' tag for currently selected item
     
        $('#item-'+index).addClass('current');

        // get the item's postion and move the scroll
        var container = $('#navigation');
        var scrollTo = $('#item-'+index);
	    var position = scrollTo.offset().top - container.offset().top  + container.scrollTop();
	    container.animate({scrollTop: position});
    });

});

$(function () {
    $('#menu li').on('click', function () {
        $('li.active').removeClass('active');
        $(this).addClass('active');
    });
});