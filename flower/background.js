$(window).scroll(function(){
    //スクロール位置を取得
    let scroll = $(window).scrollTop;
    //画面下からgalleryまでの位置を取得
    let gallery_position = $('#gallery').offset().top - $(window).height();
    //画面下からaccessまでの位置を取得
    let access_position = $('#gallery').offset().top - $(window).height();

});