//============ [7kyu] Mumbling ==============//
function accum(s) {
	let strArr = s.split('')
  return strArr.map((letter, i) => {
    for(let x = 0; x < i; x++){
      letter+=strArr[i].toLowerCase()
    }
    return letter[0].toUpperCase() + letter.slice(1)
  }).join('-')
}
console.log(accum("ZpglnRxqenU"))
