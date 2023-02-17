type Menu = MenuItem[];
type MenuItem = {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
};

const menu: Menu = [
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

const section: HTMLElement | null = document.querySelector(".section-center");
const btnContainer: HTMLElement | null =
  document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", (): void => {
  displayMenuItems(menu);
  displayFilterBtns(getAllUniqueCategories);
});

btnContainer?.addEventListener("click", (e: Event): void => {
  const target = e.target as HTMLElement;

  if (!target.closest(".filter-btn")) return;

  const targetCategory: string | undefined = target.dataset.id;
  section?.replaceChildren();

  if (targetCategory === "all") {
    displayMenuItems(menu);
  }

  displayMenuItems(
    menu.filter((el: MenuItem) => {
      return el.category === targetCategory;
    })
  );
});

function displayFilterBtns(getCategories: (arr: Menu) => string[]): void {
  const categories = getCategories(menu);

  categories.forEach((el: string): void => {
    const btn: HTMLElement = document.createElement("button");
    btn.classList.add("filter-btn");
    btn.textContent = el;
    btn.dataset.id = el;
    btnContainer?.appendChild(btn);
  });

  // callback(menu);
}

function getAllUniqueCategories(arr: Menu): string[] {
  return arr.reduce(
    (acc: string[], el: MenuItem): string[] => {
      if (!acc.includes(el.category)) {
        acc.push(el.category);
      }
      return acc;
    },
    ["all"]
  );
}

function displayMenuItems(itemsArr: Menu): void {
  itemsArr.forEach((menuItem: MenuItem): void => {
    const article: HTMLElement = document.createElement("article");
    const img: HTMLImageElement = document.createElement("img");
    const itemInfo: HTMLElement = document.createElement("div");
    const header: HTMLElement = document.createElement("header");
    const title: HTMLElement = document.createElement("h4");
    const price: HTMLElement = document.createElement("h4");
    const itemText: HTMLElement = document.createElement("p");

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

    section?.appendChild(article);
  });
}
