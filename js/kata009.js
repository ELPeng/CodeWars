//============ [7kyu] Sum of two lowest positive integers ==============//
//My answer
function sumTwoSmallestNumbers(numbers) {  
    let minNum1 = Math.min(...numbers)
    numbers.splice(numbers.indexOf(minNum1), 1)
    let minNum2 = Math.min(...numbers)
    return minNum1 + minNum2
  }

  console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))

  //Best Solution
  function sumTwoSmallestNumbers(numbers){  
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers[0] + numbers[1];
  };