function getDoubleSum(arr) {
    if (arr.length === 0 || arr[0] < 0) {
        return 0;
    }

    let sum = arr[0], prev = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < 0) {
            sum -= prev;
            break;
        } else {
            prev = arr[i];
            sum += 2 * arr[i];
        }
    }

    return sum;
}

module.exports = { getDoubleSum };

// console.log(getDoubleSum([5, 4, 3, -7, 8]));
// console.log(getDoubleSum([4, -3, 7, 8]));
// console.log(getDoubleSum([]));