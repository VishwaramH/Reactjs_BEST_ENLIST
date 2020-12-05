// Javascript prototype to get the duplicate elements in an array
Array.prototype.beGetDuplicate = function() {
  var duplicates = [];
  this.map((item) => {
    if(this.filter((find) => find === item).length > 1) {
      duplicates.push(item);
    }
  });
  return Array.from(new Set(duplicates));
}

var intArr = [1,2,1,3,2,1,4,5];
var strArr = ["Amit","Balu","Amit","Charles","Charles","Dean"];
console.log(intArr.beGetDuplicate());
console.log(strArr.beGetDuplicate());