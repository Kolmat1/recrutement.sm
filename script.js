// Date de début des Jeux Olympiques
const olympicsStartDate = new Date('2024-07-27').getTime();
const countdownElement = document.getElementById('countdown');
const mobileWarning = document.getElementById('mobile-warning');
const hostCountry = document.getElementById('host-country');

// Met à jour le compte à rebours chaque jour
function updateCountdown() {
    const now = new Date().getTime();
    const timeDifference = olympicsStartDate - now;

    // Convertir la différence de temps en jours
    const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Mettre à jour le texte du compte à rebours
    countdownElement.textContent = `J - ${daysRemaining}`;

    // Vérifier si le compte à rebours est terminé
    if (daysRemaining <= 0) {
        countdownElement.textContent = "C'est aujourd'hui!";
    }
}

// Fonction pour détecter les appareils mobiles
function isMobileDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /android|avantgo|blackberry|iemobile|ipad|iphone|ipod|j2me|midp|mobile|netfront|opera mobi|palm|phone|pocket|psp|smartphone|symbian|tablet|up.browser|up.link|windows ce|windows phone|xda|xiino/i.test(userAgent);
}

// Afficher le message d'avertissement si l'utilisateur est sur un appareil mobile
if (isMobileDevice()) {
    mobileWarning.style.display = 'flex';
    hostCountry.style.display = 'none';
} else {
    // Initialiser le compte à rebours
    updateCountdown();
    // Mettre à jour le compte à rebours chaque jour
    setInterval(updateCountdown, 1000 * 60 * 60 * 24);
}

document.addEventListener("DOMContentLoaded", function() {
    var banner = document.getElementById("banner");
    var closeButton = document.querySelector(".banner .close");

    // Show the banner after a delay
    setTimeout(function() {
        banner.style.display = "block";
    }, 5000); // Show after 5 seconds

    // Close the banner when the close button is clicked
    closeButton.addEventListener("click", function() {
        banner.style.display = "none";
    });
});
