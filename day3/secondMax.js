// Javascript function to return the second largest element in an array
function secondMax(arr) {
  arr.sort((a, b) => b - a);
  return arr[1];
}

var arr = [30,100,150,23,15,75,101,99];
console.log(secondMax(arr));

var arr2 = [12,10,15,14,25];
console.log(secondMax(arr2));

var arr3 = [90,1000,2011,200,104,1021];
console.log(secondMax(arr3));