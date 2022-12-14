import heart from '../img/heart.png';

export default class lielement {
  static generateElement(name, img) {
    return `<li class="contentpoke">
    <div class="target">
        <img src="${img}" alt="" class="poke">
        <div class="likes">
            <h2 class="pokename">${name}<img src="${heart}" alt="" class="heart"></h2>
    <h3><span class="countlikes"></span>  Likes</h3>        
        </div>
        <button class="comments">Comments</button>
        <button class="reservations">Reservations</button>
    </div>
    
    </li>`;
  }

  static getComments(creationDate, userName, userComment) {
    return `<li class='comment-li-cont'>
    <h2 class="creationDate">${creationDate}__ </h2>
    <h2 class="userName">${userName}: </h2>
    <h2 class="userComment">${userComment} </h2>
    </li>`;
  }
}