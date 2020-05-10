require('./styles/index.scss');

import getWordTranslate from './js/translate.js';
import getMovieTitle from './js/getImdb';
import getRaitings from './js/getRaitings.js';
import createCards from './js/createCards';
import createSwiper from './js/swiper';

const btnSearch = document.getElementById('btn-search');
const search = document.getElementById('search');
export const result = document.getElementById('result');
export const resultError =
  'error, try again later or check your internet connection';
const swiper = document.querySelector('.swiper-wrapper');

document.addEventListener('DOMContentLoaded', () => {
  search.focus();

  btnSearch.addEventListener('click', searchMovie);
  search.addEventListener('keyup', searchMovieEnter);

  let page = 1;

  function searchMovieEnter(event) {
    if (event.key === 'Enter' && search.value) {
      init(event);
    }
  }

  function searchMovie(event) {
    if (search.value) {
      init(event);
    }
  }

  async function init(event) {
    const load = document.getElementById('load');

    search.blur();
    load.classList.add('active');

    const words = await getWordTranslate(search.value, async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    });
    console.log(words);
    if (!words) {
      load.classList.remove('active');
      result.innerHTML = resultError;
    } else {
      const movieData = await getMovieTitle(words, page);

      const pages = Math.ceil(movieData.totalResults / 10);

      const resultTrue = `Showing results for "${words}", result: ${movieData.totalResults}`;
      const resultFalse = `No result for "${search.value}"`;

      if (movieData.Error) {
        result.innerHTML = resultFalse;
        search.placeholder = resultFalse;
        search.value = '';

        load.classList.remove('active');
      } else {
        const data = await getRaitings(movieData.Search);
        if (movieData.totalResults < 4) {
          swiper.classList.add('small');
        } else {
          swiper.classList.remove('small');
        }

        while (swiper.firstChild) {
          swiper.removeChild(swiper.firstChild);
        }

        await createCards(data);

        result.innerHTML = resultTrue;
        createSwiper(pages, words);
      }

      load.classList.remove('active');
    }
  }
});
