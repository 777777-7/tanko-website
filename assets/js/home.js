/* Primaxs homepage — hero slide cross-fade + optional auto-advance.
   No dependencies. Respects prefers-reduced-motion. */
(function () {
  var track = document.getElementById("hero-track");
  if (!track) return;
  var slides = track.querySelectorAll(".hero-slide");
  var ticks = document.querySelectorAll(".hero-ticks .hero-tick");
  if (!slides.length) return;

  var i = 0;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function show(n) {
    n = ((n % slides.length) + slides.length) % slides.length;
    slides.forEach(function (s, idx) { s.classList.toggle("is-active", idx === n); });
    ticks.forEach(function (t, idx) { t.classList.toggle("is-active", idx === n); });
    i = n;
  }

  ticks.forEach(function (t) {
    t.addEventListener("click", function (e) {
      e.preventDefault();
      show(parseInt(t.getAttribute("data-goto"), 10) - 1);
      restart();
    });
  });

  // In-hero search button opens the global nav search modal
  var hs = document.getElementById("hero-search-btn");
  if (hs) hs.addEventListener("click", function () {
    var nb = document.getElementById("nav-search-btn");
    if (nb) nb.click();
  });

  var timer;
  function restart() {
    if (reduce) return;
    clearInterval(timer);
    timer = setInterval(function () { show(i + 1); }, 7000);
  }
  restart();

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) clearInterval(timer); else restart();
  });
})();
