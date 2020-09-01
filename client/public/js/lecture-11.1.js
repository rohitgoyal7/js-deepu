/**
 * USE STRICT
 * https://www.geeksforgeeks.org/strict-mode-javascript/
 */
//"use strict";

// var a = 10;
// let b = 10;
// const c = 10;
// d = 100;

// console.log(a, b, c, d);

/********************************************************** */

// const obj = {};

// Object.defineProperty(obj, "a", {
//     value: 2,
//     writable: false,
// });

// console.log(obj.a);

// obj.a = 10;
// console.log(obj.a); // 2  ------------------- 10

/********************************************************** */
// function fn(a, a) {
//     console.log(a);
// }
// fn(1, 2);

/********************************************************** */
function fn() {
    function fn1() {
        console.log(this); // undefined
    }
    fn1();
}
fn();
