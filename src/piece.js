import { COLOURS, SHAPES } from './constants';
/*---------------
GAME SHAPES LOGIC
---------------*/
export class Tetronimo {
    ctx;
    nxtx;
    x;
    y;
    colour;
    shape;
    index;

    constructor(ctx) {
        this.cxt = ctx;
        this.new();
        this.x = 4;
        this.y = -1;
    }

    new() {
        this.index = this.random(SHAPES.length);
        this.shape = SHAPES[this.index];
        this.colour = COLOURS[this.index];
    }

    render() {
        this.cxt.fillStyle = this.colour;
        this.shape.forEach((width, y) => {
            width.forEach((number, x) => {
                if (number > 0) {
                    this.cxt.fillRect(this.x + x, this.y + y, 1, 1);
                }
            });
        });
    }

    move(pos) {
        this.x = pos.x;
        this.y = pos.y;
    }

    random(number) {
        return Math.floor(Math.random() * number);
    }
}
