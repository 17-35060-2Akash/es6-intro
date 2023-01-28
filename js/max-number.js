const arr1 = [1, 25, 40, 64, 400, 532];
const arr2 = [10, 85, 64, 2, 45, 85];

const maxCalculation = (arr1, arr2) => {
    const newArr = [...arr1, ...arr2];
    return Math.max(...newArr);
}

console.log(maxCalculation(arr1, arr2));