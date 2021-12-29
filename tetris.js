/*------
CONSTANTS
-------*/
const canvas = document.getElementById('board')
const ctx = canvas.getContext('2d')
const canvasNext = document.getElementById('upcoming')
const ctxNext = canvasNext.getContext('2d')

const canvasW = 10; //width in blocks
const canvasH = 20; //height in blocks
ctx.scale(x, y) //TODO: define scale

const SCORE = 0;

//prettier-ignore
const PIECE = [
    []
]

const playButton = document.getElementById('play-btn')
playButton.addEventListener('click', () => {
//call the function that starts the game
})

function start() {
    //function that resets/starts the board and hides play button
}

function reset() {
    //clears the board, also is called on start()
}


function lose() {
    //stops the game when the player loses
}

