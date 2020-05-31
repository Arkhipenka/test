import { keyWeather } from './keys';

async function getWeather(lat, lon, lang) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=${lang}&units=metric&APPID=${keyWeather}`

    const res = await fetch(url);
    const data = await res.json();

    return data
}
export default getWeather;
