// ===== [6kyu] Does my number look big in this? ===== //

function narcissistic(value) {
    return value === value.toString().split('').reduce((acc, val, index, arr) => acc + Number(val)**arr.length, 0)
  }


  