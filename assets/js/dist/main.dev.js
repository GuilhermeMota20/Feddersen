"use strict";

// ====================== PRELOADER ========================
window.onload = function Preloader() {
  var _this = this;

  var preloader = document.getElementById("preloader");
  var loader = document.getElementById("loader");
  var op = 1;

  if (preloader || loader) {
    setTimeout(function () {
      setInterval(function () {
        if (op <= 0.1) {
          clearInterval(_this);
          preloader.style.display = 'none';
        }

        preloader.style.opacity = op;
        preloader.style.filter = 'alpha(opacity=' + op * 100 + ")";
        loader.style.opacity = op;
        loader.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
      }, 50); // ====================== SCROLL REVEAL ========================

      var scrollReveal = ScrollReveal({
        origin: 'top',
        distance: '50px',
        duration: 750,
        reset: false
      });
      scrollReveal.reveal(".flogin__left .flogin__left__content, .flogin__right .flogin__right__content,\n                 .fanimation .fheader, .fanimation .f-navigation,\n                 .fanimation .f-actions, .fanimation .f-table\n                 ");
    }, 3000);
  }
};