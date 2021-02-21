//============ [5kyu] Pete, the baker ==============//
//My Answer
function cakes(recipe, available) {
    let count = 0
    const checkIng = function(){
        let ingArr = []
        for(const ing in recipe){
            ingArr.push(ing in available)
        }
        return ingArr.reduce((result, val) => result && val, 1)
    }

    const checkNum = function(){
        let numArr = []
        for(const ing in recipe){
            numArr.push(recipe[ing] <= available[ing])
        }
        return numArr.reduce((result, val) => result && val, 1)
    }

    const subIng = function(){
        for(const ing in recipe){
            available[ing] -= recipe[ing]
        }
    }

    while(checkIng() && checkNum()){
        count++
        subIng()
        if(count == 1000)
            break
    }
    return count
  }

  console.log(cakes(recipe = {flour: 500, sugar: 200, eggs: 1},
    available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))


//Optimal Solution
function cakes(recipe, available) {
    return Object.keys(recipe).reduce(function(val, ingredient) {
      return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
    }, Infinity)  
  }