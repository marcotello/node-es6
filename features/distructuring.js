var array = ['first', 'second', 'third'];
var [a, b, c] = array;

console.log(a, b, c);

var array2 = ['first', 'second', 'third'];
var [e, f] = array2;

console.log(e, f);

var array3 = ['first', 'second', 'third'];
var [g, , h] = array3;

console.log(g, h);

var todo = {
  description: 'Whatch new ES6 section',
  completed: false
}
var {description} = todo;

console.log(description);

var {description: message, completed} = todo;

console.log(`El mensaje es: ${message} y esta ${completed}`);

console.log('===========================');
console.log('===========================');

function getTodoStatus ({completed}) {
  if(typeof completed === 'boolean'){
    console.log(`Error the status is ${completed ? '' : 'not'} completed`);
  }else {
    console.log('Error the status is not correct');
  }
}

getTodoStatus(todo);
