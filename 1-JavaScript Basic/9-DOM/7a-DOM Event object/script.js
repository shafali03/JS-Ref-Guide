

// Event object
// Event type
// Event target
// Event.preventDefault();


document.getElementById('link').addEventListener('click', function (event) {
    event.preventDefault();

    // console.log(event.type);
    console.log(event.target);


})