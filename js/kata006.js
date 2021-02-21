//============ [7kyu] Growth of a Population ==============//
//My answer
function nbYear(p0, percent, aug, p) {
    let year = 0
    while(p0 < p){
        p0 += p0*percent*.01 + aug
        year++
    }
    return year
}

//Optimal Solution
function nbYear(p0, percent, aug, p) {
    for(var y = 0; p0 < p; y++) p0 = p0 * (1 + percent / 100) + aug;
    return y;
  }

  //Recursive Solution
  function nbYear(p0, percent, aug, p) {
    if(p0 >= p) {
      return 0;
    } else {
      return 1+nbYear(p0*(1+percent/100)+aug, percent, aug, p);
    }
  }

console.log(nbYear(1500000, 2.5, 10000, 2000000))