const menu = document.querySelector('.menu__container');
const menuBtn = document.querySelector('.header__menu-btn');
let turnMenuOn = false;


window.addEventListener('resize', () => {
    console.log(window.innerWidth);
    if (window.innerWidth >= 900) {
        turnMenuOn = false;
        menu.style.display = 'none';
    }
})

menuBtn.addEventListener('click', () => {
    turnMenuOn = !turnMenuOn;
    if (!turnMenuOn) {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
});