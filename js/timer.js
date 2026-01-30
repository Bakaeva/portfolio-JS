'use strict';

const timer = () => {

    const dateOfDeadline = new Date('2026/03/31');

    const timeBlock = document.querySelector('.timer__time');
    timeBlock.textContent = '';

    const set2digits = (num) => {
        return num < 10 ? '0' + num : num;
    };

    const numWord = (value, words) => {
        value = Math.abs(parseInt(value)) % 100;
        const lastDigit = value % 10;
        if (lastDigit === 1 && value !== 11)
            return words[0];
        else if (lastDigit === 2 && value !== 12
            || lastDigit === 3 && value !== 13
            || lastDigit === 4 && value !== 14)
            return words[1];
        return words[2];
    };

    let interval;

    const updateTimer = () => {
        const secondsRemaining = (dateOfDeadline - new Date()) / 1000;
        if (secondsRemaining <= 0) {
            clearInterval(interval);
            timeBlock.textContent = "00:00:00";
            timeBlock.style.color = 'red';
            return;
        };

        const minutesRemaining = secondsRemaining / 60;
        const hoursRemaining = minutesRemaining / 60;
        const daysRemaining = hoursRemaining / 24;

        const days = Math.floor(daysRemaining);
        const hours = set2digits(Math.floor(hoursRemaining % 24));
        const mim = set2digits(Math.floor(minutesRemaining % 60));
        const sec = set2digits(Math.floor(secondsRemaining % 60));

        timeBlock.textContent = `${days > 0 ? (days + ' ' + numWord(days, ['день', 'дня', 'дней'])) : ''} ${hours}:${mim}:${sec}`;
    };

    interval = setInterval(updateTimer, 500);
};

timer();