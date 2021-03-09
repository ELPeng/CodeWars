// =========== [7kyu] Sum of Minimums! ============= //
function sumOfMinimums(arr) {
    return arr.reduce((tot, sub) => tot + sub.reduce((min,val) => Math.min(min, val)), 0)
  }

  console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]))

  //Optimal Solution
  function sumOfMinimums(arr) {
    return arr.reduce((p, c) => p + Math.min(...c), 0);
  }