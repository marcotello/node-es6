var x = 0;

if(true){
  let x = 12;
  console.log(x);
}

console.log(x);

for(let i = 0; i < 3; i++){
  console.log(`value ${i}`);
}
var i = 9;
console.log(i);

function getCallback () {
  let name = 'Emily';

  return function () {
    console.log(`Hello ${name}`);
  }
}

getCallback()();

if(true){
  var globalVar = 21;
}

console.log(globalVar);
