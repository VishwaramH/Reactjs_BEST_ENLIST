for(let value=1;value<=100;value++) {
  if((value%3 === 0) && (value%5 === 0)) {
    console.log(`${value} BESTENLIST REACT`);
  }
  else if(value%3 === 0) {
    console.log(`${value} BEST ENLIST`);
  }
  else if(value%5 === 0) {
    console.log(`${value} REACT`);
  }
}