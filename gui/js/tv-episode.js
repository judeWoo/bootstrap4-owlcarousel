$(function () {
    $("#right-pane").load("movies-detail.html #left-pane", function () {
        $.getScript("js/details.js");
    });
    $("#top-image").load("movies-detail.html #top-image", function () {
        $("#top-image img").attr("src", "images/e1.jpg");
        $("#top-image h4 span").text("Preview");
        $("#top-image h2").text("Currahee");
        $("#trailer-info-box").removeClass("col-9").addClass("col-md-9 col-12");
        $(".video-btn").attr("data-src", "https://www.youtube.com/embed/TiNwZGPWFLA");
    })
    $("#info-box").load("tv-season.html #info-box", function () {
        $("#info-box h5").text("Episode Info");
        $("#info-box-text span").text("In the Season 4 premiere, just two days before the Allied invasion of Normandy--Lts. Richard Winters (Damian Lewis) and Lewis Nixon (Ron Livingston) reflect back on the events and training that led them to...");
    });
    $("#episode-box").load("critics.html #critic-box");
    $("#cast-box").load("movies-detail.html #cast-box");
    $("#photo-box").load("movies-detail.html #photo-box");
});