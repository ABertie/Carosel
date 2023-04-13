const CAROSEL4_SLIDE = document.querySelector(".carosel4__slide");
const CAROSEL4_FORWARD = document.querySelector(".carosel4__forwardButton");
const CAROSEL4_BACK = document.querySelector(".carosel4__backButton");
const SPOTS = document.querySelector(".carosel4__spots");
const SLIDE4 = [
    '<img src="img/pexels-karolina-grabowska-4041122.jpg">',
    '<section class="full-width"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nam et, quae ab vitae labore rem veritatis libero repudiandae ullam quaerat sed autem earum fugiat odit similique aliquid aliquam dignissimos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nam et, quae ab vitae labore rem veritatis libero repudiandae ullam quaerat sed autem earum fugiat odit similique aliquid aliquam dignissimos?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium perferendis suscipit ducimus cumque, debitis labore aut unde ab sit voluptatum error, ea dignissimos voluptatem necessitatibus blanditiis dolore culpa, doloribus quas!</p><button>læs mere</button></section>',
    '<img src="img/pexels-jonathan-borba-15560669.jpg"><article><h3>Lorem ipsum dolor sit amet</h3><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus repellendus temporibus reiciendis voluptatibus dolorum dolore adipisci, recusandae nostrum. Repellat cupiditate sed molestias laborum sit ipsa ullam neque sapiente numquam perspiciatis.Quae rerum iusto autem. Aliquam nam consequatur facilis esse excepturi quam tempore nulla laborum recusandae rem ad culpa, quo possimus nobis commodi quia ratione dolores minus totam nemo corrupti ut?Magnam neque dignissimos excepturi, earum unde, non nam soluta rerum reiciendis dolor deserunt autem temporibus quas quo, cumque fugit blanditiis pariatur consequuntur! Delectus, dolorum! Consectetur a officiis expedita nobis nisi!</p></article>',
    '<img src="img/pexels-mikhail-nilov-6957667.jpg" alt=""><img src="img/pexels-mikhail-nilov-6957926.jpg" alt="">',
    '<article><h3>Lorem ipsum dolor sit amet</h3><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus repellendus temporibus reiciendis voluptatibus dolorum dolore adipisci, recusandae nostrum. Repellat cupiditate sed molestias laborum sit ipsa ullam neque sapiente numquam perspiciatis.Quae rerum iusto autem. Aliquam nam consequatur facilis esse excepturi quam tempore nulla laborum recusandae rem ad culpa, quo possimus nobis commodi quia ratione dolores minus totam nemo corrupti ut?Magnam neque dignissimos excepturi, earum unde, non nam soluta rerum reiciendis dolor deserunt autem temporibus quas quo, cumque fugit blanditiis pariatur consequuntur! Delectus, dolorum! Consectetur a officiis expedita nobis nisi!</p></article><img src="img/pexels-nati-16233384.jpg">'
];

var index4 = 0;
CAROSEL4_SLIDE.innerHTML = (SLIDE4[index4]);

SLIDE4.forEach(function() {
    const CREATESPOT = document.createElement("button");
    CREATESPOT.classList.add('carosel4__spot');
    SPOTS.appendChild(CREATESPOT);
});
const BUTTONS = SPOTS.querySelectorAll("button");

CAROSEL4_FORWARD.addEventListener("click", shuffleForward4);
CAROSEL4_BACK.addEventListener("click", shuffleBack4);
CAROSEL4_SLIDE.addEventListener("animationend", disabelAnimation4);

function highlightButton() {
    BUTTONS.forEach(function (button, i){
        if (index4 === i) {
            button.classList.add('highlight');
        } else {
            button.classList.remove('highlight');
        };
        button.addEventListener("click", function () {
            if (index4 < i) {
                CAROSEL4_SLIDE.classList.add('animate__fadeOutLeftBig');
            } else {
                CAROSEL4_SLIDE.classList.add('animate__fadeOutRightBig');
            }
            index4 = i;
            highlightButton();
        });
    });
};
highlightButton();

function shuffleForward4() {
    index4++;
    if (SLIDE4.length === index4) {
        index4 = 0;
    };
    CAROSEL4_SLIDE.classList.add('animate__fadeOutLeftBig');
    window.highlightButton();
};

function shuffleBack4() {
    if (index4 === 0) {
        index4 = SLIDE4.length;
    }
    index4--;
    CAROSEL4_SLIDE.classList.add('animate__fadeOutRightBig');
    window.highlightButton();
};

function disabelAnimation4() {
    if (CAROSEL4_SLIDE.classList.contains('animate__fadeOutRightBig')){
        CAROSEL4_SLIDE.classList.remove('animate__fadeOutRightBig');
        CAROSEL4_SLIDE.innerHTML = (SLIDE4[index4]);
        CAROSEL4_SLIDE.classList.add('animate__fadeInLeftBig');
    } else {
        CAROSEL4_SLIDE.classList.remove('animate__fadeInLeftBig');
    };
    
    if (CAROSEL4_SLIDE.classList.contains('animate__fadeOutLeftBig')){
        CAROSEL4_SLIDE.classList.remove('animate__fadeOutLeftBig');
        CAROSEL4_SLIDE.innerHTML = (SLIDE4[index4]);
        CAROSEL4_SLIDE.classList.add('animate__fadeInRightBig');
    } else {
        CAROSEL4_SLIDE.classList.remove('animate__fadeInRightBig');
    };
;}
    
