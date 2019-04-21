
// CreateElement('element')
// CreateTextNode('text content')
// Element.appendChild(childElement);

const result = document.querySelector('#result');

//create empty element
const bodyDiv = document.createElement('div');

// create text node
const text = document.createTextNode('body div');

//add text node
bodyDiv.appendChild(text);

// document.body.appendChild(bodyDiv);


///create empty element
const resultLi = document.createElement('li');

// create text node
const textContent = document.createTextNode('result li');

//add text node
resultLi.appendChild(textContent);
resultLi.classList.add('show');


//add to result
result.appendChild(resultLi);


console.log(result.children);

//===================================================

// insertBefore

document.body.insertBefore(bodyDiv, result);



// replace child 

result.replaceChild(bodyDiv, resultLi);