import './style.css';
import pokeicon from './img/pokeicon.png';
import sear from './img/sear.png';
import RequestApi from './modules/requestApi.js'
import Requestapicapstone from './modules/capstoneAPI.js'
const  apiCtone = new  Requestapicapstone();
const  api = new  RequestApi();



const r = async ()=>{
    console.log( await apiCtone.getid())   
//    // console.log(await api.getsPokemonsid(1000))
 }
 r()
document.querySelector('.logo-image').src = pokeicon;
document.querySelector('.confirm').src = sear;

window.addEventListener('load', () => {
    const totalPokemons= document.querySelector('.selectPokemon').defaultValue
    api.addlielement(totalPokemons);
 api.contadorElementos().then((e)=>{
    document.querySelector('.totalPokemonesApi').innerHTML =  e
 }) 
});
  
document.querySelector('.confirm').addEventListener('click', ()=>{
    const totalPokemons= document.querySelector('.selectPokemon').value
    api.addlielement(totalPokemons);

})

document.addEventListener('click',(e)=>{
    
  //console.log(e.target.parentElement.parentElement.parentElement.parentElement == Object)
   let objecto  = e.target instanceof Object;

    if(e.target.parentElement.parentElement.parentElement.parentElement != null ){
        
    const idelement = parseInt(e.target.parentElement.parentElement.parentElement.parentElement.id)
    apiCtone.setLikes(idelement)      

}   
   
    })




