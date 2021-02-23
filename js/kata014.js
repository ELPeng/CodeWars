//============ [6kyu] Find the odd int ==============//
//My Solution
function findOdd(A) {
    A.sort()
    for(let i = 0; i<A.length; i++){
        if((A.lastIndexOf(A[i]) - A.indexOf((A[i]))) % 2 == 0)
            return A[i]
        else
            i = A.lastIndexOf(A[i]) 
    }
  }

  console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))

  //Best Solution - bitwise xor
  const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

  //My favorite solution
  function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
  }