 const popup = () => {
  const popupHtml = `<div class="popup">
    
    <div class="item-details">
        <div class="image-div">
    <img class="poke-image" src="./img/pokeicon.png" alt="">
    <p class="close-btn">X</p>
    </div>
    <h2 class="poke-name">Name</h2>
    <div class="ul-cont">
    <ul>
        <li>.height:</li>
        <li>.type.name/li>
    </ul>
    <ul>
        <li>.weight</li>
        <li>.abilities.ability.name</li>
    </ul>
    </div>
    </div>
    </div>`
    return popupHtml;
}

export default popup;
