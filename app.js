let gameseq=[];
let userseq=[];

let btns=["red","yellow","aqua","lightgreen"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");


document.addEventListener("keypress", function(){
    if (started == false){
        console.log("game is started");
        started = true;
        
        lvlup();
    }
});


function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250); 
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250); 
}

function lvlup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let ranin = Math.floor(Math.random()*3);
    let rancolor = btns[ranin];
    let ranbtn = document.querySelector(`.${rancolor}`);
    gameseq.push(rancolor);
    console.log(gameseq);
    gameflash(ranbtn);
    
}

function check(idx){
    if (userseq[idx] === gameseq[idx]){
        if (userseq.length === gameseq.length) {
            setTimeout(lvlup,1000);
        }
    }
    else {
        h2.innerHTML = `Game Over! Score =  <b>${level}</b> <br> Click to start.`;
        
        let bg = document.querySelector("body");
        bg.style.backgroundColor = "red";
       
        setTimeout( ()=> {
          bg.style.backgroundColor = "bisque";
        }, 150);
        reset();
    }
}

function btnpress (){
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    check(userseq.length - 1);
}



let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}

