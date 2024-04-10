// loading Start

window.onload = function() {
  // スクロールイベントの抑制
  document.body.style.overflow = 'hidden';

  // ロードが完了したらloading_txtをフェードイン
  var loadingTxt = document.querySelector('.loading_bg');
  loadingTxt.style.display = 'block';

  setTimeout(function() {
    fadeOut(loadingTxt, 3000, function() {
      // loading_txtが完全に非表示になった後にloading_catchを表示する
      var loadingCatch = document.querySelector('.loading_catch');
      loadingCatch.style.display = 'block';

      setTimeout(function() {
        fadeOut(loadingCatch, 1000, function() { // loading_catchを1秒かけて非表示にする

          // ロード後にloading_kvを表示してから非表示にする
          var loadingKv = document.querySelector('.loading_kv');
          loadingKv.style.display = 'block';

          setTimeout(function() {
            loadingKv.style.display = 'none';
            // ロード後にloading_colorをフェードイン
            var loadingColor = document.querySelector('.loading_color');
            loadingColor.style.display = 'block';

            // loading_colorのフェードインが終わった後に、画像を上にスクロールして非表示にする
            var kvH = loadingColor.offsetHeight;
            var wH = window.innerHeight;
            var kvScrollH = kvH - wH;

            // loading_colorのフェードインが終わった後にスクロールアニメーションを実行
            setTimeout(function() {
              if (kvScrollH > 0) {
                var scrollAmount = kvScrollH;
                var scrollInterval = 5;
                var scrollDuration = 2000;
                var currentPosition = 0;
                var scrollTimer = setInterval(function() {
                  currentPosition += scrollInterval;
                  if (currentPosition >= scrollAmount) {
                    clearInterval(scrollTimer);
                    currentPosition = scrollAmount;
                    // スクロールアニメーションが終わったらloading_colorをフェードアウトして非表示にする
                    fadeOut(loadingColor, 2000, function() {
                      // 全てのアニメーションが終了した後に.bodyを表示する
                      var body = document.querySelector('.body');
                      body.style.display = 'block';
                      var bigImg = document.querySelector('.bigimg');
                      bigImg.style.right = '0';
                      bigImg.style.left = '0';

                      // ページを一番上までスクロールする
                      window.scrollTo(0, 0);

                      // アニメーションが終了した後にスクロール設定を解除する
                      document.body.style.overflow = '';
                    });
                  }
                  window.scrollTo(0, currentPosition);
                }, scrollDuration / (scrollAmount / scrollInterval));
              }
            }, 1000);
          }, 1000);
        });
      }, 1000);
    });
  }, 1000);
};

// フェードアウトのカスタム関数
function fadeOut(element, duration, callback) {
  var opacity = 1;
  var interval = 50;
  var gap = interval / duration;

  function decrease() {
    opacity -= gap;

    if (opacity <= 0) {
      element.style.display = 'none';
      callback();
    } else {
      element.style.opacity = opacity;
      setTimeout(decrease, interval);
    }
  }

  decrease();
}

// loading End

//gallerySite Start
const thumbs = document.querySelectorAll(".thumb");
thumbs.forEach(function (item, index) {
  item.onclick = function () {
    document.querySelector(".bigimg").src = item.dataset.image;
    setActiveThumb(item);
  };
});

const centerImages = ["./img/kv.webp", "./img/kv5.webp", "./img/kv6.webp"];
let centerIndex = 0;
const centerImageElement = document.querySelector(".bigimg");

setInterval(() => {
  centerIndex = (centerIndex + 1) % centerImages.length;
  centerImageElement.src = centerImages[centerIndex];
  setActiveThumb(thumbs[centerIndex]);
}, 5000);

function setActiveThumb(thumb) {
  thumbs.forEach(function (item) {
    item.classList.remove("active");
    item.style.filter = "brightness(0.5)"; // 選択されていない画像の色を変更
  });
  thumb.classList.add("active");
  thumb.style.filter = "none"; // 選択された画像のフィルターをリセット
}
//gallerySite End


//img.scroll Start
//スクロールして.img要素が、bigimg要素を超えたら非表示にする
window.addEventListener('scroll', function() {
  const imgContainer = document.getElementById('img-container');
  const bigImg = document.querySelector('.bigimg');
  let img = document.querySelector(".img");

  if (bigImg.getBoundingClientRect().bottom <= window.innerHeight) {
    imgContainer.style.display = 'none'; // .bigimg 要素を超えたら非表示
  } else {
    imgContainer.style.display = 'block'; // それ以外は表示
  }

  if (window.innerWidth <= 800) {
    imgContainer.style.position = 'sticky';
    imgContainer.style.display = 'block';
  } else {
    img.style.position = 'fixed';// それ以外はposition: fixedに戻す
    imgContainer.style.left = '30px';
    imgContainer.style.bottom = '30px';
  }
});
//img.scroll End

//humburger_menu Start
let nav = document.querySelector("#navArea");
let btn = document.querySelector(".humburger-btn");
let mask = document.querySelector("#mask");

