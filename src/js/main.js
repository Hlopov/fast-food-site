import tabs from "./modules/tabs";
import mobileMenu from "./modules/mobile-menu";
import swiperInit from "./modules/swiper"; 
import reviewSwiperInit from "./modules/review-swiper"; 

window.addEventListener('DOMContentLoaded', () => {
  tabs('.tabs', '.tab',  '.swiper', 'tab--active');
  mobileMenu();
  swiperInit();
  reviewSwiperInit();
});

