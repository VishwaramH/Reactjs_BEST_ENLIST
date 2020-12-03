// Javascript prototype method to add object to the array of objects
Array.prototype.beAddObject = function(key, value) {
  this.map((object) =>{
    object[key] = value;
  });
  return this;
}

var input = [
  {name: "John", age: 26},
  {name: "Siva", age: 30},
];

console.log(input.beAddObject("Country", "India"));