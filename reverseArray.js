const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// You can have a left and right pointer
// that will swap elements untill the middle
// of the array too
// that's an O(1) memory complexity solution

let reversed = [];

for (let i = array.length - 1; i >= 0; i--) {
  reversed.push(array[i]);
}

console.log(reversed);
