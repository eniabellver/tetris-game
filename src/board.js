/*--------------
GAME BOARD LOGIC
--------------*/
import { BOARD_WIDTH, BOARD_HEIGHT } from './constants';

/*--------
GAME BOARD
--------*/
export class Board {
    //clear board
    new() {
        this.field = this.createMatrix(BOARD_WIDTH, BOARD_HEIGHT);
    }

    //generate board matrix
    createMatrix(width, height) {
        let matrix = [];
        while (height--) {
            matrix.push(new Array(width).fill(0));
        }
        return matrix;
    }
}
