// =========== [7kyu] Rotate for a Max ============= //
function maxRot(n) {
    let nArr = String(n).split('')
    let x, max = n
    for(let i = 0; i<nArr.length-1; i++){
        x = nArr.splice(i, 1).toString()
        nArr.push(x)
        if(Number(nArr.join('')) > max)
            max = Number(nArr.join(''))
    }
    return max
  }
  console.log(maxRot(507992495))