const colors: string[] = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn: HTMLElement | null = document.getElementById("btn");
const color: HTMLElement | null = document.querySelector(".color");

btn?.addEventListener("click", (): void => {
  //   console.log("btn");

  // get random number between 0 - 3
  const randomNumber = getRandomNumber(colors);

  document.body.style.backgroundColor = colors[randomNumber];

  if (!color) return;

  color.textContent = colors[randomNumber];
});

export function getRandomNumber(arr: (string | number)[]): number {
  return Math.floor(Math.random() * arr.length);
}
