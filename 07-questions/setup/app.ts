//using selectors inside the element
// traversing the dom

const questionsSection: HTMLElement | null =
  document.querySelector(".section-center");
const questions: NodeListOf<Element> = document.querySelectorAll(".question");
console.log(questions);

questionsSection?.addEventListener("click", (e: Event): void => {
  const target = e.target as HTMLElement;

  if (!target.closest(".question-btn")) return;

  if (target.classList.contains("fa-plus-square")) {
    questions.forEach((el: Element): void => {
      el.classList.remove("show-text");
    });
    target.closest(".question")?.classList.add("show-text");
  } else {
    target.closest(".question")?.classList.remove("show-text");
  }
});
