import getMovieTitle from './getImdb';
const testWord = '12 chairs';

describe('getImdb', () => {
  it('get array movies', async () => {
    expect(
      await getMovieTitle(testWord, 1, async (url) => {
        return Promise.resolve({
          Search: [
            {
              Poster:
                'https://m.media-amazon.com/images/M/MV5BYzhlYzBlNTUtZmEwNS00ZTViLTk1NWQtOTA2MmI0MmIxOWQ2XkEyXkFqcGdeQXVyMjY5ODcyMDM@._V1_SX300.jpg',
              Title: '12 Chairs',
              Type: 'movie',
              Year: '2016',
              imdbID: 'tt5662288',
            },
          ],
          totalResults: '1',
          Response: 'True',
        });
      })
    ).toEqual({
      Search: [
        {
          Poster:
            'https://m.media-amazon.com/images/M/MV5BYzhlYzBlNTUtZmEwNS00ZTViLTk1NWQtOTA2MmI0MmIxOWQ2XkEyXkFqcGdeQXVyMjY5ODcyMDM@._V1_SX300.jpg',
          Title: '12 Chairs',
          Type: 'movie',
          Year: '2016',
          imdbID: 'tt5662288',
        },
      ],
      totalResults: '1',
      Response: 'True',
    });
  });
});
