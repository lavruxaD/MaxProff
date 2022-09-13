$(function () {
  $(".header__bottom-item").on("click", function (e) {
    e.preventDefault();
    $($(this).siblings()).removeClass("header__bottom-item--active");

    $(this).toggleClass("header__bottom-item--active");
  });

  $(".js-range-slider").ionRangeSlider({
    min: 10,
    max: 320,
    from: 35,
  });
  
});
