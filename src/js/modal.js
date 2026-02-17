const modalJs = () => {
    const modalWindow = document.querySelector('.modal');
    const openModalButtons = document.querySelectorAll('.open__modal');
    const closeModalButton = document.querySelector('.modal__close');

    openModalButtons.forEach((button) => {
        button.addEventListener('click', () => {
            modalWindow.classList.add('modal__open');
        });
    });

    const closeModal = () => {
        modalWindow.classList.remove('modal__open');
    };

    closeModalButton.addEventListener('click', closeModal);

    modalWindow.addEventListener('click', (event) => {
        if(event.target === modalWindow)
            closeModal();
    });

    document.addEventListener('keydown', (event) => {
        if(event.key === 'Escape')
            closeModal();
    });
}

export default modalJs