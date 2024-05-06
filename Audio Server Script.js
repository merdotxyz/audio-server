/*let body = document.body;
let bodyBackgroundImages = ['Background1.jpeg', 'Background2.jpeg', 'Background3.jpeg', 'Background4.jpeg', 'Background5.jpeg', 'Background6.jpeg'];

function random() {
    let randomIndexBg = Math.floor(Math.random() * bodyBackgroundImages.length);
    let randomBodyBackgroundImage = bodyBackgroundImages[randomIndexBg];
    body.style.backgroundImage = `url('${randomBodyBackgroundImage}')`;
}

random();*/

let playButton = document.getElementById('play-button');
let pauseButton = document.getElementById('pause-button');
let audio = new Audio('http://broadcast.shoutstream.co.uk/stream/8000');

function playStream() {
    audio.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'inline-block';
}

playButton.onclick = playStream;

function pauseStream() {
    audio.pause();
    playButton.style.display = 'inline-block';
    pauseButton.style.display = 'none';
}

pauseButton.onclick = pauseStream

let isPlaying = false;

document.addEventListener('keydown', function (e) {
    if (e.key === " ") {
        if (isPlaying) {
            pauseStream();
        } else {
            playStream();
        }
        isPlaying = !isPlaying;
    }
});

const displayTime = document.querySelector(".display-time");
// Time
function showTime() {
    let time = new Date();
    displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
    setTimeout(showTime, 1000);
}

showTime();

// Date
function updateDate() {
    let today = new Date();

    // return number
    let dayName = today.getDay(),
        dayNum = today.getDate(),
        month = today.getMonth(),
        year = today.getFullYear();

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const dayWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    // value -> ID of the html element
    const IDCollection = ["day", "daynum", "month", "year"];
    // return value array with number as a index
    const val = [dayWeek[dayName], dayNum, months[month], year];
    for (let i = 0; i < IDCollection.length; i++) {
        document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
    }
}

updateDate();
