const closeButton: HTMLElement | null = document.querySelector(".close-btn");
const openButton: HTMLElement | null =
  document.querySelector(".sidebar-toggle");

const sidebar: HTMLElement | null = document.querySelector(".sidebar");

openButton?.addEventListener("click", (): void => {
  sidebar?.classList.toggle("show-sidebar");
});

closeButton?.addEventListener("click", (): void => {
  sidebar?.classList.toggle("show-sidebar");
});
