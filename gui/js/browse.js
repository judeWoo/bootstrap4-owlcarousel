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

    $('.dropdown-menu').on({
        "click": function (e) {
            e.stopPropagation();
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) 
            $('.scrollable-menu').collapse('hide')
    });

    var handlesSlider = document.getElementById('drag');
    var smallSliderFirst = document.getElementById('small-drag-first');
    var smallSliderSecond = document.getElementById('small-drag-second');
    var minIndicator = document.getElementById('min');
    var maxIndicator = document.getElementById('max');

    noUiSlider.create(handlesSlider, {
        start: [50, 80],
        behaviour: 'drag',
        connect: true,
        range: {
            'min': [0],
            'max': [100]
        }
    });

    noUiSlider.create(smallSliderFirst, {
        start: [0, 100],
        behaviour: 'drag',
        connect: true,
        range: {
            'min': [0],
            'max': [100]
        }
    });

    noUiSlider.create(smallSliderSecond, {
        start: [0, 100],
        behaviour: 'drag',
        connect: true,
        range: {
            'min': [0],
            'max': [100]
        }
    });

    handlesSlider.noUiSlider.on('update', function (values, handle){
        var value = values[handle];
        if (handle) {
            maxIndicator.innerHTML = Math.round(value) + ' %';
        } else {
            minIndicator.innerHTML = Math.round(value) + ' %';
        }
    });

    minIndicator.addEventListener('change', function () {
        handlesSlider.noUiSlider.set([this.value, null]);
    });

    maxIndicator.addEventListener('change', function () {
        handlesSlider.noUiSlider.set([null, this.value]);
    });

    $('.opening-this-week').click(function () {
        $('#text-opening').removeClass('d-none').siblings().addClass('d-none');
    });
    $('.top-box-office').click(function () {
        $('#text-top-box').removeClass('d-none').siblings().addClass('d-none');
        $('#box-earnings').removeClass('d-none');
    });
    $('.movie-coming-soon').click(function () {
        $('#text-coming-movie').removeClass('d-none').siblings().addClass('d-none');
    });
    $('.guaranteed-movie-picks').click(function () {
        $('#text-moive-picks').removeClass('d-none').siblings().addClass('d-none');
        $('#box-earnings').removeClass('d-none');
    });
    $('.browse-all').click(function () {
        $('#text-browse').removeClass('d-none').siblings().addClass('d-none');
    });
    $('.top-dvd-streaming').click(function () {
        $('#text-top-dvd').removeClass('d-none').siblings().addClass('d-none');
    });
    $('.new-relesases').click(function () {
        $('#text-new-releases').removeClass('d-none').siblings().addClass('d-none');
    });
    $('.dvd-coming-soon').click(function () {
        $('#text-coming-dvd').removeClass('d-none').siblings().addClass('d-none');
    });
    $('.guaranteed-dvd-picks').click(function () {
        $('#text-dvd-picks').removeClass('d-none').siblings().addClass('d-none');
    });
    $('.new-tv-tonight').click(function () {
        $('#text-new-tv').removeClass('d-none').siblings().addClass('d-none');
    });
    $('.most-popular').click(function () {
        $('#text-most-popular').removeClass('d-none').siblings().addClass('d-none');
    });
    $('.guaranteed-tv-picks').click(function () {
        $('#text-tv-picks').removeClass('d-none').siblings().addClass('d-none');
    });

});

var elements = document.getElementsByClassName("column");
var elements2 = document.getElementsByClassName("column-2");
var i;
function listView() {
    $('#grid-button').removeClass('active');
    $('#list-button').removeClass('active');
    $('#list-button').addClass('active');
    $('.column-box').removeClass('pt-3');
    $('.column-box').removeClass('border-white');
    $('.column-box').removeClass('border-top');
    $('.column').addClass('col-12 border-white border-top py-3');
    $('.column').removeClass('col-lg-3');
    $('.column').removeClass('col-md-4'); 
    $('.column').removeClass('col-sm-4');
    $('.column').removeClass('col-6');
    $('.column-child').addClass('row');
    $('.img-box').addClass('col-sm-4 col-5');
    $('.box-text').addClass('col-sm-8 col-7');
    $('.box-text').removeClass('mt-3');
    $('.box-text .row').addClass('my-sm-0 my-2');
    $('.list-text').removeClass('d-none');
    $('.list-text').addClass('my-sm-0 my-2');
    $('.list-text.list-explain').addClass('d-sm-block d-none');
};
function gridView() {
    $('#list-button').removeClass('active');
    $('#grid-button').removeClass('active');
    $('#grid-button').addClass('active');
    $('.column-box').addClass('pt-3');
    $('.column-box').addClass('border-white');
    $('.column-box').addClass('border-top');
    $('.column').removeClass('col-12 border-white border-top py-3');
    $('.column').addClass('col-lg-3');
    $('.column').addClass('col-md-4');
    $('.column').addClass('col-sm-4');
    $('.column').addClass('col-6');
    $('.column-child').removeClass('row');
    $('.img-box').removeClass('col-sm-4 col-5');
    $('.box-text').removeClass('col-sm-8 col-7');
    $('.box-text').addClass('mt-3');
    $('.box-text .row').removeClass('my-sm-0 my-2');
    $('.list-text.list-explain').removeClass('d-sm-block d-none');
    $('.list-text').addClass('d-none');
    $('.list-text').removeClass('my-sm-0 my-2');
};
