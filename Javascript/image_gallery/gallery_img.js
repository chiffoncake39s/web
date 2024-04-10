'use strict';

const thumbs = document.querySelectorAll(".thumb");
thumbs.forEach(function(item,index){
    item.onclick = function(){

        document.querySelector('.bigimg').src = item.dataset.image;
    }
});
