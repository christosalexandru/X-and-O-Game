let currentPlayer = "X"
const boxes = document.querySelectorAll(".box");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
let playerXMoves = [];
let counter = 0;

let gameState = [['', '', ''], ['', '', ''], ['', '', '']];

const rematch = ()=>{
    console.log(gameState)
    gameState = [['', '', ''], ['', '', ''], ['', '', '']];
    boxes.forEach(box => {
        box.textContent = "";
    })
    currentPlayer = "X";
}


function activePlayer() {
    console.log(currentPlayer);
    if (currentPlayer === "X") {
        player1.classList.add("active");
        player2.classList.remove("active");
        currentPlayer = "O";
    } else {
        player2.classList.add("active");
        player1.classList.remove("active");
        currentPlayer = "X";
    }
}



boxes.forEach((box, index) => {

    box.addEventListener("click", function () {
        if (this.textContent === "") {
            this.textContent = currentPlayer;
            activePlayer();
            gameState[Math.floor(index / 3)][index % 3] = this.textContent;
            console.table(gameState);
        }
    })

});

function playAgainstComputer() {
    rematch();
    currentPlayer = "X";
    player2.textContent = "Computer (0)";
    boxes.forEach((box, index) => {
        box.addEventListener("click", function () {
            playComputerMove(box, index);
        })
    });
}



function playComputerMove(box, index) {

    let middleBox = document.getElementById("4");
    // if middle box is empty, computer will play in the middle
    if (middleBox.textContent === "") {
        middleBox.textContent = currentPlayer;
        gameState[1][1] = currentPlayer;
        activePlayer();
        return;
    }
    //check if player can win in next move
    let row = Math.floor(index / 3);
    let col = index % 3;
    playPCMove(row, col);



}


function playPCMove(row, col) {

    if (gameState[row][(col + 1) % 3] === 'X' && gameState[row][(col + 2) % 3] === '') {
        gameState[row][(col + 2) % 3] = 'O';
        document.getElementById((row * 3) + (col + 2) % 3).textContent = 'O';
        activePlayer();
        return;
    }
    if (gameState[row][(col + 2) % 3] === 'X' && gameState[row][(col + 1) % 3] === '') {
        gameState[row][(col + 1) % 3] = 'O';
        document.getElementById((row * 3) + (col + 1) % 3).textContent = 'O';
        activePlayer();
        return;
    }
    if (gameState[(row + 1) % 3][col] === 'X' && gameState[(row + 2) % 3][col] === '') {
        gameState[(row + 2) % 3][(col)] = 'O';
        document.getElementById((((row + 2) % 3) * 3) + col).textContent = 'O';
        activePlayer();
        return;
    }
    if (gameState[(row + 2) % 3][col] === 'X' && gameState[(row + 1) % 3][col] === '') {
        gameState[(row + 1) % 3][col] = 'O';
        document.getElementById((((row + 1) % 3) * 3) + col).textContent = 'O';
        activePlayer();
        return;
    }
    //check if in corner
    if (row != 1 & col != 2) {
        console.log('in corner')
        if (gameState[(row + 1) % 3][(col + 1) % 3] === 'X' && gameState[(row + 2) % 3][(col + 2) % 3] === '') {
            gameState[(row + 2) % 3][(col + 2) % 3] = 'O';
            document.getElementById((((row + 2) % 3) * 3) + ((col + 2) % 3)).textContent = 'O';
            activePlayer();
            return;
        }
        if (gameState[(row + 2) % 3][(col + 2) % 3] === 'X' && gameState[(row + 1) % 3][(col + 1) % 3] === '') {
            gameState[(row + 1) % 3][(col + 1) % 3] = 'O';
            document.getElementById((((row + 1) % 3) * 3) + ((col + 1) % 3)).textContent = 'O';
            activePlayer();
            return;
        }
        // check negative diagonals:
        let checkXRow = (row - 1 % 3)
        if (checkXRow < 0) { checkXRow *= -1 }
        let checkXCol = (col - 1 % 3)
        if (checkXCol < 0) { checkXCol *= -1 }
        let checkEmptyRow = (row - 2 % 3)
        if (checkEmptyRow < 0) { checkEmptyRow *= -1 }
        let checkEmptyCol = (col - 2 % 3)
        if (checkEmptyCol < 0) { checkEmptyCol *= -1 }
        console.log(checkXRow, checkXCol, checkEmptyRow, checkEmptyCol)
        if (gameState[checkXRow][checkXCol] === 'X' && gameState[checkXRow][checkEmptyRow] === '') {
            gameState[(checkEmptyRow)][checkEmptyCol] = 'O';
            document.getElementById((checkEmptyRow * 3) + checkEmptyCol).textContent = 'O';
            activePlayer();
            return;
        }
    }
    // could improve this to try winning moves.
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            if (gameState[i][j] === '') {
                gameState[i][j] = 'O';
                document.getElementById((i * 3) + j).textContent = 'O';
                activePlayer();
                return;
            }
        }
    }
    //    }
}


