const city = document.getElementById('city');
const date = document.getElementById('date');
const term = document.getElementById('term');
const pic = document.getElementById('pic');
const weatherStatus = document.getElementById('weatherStatus');

import map, { marker } from './map';

import getGeoData from './getGeo';

async function init(data) {
    const place = await getGeoData(data.city.name);

    city.innerText = `${place.results[0].formatted}`;
    weatherStatus.innerText = `${data.list[0].weather[0].description}`
    console.log(data.list[0].weather[0].icon)
    const now = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    console.log(new Intl.DateTimeFormat('ru-Ru', options).format(date));
    date.innerText = now.getDay();
    console.log(now.toString());
    const tempNow = Math.round(data.list[0].main.temp);
    term.innerHTML = `${tempNow} <sup>o</sup>`;
    console.log(data.city);
    map.setCenter([data.city.coord.lon, data.city.coord.lat]);
    marker.setLngLat([data.city.coord.lon, data.city.coord.lat])


}
export default init