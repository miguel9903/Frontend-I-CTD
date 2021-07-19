const ham = document.querySelector('.main-nav__hamburguer-icon');
const mainMenu = document.querySelector('.main-menu');

ham.addEventListener('click', () => {
    mainMenu.classList.toggle('main-menu--active');
});
