let cells
let statusText

window.addEventListener("DOMContentLoaded", () => {

cells = document.querySelectorAll(".cell")
statusText = document.getElementById("status")

/* GHOST PREVIEW */

cells.forEach(cell => {

cell.addEventListener("mouseenter", () => {

let index = cell.dataset.index

if(board[index] !== "" || !gameActive) return

if(currentPlayer === "X"){
cell.textContent = "X"
cell.style.opacity = "0.3"
}
else{
cell.textContent = "O"
cell.style.opacity = "0.3"
}

})

cell.addEventListener("mouseleave", () => {

let index = cell.dataset.index

if(board[index] !== "") return

cell.textContent = ""
cell.style.opacity = "1"

})

})

})

/* DRAW BOARD */

function drawBoard(){

cells.forEach((cell,i)=>{
cell.textContent = board[i]
cell.style.opacity = "1"
})

}

/* REMOVE CELL WITH ANIMATION */

function removeCell(index){

let cell = cells[index]

cell.classList.add("slide-remove")

setTimeout(()=>{

cell.classList.remove("slide-remove")
cell.textContent = ""

},500)

}

/* UPDATE STATUS TEXT */

function updateStatus(text){
statusText.textContent = text
}

/* HIGHLIGHT NEXT REMOVAL */

function highlightNextRemoval(){

/* stop indicator if game ended */

if(!gameActive) return

cells.forEach(cell=>{
cell.classList.remove("next-remove")
})

if(currentPlayer === "X" && xMoves.length === 3){

let oldest = xMoves[0]
cells[oldest].classList.add("next-remove")

}

if(currentPlayer === "O" && oMoves.length === 3){

let oldest = oMoves[0]
cells[oldest].classList.add("next-remove")

}

}

function highlightWin(pattern){

pattern.forEach(index=>{
cells[index].classList.add("win-cell")
})

}

function clearRemovalIndicators(){

cells.forEach(cell=>{
cell.classList.remove("next-remove")
})

}