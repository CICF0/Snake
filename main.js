// Starting Game
// Moving the Snake
// Collecting Food 
// Growing Longer 
// Avoiding Collision with border cells 

// ! Elements
const bigGrid = document.querySelectorAll('.big-grid')
console.log(bigGrid)
// Cells
const miniGrids = document.querySelectorAll('.mini-grid')
console.log(miniGrids)
for (let i=0; i < miniGrids.length; i++) {
  miniGrids(i).addEventListener('handleKeyDown', moveSnakeAroundGrid);
}
// Snake Speed
const snakeSpeed = 100;
// Border Cells 
const border = document.getSelection('#border')
// make a cell div variable
// start button
const startBtn = document.getElementById('#startBtn')
// snake cells 
// Score
const scoreDisplay = document.querySelector('#scoreDisplay')
console.log(scoreDisplay)
// resetbtn 
const resetBtn = document.querySelector('#reset-btn')

// random coloured food block cell
// const food = Array()

// Deaths
const deathDisplay = document.querySelector('.death-display')

// Snake direction constants
const UP = 'UP';
const DOWN = 'DOWN';
const LEFT = 'LEFT';
const RIGHT = 'RIGHT';
console.log('UP')
console.log('DOWN')
console.log('LEFT')
console.log('RIGHT')

//! Variables 
// starting deaths at 0, being increc=mented to 3
let deaths = 0
// Score - incremented by 1 points, starting at 0
let score = 0
// snake direction 
let snakeDirection = RIGHT;

// inTERVAL - TIMER INTERAL OF 2 SECONDS
let interval 

let className = 'food'



// ! Page Load 

// Check to see if food was passed, if not, remove life 

//Executions 
//startGame ()
function startGame(){
  //add food
  addFood()

  // set interval for 1 seconds
  timer = setInterval((snakeSpeed) => {
    // first remove previous food
    removeFood()

    // then add next food
    addFood()
// 1. get random cell 
// 2. add food class to this cell 
// 3. Check to see if food was was passed, if not, and snake hits border, remove life
// 4. if lives hit 0, game ends
}, 1000) // 1 second - 1000ms
console.log('START GAME')
}


function addFood(){
  // 1. get random cell
  const randomCell = Math.floor(Math.random() * miniGrids.length)
  console.log(randomCell)
  //2. add food class to this cell
  randomCell.classList.add(className)
}

function removeFood(){
 document.querySelector('.food').classList.remove('food')
}

function eatFood(event){
// Check to see if cell has a class
//use classList.contains for this
if(event.target.classlist.contains('food')){
  // If it does have a class of food

  // eaten class for half a second 
event.target.classList.add('eaten')
// Update score
score += 1
console.log('scoreDisplay')

// UPDATING SCORE SPAN
scoreDisplay 

scoreDisplay.innerHTML = score
// After half a second remove the eaten class and remove food
setTimeout(() => {
  
  event.target.classList.remove('eaten')
  //1. Remove the food class
  removeFood()
}, 500)
}
2000
1900
// if cell passed does not have class of food, do nothing 
console.log(event.target)
}
//Function to handle keydown events
function handleKeyDown(event) {
  switch (event.key) {
    case 'ArrowUp':
      if (snakeDirection !== DOWN) {
        snakeDirection = UP;
      }
      break;
    case 'ArrowDown':
      if (snakeDirection !== UP) {
        snakeDirection = DOWN;
      }
      break;
    case 'ArrowLeft':
      if (snakeDirection !== RIGHT) {
        snakeDirection = LEFT;
      }
      break;
    case 'ArrowRight':
      if (snakeDirection !== LEFT) {
        snakeDirection = RIGHT;
      }
      break;
    default:
      // Do nothing for other keys
  }
}

function moveSnakeAroundGrid(){

}
  console.log('MOVE SNAKE')

// Add event listener for keydown events on the document

// Later in your game loop or logic, use the `snakeDirection` to move the snake accordingly

function updateSnakePosition() {
  // Your logic to update the snake's position based on the direction
}

// set interval for 2 seconds
// get random cell
// add food class to this cell 
// function for when player starts game 
// when start game button is pressed
// snake moves at constant speed
// setInterval for constant speed of snake 
// when player presses up key
// when player presses down key
// when player presses left key 
// when player presses right key 
// for each colored food cell that snake eats, add one cell to end of snake
// for each colored food cell snake eats, snake gets longer 
// food block cell disappears when taken over by snake cells



//Events 
//Click startGame to start the game - startGame()
startBtn.addEventListener('click', startGame)
// Event listener for when key is pressed 
document.addEventListener('keydown', handleKeyDown);

console.log('keydown')
// Clcik event on the cells to eatFood
// when start game() function snakes place, add eventlistener click
// when snake is placed, snake starts to move when user presses a key, snake moves in a different at a constant speed 
//from cell to cell
