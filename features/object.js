var age = 34;

function printHello () {
  console.log('Hello');
}

var person = {
  name: 'Marco',
  age,
  printHello,
  ['hello' + (3 + 2)]: 'I am here',
  getAge () {
    console.log(this.age);
  }
}

console.log(person.age);
person.printHello();
console.log(person.hello5);
person.getAge();
