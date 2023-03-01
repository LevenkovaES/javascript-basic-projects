"use strict";
//using selectors inside the element
// traversing the dom
const questionsSection = document.querySelector(".section-center");
const questions = document.querySelectorAll(".question");
console.log(questions);
questionsSection === null || questionsSection === void 0 ? void 0 : questionsSection.addEventListener("click", (e) => {
    var _a, _b;
    const target = e.target;
    if (!target.closest(".question-btn"))
        return;
    if (target.classList.contains("fa-plus-square")) {
        questions.forEach((el) => {
            el.classList.remove("show-text");
        });
        (_a = target.closest(".question")) === null || _a === void 0 ? void 0 : _a.classList.add("show-text");
    }
    else {
        (_b = target.closest(".question")) === null || _b === void 0 ? void 0 : _b.classList.remove("show-text");
    }
});
