let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector(".reset-btn");
 
let turn0 =true;  //playerx, player0

const winPatterns =[
  [0,1,2],
  [0,4,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [3,4,5],
  [2,4,6],
  [6,7,8]
];
boxes.forEach((box)=>{
  box.addEventListener("click", ()=>{
    console.log('box was clicked');
  
  if(turn0){
    box.innerText ="0";
    turn0=false;
  
  }
  else{
    box.innerText="X"
    turn0=true;
  }
  box.disabled= true;
  checkWinner();
});
});
const checkWinner=()=>{
  for(let pattern of winPatterns){
    if()
  }
}