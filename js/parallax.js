
// Параллакс при перемещении мыши
const block0 = document.querySelector(".parallax"),
        bgBlock = document.querySelector(".parallax__bg"),
        bgSpeed = 0.25,
        middleHorizontal = block0.clientWidth / 2,
        middleVertical = block0.clientHeight / 2;

block0.addEventListener("mousemove", parallax);

function parallax(event) {
    let x = middleHorizontal - event.x;
    let y = middleVertical - event.y;
    bgBlock.style.cssText = `background-position: ${x * bgSpeed}px ${y * bgSpeed}px`;
}




// Параллакс текста
const speed = 0.6;
const text = document.querySelector(".content__text");
const block = document.querySelector(".content");
const distanceToText = block.getBoundingClientRect().top + window.scrollY;

window.addEventListener("scroll", () => {
    let scroll = (window.scrollY - distanceToText) * speed;
    text.style.cssText = `transform: translate(0, ${-scroll}px);`;
});