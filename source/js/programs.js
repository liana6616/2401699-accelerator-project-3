import Swiper from 'swiper/bundle';
import 'swiper/scss';
import { Scrollbar } from 'swiper/modules';

new Swiper('#swiper-programs', {
  navigation: {
    nextEl: '.programs__button-next',
    prevEl: '.programs__button-prev',
  },
  scrollbar: {
    el: '.programs__wrapper-pagination',
    draggable: true,
    modifierClass: 'programs__wrapper-pagination',
  },
  modules: [Scrollbar],
  breakpoints: {
    320: {
      slidesPerView: 1,
      allowTouchMove: true,
    },
    768: {
      slidesPerView: 2.1,
      allowTouchMove: true,
    },
    1440: {
      slidesPerView: 2.93,
      allowTouchMove: false,
    }
  }
});
