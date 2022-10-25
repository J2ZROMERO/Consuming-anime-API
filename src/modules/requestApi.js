import lielement from './eleLiPok'
export default class Requestapi {
    postgame = async (game) => {
      await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: game }),
      });
    }

    postscores= async (name, score) => {
      await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/600/scores/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: name, score }),
      });
    }

    getscores = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
      const data = await response.json();
      return data;
    }

  addlielement = async () => {
    const data = await this.getscores();
    console.log(data)
    let elementsli = '';
    for (const e of data.forms) {
      elementsli += lielement.generateElement(e.name, e.url);
    }
    document.querySelector('.listPokemons').innerHTML = elementsli;
  }
  contadorElementos  = async () =>{
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    const data = await response.json();
    return data.count; 
  }
}