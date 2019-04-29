
// Spread Operator
// Converts an array to a list of items


// const random = ['something', 'random'];
// const moreRandom = random;


// moreRandom[0] = 'special';

// console.log(random);
// console.log(moreRandom);


const numbers = [1, 2, 3, 4];
const values = [...numbers];

values.push(5);

console.log(numbers)
console.log(values)



//============================================


const names = ['john', 'peter', 'bob'];
const moreNames = ['susy', ...names];

const evenMoreNames = [...names, 'ali', ...moreNames]

console.log(names);
console.log(moreNames);
console.log(evenMoreNames);


//=============================================




// const list = document.querySelectorAll('.list-item');
// console.log(list);


// const special = list.filter(item => item.classList.contains("special"));

//! The above code will not work if you change it then to 




const list = [...document.querySelectorAll('.list-item')];
console.log(list)

const special = list.filter(item => item.classList.contains("special"));
console.log(special);



function add(num1, num2, num3, num4) {
    let result = num1 + num2 + num3 + num4;
    return result;
}



const result = add(...numbers); // 10
console.log(result)

//! The result is 10 we are converting array into a list of items then we use the results variable. 





// Convert a string into an array

const letters = 'Hi there need any help';
const arr = [...letters];
console.log(arr);

//! Each and every letter in the array is transfer into an item of array


