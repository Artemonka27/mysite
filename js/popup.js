
let windowWidth = window.innerWidth;
let pageWidth = document.documentElement.clientWidth;
let scrollWidth = windowWidth - pageWidth;

let popups = document.querySelectorAll(".popup");
if (popups.length > 0) {
    let popupActiveBtns = document.querySelectorAll(".popup-active-btn");

    // ----------------- Active popup (active button) -------------------
    popupActiveBtns.forEach((item) => {
        item.addEventListener("click", (event) => {
            let popup = document.querySelector(`.${event.target.dataset.popup}`);
            popupActive(popup);
        });
    });

    // ----------------- Close popup (close button) -------------------
    let popupCloseBtns = document.querySelectorAll(".popup__close");
    popupCloseBtns.forEach((item) => {
        item.addEventListener("click", (event) => {
            let popup = event.target.closest(".popup");
            popupClose(popup);
        });
    });

    // ----------------- Close popup (empty space)  -------------------
    popups.forEach((item) => {
        item.addEventListener("click", (event) => {
            let targetElem = event.target;
            if (targetElem.classList.contains("popup")) {
                popupClose(item);
            }
        });
    });

    // ----------------- Close popup (Esc key)  -------------------
    document.addEventListener("keydown", (event) => {
        let activePopup = document.querySelector(".popup--active");
        if (activePopup && event.key == "Escape") {
            activePopup.classList.remove("popup--active");
            popupClose(activePopup);
        }
    });


    // ----------------- Functions -------------------
    function popupActive(item) {
        item.classList.add("popup--active");
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollWidth}px`;
    }

    function popupClose(item) {
        item.classList.remove("popup--active");
        document.body.style.overflow = "auto";
        document.body.style.paddingRight = "";
    }
}