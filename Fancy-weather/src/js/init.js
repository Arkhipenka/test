const city = document.getElementById('city');
const date = document.getElementById('date');
const term = document.getElementById('term');
const pic = document.getElementById('pic');
const wind = document.getElementById('wind')
const weatherStatus = document.getElementById('weatherStatus');

import map, { marker } from './map';

import getGeoData from './getGeo';

async function init(data, lang) {
    const place = await getGeoData(data.city.name);

    city.innerText = `${place.results[0].formatted}`;
    weatherStatus.innerText = `${data.list[0].weather[0].description}`
    const now = new Date();

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    date.innerText = new Intl.DateTimeFormat(lang, options).format(now);
    if (lang === 'ru') {
        wind.innerText = `Ветер: ${data.list[0].wind.speed} м/с`
        
    }
    const tempNow = Math.round(data.list[0].main.temp);
    term.innerHTML = `${tempNow} <sup>o</sup>`;

    map.setCenter([data.city.coord.lon, data.city.coord.lat]);
    marker.setLngLat([data.city.coord.lon, data.city.coord.lat])


}
export default init