import Requestapicapstone from './capstoneAPI.js'

const popup = () => {
    const popupHtml = `<div class="popup">
    
    <div class="item-details">
    <div class="image-div">
    <img class="poke-image" src="" alt="">
    <p class="close-btn">X</p>
    </div>
    <h2 class="poke-name">Name</h2>
    <div class="ul-cont">
    <ul>
    <li class='height'></li>
    <li class='weight'>/li>
    </ul>
    <ul>
    <li class='base_experience'></li>
    <li class='order'></li>
    </ul>
    </div>
    </div>
    <div class="comments-section">
    <h2>Comments <span class="comments-counter"></span></h2>
    <ul class="comments-ul">
    <li class="no-comments">No comments yet</li>
    </ul>
    </div>
    <div class="comment-cont">
    <div class="add-a-comment">
    <h2>Add a comment</h2>
    <input class='nameInput' placeholder="Your name" type="text">  
    <textarea class='textInput' name="" id="" cols="30" rows="3" placeholder="Your insights"></textarea>              
    <button class="comment-btn">Comment</button>
    </div>
    </div>
    </div>`;
    return popupHtml;
};

let addNewComment = new Requestapicapstone()

const addcomment = (id) => {
    document.querySelector('.comment-btn').addEventListener('click', () => {
      const nameInput = document.querySelector('.nameInput').value; 
      const textInput = document.querySelector('.textInput').value;
           addNewComment.postcoments(id, nameInput, textInput)  
           setTimeout(function(){ window.location.reload()}, 200 ) 
                     setTimeout();
    })
    
}

export {popup, addcomment};
