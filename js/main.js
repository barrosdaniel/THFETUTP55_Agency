// Animsition jQuery Plugin
// Fade in and out page transitions
$(".animsition").animsition({
  inClass: 'fade-in',
  outClass: 'fade-out',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 500
});

$('header').sticky({
  getWidthFrom: '.container',
  responsiveWidth: true
})

// Sticky jQuery Plugin
// Make navigation bar sticky
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

// work.html > Make 'Want us to work on your project?' sticky and add email link
$(document).ready(function () {
  $('.grid-full h5').sticky({
    topSpacing: 64,
    getWidthFrom: '.container',
    responsiveWidth: true
  })

  $('.grid-full h5').on('sticky-start', function () {
    const emailLink = ` <a href="mailto: barros.daniel@outlook.com">Email</a>`;
    $(this).append(emailLink);
  });

  $('.grid-full h5').on('sticky-end', function () {
    $(this).html('Want us to work on your project?');
  });

})