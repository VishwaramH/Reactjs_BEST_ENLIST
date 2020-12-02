// Javascript prototype to find a particular object from an array of objects
var res = [];
Array.prototype.beFindObject = function(name) {
  res.push(name);
}

var input = [
  {name: "John", age: 26},
  {name: "Doe", age: 30}
];

for(let ind=0;ind<input.length;ind++) {
  input.beFindObject(input[ind].name);
}

console.log(res);