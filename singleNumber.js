function singleNumber(array) {
    let current = 0;
    let next = 1;
    let unique = array[0];

    for (let i = 2; i < array.length; i++) {
        if (array[current] !== array[next]) {
            unique = array[current]
        }
    }

    return unique
}

const input = [4, 1, 2, 1, 2];

const result = singleNumber(input);

console.log(result);
