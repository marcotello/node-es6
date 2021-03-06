class Person {
  constructor (name) {
    // this.name = typeof name === 'string' ? name : 'Anonymous';
    this.name = typeof name === 'string' ? Person.capitalizedWord(name) : 'Anonymous';
  }
  sayHello () {
    console.log(`Hello, I am ${this.name}`);
  }
  static capitalizedWord (word){
    return word[0].toUpperCase() + word.slice(1);
  }
}


var person1 = new Person('Marco');

console.log(person1.name);

var person2 = new Person();

console.log(person2.name);

person1.sayHello();
person2.sayHello();

console.log(Person.capitalizedWord('unga bunga'));

var person3 = new Person('te2');
console.log(person3.name);
