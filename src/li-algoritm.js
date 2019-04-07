/* eslint-disable guard-for-in */
/* eslint-disable max-depth */
/* eslint-disable id-length */

const WALL = -1;
const BLANK = -2;
const HEIGHT = 10;
const WEIGHT = 10;
const PX = [1, 0, -1, 0];
const PY = [0, 1, 0, -1];

const lab = [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -2, -2, -2, -2, -2, -2, -2, -2, -1],
    [-1, -2, -2, -2, -2, -2, -2, -2, -2, -1],
    [-1, -2, -2, -1, -1, -1, -1, -1, -2, -1],
    [-1, -2, -1, -1, -1, -1, -1, -1, -2, -1],
    [-1, -2, -2, -2, -2, -2, -2, -2, -2, -1],
    [-1, -2, -2, -2, -2, -2, -2, -2, -2, -1],
    [-1, -2, -2, -2, -2, -2, -2, -2, -2, -1],
    [-1, -2, -2, -2, -2, -2, -2, -2, -2, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
];

let path = [];

const findPath = (ax, ay, bx, by) => {
    const startPoint = lab[ay][ax];
    const endPoint = lab[by][bx];
    let stop;
    let d;

    if (startPoint === WALL || endPoint === WALL) {
        return 'Incorrect entry data';
    }

    lab[ay][ax] = 0;
    d = 0;
    while (!stop && lab[by][bx] === BLANK) {
        stop = true;

        for (let y = 0; y < lab.length; y++) {
            for (let x = 0; x < lab[y].length; x++) {
                if (lab[y][x] === d) {
                    for (let k = 0; k < 4; k++) {
                        const px = x + PX[k];
                        const py = y + PY[k];
                        if (px >= 0 && px < WEIGHT && py >= 0 && py < HEIGHT && lab[py][px] === BLANK) {
                            stop = false;
                            lab[py][px] = d + 1;
                        }
                    }
                }
            }
        }
        d++;
    }

    if (lab[by][bx] === BLANK) {
        return 0;
    }
    const size = lab[by][bx];
    let x = bx;
    let y = by;
    d = size;

    while (d > 0) {
        path = [...path, [x, y]];
        d--;

        for (let k = 0; k < 4; k++) {
            const iy = y + PY[k];
            const ix = x + PX[k];

            if (ix >= 0 && ix < WEIGHT && iy >= 0 && iy < HEIGHT && lab[iy][ix] === d) {
                x = x + PX[k];
                y = y + PY[k];
                break;
            }
        }
    }
    // console.log('path = ', path);
    return path.length;
};

module.exports = findPath;
