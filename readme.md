# Classic Snake Game #

## General Assembly SEI | Project One | HTML/CSS/JavaScript | Solo | 1 Week ##

Link to game: https://sallyali7.github.io/sei-project-one-/

### Overview ###

A classic Nokia Snake Game. A snake moves continuously in a box and a random apple appears within the paramter. The player controls the snake's direction and everytime it eats an apple it grows in length and a new apple is generated at another random location. The Snake dies and the player loses everytime it crashes into a wall. Score board is updated whenever the snake eats an apple. 

## Project Brief & MVP ##

• Render a game in the browser. 

• Design logic for how the game is played and won. 

• Include separate HTML/ CSS / JavaScript files. 

• Use Javascript for Dom manipulation 

• KISS and DRY Code

• Deploy the game for public access.

## Technologies Used ##

• HTML5

• CSS3

• JavaScript(ES6)

## Planning ##

This was the first project I ever built so even the planning stage was a great learning curve. I created an outline of what I would like the game to do and how it would look like. I quickly learnt that a lot more depth has to go into the planning of building anything. I revisited my plan and thoroughly thought through which methods need to be used for the game to actually function properly. I used Excalidraw to plan this one.

## Process ##

My first step was to create the grid that I used as the base of the game. Next was creating the snake out of an array of cells and class with some css to give the illusion of a moving snake. 

```js
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
```
Then, I proceed to making the movement of the snake along with a set timer and eventlisteners to indicate direction and position.

```js
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
```
It was then time to generate the apple at random using Math.floor and Math.random to randomly allocate a cell and add a class to it that contains a gif on an apple. 

```js
function addApple() {
  let randomCell = Math.floor(Math.random() * cells.length)
  while (snakeCells.includes(randomCell)){
    randomCell = Math.floor(Math.random() * cells.length)
  }
  cells[randomCell].classList.add('apple')  
}
addApple()
```
Lastly, i've added *if statements* to declare what happens if a snake eats an apple or crashes into a wall. 


## Screenshots ##

**Game:**

 ![imagename](/assets/snake.png)

**Score board update:** 

![imagename](/assets/scoreboard.png)

**Game Over Alert:**

![imagename](/assets/gameover.png)



## Challanges ##

The main challenge for me was creating the illusion of a moving Snake. Even though the snake appears as a separate object moving along the grid, in reality it is cells of the grid changing colour in the direction that the "snake" is directed to move. Another challange was ensuring that the next random generated apple was not created on the cells that the snake is on. 

```js function getNextSnakePositions() { 
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
```
Function to prevent apple from being generated on snake
```js
function addApple() {
  let randomCell = Math.floor(Math.random() * cells.length)
  while (snakeCells.includes(randomCell)){
    randomCell = Math.floor(Math.random() * cells.length)
  }
  cells[randomCell].classList.add('apple')  
}
addApple()

```
## Wins ##

Everything about this project was a win for me, my very first project. I learnt a lot not only in regards to Syntax but also in regards to developer logic and how to plan things properly. 

The logic of creating an illusion of a moving entity through grid cells was a new principle for me and the beginning of my transition from a user to a developer. 

It also showed me how powerful CSS is, even though the functions were created using JavaScript, it was the CSS that made it visible. 

## Key Learnings ##

As a very first project, everything was a key learning point but a couple stand out that I'll carry out with me throughout my developer journey: 

• Plan extensively, not just what an app should do and how it should look like. Spending time on wireframing saves a lot of trouble and time being on wasted on refactoring and rethinking logic. 

• Google and research as much as possible when stuck with a problem. Intially that felt like cheating but  in reality it is a very important skill to have as a developer. Tech changes rapidly and continuously so it is important to research and stay informed. 

## Future Features ## 
• Snake dies when it crashes into itself 

• Snake speeds up everytime it eats an apple

• Mobile Responsive











