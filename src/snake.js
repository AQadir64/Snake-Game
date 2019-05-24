/////////////////////////////////////////////////////////
//
// Snake Game Box 
//
////////////////////////////////////////////////////////
const gameCanvas = document.getElementById('gameCanvas')
const ctx = gameCanvas.getContext('2d')

const canvas = () => {
    const gameCanvas = document.getElementById('gameCanvas')
    const ctx = gameCanvas.getContext('2d')
    const canvasBorder = "black"
    const canvasBag = "white"
    ctx.strokestyle = canvasBorder
    ctx.fillStyle = canvasBag
    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height)
    ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height)
}
canvas()

/////////////////////////////////////////////////////////
//
// Snake 
//
////////////////////////////////////////////////////////

let snake = [
    { x: 150, y: 150 },
    { x: 140, y: 150 },
    { x: 130, y: 150 },
    { x: 120, y: 150 }
]


let dy = 0
let dx = 10
let foodX = 0
let foodY = 0
let score = 0
/////////////////////////////////////////////////////////
//
// Initial Snake 
//
////////////////////////////////////////////////////////

const drawSnakePart = (snakePart) => {

    const gameCanvas = document.getElementById('gameCanvas')
    const ctx = gameCanvas.getContext('2d')

    const snakebag = "lightgreen"
    const snakeborder = "darkgreen"

    ctx.fillStyle = snakebag
    ctx.strokestyle = snakeborder

    ctx.fillRect(snakePart.x, snakePart.y, 10, 10)
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10)
}

const drawSnake = () => {
    snake.forEach(element => {
        drawSnakePart(element)
    });
}

drawSnake()

//////////////////////////////////////////////////////// 
//
// snake direction change function
// 
//////////////////////////////////////////////////////// 

const changeDirection = (event) => {
    const LEFT_KEY = 37
    const RIGHT_KEY = 39
    const UP_KEY = 38
    const DOWN_KEY = 40

    const keyPressed = event.keyCode
    const goingUp = dy === -10;
    const goingDown = dy === 10;
    const goingRight = dx === 10;
    const goingLeft = dx === -10;

    if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -10
        dy = 0
    }

    if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 10
        dy = 0
    }
    if (keyPressed === DOWN_KEY && !goingDown) {
        dx = 0
        dy = 10
    }
    if (keyPressed === UP_KEY && !goingDown) {
        dx = 0
        dy = -10
    }
}

document.addEventListener("keydown", changeDirection)

/////////////////////////////////////////////////////////
//
// advanced Snake  
//  dx change in x
//  dy chnage in y
//
////////////////////////////////////////////////////////

const advanceSnake = () => {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy }
    snake.unshift(head)
    const didEatFood = snake[0].x == foodX && snake[0].y == foodY
    if (didEatFood) {
        score+=10
        
        const GameScore = document.getElementById('score')
        GameScore.innerHTML = score
        createFood()
    }
    else {
        snake.pop()
    }
}



//////////////////////////////////////////////////////// 
//
// random food
// 
//////////////////////////////////////////////////////// 



const random = (max) => {
    return Math.round((Math.random() * max) / 10) * 10;
}

const createFood = () => {
    foodX = random(gameCanvas.width - 10)
    foodY = random(gameCanvas.height - 10)

    snake.forEach((part) => {
        const foodIsOnSnake = part.x == foodX && part.y == foodY
        if (foodIsOnSnake) {
            createFood()
        }
    })
}

const drawFood = () => {
    ctx.fillStyle = "red"
    ctx.strokestyle = "darkred"
    ctx.fillRect(foodX, foodY, 10, 10)
    ctx.strokeRect(foodX, foodY, 10, 10)
}

//////////////////////////////////////////////////////// 
//
// snake main function
// 
//////////////////////////////////////////////////////// 

const main = () => {
    setTimeout(() => {
        canvas()
        drawFood()
        advanceSnake()
        drawSnake()
        // call move again 
        main()
    }, 100);
}


//////////////////////////////////////////////////////// 
//
// score
//
//////////////////////////////////////////////////////// 

main()
createFood()










