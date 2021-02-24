//============ [7kyu] Don't give me five! ==============//
function dontGiveMeFive(start, end){
  let arr = []
  for(let i = start; i<=end; i++){
      arr.push(i)
  }
  return arr.filter(num => !num.toString().includes('5')).length
}

console.log(dontGiveMeFive(4,17))