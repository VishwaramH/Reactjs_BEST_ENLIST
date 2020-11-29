// Javascript program to return true if repeated otherwise false
function repeat(number) {
  return ((number%10) == Math.floor((number%100)/10));
}
console.log(repeat(22)); // true
console.log(repeat(232344)); // true
console.log(repeat(2201)); // false
console.log(repeat(5432)); // false
