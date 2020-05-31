import map from './map'
import getWeather from './weather'
import init from './init'
import getGeoData from './getGeo';
async function geoFindMe() {
    const status = document.querySelector('#status');
    const mapLatitude = document.querySelector('#map-latitude');
    const mapLongitude = document.querySelector('#map-longitude');

    const location = {};


    mapLatitude.textContent = '';
    mapLongitude.textContent = '';



    async function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        status.textContent = '';

        mapLatitude.textContent = `Latitude: ${latitude} °`;
        mapLongitude.textContent = `Longitude: ${longitude} °`

        //map.setCenter([longitude, latitude])
        const weather = await getWeather(latitude, longitude, 'ru')
        await init(weather, 'ru')
        console.log(weather)

        await getGeoData(weather.city.name)

    }

    async function error() {
        status.textContent = 'Unable to retrieve your location';
    }

    if (!navigator.geolocation) {
        status.textContent = 'Geolocation is not supported by your browser';
    } else {
        status.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(success, error);
    }


}



export default geoFindMe
