function checkParentheses(s) {
    let regular = 0;
    let square = 0;
    let squiggly = 0;

    // O(n)
    for (const p of s) {
        switch (p) {
            case '(':
                regular++;
                break;
            case ')':
                regular--;
                break;
            case '[':
                square++;
                break;
            case ']':
                square--;
                break;
            case '{':
                squiggly++;
                break;
            case '}':
                squiggly--;
                break;
        }
    }

    if (regular === 0 && square === 0 && squiggly === 0) {
        return true;
    }

    return false;
}

const parentheses = "()";

const isValid = checkParentheses(parentheses);

console.log(isValid);
