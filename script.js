const hamburger = document.querySelector(".hamburger");
const scrollMenu = document.querySelector(".scrollMenu");
const logo = document.querySelector(".logo img");
const media = window.matchMedia("(min-width: 900px)")
const cookieWin = document.querySelector(".cookies");
const cookieBtn = document.querySelector(".cookies button");
const navMenu = document.querySelector(".menu");
const navUl = document.querySelector(".menu ul");


const scroll = () => {
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


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("rotate");
    if (hamburger.classList.contains("active")) {
        hamburger.classList.remove("active");
    } else hamburger.classList.add("active")

});

window.addEventListener("scroll", scroll);

cookieBtn.addEventListener("click", () => {
    cookieWin.style.visibility = "hidden";
})
