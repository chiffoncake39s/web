'use strict';
let i = 0;
const img = [
    "../img/emiria.jpg",
    "../img/rem.jpg",
    "../img/remrin.jpg",
    "../img/rezero.jpg",
    "../img/ria.jpg"
];

function change() {
    i++;
    if (i >= img.length) {
        i = 0;
    }
    document.body.style.backgroundImage = `url(${img[i]})`;
}

function tm() {
    document.body.style.backgroundImage = `url(${img[i]})`;
    setInterval(change, 3000);
}

tm();
