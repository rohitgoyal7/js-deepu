/**
 * PQ -1
 */
var p = 100;
(function () {
    console.log(p);
    var p = 200;
})();

/**
 * PQ -2
 */
foo();
var foo = 1;
function foo() {
    console.log("hiii");
}

/**
 * PQ -3
 */
display();
var display = function () {
    console.log("hii");
};

/**
 * PQ -4
 */
console.log(p);
let p = 10;

/**
 * PQ -5
 */
var total = a * blur;
var a = 100;
var b = 5;
console.log(total);

/**
 * PQ -6
 */
console.log(p);
const p = 10;

/**
 * PQ -7
 */
display();
function display() {
    console.log("hiii");
}

/**
 * PQ -8
 */
function bar() {
    console.log(b);
}
bar();
var b = 10;

/**
 * PQ -9
 */
console.log(p);
var p = 10;

/**
 * PQ -10
 */
x = 1;
console.log(x);
var x;
