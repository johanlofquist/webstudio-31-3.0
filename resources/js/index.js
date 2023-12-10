let mosquito = document.querySelector("#mosquito");
let x = 200;
let y = 500;
let size = 50;

let interval = setInterval(fly, 5);

function fly() {
  let randomX = Math.floor(Math.random() * 5) - 2;
  let randomY = Math.floor(Math.random() * 5) - 2;
  x += randomX;
  y += randomY;
  mosquito.style.top = y + "px";
  mosquito.style.right = x + "px";
}

mosquito.addEventListener("click", function () {
  clearInterval(interval);
  let squish = new Audio("/resources/img/squish.mp3");
  squish.play();
  mosquito.src = "resources/img/deadmygga.svg";
});

let burgerMenu = document.querySelector("#hamburger__menu");
let lineOne = document.querySelector("#line__one");
let lineTwo = document.querySelector("#line__two");
let menu = document.querySelector(".menu");
let bodyEl = document.querySelector("body");

let isToggled = false;

burgerMenu.addEventListener("click", function () {
  if (isToggled == false) {
    lineOne.classList.remove("burgerSpinOneBack");
    lineTwo.classList.remove("burgerSpinTwoBack");
    lineOne.classList.add("burgerSpinOneToX");
    lineTwo.classList.add("burgerSpinTwoToX");
    menu.classList.remove("hide__menu");
    menu.classList.add("show__menu");
    bodyEl.style.overflow = "hidden";

    isToggled = true;
  } else {
    lineOne.classList.remove("burgerSpinOneToX");
    lineTwo.classList.remove("burgerSpinTwoToX");
    lineOne.classList.add("burgerSpinOneBack");
    lineTwo.classList.add("burgerSpinTwoBack");
    menu.classList.remove("show__menu");
    menu.classList.add("hide__menu");
    bodyEl.style.overflow = "auto";
    isToggled = false;
  }
});

let menuHome = document.querySelector("#menu__hem");
let menuCase = document.querySelector("#menu__case")
let menuServices = document.querySelector("#menu__services")
let menuOm = document.querySelector("#menu__om")
let menuKontakt = document.querySelector("#menu__kontakt")

menuHome.addEventListener("click", function () {
  lineOne.classList.remove("burgerSpinOneToX");
  lineTwo.classList.remove("burgerSpinTwoToX");
  lineOne.classList.add("burgerSpinOneBack");
  lineTwo.classList.add("burgerSpinTwoBack");
  menu.classList.remove("show__menu");
  menu.classList.add("hide__menu");
  bodyEl.style.overflow = "auto";
  isToggled = false;
});

menuCase.addEventListener("click", function () {
  lineOne.classList.remove("burgerSpinOneToX");
  lineTwo.classList.remove("burgerSpinTwoToX");
  lineOne.classList.add("burgerSpinOneBack");
  lineTwo.classList.add("burgerSpinTwoBack");
  menu.classList.remove("show__menu");
  menu.classList.add("hide__menu");
  bodyEl.style.overflow = "auto";
  isToggled = false;
});

menuServices.addEventListener("click", function () {
  lineOne.classList.remove("burgerSpinOneToX");
  lineTwo.classList.remove("burgerSpinTwoToX");
  lineOne.classList.add("burgerSpinOneBack");
  lineTwo.classList.add("burgerSpinTwoBack");
  menu.classList.remove("show__menu");
  menu.classList.add("hide__menu");
  bodyEl.style.overflow = "auto";
  isToggled = false;
});

menuOm.addEventListener("click", function () {
  lineOne.classList.remove("burgerSpinOneToX");
  lineTwo.classList.remove("burgerSpinTwoToX");
  lineOne.classList.add("burgerSpinOneBack");
  lineTwo.classList.add("burgerSpinTwoBack");
  menu.classList.remove("show__menu");
  menu.classList.add("hide__menu");
  bodyEl.style.overflow = "auto";
  isToggled = false;
});

menuKontakt.addEventListener("click", function () {
  lineOne.classList.remove("burgerSpinOneToX");
  lineTwo.classList.remove("burgerSpinTwoToX");
  lineOne.classList.add("burgerSpinOneBack");
  lineTwo.classList.add("burgerSpinTwoBack");
  menu.classList.remove("show__menu");
  menu.classList.add("hide__menu");
  bodyEl.style.overflow = "auto";
  isToggled = false;
});
