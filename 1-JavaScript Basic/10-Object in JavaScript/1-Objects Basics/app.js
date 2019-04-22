
//Objects Basics

/*
Objects are collections of key value pairs.
property values can be strings, numbers, booleans, arrays and functions however if the property value is a function they are called method instead


*/

// Object literal syntax

const person = {
    name: 'Ertugul',
    age: 26;
    married: true,
    children: ['Usman', 'Abu-bakr'],
    greeting: function () {
        console.log("Hi my name is Shaf")
    },
    ['last-name:']: "Hussain"
};

console.log(person);

// To access objects

// dot notation
console.log(person.name);

const age = person.age;
console.log(age);


//access value in array
const firstChild = person.child[0];
console.log(firstChild);

person.greeting();

//bracket notation
console.log(person['last-name']);
console.log(person['name']); // access the name



// Change property
person.married = false;
console.log(person); // married false;


//add property
person.city = 'Kayni'


delete person.married;
console.log(person);