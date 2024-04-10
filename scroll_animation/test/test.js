const item = document.querySelectorAll(".item");
for(let i=0;i < item.length;i++){
    const move = {
        /* 0(透明)か不透明 */
        opacity:[0,1],
        /* 向き */
        translate:['-50px -50px',0],
    };
    const options = {
        /* 秒数 0.6秒*/
        duration:600,
        /* 画像の遅延 0.5秒*/
        delay:i*500,

    }
    item[i].animate(move,options);
}