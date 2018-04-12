$(function () {
    $("#photo-box").load("movies-detail.html #photo-box", function () {
        $.getScript("js/details.js");
    });
    $("#highest-review-box").load("movies-detail.html #photo-box", function () {
        $("#highest-review-box img").attr("src", "images/tv1.jpg");
    });
    $("#tv-box").load("critics.html #critic-box", function () {
        $("#tv-box .critic-box-item a").text("Late Night With Seth Meyers");
    });
    $("#quote-box").load("movies-detail.html #quote-box", function () {
        $("#quote-box h4").text("Quotes from Characters");
        $("#quote-box h5").text("Quotes from Characters");
    });
});