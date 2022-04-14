const sliderMain = new Swiper(".slider_main", {
    //freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    simulateTouch: true,
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 60
        }
    },
});

const sliderBg = new Swiper(".slider_bg", {
    //freeMode: true,
    centeredSlides: true,
    parallax: true,
    simulateTouch: false,
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 60
        }
    },
});

sliderMain.controller.control = sliderBg;
sliderMain.on("slideChange", () => {
    const description = document.querySelector(".description");

    if (sliderMain.activeIndex > 0) {
        description.classList.add("hidden");
    } else {
        description.classList.remove("hidden"); 
    }
});
