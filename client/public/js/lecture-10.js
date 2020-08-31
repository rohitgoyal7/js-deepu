/**
 * REST OPERATOR ...
 */

// const fn = (...params) => {
//     console.log(params);
// };
// fn(1, 2, 3, 4);

// arr = [1, 2, 3, 4, 5];
// let [a, b, ...rest] = arr;
// console.log(a, b, rest);

/**
 * SPREAD OPERATOR ...
 */
//ES5;
// a = [1, 2, 3];
// b = [4, 5, 6];
// // c = a.concat(b);
// // console.log(c);

// // ES6
// d = [...a, ...b]; //[1,2,3, 4,5,6]

// d = [...a, ...b];
// console.log(d);

// obj1 = { a: 1, f: function () {} };
// obj2 = { b: 1 };
// obj3 = { a: 1, f: function () {}, b: 1 };
// obj3 = { ...obj1, ...obj2 };

// console.log(obj3);

// ...spread operator only merges the owned properties, not the inherited
// const o1 = {
//     a: 1,
//     b: 2,
// };
// const o2 = Object.create(o1);
// o2.c = 3;
// o2.d = 4;

// const o3 = {
//     e: 1,
//     f: 2,
// };
// const o4 = Object.create(o3);
// o4.g = 3;
// o4.h = 4;

// console.log(o2, o4);
// o5 = { ...o2, ...o4 };

// o6 = { ...o2, ...o4, ...o2.__proto__, ...o4.__proto__ };

// console.log(o6);

/**
 * DESTRUCTURING
 */
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// };

// const a = obj.a;
// const b = obj.b;
// const c = obj.c;
// let d = obj.d || 100;

// const { a, b, c, d } = obj;
// console.log(a, b, c, d);

// const { a = 10, b = 20, c = 30, d = 40 } = obj;
// console.log(a, b, c, d);

//const obj = { a: 1, c: { e: 10, f: 20 } };

// a= obj.a;
// e = obj.c.e;
// f= obj.c.f

// const {
//     a,
//     c: { e, f },
// } = obj;

// console.log(a, e, f);

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// };

// const { a, b, c } = obj;

// let { a: a1, b, c } = obj;
// console.log(a1, b, c);

/**
 * Object.assign()
 */

// let obj1 = { a: 1 };
// let obj2 = { b: 1 };
// let obj3 = { ...obj1, ...obj2 };

//console.log(obj1, obj2, obj3);

//const obj4 = Object.assign(obj1, obj2);

// var o1 = Object.assign({}, obj1, obj2);

// console.log(obj1, obj2, o1);

// a = [1, 2, 3];
// b = [4, 5, 6];
// d = [5, 6, 7, 8];

// c = Object.assign([], a, b, d);

// console.log(c);

// o1 = Object.assign({}, { a: 1 }, { a: 2, b: 2 }, { a: 3, c: 10 });
// console.log(o1);

/** Array Methods */
// var arr = [1, 2, 3, 4];
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] + 10;
// }
// console.log(arr);

/**
 *  forEach is exactly same as for loop
 */
// var arr = [1, 2, 3, 4];

// arr.forEach((elem, index, array) => {
//     array[index] = elem + 10;
// });
// console.log(arr);

/********************************************************* */
// var arr = [1, 2, 3, 4];
// const arr1 = arr.map((elem, index, array) => {
//     return elem + 10;
// });
// console.log(arr1);

// var arr = [1, 2, 3, 4];
// arr1 = arr.filter((elem, index, array) => {
//     if (elem % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(arr1);
