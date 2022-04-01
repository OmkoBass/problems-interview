function removeDuplicates(array) {
  let checked = [];

  for (const element of array) {
    if (!checked.includes(element)) {
      checked.push(element);
    }
  }

  return checked;
}

const array = [1, 2, 2, 3, 4, 5, 6, 7, 9, 9, 10];

const result = removeDuplicates(array);

console.log(result);
