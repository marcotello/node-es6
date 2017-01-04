var myMap = new Map();

// Set
myMap.set('name', 'Marco');

// Get
console.log(myMap.get('name'));

// has
myMap.set('age', '34');
console.log(myMap.has('age'));

// delete
myMap.delete('age');
console.log(myMap.has('age'));

// clear
myMap.clear();
console.log(myMap.size);

var user = {
  name: 'Emily'
}

myMap.set(user, 'Vallarta');
console.log(myMap.get(user));
console.log(myMap.get(user).name);

user = {
  name: 'Emily'
}

myMap.set('Vallarta', user);
console.log(myMap.get('Vallarta'));
console.log(myMap.get('Vallarta').name);

console.log('---------------------------------');
console.log('---------------------------------');

var namesMap = new Map();

namesMap.set(1, 'Marco');
namesMap.set(2, 'Emily');
namesMap.set(3, 'Vivi');

console.log([...namesMap]);
console.log(namesMap.keys());
console.log(namesMap.values());

console.log('---------------------------------');
console.log('---------------------------------');

var location = {name: 'Vallarta'};
var secondLocation = {name: 'Morelia'};
var locationsMap = new Map();

function setWeather (location, temp){
  locationsMap.set(location, temp);
}

function printWeather (location) {
  if(locationsMap.has(location)){
    console.log(`It's ${locationsMap.get(location)} in ${location}`);
  }else{
    console.log(`No weather find for ${location}`);
  }
}

setWeather(location.name, 30);
setWeather(secondLocation.name, 20);

printWeather(location.name);
