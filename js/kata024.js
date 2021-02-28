// ===========[6kyu] Build a pile of Cubes ============ //
function findNb(m) {
    let sum = 0
    for (let i = 1; sum <=m; i++){
        sum+= i** 3
        if(sum == m) return i
    }
    return (-1);
}

console.log(findNb(4183059834009))

//Optimal Solution
function findNb(m) {
    var n = 0
    while (m > 0) m -= ++n**3
    return m ? -1 : n
  }