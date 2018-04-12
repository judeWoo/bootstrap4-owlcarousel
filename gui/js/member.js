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
        $.getScript("js/main.js", function () {
            $(".signIn-label").addClass("d-none");
            $(".signUp-label").addClass("d-none");
            $(".user-tab").removeClass("d-none");
        });
    });
    $("#want-to-see-movie-box").load("movies-detail.html .details:eq(1)", function () {

        $('.details').owlCarousel({
            margin: 10,
            autoWidth: false,
            nav: false,
            items: 6,
            responsive: {
                0: {
                    items: 2
                },
                500: {
                    items: 4
                },
                1000: {
                    items: 6
                }
            }
        });
        $("#want-to-see-movie-box .item a").attr("href", "movies-detail.html");
        $("#want-to-see-movie-box .item:eq(0) img").attr("src", "images/tv1.png");
        $("#want-to-see-movie-box .item:eq(1) img").attr("src", "images/tv2.png");
        $("#want-to-see-movie-box .item:eq(2) img").attr("src", "images/tv3.png");
        $("#want-to-see-movie-box .item:eq(3) img").attr("src", "images/tv4.png");
        $("#want-to-see-movie-box .item:eq(4) img").attr("src", "images/tv5.png");
    });

    $("#review-box").load("tv.html #tv-middle-box", function () {
        $("#review-box .tv-middle-box-row:eq(0) img").attr("src", "images/tv4.jpg");
        $("#review-box .tv-middle-box-row:eq(0) p.description").text("A very nice movie indeed. Made me feel 'GAY'! Yay!");
        $("#review-box .tv-middle-box-row:eq(1) img").attr("src", "images/tv3.jpg");
        $("#review-box .tv-middle-box-row:eq(1) p.description").text("A poorly written movie. This movie's writer clearly was in a bad \"Mude\", so to say.");
        $("#review-box .tv-middle-box-row:eq(6)").remove();
        $("#review-box .tv-middle-box-row:eq(5)").remove();
        $("#review-box .tv-middle-box-row:eq(4)").remove();
        $("#review-box .tv-middle-box-row:eq(3)").remove();
        $("#review-box .tv-middle-box-row:eq(2)").remove();
    });

    $(".users-tab button").click(function () {
        $(this).siblings().removeClass("active");
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            buttonHandler($(this).attr("id"));
        }
    });
});

