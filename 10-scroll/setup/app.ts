// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date: HTMLElement | null = document.querySelector(".date");
const currentYear = new Date().getFullYear();

if (date) {
  date.textContent = "" + currentYear;
}

// ********** close links ************
const menuBtn: HTMLElement | null = document.querySelector(".nav-toggle");
const linksContainer: HTMLElement | null =
  document.querySelector(".links-container");
const links: HTMLElement | null = document.querySelector(".links");

menuBtn?.addEventListener("click", () => {
  if (linksContainer) {
    if (linksContainer?.classList.contains("show-links")) {
      linksContainer?.classList.remove("show-links");
      linksContainer.style.height = "0";
    } else {
      linksContainer?.classList.add("show-links");

      if (links) {
        linksContainer.style.height =
          links.getBoundingClientRect().height + "px";
      }
    }
  }
});

// ********** fixed navbar ************
const navbar: HTMLElement | null = document.querySelector("#nav");

window.addEventListener("scroll", (): void => {
  const arrowButton: HTMLElement | null = document.querySelector(".top-link");

  if (!navbar) return;

  if (window.scrollY > navbar.getBoundingClientRect().height) {
    navbar?.classList.add("fixed-nav");
    arrowButton?.classList.add("show-link");
  } else {
    navbar?.classList.remove("fixed-nav");
    arrowButton?.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks: NodeListOf<Element> =
  document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link: Element): void => {
  link.addEventListener("click", (e: Event): void => {
    e.preventDefault();

    const target = e.target as HTMLElement;
    const targetedElement: HTMLElement | null = document.querySelector(
      `${target.getAttribute("href")}`
    );

    if (!targetedElement) return;

    const navHeight: number | undefined =
      navbar?.getBoundingClientRect().height;
    const containerHeight: number | undefined =
      linksContainer?.getBoundingClientRect().height;

    const isFixed: boolean | undefined =
      navbar?.classList.contains("fixed-nav");

    let scrollPosition: number = navHeight
      ? targetedElement.offsetTop - navHeight
      : targetedElement.offsetTop;

    if (!isFixed && navHeight) {
      scrollPosition = scrollPosition - navHeight;
    }

    if (containerHeight && navHeight && navHeight > 82) {
      scrollPosition = scrollPosition + containerHeight;
    }

    window.scrollTo({
      top: scrollPosition,
      left: 0,
      behavior: "smooth",
    });

    if (linksContainer) {
      linksContainer.style.height = "0";
    }
  });
});
