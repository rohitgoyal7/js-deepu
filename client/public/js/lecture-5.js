/**
 * TYPE COERCION
 */

// 1 == "1";
// 1 == 1

// 6 > true; // 6 > 1
// 6 > 1;
// false > 1; // 0 > 1

// falsy consitions
// null
// undefined
// false
// 0
// NaN
// ""

//false -> 0
// true -> 1

// 1 + "2"; // number gets converted to string
// "1" + "2";
// ("12");

// 1 + 2 + "3";
// 3 + "3";
// "3" + "3";
// ("33");

// 1 - "2";
// 1 - 2;
// -1;

// 1 + "rohit";

// --> Explicit conversion to String
// 5 + ""; // strings
// [1] + ""; // toString()
// [1, 2] + [3, 4]; // toString()
// [1,2] + 3

// --> Explicit conversion to Number
// 4 > "3";
// 4 / "2"; //

// --> Explicit conversion to Boolean
// if ({}) {
// }
// if ([]) {
// }

// --> Implicit conversion to String, Number , Boolean

/**
 * PRACTICE QUESTIONS
 */
// 1 > 2 > 3; //  1 > 2 > 3 ---> false > 3 --> 0>3 // false
// 6 < 7 < 8; // true < 8 --> 1 <8 ---> true
// 1 + 2 + "3"; // 3 + "3"  ----> "33"
// "1" + 2 + 3; // "12" +  3 ---> "123"
// null > undefined; // 0 > 0 --> false

// === -->  == + it does a extra type check also

/**
 * PRACTICE QUESTION - 1
 */
// let a = 1;
// let b = "1";
// console.log(a == b, a === b);

/**
 * PRACTICE QUESTION - 2
//  */
// let a = 1.0;
// let b = 1;
// console.log(a == b, a === b);

/**
 * PRACTICE QUESTION - 3
 */
// let a = null;
// let b = undefined;
// console.log(a == b, a === b);

// null == undefined;

//===
// 1. check if the data types are same, if not return false
// 2. if the types are same on both the extends, check for == or the value

/**
 * USEFUL LINKS
 * https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/
 * https://www.w3schools.com/js/js_type_conversion.asp
 */

/**
 * OBJECTS BASICS
 */

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// const fName = "";
// const lName = "";
// const address = "";

// console.log(fName);

// const person = {
//   fName: "",
//   lName: "",
//   address: "",
// };

// console.log(fName);

/**
 * OBJECT CREATION - can be of 3 kinds
 */

// const obj1 = {}; // the commonly used
// const obj2 = new Object(); // the least used
// const obj3 = Object.create({}); // it depends on the use case

// let pObj = {
//   a: 1,
//   b: 2,
// };
// let cObj = Object.create(pObj); // let obj = {}
// cObj.c = 3;
// cObj.d = 4;
// console.log(cObj);

// let obj1 = {b: 1};
// let obj2 = Object.create(obj1);
// obj2.a = 2;
// let obj3 = Object.create(obj2);
// obj3.a = 3;

// polymorphism

// let pObj = {
//   a: 1,
//   b: 2,
// };
// let cObj = Object.create(pObj);
// cObj.a = 3;
// // cObj.d = 4;
// // console.log(cObj);

// const pObj = {
//   print: function () {
//     console.log("print....");
//   },
// };

// const o1 = Object.create(pObj);
// o1.name = "pratap";
// const o2 = Object.create(pObj);
// o2.name = "rohit";

// console.log(o1);
// console.log(o2);

// const o1 = {};
// const o2 = {};

/**
 * PROTOTYPES
 */
// let parentObj = {
//   a: 1,
//   b: 2,
// };
// let chindObj = Object.create(parentObj);
// chindObj.c = 3;
// console.log(chindObj);

// const o2 = {d: 4, e: 5};
// const o1 = Object.create(o2);
// o1.a = 1;
// o1.b = 2;
// o1.c = 3;
// for (prop in o1) {
//   console.log(prop);
// }
// for..in loop - goes till the prototype chain

// const o2 = {d: 4, e: 5};
// const o1 = Object.create(o2);
// o1.a = 1;
// o1.b = 2;
// o1.c = 3;
// console.log("d" in o1);
//  in operator - goes till the prototype chain

// const o2 = {d: 4, e: 5};
// const o1 = Object.create(o2);
// o1.a = 1;
// o1.b = 2;
// o1.c = 3;
// delete o1.c;
// delete o1.__proto__.d;
// delete operator - doesnt traverse  the prototype chain

/**
 * DELETE keyword
 */
// let pObj = {
//   a: 1,
//   b: 2,
// };
// let cObj = Object.create(pObj);
// cObj.c = 3;
// delete cObj.c;
// delete cObj.a;
// console.log(cObj);

/**
 * GETTERS and SETTERS
 */
// let obj = {
//   a: 1,
//   get b() {
//     return this["abcd_1231_3213131"];
//   },
//   set b(val) {
//     if (val > 5) {
//       this["abcd_1231_3213131"] = val; // this is obj
//     }
//   },
// };

// obj.b = 10;
// console.log(obj.b);
// obj.b = 1;
// console.log(obj.b);
// prop of an obj  which should be only numbers from 0-10

/**
 * ENUMBERABLE, CONFIGURABLE, WRITABLE properties
 */
// let obj = {};
// obj.a = 1;

// console.log(Object.getOwnPropertyDescriptor(obj, "a"));

// Object.defineProperty(obj, "b", {
//   enumerable: false,
//   configurable: false,
//   writable: false,
//   value: 10,
// });

// console.log(Object.getOwnPropertyDescriptor(obj, "b"));

// const pObj = {
//   a: 1, // enumerable as true
// };

// Object.defineProperty(pObj, "b", {
//   value: 2,
//   enumerable: false,
//   writable: true,
//   configurable: true,
// });

// const cObj = Object.create(pObj);
// cObj.c = 3;

// Object.defineProperty(cObj, "d", {
//   value: 4,
//   enumerable: false,
//   writable: true,
//   configurable: true,
// });

// for (prop in cObj) {
//   console.log(prop);
// }

// console.log("a" in cObj);
// console.log("b" in cObj);
// console.log("c" in cObj);
// console.log("d" in cObj);
// console.log("toString" in cObj);

// let arr = [1, 2, 3];
// for (let index in arr) {
//   console.log(index);
// }

/**
 * IN operator
 */

/**
 * PRACTICE QUESTION - 1
 */
// make all the owned enum properties as non-writable
// const pObj = {
//   a: 1, // enumerable as true
// };

// Object.defineProperty(pObj, "b", {
//   value: 2,
//   enumerable: false,
//   writable: true,
//   configurable: true,
// });

// const cObj = Object.create(pObj);
// cObj.c = 3; // owned and enum

// Object.defineProperty(cObj, "d", {
//   value: 4,
//   enumerable: false,
//   writable: true,
//   configurable: true,
// });

// for (let prop in cObj) {
//   if (cObj.hasOwnProperty(prop)) {
//     Object.defineProperty(cObj, prop, {
//       writable: false,
//     });
//   }
// }
