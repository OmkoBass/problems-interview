// Write a method or a function that finds the first character that
// has exactly 2 occurrences in the input string.
// EXAMPLE:
// ABAACCBA-> B
// ABC>
// ABBCCA-> A

function findFirstTwoOccurrences(input) {
  let occurrenceObj = {};

  for (const char of input) {
    if (!occurrenceObj[char]) {
      occurrenceObj[char] = 1;
    } else {
      occurrenceObj[char] += 1;
    }
  }

  for (const [key, value] of Object.entries(occurrenceObj)) {
    if (value === 2) {
      return key;
    }
  }

  return "";
}

const input = "ABBCCA";

const result = findFirstTwoOccurrences(input);

console.log(result);
