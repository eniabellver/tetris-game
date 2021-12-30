import { BOARD_WIDTH, BOARD_HEIGHT, KEY } from './constants';
import { Tetronimo } from './piece';
import { Board } from './board';

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
        start();
        console.log('play button is pressed');
    });
});

/*---------------------
KEYBOARD ACTIONS EVENTS
---------------------*/
window.addEventListener('keydown', function(e) {
    if(e.code === KEY.DOWN) {
        //TODO: move piece down
    } else if (e.code === KEY.UP) {
        //TODO: rotate piece to the right
    } else if (e.code === KEY.LEFT) {
        //TODO: move piece to the left
    } else if (e.codet === KEY.RIGHT) {
        //TODO: move piece o the right
    } else if (e.code === KEY.P) {
        //TODO: pause the game
    }
    //TODO: prevent arrows up/down from scrolling
})

/*------------
GAME FUNCTIONS
------------*/
function reset() {
    //TODO: build a function that will reset the board and game score to the
}

let board = new Board();

function start() {
    board.new();
    let piece = new Tetronimo(ctx);
    piece.drawPiece();

    //show board on the console
    console.log(board.field);
    console.table(board.field);
}

function lose() {
    //TODO: stops the game when the player loses
}

function randomizePiece() {
    //TODO: randomize a new piece from array of shapes
}
