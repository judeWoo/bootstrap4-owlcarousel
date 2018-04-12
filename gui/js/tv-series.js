$(function () {
    $.getScript("js/details.js");
    $("#franchise-box").load("movies-detail.html #franchise-box");
    $("#poster-meter-box").load("movies-detail.html #poster-meter-box", function () {
        $("#poster-meter-box #poster").attr("src", "images/tv1.jpg");
        $("#poster-meter-box #consensus-big b").text("Series Info");
        $("#poster-meter-box #consensus-big span").text("An action-adventure series based on the Marvel Comics secret-intelligence organization headed by Agent Phil Coulson.");
        $("#poster-meter-box #consensus-small b").text("Series Info");
        $("#poster-meter-box #consensus-small span").text("An action-adventure series based on the Marvel Comics secret-intelligence organization headed by Agent Phil Coulson.");
        $("#poster-meter-box #mudemeter h3").text("91%");
        $("#poster-meter-box #user-score h1").removeClass("neon").addClass("silver");
        $("#poster-meter-box #user-score h3").text("68%");
        // $("#poster-meter-box #consensus-big").parent(".mx-0").append($("<p class='my-1 py-0'><b>Creators</b>:</p>"));
    });
    $("#cast-box").load("movies-detail.html #cast-box");
});