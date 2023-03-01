"use strict";
const hex = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
];
const color = document.querySelector(".color");
const btn = document.getElementById("btn");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    if (!color)
        return;
    const randomColor = getRandomColor();
    color.textContent = randomColor;
    document.body.style.backgroundColor = randomColor;
});
function getRandomColor() {
    let randomColor = "#";
    for (let i = 0; i < 6; ++i) {
        const randomNumber = getRandomNumber(hex);
        randomColor += String(hex[randomNumber]);
    }
    return randomColor;
}
function getRandomNumber(arr) {
    return Math.floor(Math.random() * arr.length);
}
