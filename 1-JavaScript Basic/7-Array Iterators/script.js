//? VERY POWERFUL ARRAY METHODS forEach, filter, map, reduce

//? THEY ALL ITERATE OVER ARRAY -- NO NEED FOR LOOP

//? WE PASS CALLBACK FUNCTION EITHER BY DECLARING SEPARATELY OR ANONYMOUS

//? FILTER AND MAP RETURN NEW ARRAY, REDUCE CAN RETURN MORE THAN JUST ARRAY

//===================================================


const numbers = [0, 1, 2, 3, 4, 5];
//show all number
for (let i = 0; i < 5; i++) {
    console.log(numbers[i]);
}


// get even numbers
const even = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        even.push(numbers[i]);
    }
}

console.log(even);



//===================================================

//? ARRAY ITERATION
//? forEach
//? loop through array
//? call a callback function


const names = ['john', 'bob', 'sue'];

// for loop
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}


//forEach
names.forEach(function (name) {
    console.log(name)
})


names.forEach(showName)

function showName(name, index) {
    console.log(`${name} is in ${index} index`);
    let fullName = `${name} anderson`;
    console.log(fullName)
}







//===================================================

//? ARRAY ITERATION
//? filter
//? loop through array
//? call a callback function
//? return new array




const numbersA = [0, 1, 2, 3, 4, 5];


// get even numbers
const evens = [];
for (let i = 0; i < numbersA.length; i++) {
    if (numbersA[i] % 2 === 0) {
        evens.push(numbersA[i]);
    }
}

console.log(evens);


const evenA = numbersA.filter(function (number) {
    return number % 2 === 0;
})

const big = numbersA.filter(function (number) {
    return number > 2;
})

console.log(evenA);
console.log(big)





//!===================================================

//? ARRAY ITERATION
//? map
//? loop through array
//? call a callback function
//? return new array
//? Filter change size of array (but not the value) by looking at condition map changes the values in the array but does not change the size;


const namesB = ['Ali', 'Hasan', 'Shaf'];

// for loop
// let timesTwo = [];
// for (let i = 0; i < numbersB; i++) {
//     let times = numbers[i] * 2;
//     timesTwo.push(times);
// }
// console.log(timesTwo)

const numbersB = [0, 1, 2, 3, 4, 5];
const timesTwo = numbersB.map(function (number) {
    return number * 2;
})
console.log(timesTwo);




const namesC = ['Shaf', 'Hasan', 'Hussain'];


const fullNames = namesC.map(function (addedSurname) {
    console.log(addedSurname) //
    return `${addedSurname} Ahmed`;
})

console.log(fullNames)



//!===================================================


//? ARRAY ITERATORS
//? REDUCE
//? LOOP THROUGH ARRAY
//? CALL A CALLBACK FUNCTION
//? RETURN NEW ARRAY
//? REDUCES THE VALUE TO A SINGLE VALUE!!!
//? FIRST PARAMETER ('acc') ===== TOTAL OF ALL CALCULATIONS;
//? SECOND PARAMETER ('curr') ===== CURRENT VALUE IN THE ARRAY






const numbersC = [1, 2, 3, 4, 5, 6, 7];

const total = numbersC.reduce(function (acc, curr) {
    console.log(curr);
    console.log('this is a total ' + acc);

    acc = acc + curr

    return acc;
}, 0);
//using reduce remember to return acc
console.log(total)




const fruitsA = ['orange', 'banana', 'apple', 'grapes', 'strawberry', 'pear', 'orange', 'banana', 'strawberry'];


// const types = fruitsA.reduce(function (total, fruits) {


//     return total;

// }, {})


const types = fruitsA.reduce(function (total, fruit) {
    // total is a object
    if (total[fruit]) {
        total[fruit] += 1;
    }
    else {
        total[fruit] = 1;
    }

    return total;
}, {})
console.log(types);






const fruits = ['orange', 'banana', 'apple', 'grapes', 'strawberry', 'pear', 'orange', 'banana', 'strawberry'];

const distinct = fruits.reduce(function (acc, curr) {
    console.log(curr)

    if (acc.indexOf(curr) === -1) {
        acc.push(curr);
    }

    return acc;
}, [])
console.log(distinct)



//!================================================
//CHAINING ARRAY ITERATORS

const fruitsB = ['orange', 'banana', 'apple', 'grapes', 'strawberry', 'pear', 'orange', 'banana', 'strawberry'];


const sale = fruitsB.filter(function (fruitS) {

    return fruitS === 'orange';
}).map(function (name) {
    return `${name} are on sale`
})

console.log(sale)










