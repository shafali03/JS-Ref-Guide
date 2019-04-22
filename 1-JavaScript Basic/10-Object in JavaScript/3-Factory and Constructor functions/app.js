
// blue Print
// Factory Functions and Constructor functions
// Factory Functions 

// const john = {
//     name: 'john',
//     lastName: 'anderson',
//     fullName: function () {
//         console.log(`Hi my  full name is ${this.name} ${this.lastName}`);
//     }
// };


// john.fullName();
// const bob = {
//     name: 'bob',
//     lastName: 'jordan',
//     fullName: function () {
//         console.log(`Hi my  full name is ${this.name} ${this.lastName}`);
//     }
// };




// Factory Functions 

function createPerson(name, lastName) {
    return {
        name: name,
        lastName: lastName,
        fullName: function () {
            console.log(`Hi my  full name is ${this.name} ${this.lastName}`);
        }
    }
}

const john = createPerson('john', 'anderson');
const bob = createPerson('bob', 'jordan');
const lee = createPerson('lee', 'white');

john.fullName();
bob.fullName();
lee.fullName();





//==============================================

// Constructor function

function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName;
    this.fullName = function () {
        console.log(
            `Hi my  full name is ${this.name} ${this.lastName} and love React`
        );
    };
    console.log(this)

}

const tony = new Person('tony', 'woodhouse');
const ali = new Person('ali', 'Hussain');
const hasan = new Person('hasan', 'Shafi');

tony.fullName();
ali.fullName();
hasan.fullName();


//! the new key word is responsible for three thing first it create a empty object. It set this to point back to the object. We can omit the return statement using the new key.










