//=========== [7kyu] Maximum Lnegth Difference =============//
function mxdiflg(a1, a2) {
    if(a1.length ==0 || a2.length == 0)
        return -1
    let a1Min = a1.map(word => word.length).reduce((res, val) => Math.min(res, val))
  let a1Max = a1.map(word => word.length).reduce((res, val) => Math.max(res, val))
  let a2Min = a2.map(word => word.length).reduce((res, val) => Math.min(res, val))
  let a2Max = a2.map(word => word.length).reduce((res, val) => Math.max(res, val))

  return Math.max(Math.abs(a1Max-a2Min), Math.abs(a1Min-a2Max))
}

var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2))


//Best Solution
function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1
    let l1 = a1.map(str => str.length)
    let l2 = a2.map(str => str.length)
    return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
  }