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
const firstComment = document.querySelector(".firstC");
const secondComment = document.querySelector(".secondC");
const thirdComment = document.querySelector(".thirdC");
const firstCircle = document.querySelector(".circles div:first-child");
const secondCircle = document.querySelector(".circles div:nth-child(2)");
const thirdCircle = document.querySelector(".circles div:last-child");
const clientsWrapper = document.querySelector(".clientsWrapper");
const contactBtn = document.querySelector(".howToContact button");
const contactForm = document.querySelector(".contactForm");
const contactArrow = document.querySelector(".contactArrow");
const name = document.forms["form"]["name"];
const company = document.forms["form"]["company"];
const telephone = document.forms["form"]["telephone"];
const email = document.forms["form"]["email"];
const submitBtn = document.querySelector(".contactForm button");
const checkInput = document.getElementById("accept");

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
    } else hamburger.classList.add("active");

});

cookieBtn.addEventListener("click", () => {
    cookieWin.style.visibility = "hidden";
});


firstCircle.addEventListener("click", () => {
    firstComment.classList.remove("hidden");
    secondComment.classList.add("hidden");
    thirdComment.classList.add("hidden");
    firstCircle.classList.add("up");
    secondCircle.classList.remove("up");
    thirdCircle.classList.remove("up");
});

secondCircle.addEventListener("click", () => {
    firstComment.classList.add("hidden");
    secondComment.classList.remove("hidden");
    thirdComment.classList.add("hidden");
    firstCircle.classList.remove("up");
    secondCircle.classList.add("up");
    thirdCircle.classList.remove("up");
});

thirdCircle.addEventListener("click", () => {
    firstComment.classList.add("hidden");
    secondComment.classList.add("hidden");
    thirdComment.classList.remove("hidden");
    firstCircle.classList.remove("up");
    secondCircle.classList.remove("up");
    thirdCircle.classList.add("up");
});

contactBtn.addEventListener("click", () => {
    if (contactForm.style.display == "none") {
        contactForm.style.display = "flex";
        contactArrow.innerHTML = "&uarr;";
    } else {
        contactForm.style.display = "none";
        contactArrow.innerHTML = "&darr;";
    }
})

const isDigit = (phone) => {
    const regex = /^\d{9}$/;
    return regex.test(phone);
}

const validate = () => {
    if (name.value == "") {
        alert("Please provide your name!");
        return false;
    }
    if (company.value == "") {
        alert("Please provide your company name!");
        return false;
    }
    if (telephone.value == "") {
        alert("Please provide your number phone!");
        return false;
    }
    if (email.value == "") {
        alert("Please provide your email!");
        return false;
    }
    if (isDigit(telephone.value) == false) {
        alert("Your telephone number is not valid!");
        return false;
    }
    if (isDigit(telephone.value) == false) {
        alert("Your telephone number is not valid!");
        return false;
    }
    if (checkInput.checked == false) {
        alert("Please accepts terms!");
        return false;
    }
    submitBtn.submit();
}

submitBtn.addEventListener("click", validate);
