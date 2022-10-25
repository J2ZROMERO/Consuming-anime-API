
import _ from 'lodash';
import './style.css';
import pokeicon from './img/pokeicon.png';

import RequestApi from './modules/requestApi';

const api = new RequestApi();


 document.querySelector('.logo-image').src = pokeicon;

 window.addEventListener('load', () => {
  api.addlielement();
});