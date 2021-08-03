const overlay = document.querySelector('.overlay'),
      opacity = document.querySelector('.overlay__opacity'),
      menu = document.querySelector('.overlay__menu'),
      hamburger = document.querySelector('.hamburger'),
      cross = document.querySelector('.overlay__cross');

hamburger.addEventListener('click', () => {
    overlay.classList.add('overlay__open');
    menu.classList.add('overlay__menu_active');
});

cross.addEventListener('click', () => {
    overlay.classList.remove('overlay__open');
    menu.classList.remove('overlay__menu_active');
});

overlay.addEventListener('click', () => {
    overlay.classList.remove('overlay__open');
    menu.classList.remove('overlay__menu_active');
});

const number = document.querySelectorAll('.skills__number'),
      orangeLine = document.querySelectorAll('.skills__rate-used');

orangeLine.forEach((item, num) => {
    orangeLine[num].style.width = `${number[num].innerHTML}`;
});



