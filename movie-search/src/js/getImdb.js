import { keyImdb } from './keys';
const result = document.getElementById('result');
const resultError = 'error, try again later or check your internet connection';

async function getMovieTitle(value, page, getMovie) {
  try {
    const url = `https://www.omdbapi.com/?s=${value}&page=${page}&apikey=${keyImdb}`;

    const data = await getMovie(url);
    console.log(data);
    return data;
  } catch (e) {
    result.innerHTML = resultError;
  }
}
export default getMovieTitle;
