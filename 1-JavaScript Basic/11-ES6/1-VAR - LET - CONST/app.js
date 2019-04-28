
// Define, redefine and update variables

// var
// let
// const

//define
var number = 100;
console.log(number);//100
//update
update = 200;
console.log(number); //200
//redefine
var number = 'apple';
console.log(number); //orange


// LET


//define
let amount = 100;
console.log(amount); //100

// update
amount = 200;
console.log(amount);

//redefine 
// let amount = "apple";
// console.log(amount)// error



// CONST

// LET


//define
let amount1 = 100;
console.log(total); //100

// update
// total = 200;
// console.log(total);// can not reassign amount



const person = { name: 'bob' };
person.name = 'peter';

console.log(person); //peter

// if we have a refer type then we can change the value with in the objects. But we can not reassign the value to something else.



// ================================================

// SCOPE LET CONST BLOCK SCOPE
// VAR FUNCTION SCOPE

// global scope

function greeting() {
    //local scope
    var value = 'hi'
}
// console.log(value);

// I can not access the value from outside. var value is sitting inside a local scope





function greet1() {
    //local scope
    let value = 'greeting'
    console.log(value);// greeting

}
greet1(); // run the function
// let greeting = 100;
// console.log(value);

// You can get the value with th function once the function is run. However you can not access from outside.

// greeting1 that is sitting within the function is not accessible from outside. greet that we have created in the global scope is different to the one in local scope


var test = true;

var total = 1000;

if (test) {
    var total = 'orange + onion'
}
console.log("and the total salary is : " + total)

// everything which is declare in curly bracket of a fit statement are global scope


// let and const are alway attach to the block scope







let test2 = true;

let total4 = 1000;

if (test2) {
    let total4 = 'orange + onion'
}
console.log("and the total salary is : " + total4);
console.log(window.total4)// undefined

//


{
    let total = 2000;
    console.log(total)
}
{
    let total = "oranges";
    console.log(total)
}


// block scope you don't need to come up the any unique variable name. Anything in the curly braces will have there own scope.



console(school);
var school = 'is the best';

// we can access the variable before it was declare with var but you can't access the value, they were hoist all the way to the top of the document only the declaration not the value;



console(lastSchool);

let lastSchool = 'is the best';

// with let you will get a error lastSchool is not defined













