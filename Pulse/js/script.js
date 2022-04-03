window.addEventListener("DOMContentLoaded", function() {

    //Слайдер

    const slider = tns({
        container: '.carousel__inner',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        controls: false,
        nav: false
    });

    document.querySelector('.prev').addEventListener('click', () => {
        slider.goTo('prev');
    });
    document.querySelector('.next').addEventListener('click', () => {
        slider.goTo('next');
    });

    const descr = document.querySelectorAll('.catalog__wrapper_descr'),
          main = document.querySelectorAll('.catalog__wrapper_main'),
          btn = document.querySelectorAll('.more'),
          tabs = document.querySelectorAll('.catalog__tab'),
          content = document.querySelectorAll('.catalog__content'),
          modal = document.querySelectorAll('.modal'),
          overlay = document.querySelector('.overlay'),
          closes = document.querySelectorAll('.modal__close'),
          btn1 = document.querySelector('.button'),
          btn2 = document.querySelector('.button_main'),
          btn3 = document.querySelector('.button_consult'),
          btn4 = document.querySelectorAll('.button_mini'),
          inputs1 = document.querySelectorAll('.modal__inputs1'),
          inputs = document.querySelectorAll('.modal__input'),
          modalButton = document.querySelector('#modal__btn'),
          inputs2 = document.querySelectorAll('.modal__input2'),
          modalButton2 = document.querySelector('#modal__btn2'),
          titleName = document.querySelectorAll('.title-name'),
          modalDescr = document.querySelector('#descr'),
          attention1 = document.querySelector('.attention1'),
          attention2 = document.querySelector('.attention2'),
          attention12 = document.querySelector('.attention12'),
          attention3 = document.querySelector('.attention3'),
          attention4 = document.querySelector('.attention4'),
          attention34 = document.querySelector('.attention34'),
          attention5 = document.querySelector('.attention5'),
          attention6 = document.querySelector('.attention6'),
          attention56 = document.querySelector('.attention56'),
          forms = document.querySelectorAll('form');

        //   console.log(forms);

    //Табы
    
    btn.forEach((item, n) => {

        btn[n].addEventListener('click', () => {
            btn[n].innerHTML = (btn[n].innerHTML === 'подробнее') ? btn[n].innerHTML = 'назад' : btn[n].innerHTML = 'подробнее';
            main[n].classList.toggle('hidden');
            descr[n].classList.toggle('hidden');
        });
    });

    tabs.forEach((item, num) => {

        tabs[num].addEventListener('click', () => {
            tabs.forEach((n) => {
                n.classList.remove('active');
            });
            content.forEach((n) => {
                n.classList.remove('visible');
            });
            tabs[num].classList.add('active');
            content[num].classList.add('visible');
        });
    });

    //Модальные окна

    //Действия при нажатии на кнопки первой секции

    function openModal(mdl) {
        overlay.classList.remove('overlay__hidden');
        modal.forEach(() => {
            mdl.classList.remove('modal__hidden');
        });
    }

    btn1.addEventListener('click', () => {
        openModal(modal[0]);
    });

    btn2.addEventListener('click', () => {
        openModal(modal[0]);
    });

    btn4.forEach((item, num) => {
        btn4[num].addEventListener('click', () => {
            titleName.forEach(() => {
                modalDescr.innerHTML = `${titleName[num].innerHTML}`;
            });
            openModal(modal[1]);
        });
    });

    //Действия при нажатии на кнопку в модальных окнах

    function clickModalButtons(form, btn, elem1, elem2, elem3, modal1, modal2, array) {
        form.addEventListener('input', () => {
            array.forEach(() => {
                if (elem1.value !== '' && elem2.value !== '' && elem3.value !== '' && elem1.value.length >= 2 && elem1.value.length <= 10 && elem2.value.length >= 17) {
                    btn.disabled = false;
                    btn.addEventListener('click', () => {
                        modal1.classList.add('modal__hidden');
                        openModal(modal[2]);
                    });
                } else {
                    btn.disabled = true;
                }
            });
        });
    }
    clickModalButtons(forms[0], btn3, inputs1[0], inputs1[1], inputs1[2], modal[0], modal[2], inputs1);
    clickModalButtons(forms[1], modalButton, inputs[0], inputs[1], inputs[2], modal[0], modal[2], inputs);
    clickModalButtons(forms[2], modalButton2, inputs2[0], inputs2[1], inputs2[2], modal[1], modal[2], inputs2);

    //Действия при нажатии на крестик в модальных окнах и кнопка формы в секции консультации

    closes.forEach((i, n) => {
        closes[n].addEventListener('click', () => {

            modal.forEach((item, number) => {
                modal[number].classList.add('modal__hidden');
            });
            overlay.classList.add('overlay__hidden');
            
        });
    });

    //Валидация форм
    
    function validationForms(elem1, elem2, elem3, field1, field2, field3, array) {
        array.forEach(() => {

            elem1.addEventListener('input', () => {
                if (elem1.value.length < 2 || elem1.value.length > 10) {
                    elem1.classList.add('red');
                    field1.innerHTML = 'Введите не менее 2 и не более 10 символов!';
                } else if ( elem1.value.length >= 2 && elem1.value.length <= 10){
                    elem1.classList.remove('red');
                    field1.innerHTML = '';
                }
                console.log('aaa', elem1.value.includes('@'));
            });
    
            elem2.addEventListener('input', () => {
                if (elem2.value.length < 17) {
                    elem2.classList.add('red');
                    field2.innerHTML = 'Номер телефона должен состоять из 11 цифр!';
                } else if (elem2.value.length >= 17) {
                    elem2.classList.remove('red');
                    field2.innerHTML = '';
                }
            });
    
            elem3.addEventListener('input', () => {
                if (!elem3.value.includes('@') || !elem3.value.includes('.')) {
                    elem3.classList.add('red');
                    field3.innerHTML = 'email-адрес должен содержать символы: "@" и "."!';
                } else if (elem3.value.includes('@') && elem3.value.includes('.')) {
                    elem3.classList.remove('red');
                    field3.innerHTML = '';
                }
            });
            
        });
    }

    validationForms(inputs1[0], inputs1[1], inputs1[2], attention1, attention2, attention12, inputs1);
    validationForms(inputs[0], inputs[1], inputs[2], attention3, attention4, attention34, inputs);
    validationForms(inputs2[0], inputs2[1], inputs2[2], attention5, attention6, attention56, inputs2);

    //Делаем маску для ввода номера

    function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        }
        else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select();
        }
    }
     
    function mask(event) {
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        if (def.length >= val.length) {
            val = def;
        }
        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
        });
        if (event.type == "blur") {
            if (this.value.length == 2) {
                this.value = "";
            }
        } else {
            setCursorPosition(this.value.length, this);
        }  
    }
        var input = document.querySelectorAll(".mask");
        input.forEach((item, num) => {
            input[num].addEventListener("input", mask, false);
            input[num].addEventListener("focus", mask, false);
            input[num].addEventListener("blur", mask, false);
        });

    // Отправка данных на сервер

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            // $('#main, #buy').fadeOut();
            // $('.overlay, #waiting').fadeIn('slow');
            $('form').trigger('reset');
        });
        return false;
    });

    //Scroll

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
    });

    new WOW().init();

});

    









