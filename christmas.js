// Javascript program to find the number of days until next Christmas
var date = new Date();
var christmas = new Date(date.getFullYear(),11,25);
if(date.getDate()>25 && date.getMonth()==1) {
  christmas.setFullYear(christmas.getFullYear()+1);
}
var day = 1000*60*60*24;
console.log(Math.ceil((christmas.getTime()-date.getTime())/(day))+ " days left until Christmas!");