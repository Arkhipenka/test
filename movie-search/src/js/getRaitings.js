async function getRaiting(id) {
  const url = `https://www.omdbapi.com/?i=${id}&apikey=6ca64c1`;

  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  console.log(data.Response);
  console.log(data.imdbRating);

  return data.imdbRaiting;
}

async function getRaitings(arr) {
  for (let i = 0; i < arr.length; i++) {
    const id = arr[i].imdbID;
    const ratings = Promise.all([
      getRaiting(id),
      getRaiting(id),
      getRaiting(id),
    ]);
    console.log(raiting.imdbRating);
  }
}
export default getRaitings;
