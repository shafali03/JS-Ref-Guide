
// Default Parameters


//
function Student(name, lastName, school = 'UCLA') {
    this.name = name;
    this.lastName = lastName;
    this.school = school;
}


const john = new Student('john', 'sanders', 'UCLA');
const bob = new Student('tom', 'home');

const ali = new Student('tom', 'home', 'oxford');

console.log(john);
console.log(bob);
console.log(ali)


//We didn't pass an argument it return as undefined for bob to fix this can use the default parameter for school for example school= 'UCLA'

//For ali we can override for the UCLA to oxford