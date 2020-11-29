// Javascript function that squares every digit of a number
function squareDigit(number) {
  const numString = String(number);
  let result = '';
  for(let i=0;i<numString.length;i++) {
    let square = Math.pow(numString[i],2);
    result += square;
  }
  return result;
}

var num = 9912341;
console.log(squareDigit(num));