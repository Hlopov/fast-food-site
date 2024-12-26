import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperInit = () => {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    spaceBetween: 30,
        
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    navigation: {
      nextEl: '.my-button-next',
      prevEl: '.my-button-prev',
    },
  
    breakpoints: {
      800:{
        slidesPerView: 4,
      },
  
      600:{
        slidesPerView: 3,
      },
  
      300:{
        slidesPerView: 2,
      },
  
  
    }
  });
}

export default swiperInit;