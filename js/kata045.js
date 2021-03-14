// ====== [7kyu] Row Weights ======= //
function rowWeights(array){
    let team1, team2
    for(let i = 0; i<array.length;i++){
        i%2 ? team2 += array[i] : team1 += array[i]
    }
    return [team1, team2]
  }

  //Best Solution
  function rowWeights(array){
    let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);
    let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);
    
    return [t1, t2]
  }