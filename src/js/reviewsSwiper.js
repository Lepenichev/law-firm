import Swiper from "swiper"
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const reviewsSwiper = () => {
    const swiper = new Swiper(".reviews__slider", {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 1,
        spaceBetween: 60,
        wrapperClass: 'reviews__items',
        slideClass: 'reviews__item',
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: '.reviews__button--next',
            prevEl: '.reviews__button--prev',
        },
        pagination: {
            el: '.reviews__pagination',
            clickable: true,
            bulletClass: 'reviews__bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
        },

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
}


export default reviewsSwiper;