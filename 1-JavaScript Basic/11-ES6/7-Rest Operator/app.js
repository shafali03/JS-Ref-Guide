
// Rest Operator
//...

// arguments variable in the function

// Rest function add(...rest)
//Spread add(...spread)

// function sum(num1, num2, num3) {
//     let result = num1 + num2 + num3;

//     console.log(result);
//     console.log(arguments);

// }

// sum(1, 2, 3);

//! The above code is not an array, this is array like object BUT not an array. If you want to use reduce or filter method it will not work . There is no way we can can use the array methods on the array like object. The rest operator helps us to fix this.



function sum(...args) {
    console.log(args);

    let result = args.filter(item => item > 3).reduce((acc, curr) => {
        acc += curr;

        return acc
    }, 0);
    console.log(result)
}
// invoke function
sum(1, 2, 3, 4); //9










function sum(value, ...args1) {
    console.log(args1); // 1,2,3,4,5

    let result = args1.filter(item => item > value).reduce((acc, curr) => {
        acc += curr;

        return acc
    }, 0);
    console.log(result)
}
// invoke function
sum(2, 1, 2, 3, 4, 5); //12


//! In the invoke function sum (2) refers to value, when ever you change the parameter on line 57 sum(2) the filter and reduce changes as well. Even though the argument stay the same and passing a different value.

//! Need to be careful where we have the parameters and placing them behind the rest operator. The rest operator always need to be passed in whenever we are declaring the function.

//! Need to make sure that the rest number is going to be last in a function declaration :::::::: function sum(value, ...args1) :::::::::::








