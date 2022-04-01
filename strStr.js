function strStr(haystack, needle) {
    // return haystack.indexOf(needle);

    if (needle === '') {
        return 0;
    }

    let same = true;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            for (let j = 1; j < needle.length; j++) {
                if (haystack[i + j] !== needle[j]) {
                    same = false;
                }
            }

            if (same) {
                return i;
            }
        }
    }

    return -1;
}

const haystack = "hello";
const needle = "llq";

const firstOccurence = strStr(haystack, needle);

console.log(firstOccurence);
