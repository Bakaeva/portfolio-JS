'use strict';

const accordeon = () => {
    const accord = document.querySelector('.feature-list');
    const accordeonButtons = accord.querySelectorAll('.feature__link');

    accordeonButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            accordeonButtons.forEach((button) => {
                button.classList.remove('feature__link_active');
                button.nextElementSibling.classList.add('hidden');
            });

            btn.classList.toggle('feature__link_active');
            btn.nextElementSibling.classList.toggle('hidden');
        });
    });
};

accordeon();