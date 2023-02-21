const buttonContainer: HTMLElement | null =
  document.querySelector(".btn-container");

buttonContainer?.addEventListener("click", changeTab);

function changeTab(e: Event): void {
  const target = e.target as HTMLElement;
  const targetButton: HTMLElement | null = target.closest(".tab-btn");

  if (!targetButton || targetButton.classList.contains("active")) {
    return;
  }

  changeActiveButton();
  changeContent();

  function changeActiveButton(): void {
    const allBtns: NodeListOf<Element> | undefined =
      buttonContainer?.querySelectorAll(".tab-btn");

    allBtns?.forEach((btn: Element): void => {
      btn?.classList.remove("active");
    });

    targetButton?.classList.add("active");
  }

  function changeContent(): void {
    const targetContentId: string | undefined = targetButton?.dataset.id;
    const allContent: NodeListOf<Element> | undefined =
      document.querySelectorAll(".content");

    allContent?.forEach((content: Element): void => {
      content?.classList.remove("active");
    });

    if (targetContentId) {
      document.getElementById(targetContentId)?.classList.add("active");
    }
  }
}
