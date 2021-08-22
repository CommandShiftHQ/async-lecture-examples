const numbers = [1, 2, 3, 4];
const doubleNumbers = numbers.map(number => {
    return number * 2;
})

// or with  an implicit callback
const double = number => number * 2;
const doubleNumbers = numbers.map(double);

