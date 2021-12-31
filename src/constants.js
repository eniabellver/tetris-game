/*--------------------
GAME CONSTANTS & RULES
--------------------*/

export const BOARD_WIDTH = 10; // canvas width in blocks
export const BOARD_HEIGHT = 20; // canvas height in blocks
export const NEXT_WIDTH = 5; // upcoming piece canvas width
export const NEXT_HEIGHT = 5; // upcoming piece canvas width

export const POINTS = {
    SINGLE_LINE: 100,
    DOUBLE_LINE: 200,
    TRIPLE_LINE: 300,
}

export const KEY = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39, P: 80 }; //key event codes

//prettier-ignore
export const PIECE = [
    // I SHAPE
    [
    [0,0,0,0],
    [1,1,1,1],
    [0,0,0,0],
    [0,0,0,0],
    ],

    // J SHAPE
    [
    [2,0,0],
    [2,2,2],
    [0,0,0],
    ],

    // L SHAPE
    [
    [0,0,3],
    [3,3,3],
    [0,0,0],
    ],

    // T SHAPE
    [
    [0,4,0],
    [4,4,4],
    [0,0,0],
    ],

    // O SHAPE
    [
    [5,5],
    [5,5],
    ],

    // S SHAPE
    [
    [0,6,6],
    [6,6,0],
    [0,0,0],
    ],

    // Z SHAPE
    [
    [7,7,0],
    [0,7,7],
    [0,0,0],
    ],
];

export const COLOURS = [
    '#000',
    '#22f8fc',
    '#3E2CDD',
    '#FF9E1F',
    '#C247FF',
    '#FFEC1F',
    '#98FB0E',
    '#FF1F1F',
];
