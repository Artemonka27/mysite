/*const blockDistance = document.querySelector(".parallax").getBoundingClientRect().top + window.scrollY;
const contentBlock = document.querySelector(".parallax__content");
const scrollSpeed = 1;

window.addEventListener("scroll", () => {
    let translate = window.scrollY - blockDistance;
    contentBlock.style.cssText = `transform: translate(0, ${-translate * scrollSpeed}px);`;
});*/

/*const block = document.querySelector(".parallax"),
    bgBlock = document.querySelector(".parallax__bg"),
    bgSpeed = 0.05,
    middleHorizontal = block.clientWidth / 2,
    middleVertical = block.clientHeight / 2;

requestAnimationFrame(parallax); 
block.addEventListener("mousemove", parallax);

function parallax(event) {
    let x = middleHorizontal - event.x;
    let y = middleVertical - event.y;
    bgBlock.style.cssText = `background-position: ${x * bgSpeed}px ${y * bgSpeed}px`;
}*/

const speed = 0.4;
const text = document.querySelector(".header__text");

window.addEventListener("scroll", () => {
    let scroll = window.scrollY * speed;
    text.style.cssText = `transform: translate(0, ${-scroll}px);`;
});
