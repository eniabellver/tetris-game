/*--------------
GAME BOARD LOGIC
--------------*/
import { BOARD_WIDTH, BOARD_HEIGHT, COLOURS } from './constants';

/*--------
GAME BOARD
--------*/
export class Board {
    ctx;
    field;
    currentPiece;

    constructor(ctx) {
        this.ctx = ctx;
    }

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

    rotate(piece) {
        let r = piece;
        for (let y = 0; y < r.shape.length; y++) {
            for (let x = 0; x < y; x++) {
                [r.shape[x][y], r.shape[y][x]] = [r.shape[y][x], r.shape[x][y]];
            }
        }

        r.shape.forEach((h) => h.reverse());
        return r;
    }

    collide() {
        this.currentPiece.shape.forEach((height, y) => {
            height.forEach((number, x) => {
                if (number > 0) {
                    //prettier-ignore
                    this.field[y + this.currentPiece.y][x + this.currentPiece.x] = number;
                }
            });
        });
    }

    render() {
        this.field.forEach((height, y) => {
            height.forEach((number, x) => {
                if (number > 0) {
                    this.ctx.fillStyle = COLOURS[number];
                    this.ctx.fillRect(x, y, 1, 1);
                }
            });
        });
    }

    update() {
        this.field.forEach((height, y) => {
            height.forEach((number, x) => {
                if (number > 0) {
                    this.ctx.fillStyle = COLOURS[number];
                    this.ctx.fillRect(x, y, 1, 1);
                }
            });
        });
    }

    valid(pos) {
        return pos.shape.every((height, dy) => {
            return height.every((number, dx) => {
                let x = pos.x + dx;
                let y = pos.y + dy;
                return (
                    number === 0 ||
                    (this.isAvailable(x, y) && this.isWithinWalls(x) && this.isAboveFloor(y))
                );
            });
        });
    }

    isAvailable(x, y) {
        return this.field[y] && this.field[y][x] === 0;
    }

    isWithinWalls(x) {
        return x >= 0 && x < BOARD_WIDTH;
    }

    isAboveFloor(y) {
        return y <= BOARD_HEIGHT - 1;
    }
}
