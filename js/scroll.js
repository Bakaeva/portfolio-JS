'use strict';

const scroll = () => {
    const menuLinks = document.querySelectorAll('.menu-list__link');
    const testButton = document.querySelector('.main__button');
    const scrollButton = document.querySelector('.main__scroll');

    const allLinks = [...menuLinks, testButton, scrollButton];

    allLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);

            if (section) {
                seamless.scrollIntoView(section, {
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                });
            };
        });
    });
};

scroll();