import Swiper from 'swiper';
import createCards from './createCards';

import getMovieTitle from './getImdb';
import getRaitings from './getRaitings.js';

let page = 2;

function createSwiper(pages, words) {
  let mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    slidesPerGroupSkip: 1,
    watchOverflow: true,

    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    on: {
      reachEnd: async function () {
        if (!search.value) {
        } else {
          if (pages > 1 && pages > page) {
            const MovieData = await getMovieTitle(words, page);

            const data = await getRaitings(MovieData.Search);
            await createCards(data);
            mySwiper.update();
            page++;
          }
        }
      },
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });
}

export default createSwiper;
