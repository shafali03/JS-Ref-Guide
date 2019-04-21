
// Select the element or group of elements that we want to affect.
// Decide the effect we want to apply to the selection

//many different ways

// document.body.style.background = 'blue';
// document.body.style.color = 'yellow';
// document.getElementById('btn').style.color = 'red';


//assign to variable
const element = document.getElementById('element')//do something

document.querySelector('.element')// do something

const win = window;

console.log(win);






//return a node object  or a noe list, which is an arrayLike object

const btn = document.getElementById('btn');
const name = btn.nodeName;

console.log(typeof btn);
console.log(name);


//!================================================

const h1 = document.getElementById('title');

h1.style.color = 'red';

document.getElementById('btn').style.backgroundColor = 'blue';

const style = document.getElementById('btn').style;

console.log(style)

//!================================================

document.getElementsByTagName('element');
//node-list array-like object

const list = document.getElementsByTagName('li');

//to select individual tagname
list[0].style.color = 'red';


const betterList = [...list];
console.log(betterList)

betterList.forEach(item => console.log(item))