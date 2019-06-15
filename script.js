const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("rotate");
    if (hamburger.classList.contains("active")) {
        hamburger.classList.remove("active");
    } else hamburger.classList.add("active")

})
