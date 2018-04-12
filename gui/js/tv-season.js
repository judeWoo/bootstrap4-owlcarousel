$(function () {
    $("#right-pane").load("movies-detail.html #left-pane", function () {
        $.getScript("js/details.js", function () {
            showTVShows();
        });
    });
    $("#poster-meter-box").load("movies-detail.html #poster-meter-box", function () {
        $("#poster-meter-box #poster").attr("src", "images/tv4.jpg");
        $("#poster-meter-box #consensus-big b").text("Critics Consensus");
        $("#poster-meter-box #consensus-big span").text("Agents of S.H.I.E.L.D. explores darker territory in its fourth season with the thrilling introduction of Ghost Rider, setting up an action-packed new chapter of Marvel's edgier mythologies.");
        $("#poster-meter-box #consensus-small b").text("Critics Consensus");
        $("#poster-meter-box #consensus-small span").text("Agents of S.H.I.E.L.D. explores darker territory in its fourth season with the thrilling introduction of Ghost Rider, setting up an action-packed new chapter of Marvel's edgier mythologies.");
        $("#poster-meter-box #mudemeter h3").text("96%");
        $("#poster-meter-box #user-score h1").removeClass("neon").addClass("neon");
        $("#poster-meter-box #user-score h3").text("98%");
    });
    $("#review-box-big").load("movies-detail.html #review-box-big");
    $("#review-box-small").load("movies-detail.html #review-box-small");
    $("#cast-box").load("movies-detail.html #cast-box");
    $("#critic-review-box").load("movies-detail.html #critic-review-box");
    $("#audience-review-box").load("movies-detail.html #audience-review-box");
});