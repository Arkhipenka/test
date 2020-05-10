import { keyImdb } from './keys';
import { result } from '../index';
import { resultError } from '../index';

async function getRaiting(id) {
  try {
    const url = `https://www.omdbapi.com/?i=${id}&apikey=${keyImdb}`;

    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (e) {
    result.innerHTML = resultError;
  }
}

async function getRaitings(arr) {
  const requests = [];

  for (let counter = 0; counter < arr.length; counter++) {
    requests.push(getRaiting(arr[counter].imdbID));
  }
  const results = await Promise.all(requests);

  return results;
}
export default getRaitings;
