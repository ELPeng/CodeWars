// =========== [7kyu] Sum of numbers from 0 to N ============= //
var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
        let sum = 0
        let arr = []
        if(count > 0){
          for(let i = 0; i <=count; i++){
            arr.push(i)
            sum += i
          }
          return `${arr.join('+')} = ${sum}`
        }
        else if (count == 0) return 0
        else return `${count} < 0`
    };
  
    return SequenceSum;
  
  })();

  console.log(SequenceSum.showSequence(7))