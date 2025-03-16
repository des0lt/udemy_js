function showModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector )
    // modal.classList.add('show');
    // modal.classList.remove('hide');
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId)
    }
    clearInterval(modalTimerId);
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector)
    // modal.classList.add('hide');
    // modal.classList.remove('show');
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    //Modal

    const modal = document.querySelector(modalSelector),
    modalTriggerOpen = document.querySelectorAll(triggerSelector);

    modalTriggerOpen.forEach(btn => {
        btn.addEventListener('click', () => showModal(modalSelector, modalTimerId))
    })

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    function showModalByScroll() {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
            showModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {closeModal};
export {showModal};