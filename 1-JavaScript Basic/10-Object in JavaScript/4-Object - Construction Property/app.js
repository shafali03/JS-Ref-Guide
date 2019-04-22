// All objects in JavaScript have access to constructor property that returns a constructor function that create it.
// Built in constructor functions
// Arrays and function are in fact object in javascript

// Constructor function

function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName;
    this.fullName = function () {
        console.log(
            `Hi my  full name is ${this.name} ${this.lastName} and love React`
        );
    };
    console.log(this)

}
const ali = new Person('ali', 'Hussain');


console.log(ali.constructor);
//object
const bob = {};
console.log(bob.constructor);
//array
const list = []
console.log(list.constructor)
//function
const sayHi = function () { };
console.log(sayHi.constructor);


// use this function to create a new object

const sue = new john.constructor('sue', 'carpenter');

console.log(sue);
sue.fullName();





