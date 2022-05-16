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
        el: '.main-slider > .swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      loop: true,
      speed: 600,
      spaceBetween: 30
});



const ourResoucersSlider = new Swiper(".our-resoucers__slider", {
    pagination: {
        el: '.our-resoucers__slider > .swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    navigation: {
        nextEl: '.our-resoucers__next',
        prevEl: '.our-resoucers__prev',
    },
    loop: true,
    speed: 600,
    spaceBetween: 30
});



const quotesSlider = new Swiper(".quotes__slider", {
    pagination: {
        el: '.quotes__slider > .swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    loop: true,
    speed: 600,
    spaceBetween: 30,
    slidesPerView: 1.2,
    breakpoints: {
        993: {
            spaceBetween: 65
        },
        451: {
            slidesPerView: 1.5,
        }
    }
});



const list = document.querySelector(".questions__list");
list.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("questions__active-btn")) {
        const parent = target.closest(".questions__item");
        const activeItem = document.querySelector(".questions__item--active");
        if (activeItem && parent !== activeItem) {
            activeItem.classList.remove("questions__item--active");
        }
        parent.classList.toggle("questions__item--active");
    }
});