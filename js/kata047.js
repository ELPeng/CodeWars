// ===== [8kyu] Total amount of points ===== //
function points(games) {
    return games.map(game => {
        if(Number(game[0]) > Number(game[2])) 
            return 3
        else if (Number(game[0]) == Number(game[2]))
            return 1
        else
            return 0
        })
        .reduce((tot, score) => tot + score, 0)
  }

  console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))

  //Best solution
  const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)

// function points(games) {
//   return games.reduce((output,current)=>{
//     let x = parseInt(current[0]);
//     let y = parseInt(current[2]);
//     let value= x>y ? 3 : x===y ? 1 : 0;
//     return output+value;
//   },0)
// }