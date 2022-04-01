function power(number, exponent) {
  // 2^4 === 2 * 2 * 2 * 2
  if (exponent === 1) {
    return number;
  }

  return number * power(number, exponent - 1);
}

console.log(power(2.1, 3));
