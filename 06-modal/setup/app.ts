// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn: HTMLElement | null = document.querySelector(".modal-btn");
const closeBtn: HTMLElement | null = document.querySelector(".close-btn");
const modalOverlay: HTMLElement | null =
  document.querySelector(".modal-overlay");

modalBtn?.addEventListener("click", (): void => {
  modalOverlay?.classList.add("open-modal");
});

closeBtn?.addEventListener("click", (): void => {
  modalOverlay?.classList.remove("open-modal");
});
