//============ [5kyu] Best travel ==============//
//My Answer

function chooseBestSum(t, k, ls) {
    const tripArr = []
    let tempTrip = {}
    class Trip{
        constructor(directions, distance){
            this.directions = directions
            this.distance = distance
        }
    }
    // let trip = {
    //     directions: [],
    //     totalDistance: 0
    // }
    for(let i = 0; i < ls.length-2; i++){
      for(let j = i+1; j<ls.length - 1; j++){
        for (let k = j+1; k < ls.length; k++){
           tempTrip = new Trip([],0)
           tempTrip.directions = [ls[i], ls[j], ls[k]]
           tempTrip.distance = tempTrip.directions.reduce((total, curr) => total+curr , 0)
           tripArr.push(tempTrip)
        }
      }
    }
    console.log(tripArr)
}
chooseBestSum(120, 4, [1, 2, 3, 4, 5])
