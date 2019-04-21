
// Declaring variable

let Name = 'Ali';

let address, zip, state;

address = '142 London Street'
zip = 'SW 12 3ff'
state = 'London'

console.log(Name)
console.log(address, zip, state)


//===============================================

// Const you can not modify the value

//const dob = 2001;
//dob = 2003;
//console.log(dob) // syntax error


//===============================================

// String Concatenation

let car = 'Audi';
let model = 'A7 RS';
let engine = 1.9;

console.log('I have ' + car + ' ' + model + ' ' + engine)


//Example

let name = 'ALI';
let lastName = 'Hasan';
let fullName = name + ' ' + lastName

console.log('Hi my name is:' + fullName)




// Example

let info = 'google';
let url = 'http://www.' + info + '.com'

console.log(url)

// String concatenation is very powerful it allow you to perform or collecting info and joined them together


//===============================================

// NUmber 

let number = 4;
let number2 = 2.5;

let sum = number + number2;
let sub = number - number2;

console.log(sum)
console.log(sub)


// Modules

let mod1 = 9;
let mod2 = 2;
let result = 9 % 2;

console.log(result) // 1 

// If the first number is even divide it by 2 it will give you 0 even number divide by even number will alway give you 0.


let addition = 4 + 6 + 10 * 10;
let addition2 = (4 + 6 + 10) * 10;

console.log(addition) //110
console.log(addition2) //200


let adds = number += 10;
console.log(adds) //14


let add = 10;
add++;
add++; add++; add++; add++; add++; add++;
add--

console.log(add)





//===============================================

// Implicit type conversion

let value = 'name';
let value2 = 'lastname';
let resultA = value + value2;

console.log(resultA) // namelastname


// Javascript convert the strings into numbers
let value3 = '7';
let value4 = '4';

console.log(value3 + value4);

// console.log(value3 + value4); But if you use the plus javascript will concatenate and the result will be 74


let numbers = 123;
let value5 = 'ali';
let resultB = numbers + value5

console.log(resultB); //123ali

// will convert the numbers value to strings and concatenate the resultB 123ali




//===============================================

// Primitive DATA TYPES IN JAVASCRIPT


// String
let text = 'this is text';

//Number
let value6 = 123;

//Boolean
let valueY = true;
let valueX = false;

//Null
let number33 = null;

//undefined have not assign a value
let nameX;

//Symbols

console.log(typeof text)
console.log(typeof value6)
console.log(typeof valueX)
console.log(typeof valueY)
console.log(typeof number33); //is NOT a object
console.log(typeof nameX)





//===============================================

// DATA TYPES IN JAVASCRIPT

//arrays, function, objects

let fruits = ['apple', 'orange', 'banana'];
let code = function code() {
    console.log('Hi world');
}

let person = {
    name: 'Ali',
    lastName: 'Mohammed'
}

console.log(typeof fruits)
console.log(typeof code)
console.log(typeof person)






// ARRAYS IN JAVASCRIPT

let friends1 = 'John';
let friends2 = 'Peter';
let friends3 = 'Bob';
let friends4 = 'Will';

let friends = new Array('John', 'Peter', 'Bob', 'Will');

let oldFriends = ["Peter", 45, true, null, undefined];

//To change value in the array or modify them
oldFriends[0] = "Bob";

let bestFriends = oldFriends[0];

//To access the item in the array
console.log(bestFriends)



//===============================================

// FUNCTIONS IN JAVASCRIPT
//Declaration, Invoke, Return, Parameters, Expression


//Declaration
function hello() {
    console.log('Hi  stranger');
    console.log('Hi  worker');
    console.log('Hi  stranger');
    console.log('Hi  Peter');
    console.log('Hi John');
}
//Invoke
hello()


// If we have a value inside a function i.e sum we need to return the value and console.log name of the function with parenthesis 

function Add() {
    let sum = 2 + 2;
    return sum
}
console.log(Add())



function addPlus(num1, num2) {
    let sums = num1 * num2;
    return sums
}

console.log(addPlus(3, 5));
// We declare there are two parameters but have not assign a value to them. we assign the value when we invoke the function. when you invoke the function console.log(addPlus(3, 5)) 3 references num1 and 5 references num2


// Some we write the function we are done with the function we can use the function multiple times and change the values

console.log(addPlus(2, 4));
console.log(addPlus(9, 9));



// Expression


function addNum(num1, num2) {
    let sums = num1 * num2;
    return sums
}

//expression
let resultC = addNum(12, 56)
console.log(resultC)




// variable with function
let result2 = function (num1, num2) {
    let sum = num1 / num2;
    return sum;
}

console.log(resultC)

// Now we can you the variable which is result2 
console.log(result2(24, 3))

// Now we can use the variable result which has a function expression


//===============================================


// OBJECTS IN JAVASCRIPT

// In object we can you value string, boolean, function, numbers

let personC = {
    name: 'ali',
    lastName: 'Mohammed',
    age: 20,
    education: true,
    wife: false,
    siblings: ['sister', 'brother'],
    fullName: function () {
        console.log("And the full name if the person is : " + personC.name + ' ' + personC.lastName)
    }
}
//function in objects are methods


