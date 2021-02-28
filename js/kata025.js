// =========== [6kyu] Sort the odd ============ //
function sortArray(array) {
    let oddArray = array.filter(el => Math.abs(el)%2 == 1).sort((a,b)=>a-b)
    console.log(oddArray)
    let index = -1
    return array.map(el => {
        if (Math.abs(el)%2 == 1){
            index++
            return oddArray[index]  
        }
        else
            return el
    })   
}

  console.log(sortArray([ 41, -49, 27, 42 ]))

  //Best Solution
  function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
  }