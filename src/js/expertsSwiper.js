import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

const expertsSwiper = () =>{
    const swiper = new Swiper('.our-experts__gallery', {
        modules: [Autoplay],
        spaceBetween: 20,
        slidesPerView: 1,
        speed: 1000,
        loop: true,
        wrapperClass: 'our-experts__items',
        slideClass: 'our-experts__item',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        
        breakpoints: {
            320: {slidesPerView: 1 },
            640: {slidesPerView: 1.3 },
            1024: {slidesPerView: 2.3 },
            1280: {slidesPerView: 3.3 },
        }
        
    });
};

export default expertsSwiper