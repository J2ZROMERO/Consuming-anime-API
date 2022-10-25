jest.mock('../requestApi.js');
import  Requestapi  from '../requestApi.js';

describe('Amount of pokemos from api',()=>{


    const data = new Requestapi();
    test('The result must be 1154', () => {
     data.contadorElementos().then(e =>{
      expect(e.contador).toBe(1154);
     })
      
    })
    })

describe('Get data from api',()=>{


const data = new Requestapi();
test('The result must be Pikachu', () => {
 data.getscores().then(e =>{
  expect(e.pokemon).toBe('pikachu');
 })
  
})
})