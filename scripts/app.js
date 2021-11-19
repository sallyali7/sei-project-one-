// * Dom Elements
const grid = document.querySelector('.grid')
const cells = []
const scoreDisplay = document.querySelector('#result')



// * variables
const width = 10
const gridCellCount = width * width
const snakeCells = [35, 34, 33]
let score = 0


// * functions 
function createSnake() {
  snakeCells.forEach(index => {
    cells[index].classList.add('snake')
  } )
}
function removeSnake() {
  snakeCells.forEach(index => {
    cells[index].classList.remove('snake')
  } )
}
function createGrid() {
  for (let i = 0; i < gridCellCount; i++) {
    const cell = document.createElement('div')
    // cell.textContent = i 
    cells.push(cell)
    grid.appendChild(cell)
  }
  createSnake()
}
createGrid()

function addApple() {
  let randomCell = Math.floor(Math.random() * cells.length)
  while (snakeCells.includes(randomCell)){
    randomCell = Math.floor(Math.random() * cells.length)
  }
  cells[randomCell].classList.add('apple')  
}
addApple()

function removeApple() {
  cells.forEach(cell => {
    cell.classList.remove('apple')
  })
}

let snakeDirection =  1

function direction(e) {
  if (e.key === 'ArrowRight' && snakeDirection !== -1) {
    snakeDirection = 1
  } else if (e.key === 'ArrowLeft' && snakeDirection !== 1) {
    snakeDirection = -1
  } else if (e.key === 'ArrowUp' && snakeDirection !== 10) {
    snakeDirection = -10
  } else if (e.key === 'ArrowDown' && snakeDirection !== -10) {
    snakeDirection = 10
  }
}


let movementInterval = null

function getNextSnakePositions() { 
  const currentHead = snakeCells[0] 
  const currentX = currentHead % width
  const currentY = Math.floor(currentHead / width)
  console.log(currentY)
  if (
    (currentX > 8 && snakeDirection === 1) || 
    (currentX === 0 && snakeDirection === -1) ||
    (currentY === 0 && snakeDirection === -10) ||
    (currentY > 8 && snakeDirection === 10)
  
  ){
    window.clearInterval(movementInterval)
    window.alert('Game Over')
    window.location.reload()
    return
  }
  const nextHead = currentHead + snakeDirection
  snakeCells.unshift(nextHead)
  if (cells[nextHead].classList.contains('apple')){
    console.log('apple')
    score += 100
    scoreDisplay.textContent = score
    removeApple()
    addApple()
  } else {
    snakeCells.pop()
  }
}

function moveSnake() {
  // * Every tick of the timer....
  movementInterval =  setInterval(() => {
    removeSnake() // * remove the current position
    getNextSnakePositions() // * calculate the new ones, (or game over if invalid)
    createSnake() // * draws snake back to new positions
  }, 500)
}
moveSnake()
document.addEventListener('keyup', direction)

