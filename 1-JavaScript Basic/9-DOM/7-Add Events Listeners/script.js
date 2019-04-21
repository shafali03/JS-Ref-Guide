

// Keypress -- when key is pressed
// Keydown -- when key is down
// Keyup -- when key is released

const name = document.getElementById('name');

// name.addEventListener('keypress', function () {
//     console.log('key was pressed');
// })


// name.addEventListener('keydown', function () {
//     console.log('key was down');
// })



name.addEventListener('keyup', function () {
    console.log(name.value);
})