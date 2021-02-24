//============ [7kyu] Money, Money, Money ==============//
function calculateYears(P, I, T, D) {
    for(let Y = 1; P<D; Y++){
        P = P*(1+I)-T*P*I
        if(P >= D) return Y
     }
    return 0
}


console.log(calculateYears(1000, 0.05, 0.18, 1100))

//Better Solution
function calculateYears(principal, interest, tax, desired) {
    var years = 0;
    while(principal < desired){
      principal += (principal * interest) * (1 - tax);
      years++;
    }
    return years;
}