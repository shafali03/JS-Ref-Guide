
/*
Array Example
*/

function Student(name, lastName, role) {
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

const john = new Student("john", "conner", "student");

const list = [];
console.log(list.constructor);
console.log(Object.getPrototypeOf(list));
console.log(object.getPrototypeOf(Object.getPrototypeOf(list)));

console.log(list);