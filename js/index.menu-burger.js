/** Alisa Korniienko */
/*document.querySelector(".header__burger").addEventListener("click", function() {
    this.classList.toggle("active");
    document.querySelector(".header__menu").classList.toggle("open");
    document.querySelector(".header__socials").classList.toggle("open");
});*/

const menu = document.querySelector(".header__menu");
const menuBtn = document.querySelector(".header__burger");
const socials = document.querySelector(".header__socials");

//if (menu && menuBtn) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("open");
        menuBtn.classList.toggle("active");
        socials.classList.toggle("open");
        document.body.classList.toggle("lock");
    });

    const links = menu.querySelectorAll(".header__menu-link");

    links.forEach(link => {
        link.addEventListener("click", () => {
            console.log("clicked");
            menu.classList.remove("open");
            menuBtn.classList.remove("active");
            socials.classList.remove("open");
            document.body.classList.remove("lock");
        })
    });
//}
/**TODO*/
/*const anchors = document.querySelectorAll("a[href*='#']");

anchors.forEach(anchor => {
    anchor.addEventListener("click", event => {
        event.preventDefault();

        const blockId = anchor.getAttribute("href").substring(1);

        document.querySelector(blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    })
});*/
