function insertImage(index) {
  return /*html*/ `
    <img src="${images[index]}" onclick="makeBig(${index})" alt="Image from gallery ${index}">   
  `;
}

function firstImg(index) {
  return /*html*/`
  <div class="arrow"></div>
  <img src="${images[index]}" class="bigImg" id="bigImage" alt="Image No. ${index}">
  <img src="${images[index + 1]}" id="nextImage" class="nextImage" alt=""> 
  <img src="./resources/icons/square-caret-right-solid.svg" class="arrow right" alt="arrow right" onclick="nxtImg(${index + 1})">
  <img src="./resources/icons/square-xmark-solid.svg" class="closeBtn" alt="close" onclick="closeBig()">      
`;
}

function lastImg(index) {
  return /*html*/`
  <img src="./resources/icons/square-caret-left-solid.svg" class="arrow left" alt="arrow left" onclick="prevImg(${index - 1})">
  <img src="${images[index - 1]}" id="previousImage" class="previousImage" alt="">   
  <img src="${images[index]}" class="bigImg" id="bigImage" alt="Image No. ${index}">
  <div class="arrow"></div>
  <img src="./resources/icons/square-xmark-solid.svg" class="closeBtn" alt="close" onclick="closeBig()">      
`;
}

function normalImg(index) {
  return /*html*/`
  <img src="./resources/icons/square-caret-left-solid.svg" class="arrow left" alt="arrow left" onclick="prevImg(${index - 1})">
  <img src="${images[index - 1]}" id="previousImage" class="previousImage" alt="">   
  <img src="${images[index]}" class="bigImg" id="bigImage" alt="Image No. ${index}">
  <img src="${images[index + 1]}" id="nextImage" class="nextImage" alt=""> 
  <img src="./resources/icons/square-caret-right-solid.svg" class="arrow right" alt="arrow right" onclick="nxtImg(${index + 1})">
  <img src="./resources/icons/square-xmark-solid.svg" class="closeBtn" alt="close" onclick="closeBig()">      
`;
}