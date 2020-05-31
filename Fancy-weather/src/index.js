require('./styles/index.scss');
require('./styles/index.scss');

import geoFindMe from './js/location.js';
import getWeather from './js/weather';

import getImg from './js/getImg';
import getGeoData from './js/getGeo';
const body = document.getElementById("body");

document.addEventListener('DOMContentLoaded', async () => {

  const location = await geoFindMe();
  const img = await getImg("spring");

  body.style.backgroundImage = `url(${img.photos.photo[0].url_h})`


});
