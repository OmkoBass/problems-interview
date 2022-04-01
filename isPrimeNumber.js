function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

const number = 17;

const result = isPrime(number);

console.log(result);
