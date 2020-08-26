/**
 * CONSTRUCTOR
 */

// INSTANCE - CONSTRUCTOR - PROTOTYPE

// calling a fn with a new keyboard will run it as a contructor

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// // o1 .... are instances of Person constructor

// const o1 = new Person("js", 30);
// const o2 = new Person("reactJS", 30);
// const o3 = new Person("angularjs", 30);

// Person.prototype.print = function () {
//     console.log(this.name);
//     return 100;
// };

// console.log(o1.__proto__ === Person.prototype); // true
// console.log(o2.__proto__ === Person.prototype); //true
// console.log(o1.__proto__ === o2.__proto__); // true

/**
 * CLASSES ES6
 */

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     print() {
//         console.log(this.name);
//         return 100;
//     }
// }
// const p1 = new Person("react", 10);
// const p2 = new Person("js", 15);

// p1.print();
// p2.print();

// console.log(p1.__proto__ === Person.prototype); // true
// console.log(p2.__proto__ === Person.prototype); // true

class Car {
    constructor(wheels, color) {
        this.wheels = wheels;
        this.color = color;
    }
    printWheels() {
        console.log(`the count of wheels is ${this.wheels}`);
    }
    print() {
        console.log("parent print....");
    }
}

const c1 = new Car(4, "white");
c1.printWheels();

class Maruti extends Car {
    constructor() {
        super(4, "white");
        this.brand = "Maruti";
    }
    printColor() {
        console.log(`the count of color is ${this.color}`);
    }
    print() {
        super.print();
        console.log("local print");
    }
}

const m1 = new Maruti();
