//オブジェクトとはデータ型の一種で複数のデータをひとまとめにする

//オブジェクト
const myBlog = {
    //プロパティ(オブジェクトの中に格納した値)
    //プロパティ名 プロパティの値
    title: "Javascriptがんばるぞ",
    //メソッド(オブジェクトの中に格納した関数)
    //オブジェクトの中に格納されている関数のことだけを指した呼び方
    addPost: () => {
        console.log("記事を投稿したよ");
    }
}
    //データの取り出し
    //myBlogの中からtitleプロパティの値を取り出してconsoleで確認
    console.log(myBlog.title);
    //メソッドの値にconsole.logを使わないのは取り出すものが値ではないから
    myBlog.addPost()
//alert("こんばんは");
//windowオブジェクトの中に格納されているメソッド

//DOM操作 ドキュメント・オブジェクト・モデル
//HTMLの要素などをオブジェクトとして扱うための仕組み
//body,h1,pなどのHTMLの要素一つ一つをオブジェクトとして捉える こうすることでjavascriptで要素を操作できるようになる

//どちらもdocumentオブジェクトから呼び出して使える
//javascriptのDOM操作
//documentの中からidを手がかりにしてElement(HTML)要素を取得
//id属性は同じものは一つしか使えない
    //document.getElementById();
//Elementsの場合はsなので複数の要素を取得する
//Element HTMLの一つ一つの要素を表す単語
//classは何が何回使われていてもOK
    //document.getElementsByClassName(); //Elementsの場合は複数の要素を取り出す(s)
//単語の初めの文字を大文字にするキャメルケース
//documentはHTML要素全体を指している
/*
    const btn01 = document.getElementById("btn01");
    //()の中は取得したい要素のid名
    console.log(btn01);

    const btn = document.getElementsByClassName("btn");
    console.log(btn);
    console.log(btn[2]);
    //複数取ってきて配列(object)をまとめた形で出てくる
    //objectの中に3つの取得してきた要素をまとめているのでbtnの0番目1番目2番目と呼び出すと一つ一つ呼び出すことができる
*/
//クリックイベントの設定
const btn01 = document.getElementById("btn01");
//イベントの設置に使うのがaddEventListener
//設置したいHTMLの要素に.（ドット）で繋いであげる
btn01.addEventListener("click",function(){
    console.log(this);
});
/*
document.getElementById("btn01").btn01.addEventListener('click',function(){
    console.log(this);
});
*/
//btn01という変数に要素を取得して代入しているから.でつなぐ書き方になる
//addEventListenerには引数として渡すべき値が決まっている
//これは他のメソッドにも共通していてこのメソッドを使うときはこういう引数を何個渡してくださいというものが決まっていてその通りに指定しないとうまく動かない 詳しくはjavascriptのリファレンスに載っている
/*
addEventListenerの一つ目の引数にはどんなイベントを設置したいかの種類を指定、二つ目の引数にはイベントの内容つまりどんなことが起こるのかを関数の形式で指定してあげる
thisにはjavascript上に元々用意されている特別な変数 この場合でいくとクリックされた要素自身を表すキーワード
addEventListenerを使うときはアロー関数を使わずに無名関数を使うと良い
Ctrl + F で検索
*/
//動画37分までみた
/*

btn01.addEventListener("click",function(){
    this.classList.('clicked');
});
*/
/*class名の追加に使うのがclassList.addというメソッド ()の中に追加したいクラス名を指定する
this...クリックされた要素に対してclickedというクラス名を追加するメソッドを実行している
add クラス名追加 toggle 指定したクラス名がその要素になかったら追加してすでにあったら取り除くということを繰り返し行える 取り除くだけのremove()というものもある
クリックしたら~するといったイベントの設置とクラス名をつけ外すという動きを組み合わせることでいろいろなことができるようになる
クリックしたら開くメニュー ハンバーガーメニュー、アコーディオンメニュー、
document.getElementsByClassName;
取得した要素の一つ一つに対してはaddEventListenerは使えるけど取得した要素を一つにまとめたものに対してaddEventListenerを呼び出す書き方になっているとうまくいかない
*/
const btn = document.getElementsByClassName("btn");
for(let i = 0;i < btn.length;i++){
    btn[i].addEventListener("click",function(){
        this.classList.toggle("clicked");
    });
}
