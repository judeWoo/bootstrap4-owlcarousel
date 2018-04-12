$(function () {
    $("#nav").load("index.html #nav", function () {
        $("a.navbar-brand").attr("href", "index.html");
    });
    $("footer").load("index.html footer");
    $("#load-page-box").load("index.html #load-page", function () {
        $.getScript("js/index.js");
    });
    $("#modal-section").load("index.html #modal-section", function () {
        $.getScript("js/main.js");
    });
    
    $('.about').click(function () {
        window.location.href = "about.html";
    });

    $('.list').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $(this).removeClass('bat').siblings().addClass('bat');
    });

    $('#nav-critics-home').click(function () {
        $('#critics-home').removeClass('d-none').siblings().addClass('d-none');
        $('#navbar-critics').removeClass('d-none');
    });
    $('#nav-critics-list').click(function () {
        $('#critics-list').removeClass('d-none').siblings().addClass('d-none');
        $('#navbar-critics').removeClass('d-none');
    });
    $('#nav-publications-list').click(function () {
        $('#publications-list').removeClass('d-none').siblings().addClass('d-none');
        $('#navbar-critics').removeClass('d-none');
    });
    $('#nav-critics-groups').click(function () {
        $('#critics-groups').removeClass('d-none').siblings().addClass('d-none');
        $('#navbar-critics').removeClass('d-none');
    });
    $('#nav-latest-film-reviews').click(function () {
        $('#latest-film-reviews').removeClass('d-none').siblings().addClass('d-none');
        $('#navbar-critics').removeClass('d-none');
    });
    $('#nav-critics-criteria').click(function () {
        $('#critics-criteria').removeClass('d-none').siblings().addClass('d-none');
        $('#navbar-critics').removeClass('d-none');
    });
    $('#nav-critic-application').click(function () {
        $('#critics-criteria').removeClass('d-none').siblings().addClass('d-none');
        $('#navbar-critics').removeClass('d-none');
    });
});