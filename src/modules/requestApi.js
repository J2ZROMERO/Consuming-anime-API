/* eslint no-iterator: "error" */
import lielement from './eleLiPok.js';

export default class Requestapi {
 

   

    getsPokemons = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
      const data = await response.json();
      return data;
    }


  contadorElementos = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    const data = await response.json();
    return data.count;
  }
}