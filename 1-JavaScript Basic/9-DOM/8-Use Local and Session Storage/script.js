// Local Storage Session Storage

// LocalStorage.setItem('job', 'developer');
// sessionStorage.setItem('job', 'developer');


// set items in local storage

localStorage.setItem('name', 'john');
localStorage.setItem('job', 'web developer'); //you will be over riding the value john to peter
localStorage.setItem('address', 'street');

const name = localStorage.getItem('name');
console.log(name);

//remove item
// localStorage.removeItem('name');

// clear localStorage

localStorage.clear();



