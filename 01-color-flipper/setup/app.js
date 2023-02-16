"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomNumber = void 0;
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    //   console.log("btn");
    // get random number between 0 - 3
    const randomNumber = getRandomNumber(colors);
    document.body.style.backgroundColor = colors[randomNumber];
    if (!color)
        return;
    color.textContent = colors[randomNumber];
});
function getRandomNumber(arr) {
    return Math.floor(Math.random() * arr.length);
}
exports.getRandomNumber = getRandomNumber;
