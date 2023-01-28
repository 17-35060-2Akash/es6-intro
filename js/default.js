/* function add(first, second) {
    // if (second === undefined) {
    //     second = 0;
    // }

    second = second || 0;
    return first + second;
} */

function add(first, second = 12) {
    return first + second;
}


console.log(add(10, 0));