const swiper = document.querySelector('.swiper-wrapper');

function createCards(arr) {
  for (let i = 0; i < arr.length; i++) {
    const card = document.createElement('div');
    const poster = document.createElement('img');
    const cardTxt = document.createElement('div');
    const title = document.createElement('a');
    const year = document.createElement('p');
    const raiting = document.createElement('p');
    const description = document.createElement('p');

    if (arr[i].Poster === 'N/A') {
      poster.src = './src/img/Poster.jpg';
    } else {
      poster.src = arr[i].Poster;
    }

    poster.classList.add('img-card');
    poster.alt = arr[i].Title;

    title.innerText = arr[i].Title;
    title.classList.add('card-title');
    title.classList.add('h5');
    title.href = `https://www.imdb.com/title/${arr[i].imdbID}/`;

    year.innerText = arr[i].Year;

    cardTxt.append(title);
    cardTxt.append(year);
    cardTxt.classList.add('card-body-overlay');
    cardTxt.classList.add('text-center');

    raiting.classList.add('raiting');

    raiting.innerHTML = `Rating: ${arr[i].imdbRating}`;
    cardTxt.append(raiting);

    description.innerHTML = arr[i].Plot;
    description.classList.add('description');

    cardTxt.append(description);
    card.classList.add('swiper-slide');
    card.classList.add('card');
    card.classList.add('swiper-zoom-container');
    card.height = '100%';

    card.append(poster);
    card.append(cardTxt);

    swiper.append(card);
  }
}
export default createCards;
