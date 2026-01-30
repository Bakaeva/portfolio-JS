'use strict';

const tabs = () => {

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

            tabTitles.forEach((tabTitle) => {
                const isPortfolio = tabTitle.textContent.trim() === "Портфолио";
                tabTitle.classList.toggle('hidden', tabsHandler === "interior" ? !isPortfolio : isPortfolio);

                if (!tabTitle.classList.contains('hidden'))
                    document.title = tabTitle.textContent.trim();
            });

            changeContent(tabBlockImages, tabsHandler);
            changeContent(tabDescriptions, tabsHandler);
            changeContent(tabImages, tabsHandler);
        });
    });
};

tabs();