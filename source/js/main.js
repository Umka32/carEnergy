const navToogle = document.querySelector(".main-nav__toogle");
const mainNav = document.querySelector(".main-nav");

navToogle.addEventListener("click", function () {
  mainNav.classList.toggle("main-nav--closed");
  navToogle.classList.toggle("main-nav__toogle--opened");
});
