let x1 = 1;
let x2 = 1;
let i = 0;
let sum = 0;

const iter = 5;

while (i < iter) {
  sum = x1 + x2;

  x1 = x2;
  x2 = sum;
  i++;
}

console.log(sum);

// 1 1 2 3 5 8 13 21 34 ...

function fibonacci(n) {
  if (n <= 0) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5));
