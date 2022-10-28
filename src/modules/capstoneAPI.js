/* eslint-disable */
export default class Requestapicapstone {
  constructor() {
    this.idApp = 'lQZw1DCmIXevvDoqUdE0';
    this.url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
    this.ulrlikes = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${this.idApp}/likes/`;
    this.ulrpcomments = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${this.idApp}/comments/`;

  }

  
  getid = async () => {
    const val = await fetch(this.url, {
      method: 'POST',
    });
    const data = await val.text();
    return data;
  }

    setLikes = async (id) => {
      await fetch(this.ulrlikes, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item_id: id }),
      });

      const datalikes = await this.getlikes();

      for (const u of datalikes) {
        if (u.item_id === id) {
          document.getElementById(id).children[0].children[1].children[1].children[0].innerHTML = u.likes;
        }
      }
    }

  getlikes = async () => {
    const response = await fetch(this.ulrlikes);
    let data;
    try {
      data = await response.json();
    } catch (error) {
      data = 'null';
    }
    return data;
  }

  postcoments = async (idPokemon,name,comment) => {
    await fetch(this.ulrpcomments, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
      item_id: idPokemon,
      username: name,
      comment: comment}),
    });


  }

  getcomments = async (id) => {
    const response = await fetch(this.ulrpcomments+'?item_id='+id);
    let data;
   
    if(response.status == 500){
    } else {
      document.querySelector('.no-comments').style.display = 'none';
      try {
        data = await response.json();
        if(response.status === 400){
          document.querySelector('.no-comments').style.display = 'block';
        }
        
      } catch (error) {
        data = 'null';
           
      }
    }
  
    return data;
 
  }


}
