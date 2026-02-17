const burgerJs = () => {
    const nav = document.querySelector('.navigation');
    const burger = document.querySelector('.navigation__burger');

    burger.addEventListener('click', () => {
        nav.classList.toggle('is-open');
    });
}

export default burgerJs