//Alisa Korniienko
window.addEventListener('load', () => {
    const popup = document.querySelector('div.popup__container');
    const closeBtn = document.querySelector('a.close__popup');
    const restrictionBtn = document.querySelector('a.restriction__button');

    if (popup) {
        popup.classList.add('open__popup');
        //document.body.style.overflowY = 'hidden';
    }

    closeBtn?.addEventListener('click', (event) => {
        event.preventDefault();
        popup.classList.remove('open__popup');
        document.body.style.overflowY = 'auto';
    });

    restrictionBtn?.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'index.access-denied.html';
    });
});
