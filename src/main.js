const homeNav = document.querySelector(".homeNav");
const menuIcon = document.querySelector(".bxs-grid-alt");
const IconClose = document.querySelector(".bxs-x-circle");
const contenedor_loader = document.querySelector(".loader__container");

menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("bxs-x-circle");
  homeNav.classList.toggle("homeNavShow");
});
menuIcon.addEventListener("click", function () {
  IconClose
    ? (homeNav.style.transition = "0.5s")
    : (homeNav.style.transition = "0.5s");
});
