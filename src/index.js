import './style.css';
import pokeicon from './img/pokeicon.png';

import RequestApi from './modules/requestApi.js';

const api = new RequestApi();

document.querySelector('.logo-image').src = pokeicon;

