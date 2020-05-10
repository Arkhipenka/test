import getWordTranslate from './translate';
const testWord = 'Иди и смотри';

describe('getTranslate', () => {
  it('works with async/await', async () => {
    
    expect(
      await getWordTranslate(testWord, async (url) => {
        return Promise.resolve({
          code: 200,
          lang: 'ru-en',
          text: ['come and see'],
        });
      })
    ).toEqual('come and see');
  });
});
