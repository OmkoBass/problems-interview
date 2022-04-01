function plusOne(array) {
  let sum = 1;
  let multiplier = 1;

  for (let i = array.length - 1; i >= 0; i--) {
    sum += array[i] * multiplier;

    multiplier *= 10;
  }
  multiplier = multiplier / 10;

  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    const digit = Math.floor(sum / multiplier);

    newArray.push(digit);

    sum = sum - digit * multiplier;

    multiplier = multiplier / 10;
  }

  return newArray;
}

const input = [9];

const result = plusOne(input);

console.log(result);
