let boxes = document.querySelectorAll(".box");
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
        console.log(winning)
    }
}