function sqrt(x) {
  let left = 1;
  let right = x;

  if (x < 2) {
    return x;
  }

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (mid * mid === x) {
      return mid;
    } else if (mid * mid > x) {
      right = mid;
    } else if (mid * mid < x) {
      left = mid;
    }
  }

  return left - 1;
}

const number = 16;

const result = sqrt(number);

console.log(result);
