let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let msg = document.querySelector(".msg");
console.log(boxes)

let turnO = true;

let winningSequence = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6] 
]


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O"
            turnO = false;
            console.log("box clicked");
        }
        else{
            box.innerText = "X";
            turnO = true;
            console.log("box clicked");
        }
        box.disabled = true;
        checkWinner()
    } )
})

const checkWinner = ()=>{
    for(let winning of winningSequence){
        let firstVal = boxes[winning[0]].innerText
        let seconVal = boxes[winning[1]].innerText
        let thirdVal = boxes[winning[2]].innerText
        if(firstVal !="" && seconVal !=""&& thirdVal !="" ){
            if(firstVal == seconVal && seconVal==thirdVal)  {
                console.log(firstVal+ " is a winner")
                showWinner(firstVal)
            }
        }
    }
}
const showMessage = function(firstVal) {
    msg.innerText = firstVal+ " is a winner"
}
const showWinner = function(firstVal){
               disabledBoxes();
               showMessage(firstVal)
}
const disabledBoxes = function(){
    for(let box of boxes){
        box.disabled =true;
    }
}
const enabledBoxes = function(){
    for(let box of boxes){
        box.disabled =false;
    }
}

const clearContent = function(){
    for(let box of boxes){
        box.innerText = '';
    }
    msg.innerText = '';
}

reset.addEventListener('click',function(){
    turnO =true
    clearContent()
    enabledBoxes()
})