'use strict';

const tabButtons = document.querySelectorAll('.design-list__item');
const tabTitles = document.querySelectorAll('.design__title');
const tabBlockImages = document.querySelectorAll('.design-block__img');
const tabDescriptions = document.querySelectorAll('.design__descr');
const tabImages = document.querySelectorAll('.design-images');

const changeContent = (arr, value) => {
    arr.forEach((elem) => {
        if (elem.dataset.tabsField === value) {
            elem.classList.remove('hidden');
        } else {
            elem.classList.add('hidden');
        }
    });
}

tabButtons.forEach((tabButton) => {
    tabButton.addEventListener('click', (event) => {
        const tabsHandler = event.target.dataset.tabsHandler;

        tabButtons.forEach((btn) => {
            if (btn === event.target) {
                btn.classList.add('design-list__item_active');
            } else {
                btn.classList.remove('design-list__item_active');
            }
        });

        tabTitles.forEach((title) => {
            if (tabsHandler === "interior") {
                if (title.textContent.trim() === "Портфолио") {
                    title.classList.remove('hidden');
                } else { // title.textContent === "Притягивает взгляды"
                    title.classList.add('hidden');
                }
            } else { // tabsHandler === "body"
                if (title.textContent.trim() === "Портфолио") {
                    title.classList.add('hidden');
                } else { // title.valtextContentue === "Притягивает взгляды"
                    title.classList.remove('hidden');
                }
            }
        });

        changeContent(tabBlockImages, tabsHandler);
        changeContent(tabDescriptions, tabsHandler);
        changeContent(tabImages, tabsHandler);
    });
});