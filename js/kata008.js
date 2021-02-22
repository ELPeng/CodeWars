//============ [7kyu] Double Trouble ==============//
//My answer
function trouble(x, t){
    for(let i = 1; i<x.length; i++){
      if(x[i] + x[i-1] == t){
        x.splice(i, 1)
        i--
      }
    }
    return x
  }

  console.log(trouble([4, 1, 1, 1, 4],2))