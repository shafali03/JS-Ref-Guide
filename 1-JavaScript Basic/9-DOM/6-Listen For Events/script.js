
// document.getElementById('item').classList.add('special');


//click event

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', function () {
//     document.getElementById('item').classList.add('special');
// });





const item = document.getElementById('item');
const heading = document.getElementById('heading');


item.addEventListener('click', function () {
    console.log('you clicked');
})



item.addEventListener('mouseup', function () {
    console.log('up');
})

item.addEventListener('mousedown', function () {
    console.log('down');
})

heading.addEventListener('mouseover', function () {
    heading.classList.add('special');
})


heading.addEventListener('mouseout', function () {
    heading.classList.remove('special');
})