const hamburger = document.querySelector('.menu-hamburger');
const navMenu = document.querySelector('.header-main-nav-list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

const linkSelected = document.querySelectorAll('.header-main-nav-link');
linkSelected.forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);
