// The order you declare things and complete logic in really matters

const numbers = [];

const numberOne = 7;
const numberTwo = 4;

addNumberToArray(numberOne);
addNumberToArray(numberTwo);

const addNumberToArray = number => {
    numbers.push(number);
}
const sumNumbers = numArray => numArray.reduce((acc, val) => acc + val);


const answer = sumNumbers(numbers)

const numberThree = 1;
addNumberToArray(numberThree);

console.log(answer);
console.log(numbers);