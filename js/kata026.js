// =========== [7kyu] Alternate capitalization ============ //
function capitalize(s){
    let arr1 = []
    let arr2 = []
    for(let i = 0; i< s.length; i++){
      if(i%2){
          arr1.push(s[i])
          arr2.push(s[i].toUpperCase())
      } 
      else{
        arr2.push(s[i])
        arr1.push(s[i].toUpperCase()) 
      }
    }
    return [arr1.join(''), arr2.join('')]
  };

  console.log(capitalize("abcdef"))

  //Optimal Solution
  function capitalize(s){
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
  };