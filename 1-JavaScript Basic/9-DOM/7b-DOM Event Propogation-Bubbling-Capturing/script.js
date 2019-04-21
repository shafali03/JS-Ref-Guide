
// event propagation -- order the events are fired
// event bubbling -- clicked element first then bubbles up -- default
// event capturing -- fires at root and fires until reaches target




// document.getElementById('container').addEventListener('click', function () {
//     console.log('you clicked on container');
// })


// document.getElementById('list').addEventListener('click', function () {
//     console.log('you clicked on unordered list');
// })


// document.querySelectorAll('.list-item').forEach(function (item) {
//     item.addEventListener('click', function () {
//         console.log('you clicked on list item');
//     })
// })



// document.getElementById('container').addEventListener('click', function () {
//     console.log('you clicked on container');
// }, true)


// document.getElementById('list').addEventListener('click', function () {
//     console.log('you clicked on unordered list');
// }, true)


// document.querySelectorAll('.list-item').forEach(function (item) {
//     item.addEventListener('click', function () {
//         console.log('you clicked on list item');
//     })
// }, true)


//! =========================================================


const container2 = document.querySelector('.container2');
const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    const h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.textContent = `I'm sitting inside the container`;
    container2.appendChild(h1);
});


container2.addEventListener('click', function (event) {
    // console.log(event.target);

    if (event.target.classList.contains('heading')) {
        event.target.addEventListener('click', function () {
            console.log('list item clicked')

        })
    }
})
















// document.querySelectorAll('.heading').forEach(function (item) {
//     item.addEventListener('click', function () {
//         console.log('you clicked me');
//     })
// })


// const item = document.querySelectorAll('.heading');
// console.log(item); // NodeList []
