const getWordTranslate = require('./translate');
const testWord = 'Иди и смотри';

describe('getTranslate', () => {
  it('works with async/await', async () => {
    await new Promise((res) => setTimeout(res, 5000));
    expect(
      await getWordTranslate(testWord, async (url) => {
        return Promise.resolve({ testWord });
      })
    ).toEqual('come and see');
  });
});
