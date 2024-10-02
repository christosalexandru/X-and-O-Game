let currentPlayer="X"
const boxes = document.querySelectorAll(".box");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

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



boxes.forEach(box=> {

    box.addEventListener("click", function() 
    {
      if(this.textContent ==="")
      {
        this.textContent = currentPlayer;
            if(currentPlayer === "X")
            {
                currentPlayer = "O";

            }
            else
            {
                currentPlayer = "X";
            }
            activePlayer();
      }
    })

});

function rematch()
{
    boxes.forEach(box=>{
        box.textContent = "";
    })
    currentPlayer = "X";
}