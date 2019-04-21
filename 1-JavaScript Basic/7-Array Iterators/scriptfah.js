
// Celsius = (Fah - 32) *5/9
// Fahrenheit = Celsius * 9/5 + 32


function toFahrenheit(temp) {
    let fahr = temp * 9 / 5 + 32;
    console.log(`${temp} degrees in C is ${fahr} degrees in F`)
}

toFahrenheit(40);



function toCelsius(temp) {
    let celsius = ((temp - 32) * 5 / 9).toFixed(2);
    console.log(`${temp} degrees in F is ${celsius} degrees in C`);
}

toCelsius(100);




//?================================================

// 1 inch === 2.54 cm
// 1 foot === 12 inches 

function toCm(feet, inches) {

    if ((feet < 0) || (inches < 0)) {
        alert('invalid parameters')
        return;
    }



    let centimeters = (feet * 12) * 2.54;
    centimeters += inches * 2.54;

    console.log(`${feet} feet and ${inches} inches is equal to ${centimeters.toFixed(2)} cm`);


    return centimeters.toFixed(2);
}
toCm(12, 2);