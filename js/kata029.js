// ===== [6kyu] Delete occurrences of an element if it occurs more than n times ===== //

function deleteNth(arr,n){
    const arr1 = [...new Set(arr)]
    arr1 = {arr1} 
    return arr1
  }

  console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3))