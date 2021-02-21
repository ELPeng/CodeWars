//============ [6kyu] Counting Duplicates ==============//
//My solution
// function duplicateCount(text){
//     //...
//     let count = 0
//     let charArr = []
//     let sortedText = text.toUpperCase().split('').sort()
//     console.log(sortedText)
//     for(let i = 1; i<text.length; i++){
//       if(sortedText[i] == sortedText[i-1]){
//         charArr.push(sortedText[i])
//         while(sortedText[i] == sortedText[i+1])
//             i++
//       }
//     }
//     return charArr.length
//   }

  console.log(duplicateCount("Indivisibilities"))

  //Solution with regex
  function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/[^]+/g) || [])
  }

  //Clever solution
//   function duplicateCount(text){
//     return text.toLowerCase().split('').filter(function(val, i, arr){
//         return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//     }).length;
//   }