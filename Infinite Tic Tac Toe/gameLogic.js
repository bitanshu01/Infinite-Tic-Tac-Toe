let board = ["","","","","","","","",""]

let xMoves = []
let oMoves = []

let currentPlayer = "X"

let gameActive = true

const winPatterns = [

[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]

]

function placeMove(index,player){

board[index] = player

let moves = player === "X" ? xMoves : oMoves

moves.push(index)

let removed = null

if(moves.length > 3){

removed = moves.shift()

board[removed] = ""

}

return removed

}

function checkWinner(){

for(let pattern of winPatterns){

let a = pattern[0]
let b = pattern[1]
let c = pattern[2]

if(board[a] !== "" &&
board[a] === board[b] &&
board[a] === board[c]){

return pattern

}

}

return null

}

function switchPlayer(){

currentPlayer = currentPlayer === "X" ? "O" : "X"

}