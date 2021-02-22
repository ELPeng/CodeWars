//============ [6kyu] Convert string to camel case ==============//
//My answer
function toCamelCase(str){
    let delim
    str.includes('-')? delim = '-' : delim = '_'
    let strArr = str.split(delim)
    return strArr.map((word, i) => {
            return i == 0 ? word : word.replace(word[0], word[0].toUpperCase())
        }).join('')
}
console.log(toCamelCase('the-stealth-warrior'))

//Best solution
function toCamelCase(str){
    var regExp=/[-_]\w/ig;
    return str.replace(regExp,function(match){
          return match.charAt(1).toUpperCase();
     });
}