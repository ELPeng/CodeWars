//============ [7kyu] Two to One ==============//
//My answer
function longest(s1, s2) {
    let newStr = s1 + s2
    return newStr.split('').sort().filter((letter, i, arr) => letter !== arr[i+1]).join('')
  }

  console.log(longest("aretheyhere", "yestheyarehere"))

  //Best solution
  function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
  }