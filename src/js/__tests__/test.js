import GameSavingLoader from '../GameSavingLoader';

test('Проверка работы GameSavingLoader', done => {
  GameSavingLoader.load().then((saving) => {
    const result = JSON.stringify({
      "id": 9,
      "created": 1546300800,
      "userInfo": {
        "id": 1,
        "name": "Hitman",
        "level": 10,
        "points": 2000,
      }
    })
    expect(result).toEqual(saving);
    done();
  })
})