function aiBestMove(){

let bestScore = -Infinity
let move = null

for(let i=0;i<9;i++){

if(board[i] === ""){

let removed = simulateMove(i,"O")

let score = minimax(0,false)

undoMove(i,"O",removed)

if(score > bestScore){

bestScore = score
move = i

}

}

}

return move

}

function minimax(depth,isMax){

let winner = checkWinner()

if(winner === "O") return 10 - depth
if(winner === "X") return depth - 10

if(depth > 6) return 0

if(isMax){

let best = -Infinity

for(let i=0;i<9;i++){

if(board[i] === ""){

let removed = simulateMove(i,"O")

let score = minimax(depth+1,false)

undoMove(i,"O",removed)

best = Math.max(best,score)

}

}

return best

}else{

let best = Infinity

for(let i=0;i<9;i++){

if(board[i] === ""){

let removed = simulateMove(i,"X")

let score = minimax(depth+1,true)

undoMove(i,"X",removed)

best = Math.min(best,score)

}

}

return best

}

}

function simulateMove(index,player){

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

function undoMove(index,player,removed){

board[index] = ""

let moves = player === "X" ? xMoves : oMoves

moves.pop()

if(removed !== null){

moves.unshift(removed)

board[removed] = player

}

}