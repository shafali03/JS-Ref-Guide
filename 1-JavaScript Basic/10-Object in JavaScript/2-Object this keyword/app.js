
// this

const usman = {
    name: 'Ertugrul',
    lastName: 'Shah',
    fullName: function () {
        console.log(`Hi my  full name is ${this.name} ${this.lastName}`);
    }
};
usman.fullName();



john.fullName();
const bob = {
    name: 'Tom',
    lastName: 'Kay',
    fullName: function () {
        console.log(`Hi my  full name is ${this.name} ${this.lastName}`);
    }
};
bob.fullName();


console.log(this); //give window objects




//global object
// window.name = 'window';
// window.lastName = 'Jay'; // Whenever your running in a this it will point to the global whenever it is running in the JavaScript it will point to windows.


this.name = 'window';
this.lastName = 'Jay';






const fullName = function () {
    console.log(`Hi my  full name is ${this.name} ${this.lastName}`);
};

fullName(); //return undefined this is because you are not accessing the bob or usman property instead your accessing the window object


//! This whenever used in the method will point to the object when invoking function

//? Whenever we working in the global content scope with the browser this keyword will point to the global window object
