// Javascript prototype to find a particular object from an array of objects

Array.prototype.befindobject = function (key) {
  const res = [];
  this.map(function (object) {
    res.push(object[key]);
  });
  return res;
};

var sampleinput = [
  { name: "John", age: 26 },
  { name: "siva", age: 27 },
];

console.log(sampleinput.befindobject("name"));

// Alternative method
// Array.prototype.befindobject = function(propertyName) {
//   var propertyValue = [];
//   for(var i=0;i<sampleinput.length;i++) {
//     propertyValue[i] = sampleinput[i][propertyName];
//   }
//   console.log(propertyValue);
// };

// var sampleinput = [
//   { name: "John", age: 26 },
//   { name: "siva", age: 27 },
// ];

// sampleinput.befindobject("name");