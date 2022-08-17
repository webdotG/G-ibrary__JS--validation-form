const prev = document.getElementById('slider__btn--prev');
const next = document.getElementById('slider__btn--next');
const slides = document.querySelectorAll('.slider__slide');

let index = 0;

const activeSlide = n => {
    console.log(n)
    for (slide of slides) {
        slide.classList.remove('slider__slide--active');
    }
    slides[n].classList.add('slider__slide--active');
}

const nextSlide = () => {
    if (index == slides.length-1){
        index=0
        activeSlide(index);
    }else {
        index++;
        activeSlide(index);
    }
}
next.addEventListener('click', nextSlide);

const prevSlide = () => {
    if (index == 0 ){
        index = slides.length-1
        activeSlide(index);
    }else {
        index--;
        activeSlide(index);
    }
}
prev.addEventListener('click', prevSlide);
