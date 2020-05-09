import Swiper from "swiper";
import createCards from "./createCards";

import getMovieTitle from "./getImdb";
import getRaitings from "./getRaitings.js";
/*Swiper.use([Navigation, Pagination, Scrollbar]);
const swip = document.querySelector(".swiper-container");*/
let page = 2;

let mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  watchOverflow: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  on: {
    reachEnd: async function () {
      if (!search.value) {
      } else {
        if (pages > 1) {
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

export default mySwiper;
