// =========== [7kyu] Alphabetical Addition ============= //

function addLetters(...letters) {
    if(letters.length == 0) return 'z'
    let code = letters.map((letter, i) => letters.join('').charCodeAt(i)-96).reduce((acc, char) => acc + char)
    while(code>26){
      code -=26
    }
      return String.fromCharCode(code+96)
  
  }

  console.log(addLetters(['a', 'b', 'c']))