/**
 * BLOCK SCOPE vs FUNCTION SCOPE vs GLOBAL SCOPE
 */

// ES5 - function scope and global scope
// > ES6 - function scope and global scope and block scope

/**
 * REDECLARING VAR, LET and CONST
 */

// anything which is not in a fn scope is flagged as global scope variable (assuming we dont have block scope )
// GLOBAL variables can be accessed from anywhere inside the JS file

// var a;
// var b = 2; // global scope
// function fn() {
//     var a = 1; // fn scope , scope is #16-#20
//     var b = 3;
//     console.log("a", a); // 1
//     console.log("b", b); // 3
// }
// fn();
// console.log(a);
// console.log("b", b); // 2

// var c = 3; // global
// var a = 100; // global
// function fn1() {
//     var a = 1; // fn1
//     var b = 10; // fn1
//     function fn2() {
//         var a = 4; // fn2
//         var b = 2; // fn2
//         console.log("a", a); // 4
//         console.log("b", b); // 2
//         console.log("c", c); // 3
//     }
//     fn2();
//     console.log(a); //1
// }
// fn1();
// console.log("c outer", c); //3

// function fn1() {
//     var a = 1; // 4
//     console.log(a);
//     function fn2() {
//         a = 4; // re assignment
//         console.log("a", a);
//     }
//     fn2();
//     console.log(a);
// }
// fn1();

// function fn() {
//     //
//     {
//         var a = 1; // fn scope
//     }
// }
// console.log(a);

// {
//     var a = 1; // global scope
// }
// console.log(a);

// {
//     let a = 1; // block scope #70-#72
// }
// console.log(a);

// if (true) {
//     var a = 1; // global
//     const b = 2; // block
//     let c = 3; // block
// } else {
//     //
// }
// console.log("a", a); // 1
// console.log("b", b); // error
// console.log("c", c);

// {
//     const a = 1;
//     console.log("a inner", a); // 1
// }
// console.log("a outer", a); // error

// var a = 1;
// function fn1() {
//     if (true) {
//         var a = 2;
//     }
//     console.log(a); // 2
//     function fn2() {
//         if (true) {
//             var a = 3;
//         }
//         console.log(a); // 3
//     }
//     fn2();
// }
// fn1();
// console.log(a); //1

// const a = 1;
// function fn1() {
//     if (true) {
//         const a = 2;
//     }
//     console.log(a); // 1
//     function fn2() {
//         if (true) {
//             const a = 3;
//         }
//         console.log(a); // 1
//     }
//     fn2();
// }
// fn1();
// console.log(a); // 1

// const a = 2;
// {
//     const a = 1;
//     function fn1() {
//         console.log(a); // 1
//     }
//     fn1();
// }

// const a = 2;
// function fn1() {
//     {
//         const a = 1;
//         {
//             console.log(a); //1
//         }
//     }
// }
// fn1();

// const a = 2;
// function fn1() {
//     {
//         const a = 1;
//     }
//     {
//         console.log(a); //2
//     }
// }
// fn1();

// {
//     var a = 1;
//     console.log(a, "inner"); // 1
// }
// console.log(a, "outer"); //1

// {
//     const a = 1;
//     console.log(a, "inner"); // 1
// }
// console.log(a, "outer"); // error

// {
//     let a = 2;
//     a = 3;
//     console.log(a); // 3
// }
// var a = 1;
// console.log(a); //1

// {
//     var a = 2; // global
//     a = 3;
//     console.log(a); // 3
// }
// let a = 1; // new declaration ---error
// console.log(a); // 1

// {
//     const a = 3;
//     a = 2;
//     console.log(a);
// }

// var name =1
// var name

// myName
