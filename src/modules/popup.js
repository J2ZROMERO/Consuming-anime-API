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
    </div>`;
  return popupHtml;
};

export default popup;
