

// ANy variable outside code block is said to have  GLOBAL SCOPE!!!!

// Can be access anywhere in the program

// IT IS NOT GOOD PRACTICE !!!!!!!!!!

// With local scope no one can modify it from outside the function



let sayHi = 'Hello'; // Global scope can be access anywhere and can be modified in the local scope
// let sayHi = 'Greeting';

function getGreeting() {
    //sayHi = 'To everyone ';
    let sayHi = 'Hello from function';
    console.log(sayHi);
    let apple = 'green apples';
    console.log(apple)

}

//console.log(apple); // can't access this from local scope

getGreeting(); //calling function

if (5 > 2) {
    //sayHi = 'great course'
    let sayHi = 'Hello from if statement';

    // console.log(sayHi)
    let orange = 'orange Juice'; //local
}

//console.log(orange); //can not access to local scope


console.log(sayHi)


// let sayHi = 'hello';


// function getGreetig(){
//     let sayHi = 'hello from function';
//     let peterTheGreat = 'peter the great';
//     peter = 'peter';
//     console.log(sayHi);

// }

// getGreetig();

// console.log(peter);
// console.log(peterTheGreat);

// let generalNumber = 5;

// function add(num1,num2){

//     let result = num1+num2+generalNumber;
//     function multiply(){
//         let multiplyResult = generalNumber *result;
//         console.log(multiplyResult);

//     }

//     multiply();
// console.log(multiplyResult);




//     return result;
// }

// let result = add(10,20);
// console.log(result);




//=================================================


// let sayHello = 'Hello';

// function getGreeting() {
//     let sayHi = 'hello from function';
//     let peterTheGreat = 'peter the great'
//     peter = 'peter';
//     //Not create a variable BUT javascript will create a variable in the global score for you automatically. 
//     console.log(sayHello)
// }

// // getGreeting()

// console.log(peter)
// console.log(peterTheGreat)



//=================================================

// You can alway go out of the code block to look for the variable. But you can NOT look inside the code block for a variable from the outside of the code block;


let generalNumber = 5;

function add(num1, num2) {

    let result = num1 + num2 + generalNumber //local
    function multiply() {
        let multiplyResult = generalNumber * result;
        console.log(multiplyResult)
    }
    multiply();

    return result;
}


let result = add(10, 20);
console.log(result)















