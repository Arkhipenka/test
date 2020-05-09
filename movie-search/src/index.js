require("./styles/index.scss");
import getWordTranslate from "./js/translate.js";
import getMovieTitle from "./js/getImdb";
import getRaitings from "./js/getRaitings.js";
import createCards from "./js/createCards";
import mySwiper from "./js/swiper";
//import swiperSize from "./js/swiper";

document.addEventListener("DOMContentLoaded", () => {
  const btnSearch = document.getElementById("btn-search");
  const search = document.getElementById("search");
  const result = document.getElementById("result");
  const swiper = document.querySelector(".swiper-wrapper");
  search.focus();

  btnSearch.addEventListener("click", searchMovie);
  search.addEventListener("keyup", searchMovieEnter);
  let page = 1;
  function searchMovieEnter(event) {
    if (event.key === "Enter" && search.value) {
      init(event);
    }
  }

  function searchMovie(event) {
    if (search.value) {
      init(event);
    }
  }

  async function init(event) {
    const load = document.getElementById("load");
    search.blur();
    load.classList.add("active");
    window.words = await getWordTranslate(search.value);

    const movieData = await getMovieTitle(words, page);
    window.pages = Math.ceil(movieData.totalResults / 10);
    const resultTrue = `Showing results for "${words}", result: ${movieData.totalResults}`;
    const resultFalse = `No result for ${search.value}`;
    console.log(pages);
    console.log(movieData);
    if (movieData.Error) {
      result.innerHTML = resultFalse;
      search.placeholder = resultFalse;
      search.value = "";
      load.classList.remove("active");
    } else {
      const data = await getRaitings(movieData.Search);
      console.log(data);
      while (swiper.firstChild) {
        swiper.removeChild(swiper.firstChild);
      }
      await createCards(data);
      mySwiper.update();
      result.innerHTML = resultTrue;
      load.classList.remove("active");
    }
  }
});
