window.onload = () => {
    document.querySelector('.start').onclick = start;
    document.querySelector('.reset').onclick = reset;
}

function start () {
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;

    const stop = document.querySelector('.stop');
    
    const endTime = new Date(date + " " + time);

    const interval = setInterval(() => startTime(endTime), 1000);

    stop.addEventListener('click', () => {
        clearInterval(interval);
    })
}

function startTime(endTime) {
    const currentTime = new Date();

    const hours = document.querySelector('#countdown-hours');
    const minutes = document.querySelector('#countdown-minutes');
    const seconds = document.querySelector('#countdown-seconds');

    if (endTime > currentTime) {
        const timeLeft = (endTime - currentTime) / 1000;

        console.log(timeLeft);
        hours.innerText = Math.floor((timeLeft / (60 * 60)) % 24);
        minutes.innerText = Math.floor((timeLeft / 60) % 60);
        seconds.innerText = Math.floor(timeLeft % 60);
    } else {
        hours.innerText = 0
        minutes.innerText = 0
        seconds.innerText = 0
    }
}

function reset() {
    document.querySelector('#countdown-hours').innerText = 0;
    document.querySelector('#countdown-minutes').innerText = 0;
    document.querySelector('#countdown-seconds').innerText = 0;
}