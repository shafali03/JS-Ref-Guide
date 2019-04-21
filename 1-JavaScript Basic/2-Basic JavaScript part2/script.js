
// Primitive Data Types 
//Strings, Number, Symbol, Boolean, Undefined , Null
//Arrays, Function, Objects = object
// (typeof)

//assigning to primitive value any changes
// are made directly to that value

// Assigning non-primitive value to variable is done by reference

// So any change will affect all the reference

let number = 1;
let number2 = number;
number2 = 4;

console.log('the first value is ' + number);
console.log('the second value is ' + number2);

let person = { name: 'Ali' };
let person2 = person;
person2.nameB = 'Hasan';
// When yu make the changes it will affect all the reference

console.log('the first person name ' + person.nameB);
console.log('the second person name ' + person2.nameB);

//====================================================

//! Both represent 'no-value'

//! undefined ----- javaScript can not find the value for this

//! null ----"programmer set the value"


let numberA = 20 + null;
console.log(numberA); //20 + 0

let number20 = 20 + undefined;
console.log(number20) // NaN


//====================================================

// String 
let nameA = 'John';
let lastName = 'Pepper';

let fullName = nameA + ' ' + lastName; //concatenations

console.log(fullName)



//Object
let person1 = {
    nameA: 'John', //properties
    lastName: 'Pepper',
    fullName: function () { //method
        console.log(this.nameA + " " + this.lastName)
    }
}

// To access a object you do object.properties
console.log(person1.nameA);
person1.fullName();



// String obj

let human = "John Pepper";

let length = human.length;
console.log(length); // 12 digits mean refer to john pepper

console.log(human.toLowerCase()); //method need parenthesis()
console.log(human.toUpperCase());

console.log(human.charAt(0)); // charAt finds position of human and logs J
console.log(human.charAt(human.length - 1)) // -1 will return the last value of the string

console.log(human.indexOf('e'));
// It will return the first e in the string

console.log(human.startsWith('Jo'))
// Will look for Jo in the string and return true or false in this case it will be true. Also it is case sensitive.

//Chaining methods
console.log(human.toLowerCase().startsWith('john'));
// This will convert the string to lowercase then it will check if it exist in the string if so it will return true

console.log(human.toLowerCase().endsWith('pepper'));


console.log(human.slice(0, 5));
// This will start at 0 in the string J and and return the next 5 letter including space. John

console.log(human.slice(-6));
// The slice also return negative in the string which will be Pepper


console.log(human.includes('John'));
// Include method check if this string contains John if so it will return true

//====================================================

// Template String

let friendName = 'John';
let age = 25;
let sentence = `Hey it\'s ${friendName}  and he\'s  ${age} old`;

//console.log('hey it"s' + name + ' and he\'s ' + age + ' old);

// console.log(`Hey it\'s ${friendName}  and he\'s  ${age} old`);

console.log(sentence)

//====================================================

// Arrays === list of values zero index base
// Object ==== collection of values

// let zero = [];
let names = ['john', 'bob', 'barry', 'ben', 'ali', 'shak', 'hasan', 'moeen', 1, 3, 5, 6, 2, 4];
// let names2 = new Array(1, 40, 60);
// console.log(names);
// names[0] = 'peter';
// console.log(names[0]);
// console.log(names);

// //Object
// let personA = {
//     name: 'bob'
// }

// console.log(personA.name);

// personA.name = 'susy';


// length 
let result = names.length;
console.log(result);

console.log(names[4])

// To get the last item in the array -1
console.log(names[names.length - 1])

//reverse
console.log(names.reverse());

//concat
let lastNames = ['pepper', 'onion', 'banana'];
console.log(names.concat(lastNames));


//unshift --- adds item in front of the array
console.log(names.unshift('sue'));
console.log(names);


//shift --- remove the first item in the array
console.log(names.shift());
console.log(names);

//push --- add the item at the end of the array
console.log(names.push('Shaf'));
console.log(names)

//pop --- remove the last item in the array which is shaf
console.log(names.pop())
console.log(names);

//splice --- remove item from the array start point 2 and the number of item you want to remove ie 1 bob is removed
// console.log(names.splice(2, 3));
console.log(names);

//sort --- sort it out in alphabetical order
console.log(names.sort())
console.log(names)





//====================================================

// for loop
//! Array are zero index base

// for (let i = 0; i < 10; i++) {
//     console.log(`Your number is ${i}`)
// }


let friendz = ['shaf', 'ali', 'hasan', 'shak', 'saf', 'hammaad'];


// for (let i = 0; i < friendz.length; i++) {
//     console.log(`Your friends number ${i + 1} is ${friendz[i]}`)
// }


// iterating over the array using the for loop
for (let i = friendz.length - 1; i >= 0; i--) {
    console.log(`Your friends number ${i + 1} is ${friendz[i]}`);
}


//====================================================

// Global Math object
// This will rand it upto 3

let numberB = 16;

let resultX = Math.floor(numberB); // rand down to 3
let resultY = Math.ceil(numberB) // rand up to 4
let resultZ = Math.sqrt(numberB) // divide the number 

let resultW = Math.PI; // return a pi value

let resultS = Math.min(1, 3, 4, 6, 8, 4) //return the minimum value
let resultG = Math.max(1, 3, 4, 6, 8, 4) //return the maximum value


let resultR = Math.floor((Math.random() * 10) + 1); // will return random number from 1 to 10 

console.log(resultX);
console.log(resultY);
console.log(resultZ);
console.log(resultW);
console.log(resultS);

console.log(resultG);
console.log(resultR);


//==========================================

// Global date objects

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];


let date = new Date();
let month = date.getMonth();
let day = date.getDay();
let seconds = date.getSeconds();


console.log(date)
console.log(month)
console.log(day)
console.log(seconds)

console.log(`Month is : ${months[month]} and the day is : ${days[day]}`)

// Set the date
date.setDate(25);
date.setDate(2009);
date.setMonth(4);

let dates = new Date('12/7/2023');
console.log(dates);

console.log(date);


//===================================================

// ToDO let


// function addItem(arr, item) {
//     arr.push(item)
// }

// addItem(toDoList, "Go shopping");
// addItem(toDoList, "Make coffee");

// console.log(toDoList);

let toDoList = [];


function addItem(arr) {
    let answer = prompt("Your checklist for today")
    let correct = answer.toLowerCase().trim()

    let index = arr.indexOf(correct);
    console.log(index)

    if (checkDuplicate(arr, correct)) {
        arr.push(answer);
    }
    else {
        alert('Item already exist, do not repeat task');
    }
}


function checkDuplicate(arr, item) {
    let isUnique = false;
    let index = arr.indexOf(item); //-1

    if (index != -1) {
        isUnique = false;
    } else {
        isUnique = true;
    }
    return isUnique;
}

// remove item function
function removeItem(list) {
    let answer = prompt('Which item would you like to delete from the array');
    let correct = answer.trim().toLowerCase();

    let index = list.indexOf(correct);

    if (!checkDuplicate(list, correct)) {
        let removedItem = list.splice(index, 1)
        console.log(removedItem);
        alert(`You removed "${removedItem}" from your list`)
    }
    else {
        console.log('no such value exists')
    }
}



// remove item from list

// function removeItem(list) {
//     if (list.length > 0) {
//         console.log(`You deleted "${list[list.length - 1]}" from the list`)
//         list.pop()
//     }
//     else {
//         console.log('List do not hve any more item to delete')
//     }
// }

addItem(toDoList);
addItem(toDoList);
addItem(toDoList);

removeItem(toDoList);

console.log(toDoList)
