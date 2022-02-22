function modal() {

    const callSpecialistBtn = document.querySelector('.header_btn'),
          closeModalBtn = document.querySelectorAll('.popup_close'),
          modalBg = document.querySelector('.popup_engineer'),
          phoneLink = document.querySelectorAll('.phone_link'),
          popup = document.querySelector('.popup'),
          scroll = calcScroll();

    const id = setTimeout(() => {
        showModal(modalBg);
    }, 60000);

    console.log();

    function showAndCloseModal(showBtnSelector, BgSelector) {
        showBtnSelector.addEventListener('click', (e) => {
            if(e.target) {
                e.preventDefault();
            }

            showModal(BgSelector);
        });
    
        closeModalBtn.forEach((item) => {
            item.addEventListener('click', () => {
                closeModal(BgSelector);
                
            });
        });

        BgSelector.addEventListener('click', (e) => {
            if(e.target == BgSelector) {
                closeModal(BgSelector);
            }
        });
    }

    function showModal(modalSelector) {
        modalSelector.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
        clearTimeout(id);
    }

    function closeModal(modalSelector) {
        modalSelector.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
    }

    function calcScroll() {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    showAndCloseModal(callSpecialistBtn, modalBg);

    phoneLink.forEach((item) => {
        showAndCloseModal(item, popup);
    });   
}

export default modal;