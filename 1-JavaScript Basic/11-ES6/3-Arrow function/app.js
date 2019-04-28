
// Arrow Functions or Fat Arrow Functions
// no name;
// no function keyword
//parameters and return statement;


// no parameters
function sayHi() {
    console.log("salaam");
}

// sayHi();

const salaam = function (name) {
    console.log(`salaam ${name}`);
};
salaam("shaf")

//one parameter
function triple(num) {
    return num * 3;
}


// arrow function don't have a name they are alway anonymous but need to be assign to a variable as a function express plus they don't use the function keyword


//! zero parameters

let hello = () => console.log('hello');
// hello();


let double = num => num * 2;
let num = double(4);
console.log(num);//8



// two parameters and more than one line
let multiply = (num1, num2) => {
    const result = num1 * num2;
    return result
}
let sum = multiply(4, 4);
console.log(sum);//16



const obj = () => ({ name: 'ali', age: 25 });

const person = obj();
console.log(person);



//! If you need to return the object inside the parenthesis you need to have curly braces to ie ({}), This is how we work if we are returning a object


const numbers = [1, 2, 3, 4, 5, 6];
const big = numbers.filter(num => num > 2);

console.log(big);



// adding a arrow function with addEventListener
document.getElementById('btn').addEventListener('click', () => console.log("click me"));















