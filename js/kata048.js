// ===== [7kyu] Love vs friendship ===== //

function wordsToMarks(string){
    let sum = 0
    for(let i = 0; i< string.length; i++){
        sum += string.charCodeAt(i)-96
    }
    return sum
  }

//   console.log(wordsToMarks('attitude'))
  let string = 'attitude'
  console.log(wordsToMarks(string))

  //Best Solution
  const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)