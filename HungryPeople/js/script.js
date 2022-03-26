'use strict';

function slider({Slides, Slider, Prev, Next, Total, Current, SlidesWrapper, SlidesInner}) {

    // Slider

    const slides = document.querySelectorAll(Slides),
        slider = document.querySelector(Slider),
        prev = document.querySelector(Prev),
        next = document.querySelector(Next),
        total = document.querySelector(Total),
        // current = document.querySelector(Current),
        slidesWrapper = document.querySelector(SlidesWrapper),
        slidesInner = document.querySelector(SlidesInner),
        width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

    // if (slides.length < 10) {
    //     total.innerHTML = `0${slides.length}`;
    // } else if (slides.length >= 10) {
    //     total.innerHTML = `${slides.length}`;
    // }

    // function showResult() {
    //     if (slides.length < 10) {
    //         current.innerHTML = `0${slideIndex}`;
    //     } else if (slides.length >= 10) {
    //         current.innerHTML = `${slideIndex}`;
    //     }
    // }

    function highlightDots() {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = '1';
    }

    function replaceLetter(str) {
        return +str.replace(/\D/g, '');
    }

    // showResult();

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


        // showResult();
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

        // showResult();
        highlightDots();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = replaceLetter(width) * (slideTo - 1);

            slidesInner.style.transform = `translateX(-${offset}px)`;

            // showResult();
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
      menu = document.querySelector('.header__menu'),
      menuItem = document.querySelectorAll('.header__menu_link');

// console.log(menu);

hamburgerBtn.addEventListener('click', () => {
    console.log(hamburgerBtn);
    menu.classList.add('header__menu_active');
    document.body.classList.add('stop-scrolling');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('header__menu_active');
    document.body.classList.remove('stop-scrolling');
});

menuItem.forEach((item) => {
    item.addEventListener('click', () => {
        menu.classList.remove('header__menu_active');
        document.body.classList.remove('stop-scrolling');
    });
});

//Menu of food

const foodMenuBtn = document.querySelectorAll('.menu__categories_item');

class Food {
    constructor(parentSelector, name, price, descr) {
        this.name = name.toUpperCase();
        this.price = price;
        this.descr = descr;
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const element = document.createElement('div');
        element.classList.add('menu__wrapper_point');

        if(this.name.length > 21) {
            this.name = `${this.name.slice(0, 21)} . . . .`;
        } else {
            this.name = `${this.name}`;
        }

        element.innerHTML = `
            <div class="menu__wrapper_point_name">${this.name}</div>
            <div class="menu__wrapper_point_cost">${this.price}</div>
            <div class="menu__wrapper_point_descr">${this.descr}</div>
        `;
        this.parent.append(element);
    }
}

showSoupe();

foodMenuBtn.forEach((item, num) => {
    foodMenuBtn[num].addEventListener('click', (e) => {
        e.preventDefault();

        if(!foodMenuBtn[num].classList.contains('menu__categories_item_active')) {
            
            foodMenuBtn.forEach(i => {
                i.classList.remove('menu__categories_item_active');
                i.classList.remove('menu__categories_item_passive');
                i.classList.add('menu__categories_item_passive');
            });
            foodMenuBtn[num].classList.remove('menu__categories_item_passive');
            foodMenuBtn[num].classList.add('menu__categories_item_active');

            clearFoodMenu();

            switch(num) {
                case 0: 
                    showSoupe();
                    break;
                case 1: 
                    showPizza();
                    break;
                case 2: 
                    showPasta();
                    break;
                case 3: 
                    showDesert();
                    break;
                case 4: 
                    showWine();
                    break;
                case 5: 
                    showBeer();
                    break;
                case 6: 
                    showDrinks();
                    break;
            }
        }
    });
});

function clearFoodMenu() {
    const elementDel = document.querySelectorAll('.menu__wrapper_point');

    elementDel.forEach((item) => {
        item.remove();
    });
}

function showSoupe() {

    const getResource = async (url) => {
        const res = await fetch(url);
    
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    };
    
    getResource('http://localhost:3000/soupe')
        .then(data => {
            data.forEach(({name, price, descr}) => {
                new Food('.menu__wrapper', name, price, descr).render();
            });
        });
}

function showPizza() {

    const getResource = async (url) => {
        const res = await fetch(url);
    
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    };
    
    getResource('http://localhost:3000/pizza')
        .then(data => {
            data.forEach(({name, price, descr}) => {
                new Food('.menu__wrapper', name, price, descr).render();
            });
        });
}

function showPasta() {

    const getResource = async (url) => {
        const res = await fetch(url);
    
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    };
    
    getResource('http://localhost:3000/pasta')
        .then(data => {
            data.forEach(({name, price, descr}) => {
                new Food('.menu__wrapper', name, price, descr).render();
            });
        });
}

function showDesert() {
    const getResource = async (url) => {
        const res = await fetch(url);
    
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    };
    
    getResource('http://localhost:3000/desert')
        .then(data => {
            data.forEach(({name, price, descr}) => {
                new Food('.menu__wrapper', name, price, descr).render();
            });
        });
}

function showWine() {
    const getResource = async (url) => {
        const res = await fetch(url);
    
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    };
    
    getResource('http://localhost:3000/wine')
        .then(data => {
            data.forEach(({name, price, descr}) => {
                new Food('.menu__wrapper', name, price, descr).render();
            });
        });
}

function showBeer() {
    const getResource = async (url) => {
        const res = await fetch(url);
    
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    };
    
    getResource('http://localhost:3000/beer')
        .then(data => {
            data.forEach(({name, price, descr}) => {
                new Food('.menu__wrapper', name, price, descr).render();
            });
        });
}

function showDrinks() {
    const getResource = async (url) => {
        const res = await fetch(url);
    
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    };
    
    getResource('http://localhost:3000/drinks')
        .then(data => {
            data.forEach(({name, price, descr}) => {
                new Food('.menu__wrapper', name, price, descr).render();
            });
        });
}

// Отправка данных на сервер

const formElementBook = document.querySelector(".book__form"),
      formElementBtnBook = formElementBook.querySelector('button'),
      formElementContact = document.querySelector(".contact__form"),
      formElementBtnContact = formElementContact.querySelector('button');

function sendForms(btn, form, url, messageOK, messageError) {
    btn.addEventListener('click', (e) => {
        
        e.preventDefault();
        const formData = new FormData(form);

        const object = {};
        formData.forEach((value, key) => {
            object[key] = value;
        });
    
        fetch(url, {
            method: 'POST'
        })
        .then(() => {
            console.log(messageOK);
        })
        .catch(() => {
            console.log(messageError);
        })
        .finally(() => {
            form.reset();
        });
    });
}

sendForms(formElementBtnBook, formElementBook, "mailer/index.php", 'Book has been sent', 'Book send data error');
sendForms(formElementBtnContact, formElementContact, "mailer/smart.php", 'Contacts has been sent', 'Contacts send data error');


