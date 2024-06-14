let images = [
  './resources/img/img1.jpg',
  './resources/img/img2.jpg',
  './resources/img/img3.jpg',
  './resources/img/img4.jpg',
  './resources/img/img5.jpg',
  './resources/img/img6.jpg',
  './resources/img/img7.jpg',
  './resources/img/img8.jpg',
  './resources/img/img9.jpg',
  './resources/img/img10.jpg',
  './resources/img/img11.jpg',
  './resources/img/img12.jpg',
  './resources/img/img13.jpg',
  './resources/img/img14.jpg',
  './resources/img/img15.jpg',
  './resources/img/img16.jpg',
  './resources/img/img17.jpg',
  './resources/img/img18.jpg',
  './resources/img/img19.jpg',
  './resources/img/img20.jpg',
];

function render() {
  for (let i = 0; i < images.length; i++) {
    document.getElementById('gallery').innerHTML += insertImage(i);
  }
}

function makeBig(index) {
  let fullSize = document.getElementById('fullSize');
  let lastIndex = images.length - 1;
  fullSize.classList.remove('d-none');

  if (index === 0) {
    fullSize.innerHTML = firstImg(index);
  } else if (index === lastIndex) {
    fullSize.innerHTML = lastImg(index);
  } else {
    fullSize.innerHTML = normalImg(index);
  }
}

function closeBig() {
  document.getElementById('fullSize').classList.add('d-none');
}

function nxtImg(i) {
  swipeLeft();
  setTimeout(makeBig, 125, i);
}

function prevImg(i) {
  swiperight();
  setTimeout(makeBig, 125, i);
}

function swipeLeft() {
  document.getElementById('bigImage').classList.add('previousImage');
  document.getElementById('bigImage').classList.remove('bigImg');
  document.getElementById('nextImage').classList.add('bigImg');
  document.getElementById('nextImage').classList.remove('nextImage');
}

function swiperight() {
  document.getElementById('bigImage').classList.add('nextImage');
  document.getElementById('bigImage').classList.remove('bigImg');
  document.getElementById('previousImage').classList.add('bigImg');
  document.getElementById('previousImage').classList.remove('previousImage');
}


