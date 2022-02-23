const menu = document.querySelector(".nav-block__menu");
const socials = document.querySelector(".nav-block__socials");

window.addEventListener("resize", () => {
    if (window.innerWidth <= 767) {
        menu.append(socials);
    } else {
        menu.after(socials);
    }
});


const burger = document.querySelector(".burger");
burger.addEventListener("click", (event) => {
    const menu = document.querySelector(".nav-block__menu");
    event.currentTarget.classList.toggle("active");
    menu.classList.toggle("active");
    document.body.classList.toggle("lock");
});


const mainSlider = new Swiper(".main-slider", {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      loop: true,
      speed: 600,
      spaceBetween: 30
});