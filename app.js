let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-btn");
let msg = document.querySelector("#msg");
let newGame =document.querySelector("#new-btn")

let msgContainer =document.querySelector(".msg-container")
 
let turn0 =true;  //playerx, player0

const winPatterns =[
  [0,1,2],
  [0,4,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [3,4,5],
  [2,4,6],
  [6,7,8],
];


const resetGame =()=>{
  turn0=true;
  enableBoxes();
  msgContainer.classList.add("hide"); // Hide the message container
}

boxes.forEach((box)=>{
  box.addEventListener("click", ()=>{
    if (turn0) {
      box.innerText = "O";  // Changed from "y" to "O"
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled= true;
    checkWinner();
    
  });
});
const showWinner = (winner) => {
  msg.innerText = `The winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
}

const checkWinner=()=>{
  for(let pattern of winPatterns){
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    
    if (pos1!== "" && 
        pos1=== pos2&& 
        pos2 === pos3) {
      console.log("The winner is", pos1.innerText);
      showWinner(pos1);
      
      
    }
  }
}
const disableBoxes =()=>{
  for(box of boxes){
    box.disabled= true;
  }
}
const enableBoxes =()=>{
  for(box of boxes){
    box.disabled= false;
    box.innerText="";
  }
}
resetBtn.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);