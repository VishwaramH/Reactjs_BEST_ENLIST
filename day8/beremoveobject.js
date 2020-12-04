// Javascript prototype method to remove object property from the array of objects
Array.prototype.beRemoveObject = function(key, value) {
  this.map((object) =>{
    if(object[key] === value) {
      delete object[key];
    }
  });
  return this;
}

var input = [
  {name: "John", age: 26, Country: "India"},
  {name: "Siva", age: 30, Country: "China"},
];

console.log(input.beRemoveObject("Country", "China"));