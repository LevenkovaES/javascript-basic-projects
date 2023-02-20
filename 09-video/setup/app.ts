// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const controlButton: HTMLElement | null = document.querySelector(".switch-btn");
const video: HTMLVideoElement | null =
  document.querySelector(".video-container");

controlButton?.addEventListener("click", (): void => {
  if (!controlButton?.classList.contains("slide")) {
    controlButton?.classList.add("slide");
    video?.pause();
  } else {
    controlButton?.classList.remove("slide");
    video?.play();
  }
});

const preloader = document.querySelector(".preloader");

window.addEventListener("load", (): void => {
  preloader?.classList.add("hide-preloader");
});
