// Javascript program to return a random 6 digit number
function printRandom(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

console.log(printRandom(100000,999999));