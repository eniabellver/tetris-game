/*---------------
GAME SHAPES LOGIC
---------------*/
export class Tetronimo {

    //prettier-ignore
    constructor(ctx) {
        this.cxt = ctx;
        this.color = '#3E2CDD';
        this.shape = [
            [2,0,0],
            [2,2,2],
            [0,0,0],
        ];
        this.x = 4;
        this.y = 0;
    }

    drawPiece() {
        this.cxt.fillStyle = this.color;
        this.shape.forEach((width, y) => {
            width.forEach((number, x) => {
                if (number > 0) {
                    this.cxt.fillRect(this.x + x, this.y + y, 1, 1);
                }
            });
        });
    }

    move() {
        this.shape = piece.shape;
        this.x = piece.x;
        this.y = piece.y;
    }
}
