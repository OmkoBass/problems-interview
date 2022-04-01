const x0 = 1;
const y0 = 2;

const x1 = 7;
const y1 = 4;

let dx = x1 - x0;
let dy = y1 - y0;

let m = dy / dx;

let whereToDraw = [];

for (let i = x0; i <= x1; i++) {
    const y = m * (i - x0) + y0;

    whereToDraw.push({ x: i, y: Math.round(y) });
}

console.log(whereToDraw);
