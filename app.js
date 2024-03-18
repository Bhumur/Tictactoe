let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-button")
let newGamebtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true; // playerX playerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]
let x=0
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        //console.log("box was clicked")
        x++;
        if(turnO){
            box.innerText = "O";
            turnO=false;
        }
        else{
            box.innerText = "X";
            turnO =true;
        }
        box.disabled = true;
        checkWinner();
        if(x==9)
            draw();
    })
})

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


const enableBoxes = () =>{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBoxes = () =>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulation, Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const draw = () =>{
    msg.innerText = `Game is DRAW`
    msgContainer.classList.remove("hide");
    x=0;
}

const checkWinner = () =>{
    let x=0;
    for(let pattern of winPatterns)
    {
        //console.log(pattern)
        if(boxes[pattern[0]].innerText!=""  && boxes[pattern[0]].innerText==boxes[pattern[1]].innerText && boxes[pattern[1]].innerText==boxes[pattern[2]].innerText)
        {
            console.log("Winner", boxes[pattern[0]].innerText);
            showWinner(boxes[pattern[0]].innerText);
        }
        
    }

}

newGamebtn.addEventListener("click", resetGame)
resetbtn.addEventListener("click", resetGame)