
// ES6 Classes Prototype Inheritance


function Employee(id) {
    this.id = id;
}
Employee.prototype.showId = function () {
    console.log(`my id number is ${this.id}`);


}

const john = new Employee(23);

console.log(john)
john.showId();


function Manger(id, name, department) {
    Employee.call(this, id)
    this.name = name;
    this.department = department;
}
Manger.prototype = Object.create(Employee.prototype);
Manger.prototype.constructor = Manger; // if this line was not here then we would have no constructor
Manger.prototype.callMeeting = function () {
    console.log(`I'm calling a meeting`)
};

const sara = new Manger(34, 'sara', 'sales');

console.log(sara);

sara.callMeeting();
sara.showId();