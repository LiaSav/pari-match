window.addEventListener("DOMContentLoaded", () => {
  var btn = document.querySelector(".btn"),
    wheel = document.querySelector(".wheel_inside");

  btn.onclick = function () {
    wheel.classList.toggle("animate");
  };
});
