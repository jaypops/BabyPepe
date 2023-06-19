"use strict";
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const show = document.querySelector(".btn--show-modal");
const hiddenn = document.querySelector(".hidden");
const overlay = document.querySelector(".overlay");
const eixt = document.querySelector(".exit");
const loader = document.querySelector("#preloader");
const drop = document.querySelector(".dropdown-menu");
const mobile = document.querySelector(".mobile-nav");
const mobileM = document.querySelector(".mobile-nav-2");
const hiddennn = document.querySelector(".hidden-2");
const show2 = document.querySelector(".link-2");
const mint = document.querySelector(".mint-main-layout");
const mainMintButton = document.querySelector(".main-mint-button");
const styleButton = document.querySelectorAll(".style-button");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const input = document.querySelector("input");
mainMintButton.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".style-button");
  if (!clicked) return;
  if (!clicked.classList.contains("plus") && input.value < 10) {
    input.value++;
  }
  if (!clicked.classList.contains("minus") && input.value > 1) {
    input.value--;
  }
});
const hidden = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener("mouseover", hidden.bind(0.5));
nav.addEventListener("mouseout", hidden.bind(1));
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
const headerObs = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});
headerObs.observe(header);
const closeModal = function () {
  wallet.classList.add("hidden");
  overlay.classList.add("hidden");
};
mobile.addEventListener("click", function () {
  drop.classList.remove("hidden-3");
});
mobileM.addEventListener("click", function () {
  drop.classList.add("hidden-3");
});
show.addEventListener("click", function () {
  hiddenn.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
eixt.addEventListener("click", function () {
  hiddenn.classList.add("hidden");
  overlay.classList.add("hidden");
});
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 4,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
