
// const person ={
//     name :'Saeid main',
//     age : 24 
// }
// module.exports = person;

// (function (exports, require, module, __filename, __dirname){})


class Person {
    constructor(name , age ){
        this.name=name;
        this.age = age;
    }
    greating(){
        console.log(`My name is ${this.name} and I am ${this.age} years old`);
    }
}
module.exports = Person;