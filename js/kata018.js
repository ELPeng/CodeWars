//============ [7kyu] Find the stray number ==============//
function stray(numbers) {
    numbers.sort()
    return numbers[1] == numbers[0] ? numbers[numbers.length-1] : numbers[0]
  }

//Best solution
function stray(numbers){
    for (var i in numbers){
       if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
    }
}