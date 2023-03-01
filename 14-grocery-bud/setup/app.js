"use strict";
// ****** SELECT ITEMS **********
const itemsString = localStorage.getItem("items");
let listToStore = !itemsString || JSON.parse(itemsString).length === 0
    ? []
    : JSON.parse(itemsString);
const groceryForm = document.querySelector(".grocery-form");
const input = document.getElementById("grocery");
const groceryContainer = document.querySelector(".grocery-container");
const groceryItemTemplate = document.querySelector(".grocery-item--hidden");
// edit option
let isChanging = false;
// ****** EVENT LISTENERS **********
window.addEventListener("DOMContentLoaded", displayItems);
groceryForm === null || groceryForm === void 0 ? void 0 : groceryForm.addEventListener("submit", submitItem);
groceryContainer === null || groceryContainer === void 0 ? void 0 : groceryContainer.addEventListener("click", handleClick);
// ****** FUNCTIONS **********
function submitItem(e) {
    e.preventDefault();
    if (!input.value || /^ *$/.test(input.value)) {
        handleAlertMessage("please enter value", "alert-danger");
        return;
    }
    if (isChanging) {
        const changingItem = document.querySelector(".changing");
        if (changingItem) {
            changingItem.textContent = input.value;
            isChanging = false;
            changingItem.classList.remove("changing");
            handleAlertMessage("value changed", "alert-success");
            setBackToDefault();
            const newArray = listToStore.map((item) => {
                if (item.id === changingItem.dataset.id) {
                    item.value = String(changingItem.textContent);
                }
                return item;
            });
            localStorage.setItem("items", `${JSON.stringify(newArray)}`);
            return;
        }
    }
    const value = input.value;
    if (!groceryItemTemplate)
        return;
    const groceryList = document.querySelector(".grocery-list");
    const newGroceryItem = groceryItemTemplate === null || groceryItemTemplate === void 0 ? void 0 : groceryItemTemplate.cloneNode(true);
    const itemTitle = newGroceryItem.querySelector(".title");
    if (!itemTitle)
        return;
    itemTitle.textContent = value;
    itemTitle.dataset.id = String(Date.now());
    newGroceryItem.classList.remove("grocery-item--hidden");
    groceryList === null || groceryList === void 0 ? void 0 : groceryList.append(newGroceryItem);
    handleAlertMessage("item added to the list", "alert-success");
    groceryContainer === null || groceryContainer === void 0 ? void 0 : groceryContainer.classList.add("show-container");
    setBackToDefault();
    listToStore.push({
        id: itemTitle.dataset.id,
        value: itemTitle.textContent,
    });
    localStorage.setItem("items", `${JSON.stringify(listToStore)}`);
}
function handleClick(e) {
    var _a, _b, _c, _d;
    const target = e.target;
    if (!target.closest(".delete-btn") &&
        !target.closest(".edit-btn") &&
        !target.closest(".clear-btn")) {
        return;
    }
    if (target.closest(".delete-btn")) {
        const title = (_a = target
            .closest(".grocery-item")) === null || _a === void 0 ? void 0 : _a.querySelector(".title");
        const id = title === null || title === void 0 ? void 0 : title.dataset.id;
        (_b = target.closest(".grocery-item")) === null || _b === void 0 ? void 0 : _b.remove();
        setBackToDefault();
        if (document.querySelectorAll(".grocery-item").length <= 1) {
            groceryContainer === null || groceryContainer === void 0 ? void 0 : groceryContainer.classList.remove("show-container");
        }
        handleAlertMessage("item removed", "alert-danger");
        listToStore = listToStore.filter((item) => item.id !== id);
        localStorage.setItem("items", `${JSON.stringify(listToStore)}`);
    }
    else if (target.closest(".edit-btn")) {
        const item = (_c = target
            .closest(".grocery-item")) === null || _c === void 0 ? void 0 : _c.querySelector(".title");
        const itemValue = item === null || item === void 0 ? void 0 : item.textContent;
        if (!itemValue)
            return;
        input.value = itemValue;
        item === null || item === void 0 ? void 0 : item.classList.add("changing");
        isChanging = true;
    }
    else if (target.closest(".clear-btn")) {
        groceryContainer === null || groceryContainer === void 0 ? void 0 : groceryContainer.classList.remove("show-container");
        handleAlertMessage("list cleared", "alert-danger");
        if (groceryItemTemplate) {
            (_d = document
                .querySelector(".grocery-list")) === null || _d === void 0 ? void 0 : _d.replaceChildren(groceryItemTemplate);
        }
        setBackToDefault();
        listToStore = [];
        localStorage.setItem("items", `${listToStore}`);
    }
}
function handleAlertMessage(text, messageClass) {
    const alertMessage = document.querySelector(".alert");
    const submitBtn = document.querySelector(".submit-btn");
    const cleartBtn = document.querySelector(".clear-btn");
    const deletetBtns = document.querySelectorAll(".delete-btn");
    const editBtns = document.querySelectorAll(".edit-btn");
    let allBtns = [];
    if (submitBtn) {
        allBtns.push(submitBtn);
    }
    if (cleartBtn) {
        allBtns.push(cleartBtn);
    }
    if (deletetBtns) {
        deletetBtns.forEach((btn) => {
            allBtns.push(btn);
        });
    }
    if (editBtns) {
        editBtns.forEach((btn) => {
            allBtns.push(btn);
        });
    }
    toggleMessage(text, messageClass, true);
    setTimeout(() => {
        toggleMessage("", messageClass, false);
    }, 1000);
    function toggleMessage(text, messageClass, isShowing) {
        if (!alertMessage) {
            return;
        }
        if (isShowing) {
            allBtns.forEach((btn) => {
                btn.disabled = true;
            });
        }
        else if (!isShowing) {
            allBtns.forEach((btn) => {
                btn.disabled = false;
            });
        }
        alertMessage.textContent = text;
        alertMessage.classList.toggle(messageClass);
    }
}
function setBackToDefault() {
    input.value = "";
    isChanging = false;
}
// ****** LOCAL STORAGE **********
function displayItems() {
    if (!itemsString || JSON.parse(itemsString).length === 0)
        return;
    const items = JSON.parse(itemsString);
    items.forEach((item) => {
        const value = item.value;
        if (!groceryItemTemplate)
            return;
        const groceryList = document.querySelector(".grocery-list");
        const newGroceryItem = groceryItemTemplate === null || groceryItemTemplate === void 0 ? void 0 : groceryItemTemplate.cloneNode(true);
        const itemTitle = newGroceryItem.querySelector(".title");
        if (!itemTitle)
            return;
        itemTitle.textContent = value;
        itemTitle.dataset.id = item.id;
        newGroceryItem.classList.remove("grocery-item--hidden");
        groceryList === null || groceryList === void 0 ? void 0 : groceryList.append(newGroceryItem);
        groceryContainer === null || groceryContainer === void 0 ? void 0 : groceryContainer.classList.add("show-container");
    });
}