function buttonHandler (x) {
    switch (x) {
        case "overview":
            $("#wts-movie-box").hide();
            $("#wts-tv-box").hide();
            $("#review-history-box").hide();
            $("#wts-list").hide();
            $("#ni-list").hide();
            $("#my-review-box").hide();
            $.ajax({
                // url: url,
                type: 'GET',
                dataType: 'html',
                complete: function () {
                    $('.users-tab button').attr("disabled", "");
                    console.log(1);
                    var d1 = $("#load-page-bounce-user").show(0).delay(500).fadeOut();
                    $.when(d1).done(function () {
                        $('.users-tab button').removeAttr("disabled");
                    });
                    // load Stuff
                    $("#review-history-box h5:eq(0)").text("Review History");
                    $("#review-box .tv-middle-box-row").show();
                    $("#review-box").show();
                    $("#want-to-see-movie-box").show();
                    $("#want-to-see-tv-box").show();
                    $("#wts-movie-box").show();
                    $("#wts-tv-box").show();
                    $("#review-history-box").show();
                }
            });
            break;
        case "movie-reviews":
            $("#wts-movie-box").hide();
            $("#wts-tv-box").hide();
            $("#review-history-box").hide();
            $("#my-review-box").hide();
            $.ajax({
                // url: url,
                type: 'GET',
                dataType: 'html',
                complete: function () {
                    $('.users-tab button').attr("disabled", "");
                    var d1 = $("#load-page-bounce-user").show(0).delay(500).fadeOut();
                    $.when(d1).done(function () {
                        $('.users-tab button').removeAttr("disabled");
                    });
                    // load Stuff
                    $("#review-box .tv-middle-box-row:eq(0)").show();
                    $("#review-box .tv-middle-box-row:eq(1)").hide();
                    $("#review-history-box h5:eq(0)").text("Movie Reviews");
                    $("#review-box").show();
                    $("#review-history-box").show();
                }
            });
            break;
        case "tv-reviews":
            $("#wts-movie-box").hide();
            $("#wts-tv-box").hide();
            $("#review-history-box").hide();
            $("#wts-movie-box").hide();
            $("#wts-tv-box").hide()
            $("#my-review-box").hide();;
            $.ajax({
                // url: url,
                type: 'GET',
                dataType: 'html',
                complete: function () {
                    $('.users-tab button').attr("disabled", "");
                    var d1 = $("#load-page-bounce-user").show(0).delay(500).fadeOut();
                    $.when(d1).done(function () {
                        $('.users-tab button').removeAttr("disabled");
                    });
                    // load Stuff
                    $("#review-box .tv-middle-box-row:eq(0)").hide();
                    $("#review-box .tv-middle-box-row:eq(1)").show();
                    $("#review-history-box h5:eq(0)").text("TV Reviews");
                    $("#review-box").show();
                    $("#review-history-box").show();
                }
            });
            break;
        case "wts-ni":
            $("#wts-movie-box").hide();
            $("#wts-tv-box").hide();
            $("#review-history-box").hide();
            $.ajax({
                // url: url,
                type: 'GET',
                dataType: 'html',
                complete: function () {
                    $('.users-tab button').attr("disabled", "");
                    var d1 = $("#load-page-bounce-user").show(0).delay(800).fadeOut();
                    $.when(d1).done(function () {
                        $('.users-tab button').removeAttr("disabled");
                    });
                    $("#want-to-see-tv-box").hide();
                    $("#want-to-see-movie-box").hide();
                    $("#ni-list").load("movies-detail.html .details:eq(1)", function () {
                        $('.details').owlCarousel({
                            margin: 10,
                            autoWidth: false,
                            nav: false,
                            items: 6,
                            responsive: {
                                0: {
                                    items: 2
                                },
                                500: {
                                    items: 4
                                },
                                1000: {
                                    items: 6
                                }
                            }
                        });
                        $("#ni-list .item:eq(0) img").attr("src", "images/tv2.png");
                        $("#ni-list .item:eq(1) img").attr("src", "images/tv4.png");
                        $("#ni-list .item:eq(2) img").remove();
                        $("#ni-list .item:eq(3) img").remove();
                        $("#ni-list .item:eq(4) img").remove();
                    });
                    $("#wts-list").load("movies-detail.html .details:eq(1)", function () {
                        $('.details').owlCarousel({
                            margin: 10,
                            autoWidth: false,
                            nav: false,
                            items: 6,
                            responsive: {
                                0: {
                                    items: 2
                                },
                                500: {
                                    items: 4
                                },
                                1000: {
                                    items: 6
                                }
                            }
                        });
                        $("#wts-list .item:eq(0) img").attr("src", "images/tv3.png");
                        $("#wts-list .item:eq(1) img").attr("src", "images/tv5.png");
                        $("#wts-list .item:eq(2) img").attr("src", "images/tv1.png");;
                        $("#wts-list .item:eq(3) img").remove();
                        $("#wts-list .item:eq(4) img").remove();
                    });
                    // load Stuff
                    $("#wts-movie-box h5:eq(0)").text("Want to See List");
                    $("#wts-tv-box h5:eq(0)").text("Not Interested List");
                    $("#wts-list").show();
                    $("#ni-list").show();
                    $("#wts-movie-box").show();
                    $("#wts-tv-box").show();
                }
            });
            break;
        case "my-critics":
            $("#wts-movie-box").hide();
            $("#wts-tv-box").hide();
            $("#review-history-box").hide();
            $.ajax({
                // url: url,
                type: 'GET',
                dataType: 'html',
                complete: function () {
                    $('.users-tab button').attr("disabled", "");
                    var d1 = $("#load-page-bounce-user").show(0).delay(500).fadeOut();
                    $.when(d1).done(function () {
                        $('.users-tab button').removeAttr("disabled");
                    });
                    $("#review-box").hide();
                    $("#my-review-box").load("movies-detail.html .details:eq(2)", function () {
                        $('.details').owlCarousel({
                            margin: 10,
                            autoWidth: false,
                            nav: false,
                            items: 6,
                            responsive: {
                                0: {
                                    items: 2
                                },
                                500: {
                                    items: 4
                                },
                                1000: {
                                    items: 6
                                }
                            }
                        });
                        $("#my-review-box .item b").remove();
                        $("#my-review-box .item:eq(3) img").remove();
                        $("#my-review-box .item:eq(3) h6").remove();
                        $("#my-review-box .item:eq(4) img").remove();
                        $("#my-review-box .item:eq(4) h6").remove();
                    });
                    $("#review-history-box h5:eq(0)").text("My Critics List");
                    $("#my-review-box").show();
                    $("#review-history-box").show();
                }
            });
            break;
        default:
            break;
    }
}