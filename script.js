const menuBar= document.querySelector(".menu-bar");
const mobileMenu= document.querySelector(".mobile-menu");

menuBar.addEventListener("click", () => {
    menuBar.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    closeIcon.classList.toggle("active");
});