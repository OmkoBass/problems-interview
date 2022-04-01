function divisibleSumPairs(n, k, ar) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0 && i !== j) {
        count++;
      }
    }
  }

  return count;
}

const pairs = divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);

console.log(pairs);
