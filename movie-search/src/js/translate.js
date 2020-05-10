import { keyYandex } from './keys';

async function getWordTranslate(value, getWord) {
  try {
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${keyYandex}&text=${value}&lang=ru-en`;

    const data = await getWord(url);

    console.log(data);
    return data.text[0];
  } catch (e) {
    return '';
  }
}
export default getWordTranslate;
