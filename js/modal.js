'use strict';

const modal = () => {
    const modalButtons = document.querySelectorAll('.more');
    const modalWindow = document.querySelector('.modal');
    const overlay = modalWindow.querySelector('.overlay');
    const modalWrapper = modalWindow.querySelector('.modal-wrapper');
    const modalCloseBtn = modalWrapper.querySelector('.modal__close');

    modalButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            modalWindow.classList.remove('hidden');
        });
    });

    modalCloseBtn.addEventListener('click', () => {
        modalWindow.classList.add('hidden');
    });

    overlay.addEventListener('click', () => {
        modalWindow.classList.add('hidden');
    });
};

modal();