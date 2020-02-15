function getTime() {
    var date = new Date();
    var hours = date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();

    // If statement to add zero if number is under 10 (weet niet waarom het niet met if else statement werkt)
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (mins < 10) {
        mins = "0" + mins;
    }

    if (secs < 10) {
        secs = "0" + secs;
    }

    var time = hours + ":" + mins + ":" + secs;

    if (hours >= 0 && hours < 6) {
        document.getElementById("time-of-day").innerHTML = `<i>night</i>`;
    } else if (hours >= 6 && hours < 12) {
        document.getElementById("time-of-day").innerHTML = `<i>morning</i>`;
    } else if (hours >= 12 && hours < 18) {
        document.getElementById("time-of-day").innerHTML = `<i>afternoon</i>`;
    } else if (hours >= 18 && hours < 24) {
        document.getElementById("time-of-day").innerHTML = `<i>evening</i>`;
    }
    return document.getElementById("time").innerHTML = time;
}

// Functie om datum te pakken
function getDate() {
    var dates = new Date();
    var day = dates.getDate();
    // Maand geeft de maand - 1, dus als oplossing om huidige maand te krijgen: + 1 (reden hiervoor is onbekend)
    var month = dates.getMonth() + 1;
    var year = dates.getFullYear();
    var date = day + "/" + month + "/" + year;
    return document.getElementById("date").innerHTML = `<h4>${date}</h4>`;
}

//Functies aanroepen tijd
getDate()
setInterval(getTime, 30);

// Countdown clock
var date = new Date();
var deadlineYear = date.getFullYear() + 1;
var deadline = new Date("Jan 1, " + deadlineYear + " 00:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);

    // If statement to add zero if number is under 10 (weet niet waarom het niet met if else statement werkt)
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("days").innerHTML = `<h1>${days}</h2>`;
    document.getElementById("hours").innerHTML = `<h1>${hours}</h2>`;
    document.getElementById("minutes").innerHTML = `<h1>${minutes}</h2>`;
    document.getElementById("seconds").innerHTML = `<h1>${seconds}</h2>`;
}, 1000);

document.getElementById("old-new-year").innerHTML = `<p>(${deadlineYear - 1}-${deadlineYear})</p>`