/**
 * Hoisting
 */

/**
 * TEMPORAL DEAD ZONE
 */

/*********************************************************** */
// console.log(a); // undefined
// var a = 1;

// //initialization phase ---- creation phase
// var a;
// console.log(a);
// a = 1;

/*********************************************************** */

// function fn() {
//     console.log(a);
//     var a = 2;
//     console.log(a);
// }
// fn();

// initialization phase
// function fn() {
//     var a;
//     console.log(a);
//     a = 2;
//     console.log(a);
// }
// fn();
/************************************************************* */

// function fn() {
//     console.log(a);
//     let a = 2;
// }
// fn();

// //initialization phsae
// function fn() {
//     let a;
//     console.log(a); // can not access this variable over here.....
//     a = 2;
// }
// fn();

/************************************************************* */

// fn();
// function fn() {
//     console.log("hii");
// }

// // initialization phsae
// function fn() {
//     console.log("hii");
// }
// fn();

/************************************************************* */

// function fn1() {
//     console.log("1");
//     fn2();
// }
// fn1();
// function fn2() {
//     console.log("2");
// }

/************************************************************* */
// bar();
// foo();
// function bar() {
//     console.log("hiii");
// }
// var foo = function () {
//     console.log("byeee");
// };

// // initialization phase
// var foo;
// function bar() {
//     console.log("hiii");
// }
// bar();
// foo();
// foo = () => {
//     console.log("byeee");
// };

/************************************************************* */

// function fn() {
//     // var a; -- initialization phase
//     console.log(a);
//     var a = 2;
// }
// fn();

/************************************************************* */

// function fn() {
//     // let a; -- initialization phase
//     let a = 2;
//     if (true) {
//         // let a; -- initialization phase
//         console.log(a); // 2
//         // let a = 3;
//     }
// }
// fn();

/************************************************************* */

// var a = 1;
// function fn() {
//     a = 10;
//     return;
//     function a() {}
// }
// fn();
// console.log(a); // 1

/************************************************************* */

/**
 * PRACTICE QUESTION - 1
 */

// var a = 1;
// function b() {
//     a = 10;
//     return;
// }
// b();
// console.log(a);

/**
 * PRACTICE QUESTION - 2
 */
// var a = 1;
// function b() {
//     a = 10;
//     return;
//     function a() {
//         console.log("hiii");
//     }
// }
// b();
// console.log(a); // 1

/**
 * PRACTICE QUESTION - 3
 */

// run();
// walk(); //
// function run() {
//     console.log("running...");
// }
// var walk = function () {
//     console.log("crawling....");
// };
// run();
// walk(); // available

/**
 * PRACTICE QUESTION - 4
 */
// var foo = 1;
// {
//     let foo = 2;
//     foo = 3;
//     const bar = 4;
// }
// console.log(foo);
// console.log(bar); // 1 error

/**
 * PRACTICE QUESTION - 5
 */
// var i = 5;

// for (var i = 0; i < 10; i++) {
//     // do anything
// }
// console.log(i); // 5

/**
 * PRACTICE QUESTION - 6
 */

// var j = 5;
// for (let j = 0; j < 10; j++) {
//     // do anything
// }
// console.log(j); // 5

// var a = 1;
// function fn() {
//     // let a; // error because of line #210
//     let a;
//     a = 10;
//     return;
//     let a;
// }
// fn();
// console.log(a);
