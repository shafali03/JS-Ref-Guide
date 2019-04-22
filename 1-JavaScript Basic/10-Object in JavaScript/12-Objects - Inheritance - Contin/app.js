
// Inheritance
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// STUDENT

function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName;

}
Person.prototype.school = "Crystal Grove High School";
Person.prototype.greet = function () {
    console.log(
        `Hi I'm ${this.name} ${this.lastName} and I'm ${this.role} in the ${this.school
        }`
    );
};

//Student
function Student(name, lastName, honorStudent) {

    Person.call(this, name, lastName)
    this.honorStudent = honorStudent;


}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.answerQuestion = function () {
    console.log(`and the answer is ...`);
};

Student.prototype.role = 'student';
const john = new Student("john", "conner", false);
console.log(john);

john.greet();
john.answerQuestion();


// Teacher
function Teacher(name, lastName) {
    Person.call(this, name, lastName);

}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.askQuestion = function () {
    console.log(`and the answer to the question is ?`);
};

Student.prototype.role = "teacher";
const sara = new Teacher("sara", "jordan");
console.log(sara);

sara.greet();
sara.askQuestion();