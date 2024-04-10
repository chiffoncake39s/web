let img = document.querySelector(".img");
setTimeout(function(){
  fadeOut(img, 2000, function () {

  });
},2000);


// フェードアウトのカスタム関数
function fadeOut(element, duration, callback) {
  var opacity = 1;
  var interval = 50;
  var gap = interval / duration;

  function decrease() {
    opacity -= gap;

    if (opacity <= 0) {
      element.style.display = "none";
      callback();
    } else {
      element.style.opacity = opacity;
      setTimeout(decrease, interval);
    }
  }

  decrease();
}
