/**
 * all scripts are called SEQUENTIALLY
 */
// console.log("external script called");

// var a = {};
// // number, string, boolean, null, undefined, Symbol, Object, BigInt

// var d;
// console.log(d); // undefined

// var e = 1;
// e = null;
// e = "";
// e = undefined;
// console.log(e);

var obj = {
    a: 1,
    a: 2,
};

/**
 * DATA TYPES in JS
 * 7 data types till ES6
 *
 */
// var num = 1.0;
// var str = "hello";
// var bool = true;

// var foo = undefined;
// var bar = null;

// var a = Symbol("name"); // 123-234
// var b = Symbol("name"); // 012-123

// console.log(a == b);

// var obj = {};
// var a = 2133213;

// var bigInt = 999999990999999456789012345678901234567890n;

var obj = {
    a: 1,
    a: 2,
    [Symbol("name")]: 3,
    [Symbol("name")]: 4,
};

// var greetings = "hello";
// var upperCaseGreetings = greetings.toUpperCase();

/**
 * MUTABLE AND NON MUTABLE
 */

// /**
//  * WRAPPER OBJECT
//  */

// number string boolean
