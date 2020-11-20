const pokemons = require('../../public/data.json');

test('Check Pokemon Length', () => {
  expect(pokemons.length).toEqual(16);
});

test('we should have ids 1 and 4', () => {
  expect(pokemons).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ id: 1 }),
      expect.objectContaining({ id: 4 })
    ])
  );
});

test('we should have name english', () => {
  expect(pokemons).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ name: { english: "Charmander" } }),
    ])
  );
});