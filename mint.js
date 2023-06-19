"use strict";
const show = document.querySelector(".btn--show-modal");
const hiddenn = document.querySelector(".hidden");
const overlay = document.querySelector(".overlay");
const eixt = document.querySelector(".exit");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const drop = document.querySelector(".dropdown-menu");
const mobile = document.querySelector(".mobile-nav");
const mobileM = document.querySelector(".mobile-nav-2");
const hiddennn = document.querySelector(".hidden-2");
const mint = document.querySelector(".mint-main-layout");
const mainMintButton = document.querySelector(".main-mint-button");
const styleButton = document.querySelectorAll(".style-button");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const input = document.querySelector("input");
//mint
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
//wallet
show.addEventListener("click", function () {
  hiddenn.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
eixt.addEventListener("click", function () {
  hiddenn.classList.add("hidden");
  overlay.classList.add("hidden");
});
//nav
mobile.addEventListener("click", function () {
  drop.classList.remove("hidden-3");
});
mobileM.addEventListener("click", function () {
  drop.classList.add("hidden-3");
});
