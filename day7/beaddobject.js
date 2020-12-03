// Javascript prototype method to add object to the array of objects
Array.prototype.beAddObject = function(object) {
  this.push(object);
  return this;
}

var input = [
  {name: "John"},
  {age: 26},
];

console.log(input.beAddObject({Country: "India"}));