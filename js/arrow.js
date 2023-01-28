// function add(first, second = 0) {
//     return first + second;
// }

const add = (first, second) => first + second;
const getFullName = (first, last) => first + '' + last;
const multiplication = (first, last = 0) => first * last;
const getPie = () => 3.14;
const fiveTimes = num => num * 5;

console.log(multiplication(10));