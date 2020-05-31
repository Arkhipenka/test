
import { keyGeoData } from './keys';

async function getGeo(value) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${value}&key=${keyGeoData}&pretty=1&no_annotations=1`;

    const res = await fetch(url);
    const data = await res.json();
   
    return data
}
export default getGeo;