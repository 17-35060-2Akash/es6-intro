const arr = [1, 2, 3, 4, 5];

const squareAvg = arr => {
    let sum = 0;
    for (const eachElement of arr) {
        // const newElement = eachElement * eachElement;
        // sum = sum + newElement;
        sum = sum + Math.pow(eachElement, 2);
    }
    return sum / arr.length;
}

console.log(squareAvg(arr));