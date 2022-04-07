const hamburger = document.getElementById('hamburger');
const navbarNAV = document.getElementById('navbar-nav');

hamburger.addEventListener('click', () => {
    navbarNAV.classList.toggle('show');
});