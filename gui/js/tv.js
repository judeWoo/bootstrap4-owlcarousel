$(function () {
    $("#nav").load("index.html #nav", function () {
        $("a.navbar-brand").attr("href", "index.html");
    });
    $("#bottom-ad").load("index.html #bottom-ad");
    $("footer").load("index.html footer");
    $("#load-page-box").load("index.html #load-page", function () {
        $.getScript("js/index.js");
    });
    $("#modal-section").load("index.html #modal-section", function () {
        $.getScript("js/main.js");
    });

    var images3 = ['ad-3.png', 'ad-3-1.png'];
    $("#ad3-1").attr('src', 'images/' + images3[Math.floor(Math.random() * images3.length)]);
    var images3 = ['ad-3.png', 'ad-3-1.png'];
    $("#ad3-2").attr('src', 'images/' + images3[Math.floor(Math.random() * images3.length)]);

});