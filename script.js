const hamburger = document.querySelector(".hamburger");
const scrollMenu = document.querySelector(".scrollMenu");
const logo = document.querySelector(".logo img");
const media = window.matchMedia("(min-width: 900px)")
const cookieWin = document.querySelector(".cookies");
const cookieBtn = document.querySelector(".cookies button");
const navMenu = document.querySelector(".menu");
const arrows = document.querySelector(".arrows");
const upArr = document.querySelector(".upArrow");
const downArr = document.querySelector(".downArrow");
const missionPosition = document.getElementById("mission").offsetTop;
const clientsPosition = document.getElementById("clients").offsetTop;
const productsPosition = document.getElementById("products").offsetTop;
const mapPosition = document.getElementById("contactMap").offsetTop;
const contactPosition = document.getElementById("contact").offsetTop;
const comments = document.querySelectorAll(".comment");

const scrollFixedMenu = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 && media.matches) {
        scrollMenu.style.display = "block";
        logo.style.marginTop = "10em";
        navMenu.style.position = "fixed";
        navMenu.style.paddingLeft = "100px";
    } else {
        scrollMenu.style.display = "none";
        logo.style.marginTop = "0";
        navMenu.style.position = "static";
        navMenu.style.paddingLeft = "0";
    }
};

window.addEventListener("scroll", scrollFixedMenu);

window.addEventListener("scroll", () => {
    if (this.scrollY >= arrows.offsetTop) {
        arrows.style.position = "fixed";
    } else {
        arrows.style.position = "absolute";
    }
});

const jumpToSectionUp = () => {
    if (window.scrollY >= missionPosition && window.scrollY < clientsPosition) {
        upArr.href = "#top";
    } else if (window.scrollY >= clientsPosition && window.scrollY < productsPosition) {
        upArr.href = "#mission";
    } else if (window.scrollY >= productsPosition && window.scrollY < mapPosition) {
        upArr.href = "#clients";
    } else if (window.scrollY >= mapPosition && window.scrollY < contactPosition) {
        upArr.href = "#products";
    } else if (window.scrollY >= contactPosition) {
        upArr.href = "#mapContact";
    }
};

const jumpToSectionDown = () => {
    if (window.scrollY >= missionPosition && window.scrollY < clientsPosition) {
        downArr.href = "#clients";
    } else if (window.scrollY >= clientsPosition && window.scrollY < productsPosition) {
        downArr.href = "#products";
    } else if (window.scrollY >= productsPosition && window.scrollY < mapPosition) {
        downArr.href = "#contactMap";
    } else if (window.scrollY >= mapPosition && window.scrollY < contactPosition) {
        downArr.href = "#contact";
    } else if (window.scrollY >= contactPosition) {
        downArr.href = "#bottom";
    }
};

document.addEventListener("ready", jumpToSectionDown);
window.addEventListener("scroll", jumpToSectionUp);
window.addEventListener("scroll", jumpToSectionDown);
upArr.addEventListener("click", jumpToSectionUp);
downArr.addEventListener("click", jumpToSectionDown);

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("rotate");
    if (hamburger.classList.contains("active")) {
        hamburger.classList.remove("active");
    } else hamburger.classList.add("active")

});

cookieBtn.addEventListener("click", () => {
    cookieWin.style.visibility = "hidden";
})
