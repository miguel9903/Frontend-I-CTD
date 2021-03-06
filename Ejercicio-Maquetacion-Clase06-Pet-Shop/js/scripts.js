const ham = document.querySelector('.hamburger-menu');
const mainMenu = document.querySelector('.main-menu');

const mainMenuLinks = document.querySelectorAll('.main-menu__link');

ham.addEventListener('click', () => {
    mainMenu.classList.toggle('main-menu--active');
});

mainMenu.addEventListener('click', (e) => {
    if(e.target.classList.contains('main-menu__link')) {
       mainMenuLinks.forEach(item => {
           item.classList.remove('main-menu__link--active');
       })
       e.target.classList.add('main-menu__link--active');
    }
});