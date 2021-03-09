// =========== [7kyu] Parts of a list ============= //
function partlist(arr) {
    let newArr = []
    for(let i = 1; i<=arr.length-1; i++){
      newArr.push([arr.slice(0, i).join(' '), arr.slice(i).join(' ')])
    }
  return newArr
}

console.log(partlist(["I", "wish", "I", "hadn't", "come"]))

//Optimal Solution
function partlist(arr) {
    return arr.map((v, i) => [arr.slice(0, i).join(' '), arr.slice(i).join(' ')]).slice(1)
}