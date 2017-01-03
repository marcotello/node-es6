// function greet (name = 'Andres') {
//   console.log('Hello ' + name + '!');
//   console.log(`Hello ${name}`);
// }
//
// greet('Marco');
// greet();
//
// console.log(`1 + 6 = ${1 + 6}`);
//
// console.log(`Hey,
//
// This is an email!
//
// -Marco
// `);
var person = {
  name: 'Marco',
  age: 34
}
 var defaulPerson = {
   name: 'Anonymous',
   age: 0
 }
//Hi Marco you are 34
function greetPerson (welcomePerson = defaulPerson) {
  console.log(`Hello ${welcomePerson.name}! You are ${welcomePerson.age}.`);
}

greetPerson(person);
greetPerson();
