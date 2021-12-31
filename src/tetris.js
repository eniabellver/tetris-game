import { BOARD_WIDTH, BOARD_HEIGHT, KEY } from './constants';
import { Tetronimo } from './piece';
import { Board } from './board';

let ctx = null;
let playing; // true|false game status
let score; // score tracker

window.addEventListener('load', () => {
    /*---------------
    CANVAS AND CONTEXT
    ----------------*/
    const canvas = document.getElementById('board');
    ctx = canvas.getContext('2d');
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
        start();
        console.log('play button is pressed');
    });
});

/*---------------------
KEYBOARD ACTIONS EVENTS
---------------------*/
const PIECE_MOVES = {
    //[KEY.UP]: //call a function that rotates the piece
    [KEY.DOWN]: (piece) => ({ ...piece, y: piece.y + 1 }), //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    [KEY.LEFT]: (piece) => ({ ...piece, x: piece.x - 1 }),
    [KEY.RIGHT]: (piece) => ({ ...piece, x: piece.x + 1 }),
};
window.addEventListener('keydown', function (e) {
    let handled;
    if (e.code === KEY.P) {
        //TODO: call a function that pauses the game
    } else if (PIECE_MOVES[e.code]) {
        handled = true;
        let piece = PIECE_MOVES[e.code](board.piece);
        if (board.valid(piece)) {
            board.piece.move();
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            board.piece.drawPiece();
        }
    }

    if (handled) {
        e.preventDefault();
    }
});

/*------------
GAME FUNCTIONS
------------*/
let board = new Board();

function reset() {
    //TODO: build a function that will reset the game
    resetBoard();
    //call resetScore()
    //call resetMoves()
}

function resetBoard() {
    //TODO: build a function that will clear the board and
    return board.new();
}

function resetScore() {
    //TODO: build a function that will reset the score to 0
    score = 0;
}

function resetMoves() {
    //TODO: build a function that will clear the stored moves
}

function start() {
    reset();
    board.piece = draw();
    playing = true;

    //show board on the console
    console.log(board.field);
    console.table(board.field);
}

function lose() {
    //TODO: stops the game when the player loses
    playing = false;
}

function randomPiece() {
    //TODO: randomize a new piece from array of shapes, return it
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
