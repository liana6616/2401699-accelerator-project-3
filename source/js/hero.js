import Swiper from 'swiper';
import 'swiper/css';
import { Pagination } from 'swiper/modules';

new Swiper('#swiper-hero', {
  loop: true,
  pagination: {
    el: '.hero__wrapper-pagination',
    clickable: true,
    bulletClass: 'hero__button-pagination',
    bulletActiveClass: 'hero__button-pagination--active',
  },
  modules: [Pagination],
  breakpoints: {
    320: {
      slidesPerView: 1,
      allowTouchMove: true,
      initialSlide: 0,
    },
  }
});
