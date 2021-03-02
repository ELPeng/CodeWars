// =========== [6kyu] Street Fighter 2 - Character Selection ============= //

function streetFighterSelection(fighters, position, moves){
    let arr = []
    for(let i = 0; i< moves.length; i++){
        switch(moves[i]){
            case 'up':
                if(position[0] == 1) position[0] = 0
                break;
            case 'down':
                if(position[0] == 0) position[0] = 1
                break;
            case 'left':
                position[1] == 0 ? position[1] = 5 : position[1]--
                break;
            case 'right':
                position[1] == 5 ? position[1] = 0 : position[1]++
                break;
        }  
        arr.push(fighters[position[0]][position[1]])     
    }
    return arr
  }

  fighters = [
	["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
	["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

moves = ['up', 'left', 'right', 'left', 'left'];
  console.log(streetFighterSelection(fighters, [0,0], moves))