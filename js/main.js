// DOM ELEMENTS 
const elGamburgerBtn = document.querySelector('.gamburger-button');
const elSiteNavList = document.querySelector('.site-nav__list');

elGamburgerBtn.addEventListener('click', () => {
  elSiteNavList.classList.toggle('site-nav__list--open')
  elGamburgerBtn.classList.toggle('gamburger-button--close')
})