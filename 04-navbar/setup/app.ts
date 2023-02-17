// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const button: HTMLElement | null = document.querySelector(".nav-toggle");
const navLinks: HTMLElement | null = document.querySelector(".links");

button?.addEventListener("click", () => {
  navLinks?.classList.toggle("show-links");
});
