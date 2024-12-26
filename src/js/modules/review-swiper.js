import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const reviewSwiperInit = () => {
  const reviewSwiper = new Swiper('.reviews-swiper', {
    autoHeight: true,
    speed: 1200,
    effect: 'fade', 
    fadeEffect: {  
      crossFade: true     
    }, 
  
    navigation: {
      nextEl: '.reviews-swiper__next',
      prevEl: '.reviews-swiper__prev',
    },
  
  });
}

export default reviewSwiperInit;
