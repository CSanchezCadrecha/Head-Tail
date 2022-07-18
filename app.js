let coin = document.querySelector(".coin");
let startBtn = document.querySelector("#start-button");


startBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-head 3s forwards";
        }, 100);  
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-tail 3s forwards";
        }, 100);
    }
    setTimeout(updateStats, 3000);
    //disableButton();
});