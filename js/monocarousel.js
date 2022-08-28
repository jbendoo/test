$(function () {
    var carousel = function () 
        {
            $('.mono-carousel').owlCarousel({
                loop: true,
                autoplay: true,
                margin: 0,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                //smartSpeed: 15000,
                nav: true,
                dots: false,
                autoplayHoverPause: false,
                URLhashListener: true,
                
                items: 3,
                navText: ["<span class='ion-ios-arrow-back'></span>", "<span class='ion-ios-arrow-forward'></span>"],
            });

        };
    carousel();

});
/*
$(function () {
    var owl = $('.mono-carousel');
    owl.owlCarousel();
    // Listen to owl events:
    owl.on('changed.owl.carousel', function (event) {

        // get slide index 

        var index = event.page.index;

        // city name 
        var city = "" ; 

        switch (index) {
            case 0:
              city = "Rabat";
              break;
            case 1:
              city = "Sale";
              break;
            case 2:
               city = "Kenitra";
              break;
            case 3:
              city = "Temara";
              break;
            case 4:
              city = "Khemisset";
              break;
            case 5:
              city = "SidiSlimane";
              break;
            case 6:
              city = "SidiKacem";
          }

        // Select all list items
        var listItems = $(".ville");

        // Remove 'current' tag for all list items
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].classList.remove("is_active");
        }
        // Add 'current' tag for currently selected item
     
        $('#ville-'+city).addClass('is_active');

       
    });

});*/