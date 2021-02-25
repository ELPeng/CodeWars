//============ [6kyu] Playing with digits ==============//
function digPow(n, p){
    let sum = Array.from(n.toString()).map((digit, i) => digit**(p+i)).reduce((acc, val) => acc + val)
    return sum%n == 0 ? sum/n : -1 
}

  console.log(digPow(46288, 3))

  //Optimal solution
  function digPow(n, p) {
    var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
    return x % n ? -1 : x / n
  }