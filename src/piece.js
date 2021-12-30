/*---------------
GAME SHAPES LOGIC
---------------*/
export class Tetronimo {
    //prettier-ignore
    constructor(ctx) {
        this.ctx = ctx;
        this.colour = '#3E2CDD';
        this.shape = [
            [2,0,0],
            [2,2,2],
            [0,0,0],
        ];
        this.x = 4;
        this.y = 0;
    }

    drawPiece() {
        this.ctx.fillStyle = this.colour;
        this.shape.forEach((width, y) => {
            width.forEach((number, x) => {
                if (number < 0) {
                    this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
                }
            });
        });
    }
}
