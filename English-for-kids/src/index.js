import cards from "./data.js";

const burgerMenu = document.getElementById("btn-burger");
const modalMenu = document.getElementById("modal-menu");
burgerMenu.addEventListener("click", (event) => {
  event.target.classList.toggle("active");
  modalMenu.classList.toggle("active");
});
const checbox = document.getElementById("switch-checkbox");
const changeCategory = document.getElementById("list");
const btnStart = document.getElementById("btn-start");

checbox.addEventListener("change", OnChange);
function OnChange(event) {
  if (event.currentTarget.checked) {
    localStorage.setItem("trainMode", "true");
    btnStart.classList.add("btn-active");
  } else {
    localStorage.setItem("trainMode", "false");
    btnStart.classList.remove("btn-active");
  }
}

changeCategory.addEventListener("click", onChategoryClick);
function onChategoryClick(event) {
  console.log("onChategoryClick");
  if (event.target.dataset.index > 0) {
    const i = event.target.dataset.index;
    localStorage.setItem("category", i);
    changeCategory
      .querySelectorAll(".category")
      .forEach((el) => el.parentNode.removeChild(el));
    changeCategory.classList.add("cards");
    createCards(i);
    changeCategory.removeEventListener("click", onChategoryClick);
    changeCategory.addEventListener("click", onTranslte);
    changeCategory.addEventListener("click", OnCardClick);
  }
}
const menuList = document.getElementById("list-aside");
menuList.addEventListener("click", (event) => {
  if (event.target.dataset.index) {
    const i = event.target.dataset.index;
    localStorage.setItem("category", i);
    changeCategory
      .querySelectorAll("div")
      .forEach((el) => el.parentNode.removeChild(el));

    createCards(i);
  }
});
function createCards(index) {
  if (+index === 0) {
    let h = 1;
    for (let j = 0; j < cards[0].length; j++) {
      const div = document.createElement("div");
      const text = document.createElement("p");
      const img = document.createElement("img");
      text.innerText = cards[0][j];

      img.src = `./src/${cards[h][0].image}`;

      div.append(img);
      div.append(text);
      div.className = "category";
      div.setAttribute("data-index", h);
      changeCategory.append(div);
      h++;
    }
  } else {
    for (let k = 0; k < cards[index].length; k++) {
      const div = document.createElement("div");
      const cardEN = document.createElement("div");
      const cardRU = document.createElement("div");
      const textEN = document.createElement("p");
      const textRU = document.createElement("p");
      const span = document.createElement("span");
      const imgEN = document.createElement("img");
      const imgRU = document.createElement("img");

      imgEN.src = `./src/${cards[index][k].image}`;
      imgRU.src = `./src/${cards[index][k].image}`;
      imgEN.setAttribute("data-number", k);
      textEN.innerText = cards[index][k].word;
      textEN.setAttribute("data-number", k);
      textRU.innerText = cards[index][k].translation;
      span.className = "btn-rotate";

      textEN.append(span);
      div.className = "card";

      cardEN.append(imgEN);
      cardRU.append(imgRU);
      cardRU.append(textRU);
      cardEN.append(textEN);
      div.setAttribute("data-number", k);
      div.append(cardEN);
      div.append(cardRU);
      changeCategory.append(div);
    }
  }
}
const audio = document.getElementById("sound");

function onTranslte(event) {
  const category = localStorage.getItem("category");
  const cardIndex = event.target.dataset.number;
  audio.src = cards[category][cardIndex].audioSrc;
}

function OnCardClick(event) {
  let n = event.target.dataset.number;
  changeCategory.children[n].classList.add("translate");
}
