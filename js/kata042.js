// =========== [7kyu] Sum - Square Even, Root Odd ============= //
const sumSquareEvenRootOdd = ns => {
    return ns.map(num => num%2 ? Math.sqrt(num) : Math.pow(num, 2)).reduce((acc, num) => acc + num, 0).toFixed(2)
  };

  console.log(sumSquareEvenRootOdd([4,5,7,8,1,2,3,0]))

  //Best Solution
  const sumSquareEvenRootOdd = ns => {
    return +(ns.reduce((a, b) => a + (b % 2 ? b ** 0.5 : b ** 2), 0)).toFixed(2)
  };