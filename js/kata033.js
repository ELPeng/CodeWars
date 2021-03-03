// =========== [7kyu] Find the capitals ============= //
// var capitals = function (word) {
// 	let regex = /[A-Z]/g
//     return word.match(regex)
// };

var capitals = function (word) {
	let arr = []
    for(let i = 0; i<word.length; i++){
        if(word.charCodeAt(i)<=90)
            arr.push(i)
    }
    return arr
};

console.log(capitals('CodEWaRs'))