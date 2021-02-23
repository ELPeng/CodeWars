//============ [7kyu] Categorize New Member ==============//

function openOrSenior(data){
    return data.map(set => set[0] >=55 && set[1] > 7 ? 'Senior' : 'Open')
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))

//Best Solution
function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  }