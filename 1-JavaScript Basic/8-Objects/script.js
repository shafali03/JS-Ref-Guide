
// everything in javascript is either
// one of six primitive data types or an object
// object are key value paris
// if a property is a function it is called a method


// object literals
const person = {}

// construction function
const secondPerson = new Object();

// add property
person.name = 'john';
console.log(person);

// access property
console.log(person.name);

// modify property
person.name = 'bob';

// access property
console.log(person['name'])

// assign value
let lastName = person.lastName;
console.log(lastName);


// check if exits
let check = 'lastName' in person;
console.log(check);


// check with undefined
if (person.lastName === undefined) {

}

// delete property
delete person.name;
console.log(person);


// create object
const human = {
    name: 'bob',
    nickName: 'zip',
    heigh: 7,
    weight: 200,
    married: true,
    education: false,
    friends: ['john', 'sue'],
    sign() {
        return `I'm singing today`
    }
}

let song = human.sign()
console.log(song);


// iterate over the object
for (const data in human) {
    console.log(`${data} : ${human[data]}`);
}



// nested object

const people = {
    person1: { name: 'sue', age: 34 },
    person: { name: 'john' }
}


// objects as parameters


function hello({ greet, name }) {
    return `${greet} !!! ${name}`
}

let greetPerson = hello({ name: 'john', greet: 'Hi there ...' })
console.log(greetPerson)


//====================================================
// Scores Exercise

const studentsScore = [
    { name: 'ali', score: 87 },
    { name: 'hasan', score: 65 },
    { name: 'moeen', score: 64 },
    { name: 'saf', score: 99 }

];


let totalScores = 0;

for (let i = 0; i < studentsScore.length; i++) {
    totalScores += studentsScore[i].score;
}

console.log(totalScores)

let average = totalScores / studentsScore.length;

console.log(average)

for (let i = 0; i < studentsScore.length; i++) {

    if (studentsScore[i].score > average) {
        studentsScore[i].betterThanAverage = true;
    }
    else {
        studentsScore[i].betterThanAverage = false;
    }
}

console.log(studentsScore);