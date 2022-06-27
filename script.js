const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0 ) newIndex = slides.children.length -1
        if (newIndex >= slides.children.length) newIndex = 0 

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})


const menu_btn = document.querySelector(".nav-menu")
const burger_links = document.querySelector(".nav-menu-links")
let isOpen = false;
menu_btn.addEventListener('click', () => {
    if(!isOpen){
        menu_btn.classList.add('open');
        burger_links.classList.add('open')
        isOpen = true;
    }else{
        menu_btn.classList.remove('open');
        burger_links.classList.remove('open')
        isOpen = false;
    }
});

