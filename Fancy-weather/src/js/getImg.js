import { keyImg } from './keys';

async function getImg(weather) {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${keyImg}&tags=${weather}&tag_mode=all&extras=url_h&format=json&nojsoncallback=1`;

    const res = await fetch(url);
    const data = await res.json();

    return data
}
export default getImg;
