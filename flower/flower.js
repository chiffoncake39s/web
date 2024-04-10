/*スクロール時のイベント*/
$(window).scroll(function() {
    // スクロール位置を取得
    let scroll = $(window).scrollTop();
    /*メインビジュアルの拡大・縮小*/
    mv_scale(scroll);
});
/*メインビジュアルの拡大・縮小（共通処理）*/
function mv_scale(scroll){
    // window.innerWidthで画面幅を取得
    // PC表示の場合の処理（画面幅が900pxより大きい場合　※900pxはCSSのブレークポイントとあわせる）
    if(window.innerWidth > 900) {
    // メインビジュアルのCSS（width）を変更する
    // widthの値をスクロール量にあわせて増やすことで画像を拡大させる
        $('#mainvisual img').css({
        'width': 100/3 + scroll/10  + '%'
        });
        // スマホ表示の場合の処理（画面幅が900px以下の場合）
    }else{
        // メインビジュアルのCSS（width）を変更する
        // widthの値をスクロール量にあわせて減らすことで画像を縮小させる
        $('#mainvisual img').css({
            'width': 100 - scroll/10  + '%'
        });
    }
}