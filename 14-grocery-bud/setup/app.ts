"use strict";

// ****** SELECT ITEMS **********
const itemsString: string | null = localStorage.getItem("items");
let listToStore: {
  id: string;
  value: string;
}[] =
  !itemsString || JSON.parse(itemsString).length === 0
    ? []
    : JSON.parse(itemsString);

const groceryForm: HTMLElement | null = document.querySelector(".grocery-form");

const input = document.getElementById("grocery") as HTMLInputElement;

const groceryContainer: HTMLElement | null =
  document.querySelector(".grocery-container");

const groceryItemTemplate: HTMLElement | null = document.querySelector(
  ".grocery-item--hidden"
);

// edit option
let isChanging: boolean = false;

// ****** EVENT LISTENERS **********
window.addEventListener("DOMContentLoaded", displayItems);
groceryForm?.addEventListener("submit", submitItem);
groceryContainer?.addEventListener("click", handleClick);

// ****** FUNCTIONS **********
function submitItem(e: Event): void {
  e.preventDefault();

  if (!input.value || /^ *$/.test(input.value)) {
    handleAlertMessage("please enter value", "alert-danger");

    return;
  }

  if (isChanging) {
    const changingItem: HTMLElement | null =
      document.querySelector(".changing");
    if (changingItem) {
      changingItem.textContent = input.value;
      isChanging = false;
      changingItem.classList.remove("changing");
      handleAlertMessage("value changed", "alert-success");

      setBackToDefault();

      const newArray = listToStore.map(
        (item: { id: string; value: string }) => {
          if (item.id === changingItem.dataset.id) {
            item.value = String(changingItem.textContent);
          }

          return item;
        }
      );

      localStorage.setItem("items", `${JSON.stringify(newArray)}`);

      return;
    }
  }

  const value: string = input.value;

  if (!groceryItemTemplate) return;

  const groceryList: HTMLElement | null =
    document.querySelector(".grocery-list");
  const newGroceryItem = groceryItemTemplate?.cloneNode(true) as HTMLElement;
  const itemTitle: HTMLElement | null = newGroceryItem.querySelector(".title");

  if (!itemTitle) return;

  itemTitle.textContent = value;
  itemTitle.dataset.id = String(Date.now());

  newGroceryItem.classList.remove("grocery-item--hidden");
  groceryList?.append(newGroceryItem);

  handleAlertMessage("item added to the list", "alert-success");
  groceryContainer?.classList.add("show-container");

  setBackToDefault();

  listToStore.push({
    id: itemTitle.dataset.id,
    value: itemTitle.textContent,
  });

  localStorage.setItem("items", `${JSON.stringify(listToStore)}`);
}

function handleClick(e: Event): void {
  const target = e.target as HTMLElement;

  if (
    !target.closest(".delete-btn") &&
    !target.closest(".edit-btn") &&
    !target.closest(".clear-btn")
  ) {
    return;
  }

  if (target.closest(".delete-btn")) {
    const title: HTMLElement | null | undefined = target
      .closest(".grocery-item")
      ?.querySelector(".title");
    const id: string | undefined = title?.dataset.id;

    target.closest(".grocery-item")?.remove();
    setBackToDefault();
    if (document.querySelectorAll(".grocery-item").length <= 1) {
      groceryContainer?.classList.remove("show-container");
    }

    handleAlertMessage("item removed", "alert-danger");

    listToStore = listToStore.filter(
      (item: { id: string; value: string }) => item.id !== id
    );

    localStorage.setItem("items", `${JSON.stringify(listToStore)}`);
  } else if (target.closest(".edit-btn")) {
    const item: HTMLElement | null | undefined = target
      .closest(".grocery-item")
      ?.querySelector(".title");
    const itemValue: string | null | undefined = item?.textContent;

    if (!itemValue) return;
    input.value = itemValue;
    item?.classList.add("changing");
    isChanging = true;
  } else if (target.closest(".clear-btn")) {
    groceryContainer?.classList.remove("show-container");
    handleAlertMessage("list cleared", "alert-danger");

    if (groceryItemTemplate) {
      document
        .querySelector(".grocery-list")
        ?.replaceChildren(groceryItemTemplate);
    }

    setBackToDefault();

    listToStore = [];
    localStorage.setItem("items", `${listToStore}`);
  }
}

function handleAlertMessage(text: string, messageClass: string): void {
  const alertMessage: HTMLElement | null = document.querySelector(".alert");
  const submitBtn: HTMLButtonElement | null =
    document.querySelector(".submit-btn");
  const cleartBtn: HTMLButtonElement | null =
    document.querySelector(".clear-btn");
  const deletetBtns: NodeListOf<HTMLButtonElement> | null =
    document.querySelectorAll(".delete-btn");
  const editBtns: NodeListOf<HTMLButtonElement> | null =
    document.querySelectorAll(".edit-btn");

  let allBtns: HTMLButtonElement[] = [];

  if (submitBtn) {
    allBtns.push(submitBtn);
  }
  if (cleartBtn) {
    allBtns.push(cleartBtn);
  }
  if (deletetBtns) {
    deletetBtns.forEach((btn: HTMLButtonElement): void => {
      allBtns.push(btn);
    });
  }
  if (editBtns) {
    editBtns.forEach((btn: HTMLButtonElement): void => {
      allBtns.push(btn);
    });
  }

  toggleMessage(text, messageClass, true);

  setTimeout((): void => {
    toggleMessage("", messageClass, false);
  }, 1000);

  function toggleMessage(
    text: string,
    messageClass: string,
    isShowing: boolean
  ): void {
    if (!alertMessage) {
      return;
    }

    if (isShowing) {
      allBtns.forEach((btn) => {
        btn.disabled = true;
      });
    } else if (!isShowing) {
      allBtns.forEach((btn) => {
        btn.disabled = false;
      });
    }
    alertMessage.textContent = text;
    alertMessage.classList.toggle(messageClass);
  }
}

function setBackToDefault(): void {
  input.value = "";
  isChanging = false;
}

// ****** LOCAL STORAGE **********
function displayItems() {
  if (!itemsString || JSON.parse(itemsString).length === 0) return;

  const items: {
    id: string;
    value: string;
  }[] = JSON.parse(itemsString);

  items.forEach((item: { id: string; value: string }) => {
    const value: string = item.value;

    if (!groceryItemTemplate) return;

    const groceryList: HTMLElement | null =
      document.querySelector(".grocery-list");
    const newGroceryItem = groceryItemTemplate?.cloneNode(true) as HTMLElement;
    const itemTitle: HTMLElement | null =
      newGroceryItem.querySelector(".title");

    if (!itemTitle) return;

    itemTitle.textContent = value;
    itemTitle.dataset.id = item.id;

    newGroceryItem.classList.remove("grocery-item--hidden");
    groceryList?.append(newGroceryItem);

    groceryContainer?.classList.add("show-container");
  });
}
// localStorage.clear();

// ****** SETUP ITEMS **********
