const boxes=document.querySelectorAll(".Box");
const resetBtn=document.querySelector("#reset-btn");
const winner=document.querySelector(".winner");
const message=document.querySelector("#msg");
const newgame=document.querySelector("#newGame");
const winning_pattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let playerO=false;
const startGame=()=>{
    boxes.forEach((box)=>{
        box.innerHTML="";
        box.disabled=false;
        playerO=false;
        winner.classList.add("hide");
        message.classList.remove("message");

    })
}
const stopGame=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}
const showWinner=(player)=>{
    winner.innerHTML=`Congratulations winner ${player}`;
    winner.classList.remove("hide");
    message.classList.add("message");

}
const iswinner=()=>{
    winning_pattern.forEach((pattern)=>{
        let possi1=boxes[pattern[0]].innerHTML;
        let possi2=boxes[pattern[1]].innerHTML;
        let possi3=boxes[pattern[2]].innerHTML;
        if(possi1 ==""){
            return;
        }
        else if(possi1===possi2 && possi2==possi3){
            showWinner(possi1);
            stopGame();
        }

    })
}
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(playerO){
            playerO=false;
            box.innerHTML="O";
        }else{
            playerO=true;
            box.innerHTML="X";
        }
        box.disabled=true;
        iswinner();
    })

})
resetBtn.addEventListener('click',startGame)
newgame.addEventListener('click',startGame)