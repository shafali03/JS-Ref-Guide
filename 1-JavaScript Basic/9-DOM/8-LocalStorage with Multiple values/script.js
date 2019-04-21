// Local Storage Session Storage

const names = ['john', 'peter', 'bob'];

// localStorage.setItem('name', names);
// const values = localStorage.getItem('names');


localStorage.setItem('names', JSON.stringify(names));


const values = JSON.parse(localStorage.getItem('names'));
console.log(values[0]);


let fruits;


if (localStorage.getItem('fruits') === null) {
    fruits = [];
}
else {
    fruits = JSON.parse(localStorage.getItem('fruits'));
}

fruits.push('apple');
fruits.push('strawberry');

localStorage.setItem('fruits', JSON.stringify(fruits));


console.log(fruits);
