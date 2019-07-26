$(".animsition").animsition({
  inClass: 'fade-in',
  outClass: 'fade-out',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 500
});

$(document).ready(function () {
  $(".header").sticky({
    topSpacing: 0
  });

  $('.header').on('sticky-start', function () {
    $('.description').html('We build <strong>great</strong> apps');
  });

  $('.header').on('sticky-end', function () {
    $('.description').html('We build apps');
  });
});