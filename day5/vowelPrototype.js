// Javascript code to create a bevowel prototype method
function Vowel(str) {
  this.str = str;
}

Vowel.prototype.beVowel = function() {
  var res = '';
  for(let ind=0;ind<this.str.length;ind++) {
    if(this.str[ind]==='a' || this.str[ind]==='e' || this.str[ind]==='i' || this.str[ind]==='o' || this.str[ind]==='u' || this.str[ind]==='A' || this.str[ind]==='E' || this.str[ind]==='I' || this.str[ind]==='O' || this.str[ind]==='U') {
      res += this.str[ind];
    }
  }
  console.log(res);
}

let str1 = new Vowel("hello");
let str2 = new Vowel("Education");
str1.beVowel();
str2.beVowel();