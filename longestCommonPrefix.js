function longestCommonPrefix(strings) {
    let j = 0;
    let k = 0;
    let prefix = "";

    while (k < strings[0].length) {
        const letter = strings[0][k];
        let shouldAdd = true;

        while (j < strings.length) {
            if (strings[j][k] !== letter) {
                shouldAdd = false;
            }

            j++;
        }

        if (shouldAdd) {
            prefix += letter;
        } else {
            break;
        }

        j = 0;
        k++;
    }

    return prefix;
}

const prefix = longestCommonPrefix(['flower', 'flow', 'flight']);

console.log(prefix);
