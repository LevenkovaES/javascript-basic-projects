"use strict";
const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];
const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu);
    displayFilterBtns(getAllUniqueCategories);
});
btnContainer === null || btnContainer === void 0 ? void 0 : btnContainer.addEventListener("click", (e) => {
    const target = e.target;
    if (!target.closest(".filter-btn"))
        return;
    const targetCategory = target.dataset.id;
    section === null || section === void 0 ? void 0 : section.replaceChildren();
    if (targetCategory === "all") {
        displayMenuItems(menu);
    }
    displayMenuItems(menu.filter((el) => {
        return el.category === targetCategory;
    }));
});
function displayFilterBtns(getCategories) {
    const categories = getCategories(menu);
    categories.forEach((el) => {
        const btn = document.createElement("button");
        btn.classList.add("filter-btn");
        btn.textContent = el;
        btn.dataset.id = el;
        btnContainer === null || btnContainer === void 0 ? void 0 : btnContainer.appendChild(btn);
    });
    // callback(menu);
}
function getAllUniqueCategories(arr) {
    return arr.reduce((acc, el) => {
        if (!acc.includes(el.category)) {
            acc.push(el.category);
        }
        return acc;
    }, ["all"]);
}
function displayMenuItems(itemsArr) {
    itemsArr.forEach((menuItem) => {
        const article = document.createElement("article");
        const img = document.createElement("img");
        const itemInfo = document.createElement("div");
        const header = document.createElement("header");
        const title = document.createElement("h4");
        const price = document.createElement("h4");
        const itemText = document.createElement("p");
        article.classList.add("menu-item");
        img.classList.add("photo");
        itemInfo.classList.add("item-info");
        price.classList.add("price");
        itemText.classList.add("item-text");
        title.textContent = menuItem.title;
        price.textContent = "$" + menuItem.price;
        itemText.textContent = menuItem.desc;
        img.alt = "menu item";
        img.src = menuItem.img;
        header.appendChild(title);
        header.appendChild(price);
        itemInfo.appendChild(header);
        itemInfo.appendChild(itemText);
        article.appendChild(img);
        article.appendChild(itemInfo);
        section === null || section === void 0 ? void 0 : section.appendChild(article);
    });
}
