
const olympicsStartDate = new Date('2024-07-27').getTime();
const countdownElement = document.getElementById('countdown');
const mobileWarning = document.getElementById('mobile-warning');
const hostCountry = document.getElementById('host-country');


function updateCountdown() {
    const now = new Date().getTime();
    const timeDifference = olympicsStartDate - now;


    const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));


    countdownElement.textContent = `J - ${daysRemaining}`;


    if (daysRemaining <= 0) {
        countdownElement.textContent = "C'est aujourd'hui!";
    }
}


function isMobileDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /android|avantgo|blackberry|iemobile|ipad|iphone|ipod|j2me|midp|mobile|netfront|opera mobi|palm|phone|pocket|psp|smartphone|symbian|tablet|up.browser|up.link|windows ce|windows phone|xda|xiino/i.test(userAgent);
}

if (isMobileDevice()) {
    mobileWarning.style.display = 'flex';
    hostCountry.style.display = 'none';
} else {

    updateCountdown();

    setInterval(updateCountdown, 1000 * 60 * 60 * 24);
}

document.addEventListener("DOMContentLoaded", function() {
    var banner = document.getElementById("banner");
    var closeButton = document.querySelector(".banner .close");


    setTimeout(function() {
        banner.style.display = "block";
    }, 5000); 

   
    closeButton.addEventListener("click", function() {
        banner.style.display = "none";
    });
});



// C mon code petit bouffon