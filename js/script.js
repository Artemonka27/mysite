// Burger
const burgers = document.querySelectorAll(".burger");
burgers.forEach((item) => {
    item.addEventListener("click", (event) => {
        const menu = document.querySelector(".header__menu");
        event.currentTarget.classList.toggle("active");
        menu.classList.toggle("active");
    });
});

// Carsharing-swiper
const carsharingBlock = document.querySelector(".carsharing__swiper");
const carsharingOptions = new Swiper('.carsharing__swiper', {
    speed: 1000,
    spaceBetween: 100,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: '.carsharing__swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    breakpoints: {
        921: {
            direction: "vertical"
        }
    },
    mousewheel: true,
    loop: true,
});

carsharingBlock.addEventListener("mouseleave", () => {
    carsharingOptions.autoplay.start();
});
carsharingBlock.addEventListener("mouseenter", () => {
    carsharingOptions.autoplay.stop();
});

// Reviews-swiper
const reviewsOptions = new Swiper(".reviews__swiper", {
    speed: 1000,
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: '.reviews__pagination',
        type: 'bullets',
        clickable: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    mousewheel: true,
});