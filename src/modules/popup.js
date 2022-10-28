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
    <div class="comment-cont">
          <form class="add-a-comment">
            <h2>Add a comment</h1>
              <input placeholder="Your name" type="text">  
                <textarea name="" id="" cols="30" rows="3" placeholder="Your insights"></textarea>              
                  <button class="comment-btn">Comment</button>
          </form>
        </div>
    </div>`;
  return popupHtml;
};

export default popup;
