
// Select the element or group of elements that we want to affect.

// Decide the effect we want to apply to the selection


document.getElementsByClassName('class');
// node-list array-like objects
//index based, length property but no array method;

const special = document.getElementsByClassName('special');

special[1].style.color = 'yellow';

//!==============================================

//write any css selector
document.querySelector('css selector'); //selects single
document.querySelectorAll('scc selector'); //selects all


const result = document.querySelector('#result');
result.style.backgroundColor = 'blue';

const item = document.querySelector('.special');
console.log(item);

const lastItem = document.querySelector('li:last-child');
console.log(lastItem);

const list = document.querySelectorAll('.special')
console.log(list);

list.forEach(function (item) {
    console.log(item);
    item.style.color = 'yellow';


})





