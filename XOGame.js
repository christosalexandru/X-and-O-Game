let currentPlayer="X"
const boxes = document.querySelectorAll(".box");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
let playerXMoves = [];
let counter=0;

const winningPatterns = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]  
];


function activePlayer()
{
 if(currentPlayer === "X")
 {
    player1.classList.add("active");
    player2.classList.remove("active");
} else {
    player2.classList.add("active");
    player1.classList.remove("active");
}
 }

boxes.forEach((box,index)=> {

    box.addEventListener("click", function() 
    {
      if(this.textContent ==="")
      {
        this.textContent = currentPlayer;
            if(currentPlayer === "X")
            {
                playerXMoves.push(index);
               if(counter===3)
                {
                    counter;
                } 
                counter++;
                currentPlayer = "O";
                activePlayer();
               computer();
            }
            else
            {
                currentPlayer = "X";
                activePlayer();
            }
           
      }
    })

});

function computer() {


for(let i=0;i<winningPatterns.length;i++)
{
  
   for(let j=0;j<counter;j++)
   {
     if(winningPatterns[i][j]===playerXMoves[j])
     {
        boxes[i][j+1].textContent = "O";
     }
   
   
   }
   
  
}

//     [0, 1, 2],    
//     [3, 4, 5], 
//     [6, 7, 8], 
//     [0, 3, 6], 
//     [1, 4, 7], 
//     [2, 5, 8], 
//     [0, 4, 8], 
//     [2, 4, 6]  


}
    


    








function rematch()
{
    boxes.forEach(box=>{
        box.textContent = "";
    })
    currentPlayer = "X";
}
