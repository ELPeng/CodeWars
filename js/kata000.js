//[5kyu] Weight for weight
function orderWeight(strng) {
    let objArr = []
    let arr = strng.split(' ').sort()
    let newArr = arr.map(num => num.split('').reduce((tot, curr) => tot + parseInt(curr), 0))
    for(let i = 0; i< arr.length; i++){
        objArr[i] = {
            num: arr[i],
            order:newArr[i]
        }
    }
    console.log(objArr)
    objArr.sort((a, b) => a.order - b.order)
    return objArr.map(obj => obj.num).join(' ')
}
console.log(orderWeight('403512 81 9393 59 192626 110 210865 176 478858 29 153604 82 72975 199 367604 72 412309 73 84422 187 18'))