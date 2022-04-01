function maxArea(heights) {
    let maxHeight = heights[0];
    let i = 0;
    let j = heights.length - 1;

    while (i < j) {
        let min = Math.min(heights[i], heights[j]);
        maxHeight = Math.max(maxHeight, min * (j - i));

        if (heights[i] < heights[j]) {
            i++;
        } else {
            j--;
        }
    }

    return maxHeight;
}

const area = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);

console.log(area);
