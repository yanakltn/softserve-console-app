const tasks = require('./task1');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
    rl.question('Input: ', function (value) {
        const num = parseInt(value, 10);
        const result = tasks.increaseNumber(num);
        console.log('result:', result);
        rl.close();
    });
}

main();