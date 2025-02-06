const backButton = document.querySelector('#backknop');
const nextButton = document.querySelector('#nextknop');
const boekenCarousel = document.querySelector('#boekscherm'); 

const boekenoekerArray = [
    'zerostate.png',
    'leeftijd.png',
    'lezenlijst.png',
    'lezenlijstniveau.png',
    'populairegenre.png',
    'genres.png',
    'laadscherm.png',
    'resulaten.png',
    'resultatenextra.png',
    'detailscherm.png',
    'wishlist.png',
    'printen.png',
    'printengelukt.png',
    'mailen.png',
    'mailengelukt.png',
    'error.png',
    'legewishlist.png'
];

let boekenzoeker = 0;

function nextBoekenzoeker() {
    boekenzoeker = (boekenzoeker + 1) % boekenzoekerArray.length;
    andereBoekenzoeker();
}

function backBoekenzoeker() {
    boekenzoeker = (boekenzoeker - 1 + boekenoekerArray.length) % boekenoekerArray.length;
    andereBoekenzoeker();
}

function andereBoekenzoeker() {
    boekenCarousel.src = 'images/personal_images/vid' + boekenoekerArray[boekenzoeker];
}

nextButton.addEventListener("click", nextBoekenzoeker);
backButton.addEventListener("click", backBoekenzoeker);