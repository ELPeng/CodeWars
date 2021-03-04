// =========== [7kyu] palindrome chain length ============= //

var palindromeChainLength = function(n) {
    let count = 0
    while(count< 100){
        if (String(n).split('').reverse().join('') === String(n))
            return count
        n = Number(String(n).split('').reverse().join('')) + n
        count++
    }
  };

  console.log(palindromeChainLength(89))

  //Recursive solution
  var palindromeChainLength  = function(n) {  
    var x = parseInt( (""+n).split('').reverse().join('') );
    if(n != x){
      return 1 + palindromeChainLength (n + x);
    }
    return 0;
  };