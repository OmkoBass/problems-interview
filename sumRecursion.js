function sum(n) {
  if (n === 1) {
    return 1;
  }

  return n + sum(n - 1);
}

const result = sum(3);

console.log(result);