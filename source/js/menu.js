const body = document.body;
const burger = document.querySelector('.header__button');
const linksItem = document.querySelector('.header__nav-item');
const menu = document.querySelector('.header__nav-wrapper');
const list = document.querySelector('.header__nav-list');
const listSmall = document.querySelector('.header__nav-list-small');

export function overlay(show) {
  if (show) {
    body.style.overflow = 'hidden';
    body.classList.add('overlay');
  } else {
    body.style.overflow = 'auto';
    body.classList.remove('overlay');
  }
}

burger.addEventListener('click', () => {
  list.classList.toggle('header__nav-list--opened');
  burger.classList.toggle('active');
  overlay(true);
});

burger.addEventListener('click', () => {
  menu.classList.remove('header__nav-wrapper--closed');
  overlay(false);
});


linksItem.addEventListener('click', () => {
  linksItem.classList.toggle('active');
  listSmall.classList.toggle('header__nav-list-small--closed');
});
