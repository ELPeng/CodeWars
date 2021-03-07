// =========== [7kyu] Sorted? Yes? No? How? ============= //
function isSortedAndHow(array) {
    if(String(array) === String(array.slice(0).sort((a, b) => a-b)))
      return 'yes, ascending'
    else     if(String(array) === String(array.slice(0).sort((a, b) => b-a)))
      return 'yes, descending'
    else
      return 'no'
    }

console.log(isSortedAndHow([1, 2, 3]))

//Best Solution
function isSortedAndHow(arr) {
    return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
           arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
  }