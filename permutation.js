function permutation(numbers, permutations = [], result = []) {
  if (numbers.length === 0) {
    result.push([...permutations]);

    return;
  }

  for (let i = 0; i < numbers.length; i++) {
    permutations.push(numbers[i]);
    const choices = numbers.filter((_, index) => index !== i);
    permutation(choices, permutations, result);

    permutations.pop();
  }

  return result;
}

const numbers = [1, 2, 3];

const result = permutation(numbers);

console.log(result);
