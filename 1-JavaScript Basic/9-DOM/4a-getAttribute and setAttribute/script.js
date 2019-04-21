// // nodeValue
// // textContent

// const item = document.getElementById('special');
// // const value = item.nodeValue;
// const value = item.firstChild.nodeValue;
// console.log(item.childNodes);

// console.log(item);
// console.log(value);



// const best = item.textContent;
// console.log(best)

//getAttribute();
//setAttribute();



const special = document.querySelector('#special');

const showClass = special.getAttribute('class');
// console.log(showClass);

const link = document.getElementById('link');
const showLink = link.getAttribute('href');
// console.log(showLink);



const item = link.nextSibling.nextSibling;
item.setAttribute('class', 'first')
console.log(item);


const links = document.querySelectorAll('.first');
console.log(links);


//!==============================================

// className
// classList

