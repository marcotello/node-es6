var people = ['Sansa', 'John', 'Daenerys', 'Tyrion'];

people.forEach(function (person) {
  console.log(person);
})

console.log('-----------------------');
people.forEach((name) => console.log(name));

console.log('-----------------------');
people.forEach((name) => {
  console.log(`Welcome friend ${name}`);
  console.log('Have a nice day');
});

function add (a, b) {
  return a + b;
}

console.log(add(10, 20));

var multiply = (a, b) => a * b;
console.log(multiply(10, 20));

var subtraction = (a, b) => { return b - a }
console.log(subtraction(10, 20));

var person = {
  name: 'Marco',
  likes: ['Movies', 'Programing', 'Cycling'],
  getHobbies: function () {
    this.likes.forEach( (hobby) => console.log(`${this.name} likes ${hobby}`) );
  }
}

person.getHobbies();
