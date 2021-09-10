import { getPokemon } from '../generics/getPokemon';

getPokemon(4)
  .then(pokemon => console.log(pokemon.sprites.front_default))
  .catch(e => console.log(e))
  .finally(() => console.log('Fin de getPokemon'))