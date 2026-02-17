import '../style/style.scss'
import expertsSwiper from './expertsSwiper'
import reviewsSwiper from './reviewsSwiper'
import modalJs from './modal'
import initMask from './imask'
import burgerJs from './burger'

document.addEventListener('DOMContentLoaded', function () {
    expertsSwiper();
    reviewsSwiper();
    modalJs();
    initMask();
    burgerJs();
})


