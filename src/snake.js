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


