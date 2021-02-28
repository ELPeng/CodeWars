// =========== [7kyu] Form the Minimum ============ //
function minValue(values){
  return +values.sort().filter((digit, i) => digit !== values[i-1]).join('')
  }

  console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]))

  //Best Solution
function minValue(values){
    let arr = Array.from(new Set(values))
    return parseInt(arr.sort().join(''))
}