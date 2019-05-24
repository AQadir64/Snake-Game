/////////////////////////////////////////////////////////
//
// Snake Game Box 
//
////////////////////////////////////////////////////////
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


let dy =0
let dx =10

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

document.addEventListener("keydown",changeDirection)

/////////////////////////////////////////////////////////
//
// advanced Snake  
//  dx change in x
//  dy chnage in y
//
////////////////////////////////////////////////////////

const advanceSnake = () => {
    console.log(snake)
    const head = { x: snake[0].x + dx, y: snake[0].y + dy }
    snake.unshift(head)
    snake.pop()
}


//////////////////////////////////////////////////////// 
//
// snake continuous movement function
// 
//////////////////////////////////////////////////////// 

const move = () => {
    setTimeout(() => {
        advanceSnake()
        canvas()
        drawSnake()
        // call move again 
        move()
    },100);
}
move()

