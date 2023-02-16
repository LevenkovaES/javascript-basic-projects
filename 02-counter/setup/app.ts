let countElement: HTMLElement | null = document.getElementById("value");
let count: number = 0;
const container: HTMLElement | null =
  document.querySelector(".button-container");

container?.addEventListener("click", (e: Event): void => {
  const target = e.target as HTMLElement;
  if (!target.className.includes("btn")) return;

  const className: string = target.className;

  if (className.includes("reset")) {
    count = 0;
  } else if (className.includes("decrease")) {
    --count;
  } else if (className.includes("increase")) {
    ++count;
  }

  if (!countElement) return;

  if (count < 0) {
    countElement.style.color = "red";
  } else if (count > 0) {
    countElement.style.color = "green";
  } else {
    countElement.style.color = "#222";
  }

  countElement.textContent = "" + count;
});
