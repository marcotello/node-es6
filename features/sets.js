var chatRooms = new Set();

chatRooms.add('Developers');
chatRooms.add('Politics');
chatRooms.add('Comics');

console.log(chatRooms.size);

console.log('---------------------------------');
console.log('---------------------------------');

console.log(`Does the set has Comics: ${chatRooms.has('Comics')}`);

console.log('---------------------------------');
console.log('---------------------------------');

chatRooms.delete('Politics');
console.log(chatRooms.size);

console.log('---------------------------------');
console.log('---------------------------------');

chatRooms.clear();
console.log(chatRooms.size);

console.log('---------------------------------');
console.log('---------------------------------');

chatRooms.add('Developers');
chatRooms.add('Politics');
chatRooms.add('Comics');

console.log(...chatRooms);

console.log('---------------------------------');
console.log('---------------------------------');

chatRooms.forEach( function (room) {
  console.log(`This is the chetroom ${room}`);
});

console.log('---------------------------------');
console.log('---------------------------------');

var moviesSet = new Set();

function addMovie(movieTittle){
  if(moviesSet.has(movieTittle)){
    console.log(`Error: The movie ${movieTittle} has already saved.`);
  }else{
      moviesSet.add(movieTittle);
      console.log(`The movie ${movieTittle} was saved.`);
  }
}

addMovie('Assasins Creed');
addMovie('Star Wars');
addMovie('Assasins Creed');
