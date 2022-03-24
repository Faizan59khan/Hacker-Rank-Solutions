//Task: count high candles blows:

let arr=[1,3,3,2];
function birthdayCakeCandles(candles) {
  // Write your code here
  let blows=0;
  let maxValue=Math.max(...candles);
  candles.forEach((val)=>{
      if(val==maxValue){
          blows++;
      }
  })
  return blows;
}

console.log(birthdayCakeCandles(arr));