import _ from 'lodash';
import './style.css';
import pokeicon from './img/pokeicon.png';

document.querySelector('.logo-image').src = pokeicon;

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());