const Pokemon = require ('./pokemon');

test("1.- Create a new object pokemon", () => {
  const myPokemon = new Pokemon("pikachu")
  expect(myPokemon.name).toBe("pikachu"); // Corrige esta prueba
  });
