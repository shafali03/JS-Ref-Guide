
// Assignment Destructuring
// bind properties to variables
// we can do that with object, arrays and function 

// old way


const person = {
    name: 'john',
    lastName: 'anderson',
    age: 25;
}

// const name = person.name
// const lastName = person.lastName

const { name, , lastName } = person;
console.log(name, age, lastName); // john 25 anderson

// properties names need to match;

//alias
const { name: firstName, age: old } = person;
console.log(firstName, old);

//arrays
const
