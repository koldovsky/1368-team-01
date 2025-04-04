function init() {
    import('./index.menu-burger.js');
    import('./index.popup.js');
    import('./index.faq.js');
    import('./index.natural.js');
    import('./index.natural-countdown.js');
    import('./index.winehub.js');
    import('./index.crafted.js')
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});
