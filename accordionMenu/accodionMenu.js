//.menuの中のliの中のaを取得
const parentMenu = document.querySelectorAll(".menu > li > a");
for(let i = 0;parentMenu.length;i++){
  parentMenu[i].addEventListener("click",function(event){
    //1.nextElementSibling 次の要素(今回の場合はulタグ)を取得する
    //2.classを切り替える

    //preventDefault 渡ってきたイベントをキャンセルできる
    event.preventDefault();
    //クリックしたタブ自体にactiveを付与
    parentMenu[i].classList.toggle("active");
    //その次の要素にactiveを付与
    parentMenu[i].nextElementSibling.classList.toggle("active");
    /*これだけだと一瞬でデータが消える aタグがで移動しているため 解除するにはhref属性を消すか functionの中に引数を入れてあげる タグのイベントを取得する
    */
  })
}