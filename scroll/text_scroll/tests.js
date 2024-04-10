//1.監視ロボットにしてほしい内容を決めておく
//監視対象に現れたら実行する動作
let show = (get) =>{
    let move = {
        opacity:[0,1],
        translate:['0px -50px',0],
    };
    get[0].target.animate(move,2000);
}
//get[0]はindex番号の0番目 targetは監視対象の要素

//new IntersectionObserver()でintersection Observerの機能が使える
//2.新しい名前をつけて監視ロボットを作成
    //const show_robot = new IntersectionObserver();
//3.監視ロボットに1で決めた動作内容を指示する
//監視ロボットの設定
const show_robot = new IntersectionObserver(show);
//4.監視ロボットを実行する  observe()で実行
//監視対象の情報を取得する
/*show_robot.observe(document.querySelector(".item0"));*/
for (let number = 0; number < 5; number++){
    show_robot.observe(document.querySelector(".lorem" + String(number)));
}