// =========== [6kyu] Build Tower ============= //

// function towerBuilder(nFloors) {
//     const space = ' '
//     const star = '*'
//     let spaces, stars, tower=[] 

//     for(let i = 1; i<=nFloors; i++){
//         stars = star.repeat(i*2 - 1)
//         spaces = space.repeat(nFloors - i)
//         tower.push(spaces + stars + spaces)
//     }
//     return tower
//   }

  console.log(towerBuilder(5))

  //Best solution
  function towerBuilder(n) {
    return Array.from({length: n}, function(v, k) {
      const spaces = ' '.repeat(n - k - 1);
      return spaces + '*'.repeat(k + k + 1) + spaces;
    });
  }