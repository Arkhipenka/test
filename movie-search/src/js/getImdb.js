async function getMovieTitle(value, page) {
  const url = `https://www.omdbapi.com/?s=${value}&page=${page}&apikey=6ca64c1`;

  const res = await fetch(url);
  const data = await res.json();

  return data;
}
export default getMovieTitle;
