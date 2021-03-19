function overTheRoad(address, n){
    let i
  if(address % 2 == 1){
    i = -((address - 1)/2 - n)
    return 2*i
  }
  else{
    i = address/2
    return 2*(n-1) + 1
  }
}




  console.log(overTheRoad(3, 3))