

// Splitting each texts in a string
let text = 'This is a short string';
let arrText = text.split(' ');
let secondText = arrText.join(' ')

console.log(arrText)
console.log(secondText)

function reverseString(text) {
    let result = text.split('').reverse().join('');
    console.log(result)
}
reverseString("Hi everyone enjoying coding");







function findTheLongestWord(car) {
    let result = car.split(' ');
    console.log(result);


    let longestWord = '';
    for (let i = 0; i < result.length; i++) {

        if (result[i].length > longestWord.length) {
            longestWord = result[i]
        }
    }
    console.log(`The longest word is ${longestWord}`);
    console.log(longestWord.length)
}
findTheLongestWord("this is some random text");






//===============================================

// quarter 25 cent
// dime 10 cent
// nickel 5 cent
// penny 1 cent


function returnChange(amount) {
    let quarter = Math.floor(amount / 25);
    console.log(`There is ${quarter} quarters in your change`);

    //modulus operator % will return what is leftover 
    amount = amount % 25;
    console.log(`And your change is ${amount} penny`)



    let dime = Math.floor(amount / 10);
    console.log(`There is ${dime} dime in your change`);
    amount = amount % 10;
    console.log(`And your change is ${amount} penny`);




    let nickel = Math.floor(amount / 5);
    console.log(`There is ${nickel} nickel
 in your change`);
    amount = amount % 5;
    console.log(`And your change is ${amount} penny`);



    let pennies = Math.floor(amount / 1);
    console.log(`There is ${pennies} pennies
 in your change`);



    // console.log(quarter);
}

returnChange(234)


//=========================================

const example = [
    ['bob', 'john'],
    ['banana', 'orange'],
    ['hammer', 'nail']

]

console.log(example[1][1]); //orange

let item = example[0][1];
console.log(item); //john

example[2][1] = 'drywall';
console.log(example)

//=========================================

//Quit

const quiz = [
    ['Best state to live in', 'bucks'],
    ['Capital of England', 'london'],
    ['Best beach city', 'brighton']
]

let score = 0;

for (let i = 0; i < quiz.length; i++) {
    let answer = prompt(quiz[i][0]);
    let answerCorrect = answer.toLowerCase().trim();

    // 1 refer to 'ca'
    if (answerCorrect === quiz[i][1]) {
        score++;
    }
    else {
        alert(`Wrong answer, The correct answer is ${quiz[i][1]}`)
    }
}


let correctPercent = ((score / quiz.length) * 100).toFixed(2);

alert(`You answered ${score} questions correctly and your correct percent is ${correctPercent}%
`)
