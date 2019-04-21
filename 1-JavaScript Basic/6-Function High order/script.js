
// JavaScript function are higher order functions
// pass a function as a argument
// return function form function

// built in function
// callback function

// function functionName(para1, para2) {
//code here
// }



function functionName(para1, para2) {
    //code here
}

// will run after 3sec
setTimeout(function () {
    alert('Hello World');
}, 3000)

// running this function every two seconds
// setInterval(sayHello, 2000);

function sayHello() {
    alert('set interval is running');
}


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = numbers.filter(function (number) {
    if (number % 2 === 0) {
        return number;
    }
});

// function isEven(singleNumber) {
//     return singleNumber % 2 === 0;
// }
console.log(even);


const mainBtn = document.getElementById('mainBtn');

mainBtn.addEventListener('click', showAlert)


function showAlert() {
    alert('You have just clicked a button')
}

// whenever you click the button then you are running the function