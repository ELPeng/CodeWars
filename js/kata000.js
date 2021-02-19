//============ [5kyu] Weight for weight ==============//

//My Answer
// function orderWeight(strng) {
//     let objArr = []
//     let arr = strng.split(' ')
//     let newArr = arr.map(num => num.split('').reduce((tot, curr) => tot + parseInt(curr), 0))
//     for(let i = 0; i< arr.length; i++){
//         objArr[i] = {
//             num: arr[i],
//             order:newArr[i]
//         }
//     }
//     console.log(objArr)
//     objArr.sort((a, b) => {
//         if(a.order < b.order) return -1
//         if(a.order > b.order) return 1
//         if(a.num < b.num) return -1
//         if(a.num > b.num) return 1
//     })
//     return objArr.map(obj => obj.num).join(' ')
// }
console.log(orderWeight('403512 81 9393 59 192626 110 210865 176 478858 29 153604 82 72975 199 367604 72 412309 73 84422 187 18'))

//Best Answer 
function orderWeight(strng) {
    const sum = (str)=>str.split('').reduce((sum,el)=>(sum+(+el)),0);
     function comp(a,b){
       let sumA = sum(a);
       let sumB = sum(b);
       return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
      };
    return strng.split(' ').sort(comp).join(' ');
   }