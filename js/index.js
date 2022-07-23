const hamburger = document.querySelector('.menu-hamburger');
const navMenu = document.querySelector('.header-main-nav-list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

const ctaSelected = document.querySelectorAll('.header-main-nav-link_nav-cta');
ctaSelected.forEach((n) =>
  n.addEventListener('click', () => {
    setTimeout(function () {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }, 200);
  })
);

const linkSelected = document.querySelectorAll('.header-main-nav-link');
linkSelected.forEach((n) =>
  n.addEventListener('click', () => {
    setTimeout(function () {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }, 200);
  })
);

//////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach((link) =>
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');

    //scroll back to top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    //scroll
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    //close mobile nav
    if (link.classList.contains('active')) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }
  })
);
