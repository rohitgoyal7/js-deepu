/**
 * PQ -1
 */
var count = 10;
function foo() {
    var count = 100;
    function bar() {
        console.log(count);
    }
    bar();
}
foo();

/**
 * PQ -2
 */
function foo() {
    var p = 10;
    bar();
}
function bar() {
    console.log(p);
}
foo();

/**
 * PQ -3
 */
var foo = function () {
    var foo = 1;
};
foo();
console.log(foo);

/**
 * PQ -4
 */
var p = 10;
function foo() {
    var p = 20;
}
foo();
console.log(p);

/**
 * PQ -5
 */
(function () {
    var a = 1;
})();
console.log(a);

/**
 * PQ -6
 */
a = 0;
(function () {
    var a = 1;
})();
console.log(a);

/**
 * PQ -7
 */
var id = 10;
console.log(window.id);

/**
 * PQ -8
 */
var i = 5;
if (i < 20) {
    var j = 10;
}
console.log(j);
