//============ [6kyu] Vasya-Clerk ==============//
//My Answer
function tickets(peopleInLine){
    console.log(peopleInLine)
    let change = []
    for(let i = 0; i<peopleInLine.length; i++){
        console.log(change)
        switch(peopleInLine[i]){
            case 25:
                change.push(peopleInLine[i])
                break
            case 50:
                if(change.find(el => el === 25)){
                    change.push(peopleInLine[i])
                    change.splice(change.indexOf(25), 1)  
                    break  
                }
                else return 'NO'
            case 100:
                if(change.find(el => el == 50) && change.find(el => el == 25)){
                    change.push(peopleInLine[i])
                    change.splice(change.indexOf(25), 1) 
                    change.splice(change.indexOf(50), 1)
                    break
                }    
                else if(change.filter(cash => cash === 25).length >= 3) {
                    change.push(peopleInLine[i])
                    change.splice(change.indexOf(25), 1) 
                    change.splice(change.indexOf(25), 1)
                    change.splice(change.indexOf(25), 1) 
                    break
                }                

                else return 'NO'
        }
    }
    return 'YES'
  }


  //Optimized Answer
  function tickets(peopleInLine) {
    var bills = [0, 0, 0]
    for (var i = 0; i < peopleInLine.length; i++) {
      switch (peopleInLine[i]) {
        case 25:
          bills[0]++
          break
          
        case 50:
          bills[0]--
          bills[1]++
          break
          
        case 100:
          bills[1] ? bills[1]-- : bills[0] -= 2
          bills[0]--
          break
      }
      
      if (bills[0] < 0) {
        return 'NO'
      }
    }
    
    return 'YES'
  }