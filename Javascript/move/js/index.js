/*const click = document.getElementById("click");
click.addEventListener("click",function(){
    this.innerHTML = "クリックされたよ";
    this.setAttribute('disabled',true);
});*/

/*12分まで見た
setAttribute 要素に属性を追加する 要素.setAttribute(属性名,属性の値);
htmlに属性を追加するためのメソッド
id,name,hre 以外のクラス以外の属性を追加したいときはこのメソッドを使う
disabled 無効 今回の場合だとボタンをクリックしたらボタンを押せなくする属性が追加される
*/
const buttonAdd = document.getElementById("button-add");
const buttonClear = document.getElementById("button-clear");
const buttonAllClear = document.getElementById("button-all-clear");
const list = document.getElementById("list");

buttonAdd.addEventListener("click",function(){
    const element = document.createElement("li");
    element.innerHTML = "リスト";
    list.appendChild(element);
});
/*HTMLの要素を作成 document.createElement(HTMLタグ名);
作っただけでは画面に出るということはなく作ったものを画面に表示させる処理が必要
作ったエレメントをどうするかという処理を書かなくてはいけない
〜の要素の中に〜を追加してくださいと言う意味 appendChild
今回はlist(ulタグ)に追加element(作ったliタグ要素)*/
buttonClear.addEventListener("click",function(){
    //list.removeChild(list.lastChild);   //list.firstChildとすれば一番上(一番古いものから削除される)
    list.removeChild(list.lastChild);
});
buttonAllClear.addEventListener("click",function(){
    //list.removeChild(list.lastChild);   //list.firstChildとすれば一番上(一番古いものから削除される)
    while(list.lastChild){ //listの最後の要素が存在するならtrue なくなったらfalse
        list.removeChild(list.lastChild);
        //list.remove(); //このように書くとulタグの中身ではなくulタグそのものを削除する
    }
});
/*removeChild 指定した要素の子要素を削除する
list(ul)タグの中にある子ようそlist要素の一つ一つを削除する
ulタグの中にある最後の子要素から削除する
*/

//特定のHTML要素を探し出して取得できるようなメソッド
//要素を取得
//CSSで使うようなセレクタ指定で要素を検索して取得できる
/*document.querySelector();
document.querySelectorAll();*/
//初めに見つかった一つだけの要素を取得する
//見つかった全ての要素を取得できる
/*
    const element = document.querySelector('.button .button-yellow');
    const element1 = document.querySelector('.button .button-blue');//colorというクラスの中にあるbutton-blueと言うクラス
    console.log('.button-blueで取得した要素',element1);
    const element2 = document.querySelector('.button .button:last-of-type');//colorと言うクラスの中にあるボタンというクラスの一番最後の要素
    console.log('.last-of-typeで取得した要素',element2);
    const element3 = document.querySelectorAll('.button');//buttonというクラス名を持つ全ての要素
    //()の中にセレクタ名を書いて該当する要素を取得することができる
    console.log('.buttonで取得した全ての要素',element3);

    document.getElementById や document.getElementsByClassNameで事足りる時は極力こちらを使った方がいい
    コードが増えるほど処理が重くなるため
    単純なid指定やクラス指定では難しい場合にquerySelectorやquerySelectorAllを使う
*/
