
// ChildNodes -- returns all childNodes including whitespace which is treated as a text-node

//children
//firstChild
//lastChild

const result = document.querySelector('#result');
const allChildren = result.childNodes;

console.log(allChildren); //careful with childNode sometimes return white spaces

const children = result.children;
console.log(children[1]);//orange


console.log(result.firstChild);
console.log(result.lastChild);


//!===============================================
//nextSibling also counts the whitespace

// DOM - Navigate the DOM -nextSibling

// previousSibling
// nextSibling
// return whitespace

const first = document.querySelector('.first');
console.log(first);

const second = first.nextSibling.nextSibling;
console.log(second)


const zero = first.previousSibling.previousSibling;
console.log(zero); // null 

//* When ever your using nextSibling or previousSibling remember it contain whitespace and be careful with the first and last item in the list and they will return null if there is no element before or after you have selected
