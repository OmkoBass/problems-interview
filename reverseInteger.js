//  Given a signed 32-bit integer x, return x with its digits reversed. 
// If reversing x causes the value 
// to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

let x = -123;
let signed = false;

let reversed = '';

if (0 > x) {
    signed = true;
    x *= -1;
}

while (x !== 0) {
    reversed += (x % 10);

    x = Math.round(x / 10);
}

if (signed) {
    console.log(parseInt(reversed) * -1);
} else {
    console.log(parseInt(reversed));
}