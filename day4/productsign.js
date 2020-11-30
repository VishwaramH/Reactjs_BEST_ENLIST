function getSign(n1,n2,n3) {
  if(n1>0 && n2>0 && n3>0) {
    console.log("Welcome");
  }
  else if(n1<0 && n2<0 && n3<0) {
    console.log("-");
  }
  else if((n1<0 && n2>0 && n3>0) || (n1>0 && n2<0 && n3>0) || (n1>0 && n2>0 && n3<0)) {
    console.log("-");
  }
  else if((n1<0 && n2<0 && n3>0) || (n1<0 && n2<0 && n3<0) || (n1>0 && n2<0 && n3<0)) {
    console.log("Welcome");
  }
}

getSign(1,2,-7);
getSign(1,2,-7);
getSign(1,2,7);
getSign(-1,-2,3);