// employee
class Employee {
    constructor(id) {
        this.id = id
    }

    showId() {
        console.log(`my id number is ${this.id}`);
    }

}

const john = new Employee(23);
john.showId();
console.log(john);




//Manger
class Manger extends Employee {
    constructor(id, name, department) {
        super(id);
        this.name = name;
        this.department = department;
    }

    callMeeting() {
        console.log(`I'm calling the meeting`);
    }
}

const sara = new Manger(30, 'sara', 'sales');
sara.callMeeting();
console.log(sara);
sara.showId();


//! After the class name on line 21 need to write extends and what we want to extends from in this case it will be Employee. To access the employee constructor need to use a method call super() on line 23, then pass the parameter of id in constructor. Also pass the id in super(id). Then add the value of id in Manger ie 34. const sara = new Manger(34, 'sara', 'sales');. We can also show the id sara.showId()
