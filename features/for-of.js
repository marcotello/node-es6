var locations = [];

locations.push({
  name: 'Philadelphia',
  weather: 22
});

locations.push({
  name: 'Mexico City',
  weather: 52
});

for (let location of locations) {
  console.log(`It's ${location.weather} in ${location.name}`);
}

// -------------------

console.log('---------------------------------');

function averageGrade (...numbers) {
  let result = 0;
  for (number of numbers) {
    result = result + number;
  }
  return (result/numbers.length);
}

var result = averageGrade(1, 44, 99);

console.log(result);
