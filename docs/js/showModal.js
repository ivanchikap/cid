document.addEventListener('DOMContentLoaded', () => {   
    
    if (!sessionStorage.getItem('modalOpened')) {
         const body = document.body;

        const modal = document.getElementById('modal');
        modal.classList.add('show');
        body.classList.add('no-scroll');

        const modalDialog = modal.querySelector('.modal__dialog');

        setTimeout(function () {
            modalDialog.style.transform = 'rotateX(0)';
        }, 200);

        const modalContent = modal.querySelector('.modal__content');

        modalContent.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        const closeButton = modal.querySelector('.modal__close');
        const closeBtn = modal.querySelector('.closeBtn');


        modal.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target !== modalDialog || e.target === closeButton) {
                e.preventDefault();
                const modal = e.currentTarget.closest('.modal');
                const modalDialog = modal.querySelector('.modal__dialog');

                modalDialog.style.transform = 'rotateX(90deg)';

                setTimeout(function() {
                    modal.classList.remove('show');
                    body.classList.remove('no-scroll');
                }, 200);
            }
        });

        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const modal = e.currentTarget.closest('.modal');
            const modalDialog = modal.querySelector('.modal__dialog');

            modalDialog.style.transform = 'rotateX(90deg)';

            setTimeout(function() {
                modal.classList.remove('show');
                body.classList.remove('no-scroll');
            }, 200);
        });
    }      
    sessionStorage.setItem('modalOpened', 'opened');
});
