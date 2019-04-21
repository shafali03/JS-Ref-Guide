

// submit event listener
// prevent default
// how to get a value

const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault(); //stop browser refreshing



    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    console.log(`Your name is ${name} and your default password is ${password}`);


})