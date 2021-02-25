//============ [7kyu] Sum of a sequence ==============//
const sequenceSum = (begin, end, step) => {
    let sum = 0
    for(let i = begin; i<=end; i+=step{
        sum+=i
    }
    return sum
  };

  //Recursive Solution
  const sequenceSum = (begin, end, step) => {
    if (begin > end) {
      return 0;
    }
    return begin + sequenceSum(begin + step, end, step);
  };