/*---------------
CANVAS AND CONTEXT
----------------*/
//TODO: add window 'load' event
const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
const canvasNext = document.getElementById('upcoming');
const ctxNext = canvasNext.getContext('2d');

/*------------
GAME CONSTANTS
------------*/
const BOARD_WIDTH = 10; //width in blocks
const BOARD_HEIGHT = 20; //height in blocks
const SCORE = 0;

//prettier-ignore
const PIECE = [
    // I SHAPE
    [0,0,0,0,
     1,1,1,1,
     0,0,0,0,
     0,0,0,0],

    // L SHAPE
    [1,0,0,
     1,1,1,
     0,0,0],

    // J SHAPE
    [0,0,1,
     1,1,1,
     0,0,0],

    // T SHAPE
    [0,1,0,
     1,1,1,
     0,0,0],

    // O SHAPE
    [1,1,
     1,1],

    // S SHAPE
    [0,1,1,
     1,1,0,
     0,0,0],

    // Z SHAPE
    [1,1,0,
     0,1,1,
     0,0,0]
];

/*---------------------------------------
CALCULATE SCALE AND FILL CANVAS RECTANGLE
----------------------------------------*/
ctx.canvas.width = BOARD_WIDTH * 20;
ctx.canvas.height = BOARD_HEIGHT * 20;
ctx.scale(20, 20);
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, canvas.width, canvas.height);

/*---------------
PLAY BUTTON EVENT
---------------*/
const playButton = document.getElementById('play-btn');
playButton.addEventListener('click', () => {
    //call the function that starts the game
});

/*------------
GAME FUNCTIONS
------------*/
function start() {
    //function that resets/starts the board and hides play button
}

function reset() {
    //clears the board, also is called on start()
}

function lose() {
    //stops the game when the player loses
}
