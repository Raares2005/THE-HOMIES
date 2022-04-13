const hamburger = document.querySelector("#hamburger");
const navbarNAV = document.querySelector(".navbar-nav");

hamburger.addEventListener('click', () => {
    navbarNAV.classList.toggle('show');
});