// Javascript code to create a prototype method bespacify
function stringOperation(str) {
  this.str = str;
}
stringOperation.prototype.bespacify = function() {
  const res = this.str.split('');
  var op='';
  for(let ind=0;ind<res.length;ind++) {
    if(res[ind]!=' ') 
      op = op + res[ind] + ' ';
    else
      op = op + res[ind];
  }
  console.log(op);
}

let str1 = new stringOperation("hello");
let str2 = new stringOperation("This is a code");
str1.bespacify();
str2.bespacify();