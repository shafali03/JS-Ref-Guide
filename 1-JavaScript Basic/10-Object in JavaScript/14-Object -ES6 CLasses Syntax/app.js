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
class Manger {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    callMeeting() {
        console.log(`I'm calling the meeting`);
    }
}

const sara = new Manger('sara', 'sales');
sara.callMeeting();
console.log(sara);