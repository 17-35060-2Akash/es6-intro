// 1.
// const multiplication = (x, y, z = 10) => x * y * z;

// console.log(multiplication(10, 10));

// // 2.
// // const multiLine = `I am a web developer.
// // I love to code.
// // I love to eat kacchi.`;

// console.log(multiLine);


const friends = ['Mukut', 'Saydi', 'Rakib', 'Alim', 'Nafi', 'Tuta'];
const newArr = [];
const arrFriendsLength = friends => {
    for (const friend of friends) {
        if (friend.length % 2 == 0) {
            const myFriend = { name: friend, length: friend.length };
            newArr.push(myFriend);
        }
    }
    return newArr;
};

console.log(arrFriendsLength(friends));