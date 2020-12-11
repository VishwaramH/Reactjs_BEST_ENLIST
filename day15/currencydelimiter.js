Number.prototype.currencyComma = function () {
  return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

var number = 1223234;
console.log(number.currencyComma());
