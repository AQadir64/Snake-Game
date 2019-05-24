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

/////////////////////////////////////////////////////////
//
// Snake move 
// //  key to move snake 
// // dx change in x
// // dy chnage in y
//
////////////////////////////////////////////////////////


const key = (dx=10, dy=0) => {
    console.log(snake)
    const head = { x: snake[0].x + dx, y: snake[0].y + dy }
    snake.unshift(head)
    snake.pop()
}

setTimeout(() => {
    key()
    canvas()
    drawSnake()
}, 200);

setTimeout(() => {
    key()
    canvas()
    drawSnake()
}, 300);

setTimeout(() => {
    key()
    canvas()
    drawSnake()
}, 400);

document.addEventListener('',()=>{
    setTimeout(() => {
        key(0,10)
        canvas()
        drawSnake()
    }, 400);
    
})

