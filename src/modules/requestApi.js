/* eslint-disable */

import lielement from './eleLiPok.js';
import CapstoneAPI from './capstoneAPI.js';
import { popup, addcomment} from './popup.js';


const likes = new CapstoneAPI();
export default class Requestapi {
  addlielement = async (total) => {
    const data = await this.getsPokemons();

    let elementsli = '';
    let count = 1;
    for (const e of data.results) {
      if (count <= total) {
        const response = await fetch(e.url);
        const data = await response.json();
        data.sprites.front_default;
        elementsli += lielement.generateElement(e.name, data.sprites.front_default);
      }
      count += 1;
    }
    document.querySelector('.listPokemons').innerHTML = elementsli;

    const parentl = document.querySelector('.listPokemons').children;
    const valid = await this.getsPokemonsid(total);
    const like = await likes.getlikes();
 const mobileVE = [];
 const mobileVersion = document.body;
    for (let i = 0; i < parentl.length; i += 1) {
      parentl[i].id = valid[i];
      parentl[i].children[0].children[2].addEventListener('click', () => {
        
        while (mobileVersion.hasChildNodes()) {
                    mobileVE.push(mobileVersion.firstChild);
                    mobileVersion.removeChild(mobileVersion.firstChild); 
                         }
        document.body.innerHTML = popup();

        document.querySelector('.close-btn').addEventListener('click',(e)=>{
          for (let i = 0; i <= mobileVE.length - 1; i += 1) {
                        mobileVersion.appendChild(mobileVE[i]);
                                }
          document.body.removeChild(e.target.parentElement.parentElement.parentElement)
        })
      })

      if (like.item_id !== 'null') {
        for (let j = 0; j <= like.length - 1; j += 1) {
          if (parentl[i].id == like[j].item_id) {
            parentl[i].children[0].children[1].children[1].children[0].innerHTML = like[j].likes;
          }
        }
      }
    }
   
  }

  getsPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    const data = await response.json();
    return data;
  }

  getsPokemonsid = async (cuantity) => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    const data = await response.json();
    const arrdata = data.results;
    const ids = [];
    for (let i = 0; i < cuantity; i+=1) {
      const t = arrdata[i].url;
      ids.push(t.split('').filter((x, i) => {
        if (i > 33 && x !== '/') {
          return x;
        }
      })
        .join(''));
    }

    return new Promise((solve) => {
      solve(ids);
    });
  }

  contadorElementos = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    const data = await response.json();

    const total = data.results.length;
    return total;
  }

comments = async (e) => {
  const getComment = async () => {
    const commentInfo = await likes.getcomments(e);
    let liArray = "";
    for(let i = 0; i < commentInfo.length; i+=1){
      liArray += lielement.getComments(commentInfo[i].creation_date, commentInfo[i].username, commentInfo[i].comment)
    }
    document.querySelector('.comments-ul').innerHTML = liArray;
  }
  getComment();
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+e+'/');
  const data = await response.json();
  for(const [key, value] of Object.entries(data)){
    if(key === 'height'){
      document.querySelector('.height').innerHTML = 'Height: ' + value;      
    }
    if(key === 'weight'){
      document.querySelector('.weight').innerHTML = 'Weight: ' + value;      
    }
    if(key === 'base_experience'){
      document.querySelector('.base_experience').innerHTML = 'Base experience: ' + value;      
    }
    if(key === 'order'){
      document.querySelector('.order').innerHTML = 'Order: ' + value;      
    }

    if(key === 'name'){
      document.querySelector('.poke-name').innerHTML = value;      
    }
    if(key === 'sprites'){         
       document.querySelector('.poke-image').src = value.front_default; 
      
    } 
    
  }
  addcomment(e);
  return data;
  
}
base_experience
}


