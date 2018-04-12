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

    $('.list').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $(this).removeClass('bat').siblings().addClass('bat');
    });

    $('.details').owlCarousel({
        margin: 10,
        autoWidth: false,
        nav: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    $('.art-highest').owlCarousel({
        margin: 40,
        autoWidth: false,
        nav: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    var $videoSrc;
    $('.video-btn').click(function () {
        $videoSrc = $(this).data("src");
    });

    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function (e) {
        $('.container-fluid').addClass('light-off');
        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src', $videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1");
    });

    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function (e) {
        $('.container-fluid').removeClass('light-off');
        // a poor man's stop video
        $("#video").attr('src', $videoSrc);
    }); 

    var check = 0;

    $("#in-theater").click(function () {
        $.ajax({
            // url: url,
            type: 'GET',
            dataType: 'html',
            complete: function () {
                if (check != 1) {
                    $("#lp-body").hide();
                    $("#ad3").hide();
                    $("#lp-body-first b").text("OPENING");
                    $("#lp-body").fadeIn(300);
                    $("#ad3").fadeIn(300);
                    check = 1;
                }
            }
        });

    });

    $("#dvd-stream").click(function () {
        $.ajax({
            // url: url,
            type: 'GET',
            dataType: 'html',
            complete: function () {
                if (check != 2) {
                    $("#lp-body").hide();
                    $("#ad3").hide();
                    $("#lp-body-first b").text("TOP DVD & STREAMING");
                    $("#lp-body").fadeIn(300);
                    $("#ad3").fadeIn(300);
                    check = 2;
                }
            }
        });

    }); 
    $("#tv-show").click(function () {
        $.ajax({
            // url: url,
            type: 'GET',
            dataType: 'html',
            complete: function () {
                if (check != 3) {
                    $("#lp-body").hide();
                    $("#ad3").hide();
                    $("#lp-body-first b").text("NEW TV TONIGHT");
                    $("#lp-body").fadeIn(300);
                    $("#ad3").fadeIn(300);
                    check = 3;
                }
            }
        });
    });

    // $('.art-bio p').text(function (_, txt) {
    //     if (txt.length > $('.art-bio').height()) {
    //         txt = txt.substr(0, 400) + "...";
    //         $(this).parent().append("<a href='#' class='px-2 py-0 my-0 text-danger-light hover-dark'>More</a>");
    //     }
    //     $(this).html(txt)
    // });
});

function showEpisodes() {
    console.log(2);
    if ($("#episode-box").is(":hidden")){
        console.log(4);
        $("#episode-box").slideDown(300);
    } else {
        $("#episode-box").slideUp(300);
    }
}

function showTVShows() {
    $.ajax({
        // url: url,
        type: 'GET',
        dataType: 'html',
        complete: function () {
            $("#tv-show").addClass("active");
            $("#in-theater").removeClass("active");
            $("#lp-body").hide();
            $("#ad3").hide();
            $("#lp-body-first b").text("NEW TV TONIGHT");
            $("#lp-body").fadeIn(300);
            $("#ad3").fadeIn(300);
        }
    });
}