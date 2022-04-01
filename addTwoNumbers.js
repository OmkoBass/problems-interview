function addTwoNumbers(list1, list2) {
    // 2, 4, 3
    // 3, 4, 2
    // 342

    // 3 * 100
    // 4 * 10
    // 2 * 1

    const firstSum = reverseAndAdd(list1);
    const secondSum = reverseAndAdd(list2);

    const total = firstSum + secondSum;

    return buildListFromInteger(total);
}

function buildListFromInteger(number) {
    if (number === 0) {
        return [0];
    }

    let list = [];

    while (number > 0) {
        list.push(number % 10);

        number = Math.floor(number / 10);
    }

    return list;
}

function reverseAndAdd(list) {
    let listSum = 0;
    let multiplier = 1;
    for (let i = 0; i < list.length; i++) {
        listSum += (list[i] * multiplier);
        multiplier *= 10;
    }

    return listSum;
}

const list1 = [9, 9, 9, 9, 9, 9, 9];
const list2 = [9, 9, 9, 9];

const result = addTwoNumbers(list1, list2);

console.log(result);
