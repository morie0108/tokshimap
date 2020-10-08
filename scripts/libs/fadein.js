document.addEventListener("DOMContentLoaded", function () {
  const obs = new IntersectionObserver(cb);
  const els = document.querySelectorAll(".fade-item");
  els.forEach((el) => obs.observe(el));

  function cb(changes) {
    changes.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add("fadein");
      } else {
        change.target.classList.remove("fadein");
      }
    });
  }
});
