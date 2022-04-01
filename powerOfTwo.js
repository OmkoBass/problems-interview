function isPowerOfTwo(n) {
  if (n === 0) {
    return false;
  }

  if (n === 1) {
    return true;
  }

  return isPowerOfTwo(n / 2);
}

const number = 8;

const result = isPowerOfTwo(number);

console.log(result);
