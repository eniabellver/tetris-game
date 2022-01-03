import {
    BOARD_WIDTH,
    BOARD_HEIGHT,
    NEXT_SIZE,
    BLOCK_SCALE,
    KEY,
    COLOURS,
    SHAPES,
    POINTS,
} from './constants';
import { Tetronimo } from './piece';
import { Board } from './board';
import { logField } from './debug';

let canvas;
let ctx = null;
let ncanvas;
let nctx = null;
let playing; // true|false game status
let score = 0; // score initialiser
let time = { start: 0, passed: 0, speed_modifier: 1000 };

let board = new Board(ctx, nctx);

window.addEventListener('load', () => {
    /*---------------
    CANVAS AND CONTEXT
    ----------------*/
    ncanvas = document.getElementById('upcoming');
    nctx = ncanvas.getContext('2d');
    canvas = document.getElementById('board');
    ctx = canvas.getContext('2d');

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

    return { nctx, ncanvas, ctx, canvas };
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
        deleteLine();
        board.currentPiece = draw();
        logField(board.field);
    }
}

//render the game and board
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

//get a random new piece
function getNext() {
    let next = new Tetronimo(ctx);
    next.render();
    renderNext(next);
    return next;
}

function draw() {
    let piece = getNext();
    return piece;
}

function renderNext(piece) {
    //TODO: show what piece is coming next on the next canvas
    //TODO: this code isn't working
    // nctx.ncanvas.fillStyle = piece.colour;
    // piece.shape.forEach((width, y) => {
    //     width.forEach((number, x) => {
    //         if (number > 0) {
    //             nctx.ncanvas.fillRect(piece.x + x, piece.y + y, 1, 1);
    //         }
    //     });
    // });
}

function deleteLine() {
    let lines = 0;
    let notZero = (number) => number != 0;

    board.field.forEach((x, y) => {
        if (x.every(notZero)){
            lines++;
            console.log(`line deleted`);
            board.field.splice(y, 1);
            board.field.unshift(Array(BOARD_WIDTH).fill(0));
        }
    });

    if (lines > 0) {
        if (lines === 1) {
            return score += POINTS.SINGLE_LINE
        } else if (lines === 2) {
            return score += POINTS.DOUBLE_LINE
        } else if (lines === 3) {
            return score += POINTS.TRIPLE_LINE
        } else if (lines === 4) {
            return score += POINTS.QUAD_LINE
        }
    }
}

function updateScore() {
    //TODO: update score

}