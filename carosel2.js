const CAROSEL2_IMG = document.querySelector(".carosel2__image");
const CAROSEL2_FORWARD = document.querySelector(".carosel2__forwardButton");
const CAROSEL2_BACK = document.querySelector(".carosel2__backButton");

const IMAGES2 = ["img/pexels-karolina-grabowska-4041122.jpg", "img/pexels-mikhail-nilov-6957667.jpg", "img/pexels-mikhail-nilov-6957926.jpg","img/pexels-jonathan-borba-15560669.jpg","img/pexels-nati-16233384.jpg"];

var index2 = 0;
CAROSEL2_IMG.src = IMAGES2[index2];

CAROSEL2_FORWARD.addEventListener("click", shuffleForward2);
CAROSEL2_BACK.addEventListener("click", shuffleBack2);
CAROSEL2_IMG.addEventListener("animationend", disabelAnimation)

function shuffleForward2(event) {
    index2++;
    if (IMAGES2.length === index2) {
        index2 = 0;
    };
    CAROSEL2_IMG.classList.add('animate__fadeOutRightBig')
};

function shuffleBack2(event) {
    if (index2 === 0) {
        index2 = IMAGES2.length;
    }
    index2--;
    CAROSEL2_IMG.classList.add('animate__fadeOutLeftBig')
};

function disabelAnimation(event) {
    if (CAROSEL2_IMG.classList.contains('animate__fadeOutRightBig')){
        CAROSEL2_IMG.classList.remove('animate__fadeOutRightBig')
        CAROSEL2_IMG.src = IMAGES2[index2];
        CAROSEL2_IMG.classList.add('animate__fadeInLeftBig')
    } else {
        CAROSEL2_IMG.classList.remove('animate__fadeInLeftBig')
    }
    
    if (CAROSEL2_IMG.classList.contains('animate__fadeOutLeftBig')){
        CAROSEL2_IMG.classList.remove('animate__fadeOutLeftBig')
        CAROSEL2_IMG.src = IMAGES2[index2];
        CAROSEL2_IMG.classList.add('animate__fadeInRightBig')
    } else {
        CAROSEL2_IMG.classList.remove('animate__fadeInRightBig')
    }
}