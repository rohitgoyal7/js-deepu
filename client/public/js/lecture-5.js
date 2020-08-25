/**
 * TYPE COERCION
 */

/**
 * USEFUL LINKS
 * https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/
 * https://www.w3schools.com/js/js_type_conversion.asp
 */

1 == "1"; // true

6 > true; // 6 > 1

// falsy consitions
// null
// undefined
// false
// 0
// NaN
// ""

// comparing boolean to a number
// false -> 0
// true -> 1

// 1 + "2"; // number gets converted to string
// "1" + "2";
// ("12");

//1 + 2 + "3"; // 3 + "3" // "33"

// 1 - "2";
// 1 - 2;
// -1;

// 1 + "js";

// --> Explicit conversion to String
// 5 + ""; // "5"
// [1] + ""; //  array to a string ----- toString()
// [1, 2] + [3, 4]; // toString()
// [1, 2] + 3;

// --> Explicit conversion to Number
// 4 > "3";
// 4 / "2";

// --> Explicit conversion to Boolean
// if ({}) {
// }
// if ([]) {
// }

// --> Implicit conversion to String, Number , Boolean

/**
 * PRACTICE QUESTIONS
 */
// 1 > 2 > 3;  // false > 3
// 6 < 7 < 8;  // true < 8
// 1 + 2 + "3";
// "1" + 2 + 3;
// null > undefined;

// === -->  == (+ it does an extra type check also)

// type coercion works only when there is "=="
/**
 * PRACTICE QUESTION - 1
 */
let a = 1;
let b = "1";
console.log(a == b, a === b);

/**
 * PRACTICE QUESTION - 2
//  */
let a = 1.0;
let b = 1;
console.log(a == b, a === b);

/**
 * PRACTICE QUESTION - 3
 */
let a = null;
let b = undefined;
console.log(a == b, a === b);

// null == undefined;

// ===  --- checks for the same data type first and then the same value
// 1. check if the data types are same, if not return false
// 2. if the types are same on both the extremes, check for == or the value

typeof typeof undefined;

typeof null;

typeof NaN;
