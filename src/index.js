/* eslint-disable */
import './style.css';
import pokeicon from './img/pokeicon.png';
import sear from './img/sear.png';
import RequestApi from './modules/requestApi.js';
import Requestapicapstone from './modules/capstoneAPI.js';



const apiCtone = new Requestapicapstone();
const api = new RequestApi();

// const qweasd = async () => {
//   console.log(await api.comments(3));
// }
// qweasd();
document.querySelector('.logo-image').src = pokeicon;
document.querySelector('.confirm').src = sear;

window.addEventListener('load', () => {
  const totalPokemons = document.querySelector('.selectPokemon').defaultValue;
  api.addlielement(totalPokemons);
  api.contadorElementos().then((e) => {
    document.querySelector('.totalPokemonesApi').innerHTML = e;
  });
});

document.querySelector('.confirm').addEventListener('click', () => {
  const totalPokemons = document.querySelector('.selectPokemon').value;
  api.addlielement(totalPokemons);
});

document.addEventListener('click', (e) => {
  const commentsId = parseInt(e.target.parentElement.parentElement.id, 10);
  api.comments(commentsId);
  if (e.target.parentElement.parentElement.parentElement.parentElement != null) {
    const idelement = parseInt(e.target.parentElement.parentElement.parentElement.parentElement.id, 10);
    apiCtone.setLikes(idelement);
 
  }
});
/* eslint-disable */

document.querySelector('.poke-image').src = pokeicon;