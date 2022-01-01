import { BOARD_WIDTH, BOARD_HEIGHT, BLOCK_SCALE, KEY } from './constants';
import { Tetronimo } from './piece';
import { Board } from './board';

let ctx = null;
let playing; // true|false game status
let score; // score tracker

let board = new Board();

window.addEventListener('load', () => {
    /*---------------
    CANVAS AND CONTEXT
    ----------------*/
    const canvas = document.getElementById('board');
    ctx = canvas.getContext('2d');
    const canvasNext = document.getElementById('upcoming');
    const ctxNext = canvasNext.getContext('2d');

    /*---------------------
    INITIATE CANVAS + SCALE
    ---------------------*/
    ctx.canvas.width = BOARD_WIDTH * BLOCK_SCALE;
    ctx.canvas.height = BOARD_HEIGHT * BLOCK_SCALE;
    ctx.scale(BLOCK_SCALE, BLOCK_SCALE);

    /*---------------
    PLAY BUTTON EVENT
    ---------------*/
    const playButton = document.getElementById('play');
    playButton.addEventListener('click', () => {
        start();
        //console.log('play button is pressed');
    });
});

/*---------------------
KEYBOARD ACTIONS EVENTS
---------------------*/
const PIECE_MOVES = {
    [KEY.UP]: (pos) => board.rotate(pos),
    [KEY.DOWN]: (pos) => ({ ...pos, y: pos.y + 1 }), //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    [KEY.LEFT]: (pos) => ({ ...pos, x: pos.x - 1 }),
    [KEY.RIGHT]: (pos) => ({ ...pos, x: pos.x + 1 }),
};
// const pos = this.PIECE_MOVES[e.keyCode](this.piece);

window.addEventListener('keydown', handleKeyEvent, true);
function handleKeyEvent(e) {
    let handled;
    if (e.keyCode === KEY.P) {
        //pause
    } else if (playing && PIECE_MOVES[e.keyCode]) {
        handled = true;
        let pos = PIECE_MOVES[e.keyCode](board.currentPiece);
        if (board.valid(pos)) {
            board.currentPiece.move(pos);
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            board.currentPiece.drawPiece();
        }
    }
    if (handled) {
        e.preventDefault();
    }
}

/*------------
GAME FUNCTIONS
------------*/

function reset() {
    //TODO: build a function that will reset the game
    resetBoard();
    //call resetScore()
    //call resetMoves()
}

function resetBoard() {
    //TODO: build a function that will clear the board and
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    return board.new();
}

function resetScore() {
    //TODO: build a function that will reset the score to 0
    score = 0;
}

function start() {
    reset();
    board.currentPiece = draw();
    playing = true;

    //show board on the console
    console.log(board.field);
    console.table(board.field);
}

function lose() {
    //TODO: stops the game when the player loses
    playing = false;
}

function draw() {
    //TODO: update function so it draws a new piece, taking the one that's been returned by nextPiece() as an argument
    let piece = new Tetronimo(ctx);
    piece.drawPiece();
    return piece;
}

function nextPiece(piece) {
    //TODO: call randomPiece and save piece as the next one, return it for currentPiece to use
    return next;
}

function displayNext() {
    //TODO: show what piece is coming next on the next canvas
}

function displayScore() {
    //TODO: function that updates the score with points earned
}
