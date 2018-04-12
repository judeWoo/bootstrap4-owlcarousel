$(function () {
    $("#nav").load("index.html #nav");
    $("#bottom-ad").load("index.html #bottom-ad");
    $("footer").load("index.html footer");
    $("#load-page-box").load("index.html #load-page", function () {
        $.getScript("js/index.js");
    });
    $("#modal-section").load("index.html #modal-section", function () {
        $.getScript("js/main.js");
    });
    $(".first").owlCarousel({
        center: true,
        items: 2,
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    $(".second").owlCarousel({
        center: true,
        items: 2,
        loop: true,
        margin: 30,
        autowidth: true,
        nav: true,
        responsive: {
            600: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    });
});