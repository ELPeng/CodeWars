// =========== [7kyu] Most digits ============= //
function findLongest(array){
    return array.map(num => {
        return {digit: num, length:num.toString().length}
    }).sort((a, b) => b.length - a.length)[0].digit
  }

  console.log(findLongest([1, 10, 100]))

  //Best Solution
  const findLongest = l => l
  .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);