// How to access the object
let personName = personC.name;
// or
let personLastName = person['lastName'];

console.log(personName);
console.log(personLastName);

//Access the method (function) in the object
personC.fullName()



//===============================================

// IF ELSE STATEMENT
// CONDITIONAL STATEMENT IN JAVASCRIPT
// COMPARISON OPERATIONS
// >, <, >=, <=, ==, ===, !=, !==

// if the first condition is met the first state will run and the rest is ignored but if the first statement is false the second statement will run and so on 
if (2 < 1) {
    console.log('wow is that right')
}


let numY = 6;
let numZ = 8;


if (numY > numZ) {
    console.log('First number was bigger than second or equal')
}
else {
    console.log('First number was smaller than second')
}


// !=

let numW = 6;
let numX = 8;


if (numW != numX) {
    console.log('numbers are not equal')
}
else {
    console.log('numbers are equal')
}




//! ===

let numS = 8;
let numT = '8';


if (numS === numT) {
    console.log('numbers are equal')
}
else {
    console.log('numbers are not equal')
}



// Just check if equal with == but with 3 === it is checking the dat type values which is not equal  



let personA = 'John';
let personB = 'Bob';

let personD = 'Peter';

if (person === 'john') {
    console.log('This dude is john')
}
else if (person === 'Bob') {
    console.log('This is Bob')
}
else {
    console.log('Who is this new guy in town')
}

// You can add more condition with else if statement


//===============================================

// LOGICAL OPERATORS && AND ||

let day = 'Monday';
let money = 55;

if (day === 'Friday' || money > 50) {
    console.log("You are going out for a meal ");
}


let May = 'Birthday';
let Gift = 5;

if (May === 'Birthday' && Gift > 3) {
    console.log("Having a small party ");
}


//===============================================
//"", '', ``, 0, -0, NaN, null, undefined are false values

// BOOLEAN

let bool1 = true;
let bool2 = false;

console.log(typeof bool1);
console.log(typeof bool2);


let valueA = 2 < 5;

console.log(typeof value);

let resultZ = true;

if (resultZ) {
    console.log("another boolean")
}

let numbA = 5;
if (numbA < 6) {
    console.log('another boolean');
}


let textA = 'just simple text';

if (textA) {
    console.log('How was this possible')
}

// The reason text is converted to true is because it's a true value and "", '', ``, 0, -0, NaN, null, undefined are false values


let falsy = 0;

if (falsy) {
    console.log('runs only if true');
}

else {
    console.log('turn out to be false')
}


//===============================================

// Unary operator

let textZ = "string";

console.log(typeof textZ);//operand
//typeof only requires one operand


// Binary which require two operand

let numbZ = 3;
let numbY = 2 < 5;


// Ternary

// condition ? (runs if true) : (runs if false);

//even number divide by two going to be zero, with a odd number we will have a zero 

let resultS = 9;
//resultS % 2 === 0 ? console.log('even number') : console.log('odd number')

let expressions = resultS % 2;

function response(text) {
    console.log(text + " number");
}

expressions === 0 ? response("even") : response("odd");





let dice = 1;

if (dice === 1) {
    console.log('You got one dice')
}
else if (dice === 2) {
    console.log('You got two dice');
}
else {
    console.log('You did not roll the dice')
}


// SWITCH STATEMENT

let goals = 0;

switch (goals) {
    case 1:
        console.log("you score one goal");
        break;
    case 2:
        console.log('You score two goals');
        break;
    default:
        console.log('sorry we lost');
        break;
}



//===============================================
// Exercise 1

function displayDayOfTheWeek(day) {

    switch (day) {
        case 1:
            console.log('Today is Monday');
            break;
        case 2:
            console.log('Today is Tuesday');
            break;
        case 3:
            console.log('Today is Wednesday');
            break;
        case 4:
            console.log('Today is Thursday');
            break;
        case 5:
            console.log('Today is Friday');
            break;
        case 6:
            console.log('Today is Saturday');
            break;
        case 7:
            console.log('Today is Sunday');
            break;
        default:
            console.log('Sorry invalid day input')
    }
}


displayDayOfTheWeek(7);
displayDayOfTheWeek(4);
displayDayOfTheWeek(3);
displayDayOfTheWeek(1);
displayDayOfTheWeek(2);
displayDayOfTheWeek(5);
displayDayOfTheWeek(6);
displayDayOfTheWeek(0);



//===============================================

// Repeatedly run a block of code while certain condition is true

// While loop

let amount = 10;

while (amount > 0) {
    console.log('I have ' + amount + ' pounds and I\'m going to London for shopping');
    amount--;
}


// Do while loop

let monies = 12;

do {
    console.log('You have ' + monies + ' and you are going on holiday');
    monies++;
} while (monies < 10)

// Start from zero run al the way until it's less than 10 every it run it will increase the monies.

// If you have monies = 12 and 12 is not less then 10 and the code will only run one time 


// for loop

let i;

for (i = 0; i < 10; i++) {
    console.log('And the number is ' + i);
}


for (let number = 11; number >= 0; number--) {
    console.log('And the number is ' + number)
}