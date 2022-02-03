const tasks = require('./task1');

function main() {
    const myArgs = process.argv[2];
    const result = tasks.increaseNumber(+myArgs);
    console.log('result:', result);
}

main();