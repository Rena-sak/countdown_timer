const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const xMas = "Dec 25 2023";

function countdown(){
    const xMasDate = new Date(xMas);
    const currentDate = new Date();
    const totalSeconds= (xMasDate - currentDate) / 1000;

    const days= Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML =realTime(days);
    hoursEl.innerHTML =realTime(hours);
    minutesEl.innerHTML =realTime(minutes);
    secondsEl.innerHTML =realTime(seconds);

    function realTime (time) {
        return time < 10 ? (`0${time}`) : time;
    }

}
countdown();

setInterval(countdown, 1000);
