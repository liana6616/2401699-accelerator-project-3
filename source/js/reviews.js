import Swiper from 'swiper/bundle';
import 'swiper/scss';
import { Scrollbar } from 'swiper/modules';

new Swiper('#swiper-reviews', {
  loop: false,
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },
  scrollbar: {
    el: '.reviews__wrapper-pagination',
    draggable: true,
    modifierClass: 'reviews__wrapper-pagination',
  },
  modules: [Scrollbar],
  breakpoints: {
    320: {
      slidesPerView: 1,
      allowTouchMove: true,
    },
    768: {
      slidesPerView: 1.11,
      allowTouchMove: true,
    },
    1440: {
      slidesPerView: 1.95,
      allowTouchMove: false,
    }
  }
});
