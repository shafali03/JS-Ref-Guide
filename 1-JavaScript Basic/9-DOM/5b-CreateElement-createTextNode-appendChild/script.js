
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


//===================================================
//innerHTML
//textContent

const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');


console.log(div.textContent);
console.log(list.innerHTML);
console.log(list.textContent);

const ul = document.createElement('ul');
ul.innerHTML = `<li class="item">list item</li>
    <li>list item</li>`;
document.body.appendChild(ul);

const secondDiv = document.createElement('div');
secondDiv.textContent = `I'm second div`;

list.insertBefore(secondDiv, item);




