import IMask from 'imask';

const initMask = () => {
    const inputs = document.querySelectorAll('.maskPhoneJs');

    inputs.forEach(input => {
        IMask(input, {
            mask: '+{7} (000) 000-00-00'
        });
    });
}

export default initMask