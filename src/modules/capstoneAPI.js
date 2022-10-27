export default class Requestapicapstone {

  constructor (){
    this.idApp = 'lQZw1DCmIXevvDoqUdE0';
    this.url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
    this.ulrlikes = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/'+this.idApp+'/likes/'
  }
   
  getid =  async () => {
        const val =  await fetch(this.url, {
            method: 'POST',      
           });
const data = await val.text()
return data;           
       }
     

    setLikes =  async (id) => {
   const val =  await fetch(this.ulrlikes, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({item_id : id }),    
      });
  
      const data = await val.text() 
       
   const datalikes =   await  this.getlikes()
   

for (const u of datalikes){
  console.log(u.likes)
  if( u.item_id === id){
    document.getElementById(id).children[0].children[1].children[1].children[0].innerHTML = u.likes  }
}
}


  getlikes = async () => {
    const response = await fetch(this.ulrlikes);
    let data; 
    try {
      data = await response.json();  
    } catch (error) {
     data = "null"
    }
    return data;
  }
}