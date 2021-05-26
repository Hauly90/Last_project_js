let slideIndex = 0;

let arrayOfImages = [
    "/img/cake.jfif",
    "/img/car.jfif",
    "/img/chess.jfif",
    "/img/food.jfif",
    "/img/manga_book.jfif",
    "/img/nature.jfif",
    "/img/woman.jpg",
    "/img/woman.jfif",
    "/img/woman2.jfif"
]

// Next and previous buttons
function plusSlides(someNumber) {
    showSlides(slideIndex += someNumber);
}

function showSlides(number) {

    if (number === arrayOfImages.length) {
        slideIndex = 0;
        number = 0;
    } else if (number === -1) {
        slideIndex = arrayOfImages.length;
        number = arrayOfImages.length - 1;
    }

    for (let i = 0; i < arrayOfImages.length; i++) {
        if (i === number) {
            document.querySelector("img").src = arrayOfImages[i];
            slideIndex = i;
        }
    }
}