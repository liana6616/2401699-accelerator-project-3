import Swiper from 'swiper/bundle';
import 'swiper/scss';
import { Pagination } from 'swiper/modules';

new Swiper('#swiper-news', {
  navigation: {
    nextEl: '.news__button-next',
    prevEl: '.news__button-prev',
  },
  pagination: {
    el: '.news__wrapper-pagination',
    clickable: true,
    bulletClass: 'news__button-pagination',
    bulletActiveClass: 'news__button-pagination--active',
    //для нумерации
    renderBullet: function (index, className) {
      return `<button class ="${ className }">${ index + 1 }</button>`;
    },
  },
  modules: [Pagination],
  breakpoints: {
    320: {
      // slidesPerView: 1,
      allowTouchMove: true,
    },
    768: {
      slidesPerView: 4,
      allowTouchMove: true,
    },
    1440: {
      slidesPerView: 3,
      allowTouchMove: false,
    }
  }
});

new Swiper('#swiper-new', {

  modules: [Pagination],
  breakpoints: {
    320: {
      slidesPerView: 2.5,
      allowTouchMove: true,
    },
    768: {
      slidesPerView: 3.5,
      allowTouchMove: true,
    },
    1440: {
      slidesPerView: 4,
      // allowTouchMove: false,
    }
  }
});

const tabsBtn = document.querySelectorAll('.news__tab-button');
const tabsItems = document.querySelectorAll('.news__tab-list');
const tabsItem = document.querySelectorAll('.news__list');


tabsBtn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener('click', () => {
    const currentBtn = item;

    const tabId = currentBtn.getAttribute('data-tab');
    const currentTab = document.querySelector(tabId);

    if (! currentBtn.classList.contains('news__tab-button--active')) {
      tabsBtn.forEach((el) => {
        el.classList.remove('news__tab-button--active');
      });

      tabsItems.forEach((el) => {
        el.classList.remove('news__list--active');
      });

      tabsItem.forEach((el) => {
        el.classList.remove('news__list--active');
      });

      currentBtn.classList.add('news__tab-button--active');
      currentTab.classList.add('news__list--active');
    }
  });
}

document.querySelector('.news__tab-button').click();
