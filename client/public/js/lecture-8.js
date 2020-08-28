/**
 * FUNCTIONS
 */

//CLASSICAL FUNCTION
// function fn(a, b) {
//     console.log("classcal function");
// }
// fn();

// // ARROW FUNCTION
// const fn1 = (a, b) => {
//     console.log("arrow function");
// };
// fn1();

// // IIFE - immediately invoked function expressions
// (function () {
//     console.log("iife");
// })();

// // IIFE
// (() => {
//     console.log("iife arrow function");
// })();

/**************************************************** */

// var obj = {
//     a: 1,
//     b: 2,
//     printA: function (name) {
//         console.log(`${this.a} and name is ${name}`); // this ----- obj
//     },
// };

// obj.printA("js");

/**************************************************** */

// var obj1 = {
//     a: 10,
//     b: 20,
//     print: function (name, year) {
//         console.log(
//             `a: ${this.a} and b: ${this.b} and name is ${name} and year is ${year}` // this --- obj
//         );
//     },
// };

// obj1.print("reactjs", 2014);

/**************************************************** */

// var obj = {
//     a: 100,
//     fn: function () {
//         console.log(this.a); // this ---- obj

//         function fn1() {
//             console.log(this.a); // this --- window

//             function fn2() {
//                 console.log(this.a); // this -- window
//             }
//             fn2();
//         }
//         fn1();
//     },
// };

// obj.fn();

/**************************************************** */

// var obj = {
//     a: 100,
//     fn: function () {
//         // console.log(this.a); // this ---- obj

//         const fn1 = () => {
//             console.log(this.a); // this --- obj

//             const fn2 = () => {
//                 console.log(this.a); // this -- obj
//             };
//             fn2();
//         };
//         fn1();
//     },
// };

// obj.fn();

/******************************************************** */

// /**
//  * BIND CALL APPLY
//  *

// var obj1 = {
//     a: 10,
//     b: 20,
//     print: function (name, year) {
//         console.log(
//             `a: ${this.a} and b: ${this.b} and name is ${name} and year is ${year} `
//         ); /// this --- obj1
//     },
// };

// obj1.print("js", 1990);

// obj2 = {
//     a: 100,
//     b: 200,
// };

// bPrint = obj1.print.bind(obj2);
// bPrint("js-1", 1991);

// obj1.print.call(obj2, "js-2", 1992);

// obj1.print.apply(obj2, ["js-3", 1993]);

/************************************************************** */
// var obj1 = {
//     a: 10,
//     b: 20,
//     print: (name, year) => {
//         console.log(
//             `a: ${this.a} and b: ${this.b} and name is ${name} and year is ${year} `
//         ); /// this --- obj1
//     },
// };

// obj1.print("js", 1990);

// obj2 = {
//     a: 100,
//     b: 200,
// };

// bPrint = obj1.print.bind(obj2);
// bPrint("js-1", 1991);

// obj1.print.call(obj2, "js-2", 1992);

// obj1.print.apply(obj2, ["js-3", 1993]);

/********************************************************** */
function fn(a, b, c) {
    console.log(arguments[3]);
    console.log(arguments);
    console.log(a, b, c);
}

fn(1, 2, 3, 4);

/**********************************************************/
const fn1 = (a, b, c) => {
    console.log(arguments);
    console.log(a, b, c);
};

fn1(1, 2, 3, 4);
