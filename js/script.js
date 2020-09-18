/* Slider */

let imageBg = document.querySelector(".content");

slides = [
        "url('img/bg-1.jpg')",
        "url('img/bg-2.jpg')",
        "url('img/bg-3.jpg')",
        "url('img/bg-4.jpg')",
        "url('img/bg-5.jpg')",
        "url('img/bg-6.jpg')",
        "url('img/bg-7.jpg')"
];

let timer = 4000;
let active = 0;

changeBg = () => {
        active++;
        if ( active === slides.length ){
                active = 0;
        }
        imageBg.style.backgroundImage = slides[active];
}


setInterval(changeBg, timer);

