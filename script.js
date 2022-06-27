

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









