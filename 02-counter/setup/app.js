"use strict";
let countElement = document.getElementById("value");
let count = 0;
const container = document.querySelector(".button-container");
container === null || container === void 0 ? void 0 : container.addEventListener("click", (e) => {
    const target = e.target;
    if (!target.className.includes("btn"))
        return;
    const className = target.className;
    if (className.includes("reset")) {
        count = 0;
    }
    else if (className.includes("decrease")) {
        --count;
    }
    else if (className.includes("increase")) {
        ++count;
    }
    if (!countElement)
        return;
    if (count < 0) {
        countElement.style.color = "red";
    }
    else if (count > 0) {
        countElement.style.color = "green";
    }
    else {
        countElement.style.color = "#222";
    }
    countElement.textContent = "" + count;
});
