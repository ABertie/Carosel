const CAROSEL1_IMG = document.querySelector(".carosel1__image");
const CAROSEL1_FORWARD = document.querySelector(".carosel1__forwardButton");
const CAROSEL1_BACK = document.querySelector(".carosel1__backButton");

const IMAGES1 = ["img/pexels-karolina-grabowska-4041122.jpg", "img/pexels-mikhail-nilov-6957667.jpg", "img/pexels-mikhail-nilov-6957926.jpg"];

var index1 = 0;
CAROSEL1_IMG.src = IMAGES1[index1];

CAROSEL1_FORWARD.addEventListener("click", shuffleForward1);
CAROSEL1_BACK.addEventListener("click", shuffleBack1);

function shuffleForward1(event) {
    index1++;
    if (IMAGES1.length === index1) {
        index1 = 0;
    };
    CAROSEL1_IMG.src = IMAGES1[index1];
};

function shuffleBack1(event) {
    if (index1 === 0) {
        index1 = IMAGES1.length;
    }
    index1--;
    CAROSEL1_IMG.src = IMAGES1[index1];
};