import {
    BOARD_WIDTH,
    BOARD_HEIGHT,
    NEXT_SIZE,
    BLOCK_SCALE,
    KEY,
    COLOURS,
    SHAPES,
} from './constants';
import { Tetronimo } from './piece';
import { Board } from './board';
import { logField } from './debug';

let canvas;
let ctx = null;
let ncanvas;
let nctx = null;
let playing; // true|false game status
let score; // score tracker
let time = { start: 0, passed: 0, speed_modifier: 1000 };

let board = new Board();

window.addEventListener('load', () => {
    /*---------------
    CANVAS AND CONTEXT
    ----------------*/
    canvas = document.getElementById('board');
    ctx = canvas.getContext('2d');
    ncanvas = document.getElementById('upcoming');
    nctx = ncanvas.getContext('2d');

    /*---------------------
    INITIATE CANVAS + SCALE
    ---------------------*/
    function canvasBuild() {
        ctx.canvas.width = BOARD_WIDTH * BLOCK_SCALE;
        ctx.canvas.height = BOARD_HEIGHT * BLOCK_SCALE;
        ctx.scale(BLOCK_SCALE, BLOCK_SCALE);
    }
    canvasBuild();

    /*--------------------------
    INITIATE NEXT CANVAS + SCALE
    --------------------------*/
    function ncanvasBuild() {
        nctx.width = NEXT_SIZE * BLOCK_SCALE;
        nctx.height = NEXT_SIZE * BLOCK_SCALE;
        nctx.scale(BLOCK_SCALE, BLOCK_SCALE);
    }
    ncanvasBuild();

    /*---------------
    PLAY BUTTON EVENT
    ---------------*/
    const playButton = document.getElementById('play');
    playButton.addEventListener('click', () => {
        gameStart();
        //console.log('play button is pressed');
    });
});



/*---------------------
KEYBOARD ACTIONS EVENTS
---------------------*/
export const PIECE_MOVES = {
    [KEY.UP]: (pos) => board.rotate(pos),
    [KEY.DOWN]: (pos) => ({ ...pos, y: pos.y + 1 }), //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    [KEY.LEFT]: (pos) => ({ ...pos, x: pos.x - 1 }),
    [KEY.RIGHT]: (pos) => ({ ...pos, x: pos.x + 1 }),
};

window.addEventListener('keydown', handleKeyEvent, true);
function handleKeyEvent(e) {
    let handled;
    if (e.keyCode === KEY.P) {
        //pause
        dropPiece();
    }
    if (playing && PIECE_MOVES[e.keyCode]) {
        handled = true;
        let pos = PIECE_MOVES[e.keyCode](board.currentPiece);
        if (board.valid(pos)) {
            board.currentPiece.move(pos);
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            board.currentPiece.render();
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
    resetTime();
    //resetScore();
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

function resetTime() {
    return (time = {
        start: 0,
        passed: 0,
        speed_modifier: 1000,
    });
}

function gameStart() {
    reset();
    board.currentPiece = draw();
    playing = true;
    loopAnimation();
}

function gameOver() {
    //TODO: stops the game when the player loses
    playing = false;
}

function loopAnimation(curr = 0) {
    time.passed = curr - time.start;
    if (time.passed > time.speed_modifier) {
        time.start = curr;
        dropPiece();
    }
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    updateGame();
    let animation = requestAnimationFrame(loopAnimation);
}

function dropPiece() {
    let pos = PIECE_MOVES[KEY.DOWN](board.currentPiece);
    if (board.valid(pos)) {
        board.currentPiece.move(pos);
    } else {
        //stop the piece
        board.collide();
        board.currentPiece = draw();
        logField(board.field);
    }
}

function updateGame() {
    board.currentPiece.render();
    updateBoard();
}

function updateBoard() {
    board.field.forEach((height, y) => {
        height.forEach((number, x) => {
            if (number > 0) {
                ctx.fillStyle = COLOURS[number - 1];
                ctx.fillRect(x, y, 1, 1);
            }
        });
    });
}

function draw() {
    //TODO: update function so it draws a new piece, taking the one that's been returned by nextPiece() as an argument
    let piece = getNext();
    return piece;
}

function getNext() {
    //TODO: call randomPiece and save piece as the next one, return it for currentPiece to use
    let next = new Tetronimo(ctx);
    next.render();
    return next;
}

function displayNext(piece) {
    //TODO: show what piece is coming next on the next canvas

}

function displayScore() {
    //TODO: function that updates the score with points earned
}
