//============ [7kyu] Remove the minimum ==============//

function removeSmallest(numbers) {
    let smallest = Math.min(...numbers)
    let newNumbers = numbers.slice(0)
    newNumbers.splice(numbers.indexOf(smallest), 1)
    return newNumbers
  }

//Best Solution
function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
  }