btn.onclick =  () => {
  nav.classList.toggle("open");
}
mask.onclick =  () => {
  nav.classList.toggle("open");
}
  // HumburgerMenu Scroll
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  const scrollTop = window.scrollY;

  // 背景画像のスクロール速度を設定します。
  // 数値を変更することでスクロール速度を調整できます。
  const scrollSpeed = 0.2;

  // 背景画像の位置を計算します。
  const backgroundPositionY = -scrollTop * scrollSpeed;

  // 背景画像の位置を設定します。
  nav.style.backgroundPositionY = `${backgroundPositionY}px`;
});
// ハンバーガーメニューをクリックしたときの処理
const humburgerBtn = document.querySelector(".humburger-btn");
humburgerBtn.addEventListener("click", function () {
  const nav = document.querySelector("nav");

  // ハンバーガーメニューがクリックされたら画像の位置を初期値に戻す
  nav.style.backgroundPositionY = "0px";
});

//レスポンシブデザイン
// ウィンドウの幅を監視してリサイズ時に処理を実行するイベントを設定
window.addEventListener("resize", function() {
  // ブラウザのウィンドウ幅を取得
  var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // .humburgerMenuDelete 要素を取得
  var elements = document.getElementsByClassName("humburgerMenuDelete");

  // ウィンドウ幅が780px以下の場合
  if (windowWidth <= 500) {
      // 取得したすべての要素に対して処理を行う
      for (var i = 0; i < elements.length; i++) {
          elements[i].style.display = "none"; // 要素の表示を変更
      }
  } else {
      // ウィンドウ幅が780pxより大きい場合は要素を表示する
      for (var i = 0; i < elements.length; i++) {
          elements[i].style.display = "block"; // 要素の表示を変更
      }
  }
});

// ページ読み込み時にも初回の処理を行う
window.dispatchEvent(new Event("resize"));


//humburger_menu End

/* YouTube API Start */
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360px',
    width: '640px',
    videoId: 'Cxfr5hENj54',
    playerVars: {
      'autoplay': 1,      // 自動再生（1: 有効, 0: 無効）
      'loop': 1,          // ループ再生（1: 有効, 0: 無効）
      'controls': 0,      // コントロール非表示（1: 表示, 0: 非表示）
      'fs': 0,            // フルスクリーンボタン非表示（1: 表示, 0: 非表示）
      'modestbranding': 1,// YouTubeロゴ非表示（1: 非表示, 0: 表示）
      'rel': 0,           // 関連動画の表示（1: 表示, 0: 非表示）
      'showinfo': 0,      // 動画情報非表示（1: 表示, 0: 非表示）
      'html5': 1,         // HTML5プレーヤーを利用（1: 有効, 0: 無効）
      'mute': 1,          //ミュート（1: 有効, 0: 無効）
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  // デバイスがPCの場合にのみ音量を0に設定し、自動再生を開始する

  var isPC = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (isPC) {
    event.target.playVideo(); // 自動再生を開始
  }
}


var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    //setTimeout(stopVideo, 6000);
    done = true;
  }else if (event.data == YT.PlayerState.ENDED) {
    event.target.seekTo(0,true);
    event.target.playVideo();
  }else if (event.data == YT.PlayerState.PAUSED) {
    player.playVideo();
  }
}
  //Youtube modalWindow
  // モーダルを開く
  function openModal() {
    var modalBackdrop = document.getElementById("modalBackdrop");
    var modal = document.getElementById("modal");
    var closeButton = document.getElementById("closeButton");
    var youtubeIframe = document.getElementById("youtubeIframe");

    youtubeIframe.setAttribute("src", "https://www.youtube.com/embed/Cxfr5hENj54");
    modalBackdrop.style.display = "block";
    modal.style.display = "block";
    closeButton.style.display = "block";

    // .humburger-btnに.humburgerBtnHiddenクラスを追加
    const humburgerBtn = document.querySelector(".humburger-btn");
    humburgerBtn.classList.add("humburgerBtnHidden");
  }

  // モーダルを閉じる
  function closeModal() {
    var modalBackdrop = document.getElementById("modalBackdrop");
    var modal = document.getElementById("modal");
    var closeButton = document.getElementById("closeButton");

    // .humburger-btnから.humburgerBtnHiddenクラスを削除
    const humburgerBtn = document.querySelector(".humburger-btn");
    humburgerBtn.classList.remove("humburgerBtnHidden");

    modalBackdrop.style.display = "none";
    modal.style.display = "none";
    closeButton.style.display = "none";

    // YouTube動画を停止しない（コメント化して消さない）
    // var youtubeIframe = document.getElementById("youtubeIframe");
    // youtubeIframe.setAttribute("src", "");
  }
  /* Youtube modalWindow End */

/* YouTube API End */

/* bottom Start */
document.addEventListener("DOMContentLoaded", function() {
  const h1Element = document.querySelector(".bottom h1");
  const text = h1Element.innerText;
  const modifiedText = text.replace("M", "<span class='pink-letter'>M</span>");
  h1Element.innerHTML = modifiedText;
});

/* bottom End */
