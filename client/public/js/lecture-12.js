/**
 * USEFUL LINKS
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
 */

/**
 * ASYNC PROGAMMING
 */

// console.log(1);
// console.log(2);
// console.log(3);

// setTimeout(() => {
//     console.log(4);
// }, 2000); //ms

// console.log(5);
// console.log(6);
// console.log(7);

/***************************************** */

const a = setInterval(() => {
    console.log("hiii");
}, 2000); // ms

setTimeout(() => {
    clearInterval(a);
}, 13000); //ms

/***************************************** */
