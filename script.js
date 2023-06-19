"use strict";
const nav = document.querySelector(".nav");
const hiddenn = document.querySelector(".hidden");
const header = document.querySelector(".header");
const loader = document.querySelector("#preloader");
const drop = document.querySelector(".dropdown-menu");
const mobile = document.querySelector(".mobile-nav");
const mobileM = document.querySelector(".mobile-nav-2");
const hiddennn = document.querySelector(".hidden-2");
const show2 = document.querySelector(".link-2");
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
mobile.addEventListener("click", function () {
  drop.classList.remove("hidden-3");
});
mobileM.addEventListener("click", function () {
  drop.classList.add("hidden-3");
});
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
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
