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
});