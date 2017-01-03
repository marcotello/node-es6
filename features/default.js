function sayHello (name = 'World') {
  console.log('Hello ' + name + '!');
}

sayHello();
sayHello('Marco');
sayHello('Gran Maestre');

function greetUser(user = {name: 'Anonymous'}) {
  console.log('Hello ' + user.name + ' welcome to es6!');
}

greetUser();
greetUser({name: 'John Snow'});
