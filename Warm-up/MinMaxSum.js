//MinMax sum:
let arr=[1,3,5,7,9];

// function miniMaxSum(arr) {
//   // Write your code here
//   let minSum=0,maxSum=0;
//   let minValue=Math.min(...arr);
//   let maxValue=Math.max(...arr);
//   // console.log(minValue)
//   // console.log(maxValue)
//   for(let i=0;i<arr.length;i++){
//       arr[i] !== maxValue ? minSum+=arr[i]: 0;
//      arr[i] !== minValue ? maxSum+=arr[i]: 0;
//   }
//   console.log(minSum);
//  console.log(maxSum);
// }

//or 
//Optimized Solution:
function miniMaxSum(arr) {                    //reduce gives accumulated value.
  let sum = arr.reduce((a, b) => a + b);     //reduce take 2 arguments callback and initial value. 
  let maxVal = Math.max(...arr);
  let minVal = Math.min(...arr);
  console.log((sum - maxVal) + ' ' + (sum - minVal));
}

miniMaxSum(arr);