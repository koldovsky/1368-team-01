/** Alisa Korniienko */
const header = document.querySelector(".header");
const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");
const menuLinks = document.querySelectorAll(".header__menu-link");

function toggleMenu() {
    header.classList.toggle("is-open");
    burger.classList.toggle("is-active");
    nav.classList.toggle("is-open");
    document.body.classList.toggle("no-scroll");
}

function closeMenu() {
    burger.classList.remove("is-active");
    nav.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
}

burger.addEventListener("click", toggleMenu);

menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});
