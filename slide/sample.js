"use strict";

//Carousel Start
const images = [
  "../img/emiria.jpg",
  "../img/rem.jpg",
  "../img/remrin.jpg",
  "../img/rezero.jpg",
  "../img/ria.jpg",
];

//条件式のイコールは = ではなく ==
let current = 0;
function changeImage(num) {
  if (current + num >= 0 && current + num < images.length) {
    current += num;
    document.querySelector("#main_image").src = images[current];
  } else if (current == 4) {
    current = 0;
    document.querySelector("#main_image").src = images[current];
  } else if (current == 0) {
    current = 4;
    document.querySelector("#main_image").src = images[current];
  }
}

document.querySelector("#prev").onclick = function () {
  changeImage(-1);
};
document.querySelector("#next").onclick = function () {
  changeImage(1);
};
//Carousel End

//imageChange Start
let index = 0;
const imageElement = document.querySelector(".img");

setInterval(() => {
  index = (index + 1) % images.length;
  imageElement.src = images[index];
}, 5000);

//imageChange End