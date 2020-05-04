require("./styles/index.scss");
import getWordTranslate from "./js/translate.js";
import getMovieTitle from "./js/getImdb";
import getRaitings from "./js/getRaitings.js";
import createCards from "./js/createCards";

document.addEventListener("DOMContentLoaded", () => {
  const btnSearch = document.getElementById("btn-search");
  const search = document.getElementById("search");

  search.focus();

  btnSearch.addEventListener("click", async (event) => {
    console.log(search.value);
    let page = 1;
    const words = await getWordTranslate(search.value);
    console.log(words);
    const movieData = await getMovieTitle(words, page);
    await createCards(movieData.Search);
    //getRaitings(movieData.Search);
  
  });
});
