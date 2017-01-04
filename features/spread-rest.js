function add (a, b) {
  return a + b;
}

var numbers = [4, 22];

console.log(add(1, 4));
console.log(add(...numbers));
console.log(...numbers);

var groupA = [33, 99];
var groupB = [11];
var unified = [0, ...groupA, ...groupB, 100];

unified.push(...[55, 33]);

console.log(`unified = ${unified}`);

function greetUsers (group, ...names) {
  names.forEach(function (name){
    console.log(`Hello ${name} you are in the group ${group}`);
  });
}

greetUsers('Developers', 'Marco', 'Emily', 'John');

function adder(...digits) {
  let result = 0;
  digits.forEach(function (digit) {
    result = result + digit;
    console.log(`The partial is ${result}`);
  });
  console.log(`The reult is ${result}`);
}

adder(3, 5, 7, 1);
