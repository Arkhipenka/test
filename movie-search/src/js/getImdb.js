import { keyImdb } from './keys';
import { result } from '../index';
import { resultError } from '../index';

async function getMovieTitle(value, page) {
  try {
    const url = `https://www.omdbapi.com/?s=${value}&page=${page}&apikey=${keyImdb}`;

    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (e) {
    result.innerHTML = resultError;
  }
}
export default getMovieTitle;
