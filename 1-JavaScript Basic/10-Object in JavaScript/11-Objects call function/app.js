// First parameter sets this value, rest  - actual parameter

const greet = function () {
    console.log(`Hi my full name is ${this.name} ${this.lastName}`);
};

window.name = "john";
window.lastName = "carter";
greet(); // function is accessing the global function



const person1 = {
    name: "arnold",
    lastName: "house",
    greet: function () {
        console.log(`Hi my name is ${this.name} ${this.lastName}`);
    }
};

person1.greet();

const person2 = {
    name: "craig",
    lastName: "Wood"
};

greet.call(person2);
greet.call(person1);