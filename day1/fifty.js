// Javascript program to return true if one of the number is 50 or their sum is 50
function check(num1, num2) {
  return(num1==50 || num2==50 || (num1+num2)==50);
}

console.log(check(25, 25));
console.log(check(50,30));
console.log(check(20,50));