import { BOARD_WIDTH, BOARD_HEIGHT} from './constants';

window.addEventListener('load', () => {
    /*---------------
    CANVAS AND CONTEXT
    ----------------*/
    const canvas = document.getElementById('board');
    const ctx = canvas.getContext('2d');
    const canvasNext = document.getElementById('upcoming');
    const ctxNext = canvasNext.getContext('2d');
    
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
    const playButton = document.getElementById('play');
    playButton.addEventListener('click', () => {
        //call the function that starts the game
    });
});



//temportary piece for testing
//prettier-ignore
const piece = [
    [2,0,0],
    [2,2,2],
    [0,0,0]
]

//temporarily commented PIECE out until I need it
//prettier-ignore
// const PIECE = [
//     // I SHAPE
//     [0,0,0,0,
//      1,1,1,1,
//      0,0,0,0,
//      0,0,0,0],

//     // L SHAPE
//     [2,0,0,
//      2,2,2,
//      0,0,0],

//     // J SHAPE
//     [0,0,3,
//      3,3,3,
//      0,0,0],

//     // T SHAPE
//     [0,4,0,
//      4,4,4,
//      0,0,0],

//     // O SHAPE
//     [5,5,
//      5,5],

//     // S SHAPE
//     [0,6,6,
//      6,6,0,
//      0,0,0],

//     // Z SHAPE
//     [7,7,0,
//      0,7,7,
//      0,0,0]
// ];

//TODO: declare 7 piece colors including 0 that will be black


/*--------
GAME BOARD
--------*/
function createMatrix(width, height) {
    let matrix = [];
    while (height--) {
        matrix.push(new Array(width).fill(0));
    }
    return matrix;
}

const BOARD = createMatrix(BOARD_WIDTH, BOARD_HEIGHT);
console.log(BOARD);
console.table(BOARD);


/*------------
GAME FUNCTIONS
------------*/
function start() {
    //TODO: function that resets/starts the board and hides play button
}

function lose() {
    //TODO: stops the game when the player loses
}

function randomizePiece() {
    //TODO: randomize a new piece from array of shapes
}

function drawPiece() {
    //TODO: function that renders a new piece in the middle of the board
}
