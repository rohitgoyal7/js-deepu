// checks for any condition
//var arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let element, position;
// flag1 = arr.some((elem, index, array) => {
//     console.log(elem);
//     if (Math.pow(elem, 3) === 8) {
//         element = elem;
//         position = index;
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(flag1, element, position);

// checks for every condition
// var arr = [1, 2, 3, 4, 5, 6, 7, 8];
// flag2 = arr.every((elem, index, array) => {
//     console.log(elem);
//     if (elem < 4) {
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(flag2);

//var arr = [1, 2, 3, 4];
// const result = arr.reduce((accumulator, elem) => {
//     return accumulator + elem;
// },0);

// // 1st iteration ---- acc 0 and elem 1, return 1
// // 2nd iteration ---- acc 2 and elem 2, return 3
// // 3nd iteration ---- acc 3 and elem 3, return 6
// // 4nd iteration ---- acc 4 and elem 4, return 10

// console.log(result);

// const result = arr.reduce((accumulator, elem) => {
//     return accumulator + elem;
// });

// // 1st iteration ---- acc 1 and elem 2, return 3
// // 2nd iteration ---- acc 3 and elem 3, return 6
// // 3nd iteration ---- acc 6 and elem 4, return 10

// var arr = [2, 3, 4, 5, 6]; // 2^3^4^5^6
// result = arr.reduce((accumulator, elem) => {
//     return Math.pow(accumulator, elem);
// });
// console.log(result);

// var arr = [2, 3, 4, 5, 6]; // 6^5^4^3^2
// result = arr.reduceRight((accumulator, elem) => {
//     return Math.pow(accumulator, elem);
// });
// console.log(result);

// arr = [1, 2, 3, [4, 5, [6, 7, ["defination", ["js"]]]]];

// flatArr = arr.flat(Infinity);
// console.log(flatArr);

// var arr = [1, 2, 3, 4, 5, 6];

// arr2 = arr.flatMap((elem, index, array) => {
//     if (elem > 3) {
//         return elem + 1;
//     } else {
//         return [0, elem];
//     }
// });
// console.log(arr2);

// var arr = [1, 2, 3, 4, 5, 6];
// if the elem is odd, don't do anything simply return it
// if the elem is even, break it into odd + 1
// [1, 1, 1, 3, 3, 1, 5, 5, 1];

// arr1 = arr.flatMap((elem, index, array) => {
//     if (elem % 2 !== 0) {
//         return [elem];
//     } else {
//         return [elem - 1, 1];
//     }
// });
// console.log(arr1);
