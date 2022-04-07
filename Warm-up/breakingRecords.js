//Task: Breaking Records:
let arr=[10, 5, 20, 20, 4, 5, 2, 25, 1];

function breakingRecords(scores) {
  // Write your code here
  let arr=[0,0];
  let lowestValue=scores[0];
  let highestValue=scores[0];
  
  scores.forEach((val)=>{
      
      if(val>highestValue){
          highestValue=val;
          arr[0]++;
      }
      if(val<lowestValue){
          lowestValue=val;
          arr[1]++;
      }
      
  })
  return arr;
}

console.log(breakingRecords(arr))