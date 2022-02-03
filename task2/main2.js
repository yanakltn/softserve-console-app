const tasks = require('./task2');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function input(arr) {
    rl.question('Input: ', function (value) {
        const num = parseInt(value, 10);
        if (isNaN(num)) {
            const result = tasks.getDoubleSum(arr);
            console.log(result);
            rl.close();
        } else {
            arr.push(num);
            input(arr);
        }
    });
}

function main() {
    const arr = [];
    input(arr);
}

main();