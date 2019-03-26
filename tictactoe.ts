import { question } from "readline-sync";

let myTurn = true
let moves = 9
let currentPlayer
const board = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]

//display board
function displayBoard(array) {
  let i = 0
  while (i < 9) {
    console.log(array[i] + " | " + array[i + 1] + " | " + array[i + 2])
    i = i + 3
  }
}
displayBoard(board)

//alternate turn between player
while (moves > 0) {
  let cellSymbol = myTurn ? "x" : "o"
  currentPlayer = myTurn ? "Player A" : "Player B"

  let ansMove = parseInt(question(currentPlayer + " turn. Choose your cell number.\n"))
  if (isNaN(ansMove) || ansMove < 0 || ansMove > 8) {
    console.log("Wrong move")
  }
  else if (board[ansMove] === "x" || board[ansMove] === "o") {
    console.log("Cell occupied!")
  }
  else {
    board[ansMove] = cellSymbol
    moves = moves - 1
    checkWin(cellSymbol)
    myTurn = !myTurn
    displayBoard(board)
  }
}

//Check any winner or draw
function checkWin(player) {
  if ((board[0] === player && board[1] === player && board[2] === player)
    || (board[3] === player && board[4] === player && board[5] === player)
    || (board[6] === player && board[7] === player && board[8] === player)
    || (board[0] === player && board[3] === player && board[6] === player)
    || (board[1] === player && board[4] === player && board[7] === player)
    || (board[2] === player && board[5] === player && board[8] === player)
    || (board[0] === player && board[4] === player && board[8] === player)
    || (board[2] === player && board[4] === player && board[6] === player)) {
    console.log(currentPlayer + " Win!")
    moves = 0
  } else if (moves === 0) {
    console.log("Draw!")
  }
}
