/**
 * OBJECTS BASICS
 */

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// };

// const fName = "reactJS";
// const lName = "";
// const address = "";

// console.log(fName);

// const person = {
//     fName: "",
//     lName: "",
//     address: "",
// };

// console.log(person.fName);

/**
 * OBJECT CREATION - can be of 3 kinds
 */

// const obj1 = {}; // the commonly used
// const obj2 = new Object(); // the least used
// const obj3 = Object.create({}); // it depends on the use case

// let pObj = {
//     a: 1,
//     b: 2,
// };

// let cObj = Object.create(pObj);
// cObj.c = 3;
// cObj.d = 4;
// console.log(cObj);

// let obj1 = { b: 1 };
// let obj2 = Object.create(obj1);
// obj2.a = 2;
// let obj3 = Object.create(obj2);
// obj3.a = 3;

// let pObj = {
//     a: 1,
//     b: 2,
// };
// let cObj = Object.create(pObj);
// cObj.a = 3;
// cObj.d = 4;
// console.log(cObj);

// pObj.print = function () {
//     console.log("print....");
// };

// console.log(cObj);

//cObj.print();

/**
 * PROTOTYPES
 */

// const o2 = { d: 4, e: 5 };
// const o1 = Object.create(o2);
// o1.a = 1;
// o1.b = 2;
// o1.c = 3;

// for (property in o1) {
//     console.log(property, o1[property]);
// }

// for..in loop - goes till the prototype chain

// const o2 = { d: 4, e: 5 };
// const o1 = Object.create(o2);
// o1.a = 1;
// o1.b = 2;
// o1.c = 3;

// // check whether property exists in an object or not
// console.log("e" in o1);
//in operator - goes till the prototype chain

// const o2 = { d: 4, e: 5 };
// const o1 = Object.create(o2);
// o1.a = 1;
// o1.b = 2;
// o1.c = 3;
// delete o1.c;
// delete operator - doesnt traverse  the prototype chain

/**
 * DELETE keyword
 */
// let pObj = {
//     a: 1,
//     b: 2,
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
//     a: 1,
//     get b() {
//         return this["abcd_1231_3213131"];
//     },
//     set b(val) {
//         if (val > 5) {
//             this["abcd_1231_3213131"] = val;
//         }
//     },
//     get c() {
//         return this["abcd_1231_3213132"];
//     },
//     set c(val) {
//         if (val > 5) {
//             this["abcd_1231_3213132"] = val;
//         }
//     },
// };

// obj.b = 1;
// console.log(obj.b);
// obj.b = 10;
// console.log(obj.b);

/**
 * ENUMBERABLE, CONFIGURABLE, WRITABLE properties
 */
// let obj = {};
// obj.a = 1;

//console.log(Object.getOwnPropertyDescriptor(obj, "a"));

// Object.defineProperty(obj, "b", {
//     enumerable: false,
//     configurable: false,
//     writable: false,
//     value: 10,
// });
// console.log(Object.getOwnPropertyDescriptor(obj, "b"));

// const o2 = { d: 4, e: 5 };
// const o1 = Object.create(o2);
// o1.a = 1;
// o1.b = 2;
// o1.c = 3;

// for (prop in o1) {
//     console.log(prop);
// }

// console.log("**********************");

// Object.defineProperty(o1, "c", {
//     enumerable: false,
// });

// for (prop in o1) {
//     console.log(prop);
// }

// console.log("c" in o1);

/************************************************************************ */
// const o2 = { d: 4, e: 5 };
// const o1 = Object.create(o2);
// o1.a = 1;
// o1.b = 2;
// o1.c = 3;

// // for (property in o1) {
// //     console.log(prop); // a b c d e
// // }

// for (property in o1) {
//     if (o1.hasOwnProperty(property)) {
//         console.log(property); // a b c
//     }
// }

/**
 * IN operator
 */

/**
 * PRACTICE QUESTION - 1
 */

// make all the owned enum properties as non-writable
const pObj = {
    a: 1, // enumerable as true
};

Object.defineProperty(pObj, "b", {
    value: 2,
    enumerable: false,
    writable: true,
    configurable: true,
});

const cObj = Object.create(pObj);
cObj.c = 3; // owned and enum    ---- make this as non writable

Object.defineProperty(cObj, "d", {
    value: 4,
    enumerable: false,
    writable: true,
    configurable: true,
});

for (let prop in cObj) {
    if (cObj.hasOwnProperty(prop)) {
        Object.defineProperty(cObj, prop, {
            writable: false,
        });
    }
}
