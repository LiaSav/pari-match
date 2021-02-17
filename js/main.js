window.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn"),
    wheel = document.querySelector(".wheel_inside"),
    btnModal = document.querySelector(".modal-btn");

  btn.addEventListener("click", function () {
    wheel.classList.toggle("animate");
  });
  btn.addEventListener("click", function () {
    modal.open();
  });
  btnModal.addEventListener("click", function () {
    modal.close();
    wheel.classList.toggle("animateSecond");
  });
});
