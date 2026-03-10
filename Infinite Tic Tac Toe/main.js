let mode = null
let aiOrder = "second"

window.addEventListener("DOMContentLoaded", () => {

const menu = document.getElementById("menu")
const game = document.getElementById("game")
const aiOptions = document.getElementById("aiOptions")

/* BOARD CLICK EVENTS */

cells.forEach(cell => {
cell.addEventListener("click", handleClick)
})

/* MENU BUTTONS */

document.getElementById("single").onclick = () => {
mode = "single"
aiOptions.style.display = "block"
}

document.getElementById("multi").onclick = () => {
mode = "multi"
startGame()
}

document.getElementById("aiFirst").onclick = () => {
aiOrder = "first"
startGame()
}

document.getElementById("aiSecond").onclick = () => {
aiOrder = "second"
startGame()
}

/* GAME BUTTONS */

document.getElementById("restart").onclick = restartGame

document.getElementById("back").onclick = () => {
game.style.display = "none"
menu.style.display = "block"
}

/* START GAME FUNCTION */

function startGame(){

menu.style.display = "none"
game.style.display = "block"

restartGame()

if(mode === "single" && aiOrder === "first"){

currentPlayer = "O"
updateStatus("AI Turn")

setTimeout(aiTurn,600)

}

}

})

/* PLAYER MOVE */

function handleClick(){

if(!gameActive) return

let index = this.dataset.index

if(board[index] !== "") return

let removed = placeMove(index,currentPlayer)

drawBoard()
highlightNextRemoval()

if(removed !== null){
removeCell(removed)
}

let winner = checkWinner()

if(winner){

gameActive = false

clearRemovalIndicators()

highlightWin(winner)

updateStatus(currentPlayer + " Wins!")

return

}

switchPlayer()
updateStatus("Player " + currentPlayer + " Turn")
highlightNextRemoval()

if(mode === "single" && currentPlayer === "O"){
setTimeout(aiTurn,500)
}

}

/* AI MOVE */

function aiTurn(){

let move = aiBestMove()

let removed = placeMove(move,"O")

drawBoard()
highlightNextRemoval()

if(removed !== null){
removeCell(removed)
}

let winner = checkWinner()

if(winner){

gameActive = false

clearRemovalIndicators()

highlightWin(winner)

updateStatus("AI Wins")

return

}

switchPlayer()
updateStatus("Player X Turn")
highlightNextRemoval()

}

/* RESET GAME */

function restartGame(){

board = ["","","","","","","","",""]

xMoves = []
oMoves = []

currentPlayer = "X"

gameActive = true

drawBoard()
updateStatus("Player X Turn")
highlightNextRemoval()

}