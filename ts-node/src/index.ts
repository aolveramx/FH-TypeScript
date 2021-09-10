import { Pokemon } from "./decorators/pokemon-class"

const charmander = new Pokemon('Charmander')

// (Pokemon.prototype as any).customName = 'Pikachu'

// charmander.savePokemonToDB(3)
charmander.publicAPI = 'https://ariolvera.com'
console.log(charmander)