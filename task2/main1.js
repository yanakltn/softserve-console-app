const tasks = require('./task2');

function main() {
    const myArgs = process.argv.slice(2).map(x => +x);
    const result = tasks.getDoubleSum(myArgs);
    console.log('result:', result);
}

main();