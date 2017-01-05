class Person {
  constructor (name) {
    // this.name = typeof name === 'string' ? name : 'Anonymous';
    this.name = typeof name === 'string' ? name : 'Anonymous';
  }
  set name (val) {
    this._name = Person.capitalizedWord(val);
  }
  get name () {
    return this._name;
  }
  sayHello () {
    console.log(`Hello, I am ${this.name}`);
  }
  static capitalizedWord (word){
    return word[0].toUpperCase() + word.slice(1);
  }
}

class Employee extends Person {
  constructor (name, job) {
    super(name);
    this.job = typeof job === 'string' ? job : 'Unemployed';
  }

  sayHello () {
    console.log(`Hello, I am ${this.name} and I'm a ${this.job}`);
  }

  callSuperMethod () {
    super.sayHello();
  }
}



var person1 = new Employee('Marco', 'Developer');

console.log(person1.name);

var person2 = new Employee();

console.log(person2.name);

person1.sayHello();
person1.callSuperMethod();
person2.sayHello();

console.log(Person.capitalizedWord('unga bunga'));

var person3 = new Employee('te2', 'Soccer Player');
person3.name = 'oscar';
console.log(person3.name);
