
// className
// classList


const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.querySelector('#third');


// get className

const className = first.className;
// console.log(className);

second.className = 'colors';
second.className = 'text';
//className property override the previous className


// classList

const classes = third.classList;

//add class

third.classList.add('text', 'colors');


//remove class
third.classList.remove('text');

let result = third.classList.contains('colors');

if (result) {
    console.log('this element does have the class');
}
else {
    console.log('this element does not have the class')
}


console.log(classes);