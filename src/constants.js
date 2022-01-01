/*--------------------
GAME CONSTANTS & RULES
--------------------*/

export const BOARD_WIDTH = 10; // canvas width in blocks
export const BOARD_HEIGHT = 20; // canvas height in blocks
export const BLOCK_SCALE = 20;
export const NEXT_WIDTH = 5; // upcoming piece canvas width
export const NEXT_HEIGHT = 5; // upcoming piece canvas width

export const POINTS = {
    SINGLE_LINE: 100,
    DOUBLE_LINE: 200,
    TRIPLE_LINE: 300,
    SOFT_DROP: 10,
};

export const KEY = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39, P: 80 }; //key event codes

//prettier-ignore
export const SHAPES = [
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
    '#00E4F5',
    '#0860C4',
    '#FF961F',
    '#CE47FF',
    '#F5CC00',
    '#44AF69',
    '#FF0000',
];
