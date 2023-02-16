const hex: (string | number)[] = [
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

const color: HTMLElement | null = document.querySelector(".color");
const btn: HTMLElement | null = document.getElementById("btn");

btn?.addEventListener("click", () => {
  if (!color) return;

  const randomColor = getRandomColor();

  color.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
});

function getRandomColor(): string {
  let randomColor: string = "#";

  for (let i = 0; i < 6; ++i) {
    const randomNumber = getRandomNumber(hex);
    randomColor += String(hex[randomNumber]);
  }

  return randomColor;
}

function getRandomNumber(arr: (string | number)[]): number {
  return Math.floor(Math.random() * arr.length);
}
