
/*

Prototype Inheritance Model
JavaScript uses prototype inheritance model. That means that every constructor function/class has a property that is shared by every instance of the constructor / class. So any properties and methods of prototype can be accessed by every instance. Prototypes property returns objects.

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

console.log(john);
console.log(bob);
john.greet();
bob.greet();
