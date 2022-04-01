const arr = [1, 2, 3];

const sum = arr.reduce((sum, element) => {
  return sum + element;
}, 0);

console.log(sum);
