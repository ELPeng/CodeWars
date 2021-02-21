//============ [7kyu] Beginner Series #3 Sum of Numbers ==============//
//Instructions
//Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b. Note: a and b are not ordered

//My Answer
function getSum( a,b ){
    let sum = 0
    if(a <= b){
        for(a; a<=b; a++){
            sum += a
       }
   }
   else{
    for(b; b<=a; b++){
        sum += b
    }
   }
   return sum
}

//Optimal Answer

const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
  }

//The formula is Carl Gauss: sum of consecutive numbers is n/2 * (min + max), where n is the number of integers in sequence