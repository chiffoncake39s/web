window.addEventListener("scroll",function(){
    //スクロールの高さを取得
    let scroll = window.pageYOffset;
    if(scroll > 2000){
        this.document.body.style.backgroundImage = "url('img/back-ground.jpg')";
        this.document.body.style.backgroundRepeat = "no-repeat";
        this.document.body.style.backgroundSize = "cover";
        //this.document.body.style.backgroundColor = "#4753";
    }
    if(scroll > 2600){
        //this.document.body.style.backgroundColor = "#000";
        this.document.body.style.backgroundImage = "url('img/back-ground.jpg')";
        this.document.body.style.backgroundRepeat = "no-repeat";
        this.document.body.style.color = "#fff";
    }

})
