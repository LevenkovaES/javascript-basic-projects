const slides: NodeListOf<HTMLElement> = document.querySelectorAll(".slide");

slides.forEach((element: HTMLElement, index): void => {
  element.style.left = `${index * 100}%`;
});

const prevButton: HTMLButtonElement | null = document.querySelector(".prevBtn");
const nextButton: HTMLButtonElement | null = document.querySelector(".nextBtn");

let counter: number = 0;

prevButton?.addEventListener("click", (): void => {
  --counter;
  shiftSlides();
});

nextButton?.addEventListener("click", (): void => {
  ++counter;
  shiftSlides();
});

function shiftSlides() {
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides.forEach((element: HTMLElement): void => {
    element.style.transform = `translateX(-${counter * 100}%)`;
  });
}
