
/*
All objects in javascript inherit from the prototype of a Object() constructor function. When we say object we mean array and functions because they are also object
*/




function Student(name, lastName, role, ) {
    this.name = name;
    this.lastName = lastName;
    this.role = role;
}

Student.prototype.school = "Crystal Grove High School";
Student.prototype.greet = function () {
    console.log(
        `Hi I'm ${this.name} ${this.lastName} and I'm ${this.role} in the ${this.school
        }`
    );
};


const john = new Student(
    "john",
    "conner",
    "student"
);


const bob = {};

//Object constructor
console.log(bob.constructor);


console.log(Object.getPrototypeOf(bob));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(bob)));

// console.log(Object.getPrototypeOf(john));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(john)));


// console.log(
Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(john)))
// );



//! Object constructor function prototype is at the top of the food chain since there is nothing after that 





// console.log(john.constructor.prototype);
// console.log(Object.getPrototypeOf(bob));

// console.log(john);
// console.log(bob);
// john.greet();
// bob.greet();
