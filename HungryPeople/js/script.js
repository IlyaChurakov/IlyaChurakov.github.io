'use strict';

function slider({Slides, Slider, Prev, Next, Total, Current, SlidesWrapper, SlidesInner}) {

    // Slider

    const slides = document.querySelectorAll(Slides),
        slider = document.querySelector(Slider),
        prev = document.querySelector(Prev),
        next = document.querySelector(Next),
        total = document.querySelector(Total),
        current = document.querySelector(Current),
        slidesWrapper = document.querySelector(SlidesWrapper),
        slidesInner = document.querySelector(SlidesInner),
        width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.innerHTML = `0${slides.length}`;
    } else if (slides.length >= 10) {
        total.innerHTML = `${slides.length}`;
    }

    function showResult() {
        if (slides.length < 10) {
            current.innerHTML = `0${slideIndex}`;
        } else if (slides.length >= 10) {
            current.innerHTML = `${slideIndex}`;
        }
    }

    function highlightDots() {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = '1';
    }

    function replaceLetter(str) {
        return +str.replace(/\D/g, '');
    }

    showResult();

    slidesInner.style.width = 100 * slides.length + '%';
    slidesInner.style.display = 'flex';
    slidesInner.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
        dots = [];

    indicators.classList.add('carousel-indicators');

    slider.append(indicators);



    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');

        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    next.addEventListener('click', () => {
        if (offset == replaceLetter(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += replaceLetter(width);
        }

        slidesInner.style.transform = `translateX(-${offset}px)`;

        if (slideIndex >= slides.length) {
            slideIndex = 1;
        } else {
            ++slideIndex;
        }


        showResult();
        highlightDots();
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = replaceLetter(width) * (slides.length - 1);
        } else {
            offset -= replaceLetter(width);
        }

        slidesInner.style.transform = `translateX(-${offset}px)`;

        if (slideIndex <= 1) {
            slideIndex = slides.length;
        } else {
            --slideIndex;
        }

        showResult();
        highlightDots();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = replaceLetter(width) * (slideTo - 1);

            slidesInner.style.transform = `translateX(-${offset}px)`;

            showResult();
            highlightDots();
        });
    });
}

slider({
    Slides: '.offer__slide', 
    Slider: '.offer__slider', 
    Prev: '.offer__slider-prev', 
    Next: '.offer__slider-next', 
    Total: '#total', 
    Current: '#current', 
    SlidesWrapper: '.offer__slider-wrapper', 
    SlidesInner: '.offer__slider-inner'
});

//menu

const hamburgerBtn = document.querySelector('.header__hamburger'),
      closeBtn = document.querySelector('.header__menu_close'),
      menu = document.querySelector('.header__menu');

console.log(menu);

hamburgerBtn.addEventListener('click', () => {
    console.log(hamburgerBtn);
    menu.classList.add('header__menu_active');
    document.body.classList.add('stop-scrolling');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('header__menu_active');
    document.body.classList.remove('stop-scrolling');
});