/* const CAROSEL_IMG = document.querySelector(".carosel__image");
const CAROSEL_FORWARD = document.querySelector(".carosel__forwardButton");
const CAROSEL_BACK = document.querySelector(".carosel__backButton");

const IMAGES = ["img/pexels-karolina-grabowska-4041122.jpg", "img/pexels-mikhail-nilov-6957667.jpg", "img/pexels-mikhail-nilov-6957926.jpg"];

var index = 0;
CAROSEL_IMG.src = IMAGES[index];

CAROSEL_FORWARD.addEventListener("click", shuffleForward);
CAROSEL_BACK.addEventListener("click", shuffleBack);

function shuffleForward(event) {
    index++;
    if (IMAGES.length === index) {
        index = 0;
    };
    CAROSEL_IMG.src = IMAGES[index];
};

function shuffleBack(event) {
    if (index === 0) {
        index = IMAGES.length;
    }
    index--;
    CAROSEL_IMG.src = IMAGES[index];
}; */