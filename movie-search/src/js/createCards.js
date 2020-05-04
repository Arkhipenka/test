const swiper = document.querySelector(".swiper-wrapper");
function createCards(arr) {
  while (swiper.firstChild) {
    swiper.removeChild(swiper.firstChild);
  }
  for (let i = 0; i < arr.length; i++) {
    const card = document.createElement("div");
    const poster = document.createElement("img");
    const cardTxt = document.createElement("div");
    const title = document.createElement("a");
    const year = document.createElement("p");
    poster.src = arr[i].Poster;
    poster.classList.add("card-img-top");
    title.innerText = arr[i].Title;
    title.classList.add("card-title");
    title.classList.add("h4");
    title.href = `https://www.imdb.com/title/${arr[i].ImdbID}/`;
    year.innerText = arr[i].Year;
    cardTxt.append(title);
    cardTxt.append(year);
    card.classList.add("swiper-slide");
    card.classList.add("card");
    cardTxt.classList.add("card-body");
    cardTxt.classList.add("text-center");
    card.append(poster);
    card.append(cardTxt);
    console.log(card);
    swiper.append(card);
  }
}
export default createCards;
