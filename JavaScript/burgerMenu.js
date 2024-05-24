const burgerMenu = document.querySelector(".burger__menu");
const headerNavMenu = document.querySelector(".header__nav__menu");

burgerMenu.addEventListener("click", () => {
  if (!burgerMenu.classList.contains("active")) {
    burgerMenu.classList.add("active");
    headerNavMenu.classList.add("active");
  } else {
    burgerMenu.classList.remove("active");
    headerNavMenu.classList.remove("active");
  }
});
