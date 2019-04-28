
// Arrow functions and lexical Scoping
// In the body of arrow function this point to containing scope



// const clock = {
//     time: 0,
//     stopWatch: function () {
//         // console.log(this);

//         const self = this;
//         setInterval(function () {
//             // console.log(self); //global window object


//             console.log(self.time++);
//         }, 1000);
//     }
// };
// clock.stopWatch()

// Set a setInterval it will be calling every second and adding 1 to 0 every second is point to the object. Once I'm in the anonymous function this references the global window object. It's this keyword. Need to bound this keyword back to the object. The old way need to create a variable self set it equal to this.


//!==========================================================



// ES6


// const clock = {
//     time: 0,
//     stopWatch: function () {
//         setInterval(() => {
//             console.log(this.time++)
//         }, 1000);
//     }
// };
// clock.stopWatch();


function UI(number) {
    this.number = number;
}

UI.prototype.addNumber = function () {
    console.log(this);

    document.getElementById('btn').addEventListener('click', () => {
        console.log(this)

        console.log(this.number++)
    });
}

const ui = new UI(0);
ui.addNumber();