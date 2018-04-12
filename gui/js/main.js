$(function () {
  $(".main").owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: 80,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      1000: {
        items: 4
      }
    }
  });

  $(".main").on('mouseleave', function () {
    $(".main").trigger('stop.owl.autoplay');
    $(".main").trigger('play.owl.autoplay', [4000]);
  });

  $(window).on('resize', function () {
    if (window.innerWidth > 768) $('.collapse').collapse('hide');
  });

  $('.navbar-toggler').focusout(function () {
    $('.collapse').collapse('hide');
  });

  $(window).scroll(function () {
    if ($(this).width() < 768) {
      if ($(this).scrollTop() > 15) {
        $('#navbar-second nav').removeClass('bg-dark');
        $('#navbar-second nav').css('background-color', 'black');
        $('#navbar-second nav').css('opacity', '0.8');
        $('#navbar-second .collapse').css('opacity', '0.8');
      }
      if ($(this).scrollTop() < 15) {
        $('#navbar-second nav').addClass('bg-dark');
        $('#navbar-second nav').css('opacity', '1');
        $('#navbar-second .collapse').css('opacity', '1');
      }
    }
    else {
      $('#navbar-second nav').addClass('bg-dark');
      $('#navbar-second nav').css('opacity', '1');
      $('#navbar-second .collapse').css('opacity', '1');
    }
  });

  $('#meterModalCenter').on('show.bs.modal', function () {
    $('.container-fluid').addClass('blur');
  });

  $('#meterModalCenter').on('hide.bs.modal', function () {
    $('.container-fluid').removeClass('blur');
  });

  $('#logInModalCenter').on('show.bs.modal', function () {
    $('.container-fluid').addClass('blur');
  });

  $('#logInModalCenter').on('hide.bs.modal', function () {
    $('.container-fluid').removeClass('blur');
  });

  $('#signUpModalCenter').on('show.bs.modal', function () {
    $('.container-fluid').addClass('blur');
  });

  $('#signUpModalCenter').on('hide.bs.modal', function () {
    $('.container-fluid').removeClass('blur');
  });

  $('[data-toggle="tooltip"]').tooltip();

  var images3 = ['ad-3.png', 'ad-3-1.png', 'ad-3-2.png', 'ad-3-3.png'];
  $("#ad3").attr('src', 'images/' + images3[Math.floor(Math.random() * images3.length)]);

  var images4 = ['ad-1.png', 'ad-1-1.png', 'ad-1-2.png'];
  $("#ad4").attr('src', 'images/' + images4[Math.floor(Math.random() * images4.length)]);

  $("#ad5").attr('src', 'images/' + images3[Math.floor(Math.random() * images3.length)]);

  $("#signInButton").click(function () {
    $(".signIn-label").addClass("d-none");
    $(".signUp-label").addClass("d-none");
    $(".user-tab").removeClass("d-none");
  });

  $("#signOutButton").click(function () {
    $(".signIn-label").removeClass("d-none");
    $(".signUp-label").removeClass("d-none");
    $(".user-tab").addClass("d-none");
  });

  $('section').removeClass('d-none');
  $('footer').removeClass('d-none');

  $("#top-search-bar").click(function () {
    $("#top-search-bar-dd").addClass('open');
  });

  $("#top-search-bar").keyup(function () {
    $("#top-movie-heading").hide();
    $(".dropdown-item").hide();
    var valThis = $(this).val();
    $('.dropdown-item h6 b').each(function () {
      var text = $(this).text().toLowerCase();
      if (text.indexOf(valThis) > -1) {
        $("#movie-heading").show();
        $(this).parent().parent().parent().show();
      } 
      else $(this).parent().parent().parent().hide();
    });
  });

  $("#top-search-bar").focusout(function () {
    $("#top-search-bar-dd").removeClass('open');
    $(this).val("");
    $("#movie-heading").hide();
    $("#top-movie-heading").show();
    $(".dropdown-item").show();
  });
});