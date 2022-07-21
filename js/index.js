const hamburger = document.querySelector('.menu-hamburger');
const navMenu = document.querySelector('.header-main-nav-list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll(
  '.nav-lin'.foreach((n) =>
    n.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    })
  )
);
