// checks for any condition
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
flag1 = arr.some((elem, index, array) => {
    console.log(elem);
    if (Math.pow(elem, 3) === 8) {
        return true;
    } else {
        return false;
    }
});
console.log(flag1);

// checks for every condition
var arr = [1, 2, 3, 4];
flag2 = arr.every((elem, index, array) => {
    console.log(elem);
    if (elem < 4) {
        return true;
    }
});
console.log(flag2);

// var arr = [1, 2, 3, 4];
// result = arr.reduce((accumulator, elem) => {
//     return accumulator + elem;
// }, 100);

// // 0 + 1 ---> 1
// // 1 + 2 ----> 3
// // 3 + 3 --->6
// // 6+ 4 --- 10

// console.log(result);

// var arr = [2, 3, 4]; // 2^3^4
// result = arr.reduce((accumulator, elem) => {
//     return Math.pow(accumulator, elem);
// });
// console.log(result);

// var arr = [2, 3, 4]; // 4^3^2
// result = arr.reduceRight((accumulator, elem) => {
//     return Math.pow(accumulator, elem);
// });
// console.log(result);

// arr = [1, 2, 3, [4, [5, 6, [7, [8]]]]];

// op = arr.flat(Infinity);
// console.log(op);

// var arr = [1, 2, 3, 4, 5, 6];
// if the elem is odd, don't do anything simply return it
// if the elem is even, break it into odd + 1
// [1, 1, 1, 3, 3, 1, 5, 5, 1];

// var arr = [1, 2, 3, 4, 5, 6];

// [0,1,1,1,2,1,4,5,6]
// arr2 = arr.flatMap((elem, index, array) => {
//     if (elem > 3) {
//         return [elem];
//     } else {
//         return [elem - 1, 1];
//     }
// });

// (...returnedVale)
//console.log(arr2);

// arr1 = arr.flatMap((elem, index, array) => {
//     if (elem % 2 !== 0) {
//         return [elem];
//     } else {
//         return [elem - 1, 1];
//     }
// });
// console.log(arr1);

//"use strict";
/**
 * USE STRICT
 * https://www.geeksforgeeks.org/strict-mode-javascript/
 */

/**
 * USEFUL LINKS
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
 */

// let obj = {};
// Object.defineProperty(obj, "a", {
//     value: 10,
//     writable: false,
// });

// obj.a = 20;
// console.log(obj);

/****************************************************************** */

// function fn(a, a) {
//     console.log(a);
// }
// fn(1, 2);

// var obj = {
//     fn: function () {
//         console.log("hii");
//         function fn1() {
//             console.log(this); // window
//         }
//         fn1();
//     },
// };
// obj.fn();

// b = 10;
// function fn() {
//     "use strict";
//     a = 10;
// }
// fn();

// console.log("hiii");
// for (i = 0; i < 10000000000000000000; i++) {}
// console.log("byeee");

/**
 * ASYNC PROGAMMING
 */

// console.log(1);
// console.log(2);
// console.log(3);

// setTimeout(() => {
//     console.log(4);
// }, 3000); //ms

// console.log(5);
// console.log(6);
// console.log(7);

/***************************************** */

// const i1 = setInterval(() => {
//     console.log("hiii");
// }, 5000); // ms

// setTimeout(() => {
//     clearInterval(i1);
// }, 13000); //ms

// // showing loader/modal
// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("i m resolved.....");
//     }, 2000);
// });

// p.then((data) => {
//     console.log(data);
// })
//     .catch((err) => {
//         console.log("catch block called....");
//         console.log(err);
//     })
//     .finally(() => {
//         //hiding loader/modal
//         console.log("finally called....");
//     });

// fetch, axios, ....

// const sum = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(a + b);
//         }, 2000);
//     });
// };

// let s1 = sum(1, 2);
// s1.then((data) => {
//     console.log(data);
// });

// const fn = async () => {
//     try {
//         const result1 = await fetch("/getUsers1");

//         const result2 = await fetch("/getUsers2");

//         const result3 = await fetch("/getUsers3");
//     } catch (err) {
//         console.log(err);
//     }
// };
// fn();

// // // callback hell
// fetch("/getUsers1")
//     .then((data) => {
//         fetch("/getUsers2").then((data) => {
//             fetch("/getUsers3");
//         });
//     })
//     .catch(() => {});

// const p = new Promise((res, rej) => {
//   let time = 5;
//   setInterval(() => {
//     time = time - 1;
//     if (time === 0) {
//       res("tournament started");
//     }
//   }, 1000);
// });

// p.then((data) => {
//   alert(data);
// });
