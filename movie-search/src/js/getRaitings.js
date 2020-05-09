async function getRaiting(id) {
  const url = `https://www.omdbapi.com/?i=${id}&apikey=6ca64c1`;

  const res = await fetch(url);
  const data = await res.json();

  return data;
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
