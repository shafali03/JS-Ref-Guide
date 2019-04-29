
// Assignment Destructuring
// bind properties to variables
// we can do that with object, arrays and function 

// old way


const person = {
    name: 'john',
    lastName: 'anderson',
    age: 25,
}

// const name = person.name
// const lastName = person.lastName

const { name, lastName, age } = person;
console.log(name, age, lastName); // john 25 anderson

// properties names need to match;

//alias
const { name: firstName, age: old } = person;
console.log(firstName, old);

//!============================================= 
//arrays


const distance = [100, 50, 150];

const [home, store, work] = distance;
console.log(home, store, work);

let num1 = 5;
let num2 = -10;
// let num3 = num;
// num1 = num2;
// num2 = num3;

// console.log(num1, num2);

[num1, num2] = [num2, num1];

console.log(num1, num2);


const items = ['orange', 'crisps'];
const [fruit, , sweets = 'apple'] = items;

console.log(fruit, sweets);


// function parameters

function sayName(person) {
    console.log({ name, lastName });
    console.log(name);
    console.log(age);
}


sayName(person);


// console.log({ name, lastName });

//What ever property you want to select from the object with destructuring




//?=============================================


function getPerson() {
    return {
        name1: 'Ali',
        lastName1: 'Mohammed',
        age1: 18

    }
}

const { name1, age1 } = getPerson();

console.log(name1, age1);

//! This is how you work with assignment Destructuring.






















