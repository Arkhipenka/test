async function getWordTranslate(value) {
  const key =
    "trnsl.1.1.20200503T154700Z.65db2bc0584882ad.f72dc5310f8599fb238a6fe8d215b40080cbcc74";
  const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&text=${value}&lang=ru-en`;

  const res = await fetch(url);
  const data = await res.json();

  console.log(data.text[0]);
  console.log(data);
  return data.text[0];
}
export default getWordTranslate;
