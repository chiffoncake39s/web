window.addEventListener("scroll",function(){
    //スクロールの高さを取得
    let scroll = window.pageYOffset;
    if(scroll > 200){
        this.document.body.style.backgroundImage = "url('background-brack.jpg')";
        this.document.body.style.backgroundRepeat = "no-repeat";
        this.document.body.style.backgroundSize = "cover";
        //this.document.body.style.backgroundColor = "#4753";
    }

})
window.addEventListener("scroll",function(){
    let scroll = window.pageYOffset;
    if(scroll > 400){
        //this.document.body.style.backgroundColor = "#000";
        this.document.body.style.backgroundImage = "url('pokemon.jpg')";
        this.document.body.style.backgroundRepeat = "no-repeat";
        this.document.body.style.color = "#fff";
    }
})
window.addEventListener("scroll",function(){
    let scroll = window.pageYOffset;
    if(scroll > 1800){
        //this.document.body.style.backgroundColor = "#000";
        this.document.body.style.backgroundImage = "url('background-brack.jpg')";
        this.document.body.style.backgroundRepeat = "no-repeat";
        this.document.body.style.color = "#fff";
    }
})
