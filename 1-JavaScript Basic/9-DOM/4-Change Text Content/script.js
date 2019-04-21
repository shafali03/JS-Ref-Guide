// nodeValue
// textContent

const item = document.getElementById('special');
// const value = item.nodeValue;
const value = item.firstChild.nodeValue;
console.log(item.childNodes);

console.log(item);
console.log(value);



const best = item.textContent;
console.log(best)