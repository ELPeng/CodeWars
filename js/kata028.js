// =========== [7kyu] Round up to the next multiple of 5 ============ //
function roundToNext5(n){
    for(let i = 0; i<=4; i++){
        let sum = n+i
        if(sum%5 == 0) return sum
    }
  }

  console.log(roundToNext5(7))

  //Best solution
  function roundToNext5(n){
    return Math.ceil(n/5)*5;
  }

  //Another good solution
  function roundToNext5(n){
    while(n % 5 !== 0) n++;
    return n;
  }