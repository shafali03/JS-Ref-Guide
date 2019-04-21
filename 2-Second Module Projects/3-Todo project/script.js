
let toDoList = [];


function addItem(arr) {
    let answer = prompt("Your checklist for today")
    let correct = answer.toLowerCase().trim()

    let index = arr.indexOf(correct);


    if (checkDuplicate(arr, correct)) {
        arr.push(correct);
        showItems(toDoList);
    }
    else {
        alert('Item already exist, do not repeat items');
    }
}



function checkDuplicate(arr, item) {
    let isUnique = false;
    let index = arr.indexOf(item); //-1

    if (index != -1) {
        isUnique = false;
    } else {
        isUnique = true;
    }
    return isUnique;
}

// remove item function
function removeItem(list) {
    let answer = prompt('Which item would you like to DELETE from the array');
    let correct = answer.trim().toLowerCase();

    let index = list.indexOf(correct);

    if (!checkDuplicate(list, correct)) {
        let removedItem = list.splice(index, 1)
        console.log(removedItem);
        alert(`You removed "${removedItem}" from your list`)
    }
    else {
        console.log('no such value exists')
    }
}


//function showItems
function showItems(list) {
    let listValues = 'Your list item are : ';

    for (let i = 0; i < list.length; i++) {
        listValues += `"List item  Number${i + 1} : ${list[i]}"`
    }
    alert(listValues);
}


addItem(toDoList);
addItem(toDoList);
addItem(toDoList);
removeItem(toDoList);
showItems(toDoList)

console.log(toDoList)
