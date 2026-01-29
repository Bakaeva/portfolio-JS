'use strict';

const modalButtons = document.querySelectorAll('.more');
const modal = document.querySelector('.modal');
const overlay = modal.querySelector('.overlay');
const modalWrapper = modal.querySelector('.modal-wrapper');
const modalCloseBtn = modalWrapper.querySelector('.modal__close');

modalButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });
});

modalCloseBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

overlay.addEventListener('click', () => {
    modal.classList.add('hidden');
});