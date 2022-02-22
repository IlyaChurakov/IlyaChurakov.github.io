function gallery() {
    const preview = document.querySelectorAll('.preview'),
          body = document.querySelector('body'),
          scroll = calcScroll();

    preview.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            let url = item.outerHTML.split('works/')[1].split('" ')[0];
            const prevWrapper = document.createElement('div');
            prevWrapper.classList.add('prevWrapper');
            body.prepend(prevWrapper);

            prevWrapper.innerHTML = `
                <img style="position: absolute; top: 50%; max-width: 80%; left: 50%; transform: translate(-50%, -50%); max-height: 80%;" src="assets/img/our_works/big_img/${url}" class="fadedModal">;
            `;

            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;

            prevWrapper.addEventListener('click', (e) => {
                if(e.target != prevWrapper.querySelector('img')) {
                    prevWrapper.remove();
                    document.body.style.overflow = '';
                    document.body.style.marginRight = `0px`;
                }
            });

            

        });
    });

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
}

export default gallery;