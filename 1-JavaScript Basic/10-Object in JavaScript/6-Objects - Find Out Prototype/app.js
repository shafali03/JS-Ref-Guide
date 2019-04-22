
/*

Object.constructor.prototype 
Object.getPrototypeOf({is expecting object})

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


const bob = new Student(
    "bob",
    "jordan",
    "student"
);

console.log(john.constructor.prototype);
console.log(Object.getPrototypeOf(bob));

// console.log(john);
// console.log(bob);
// john.greet();
// bob.greet();
