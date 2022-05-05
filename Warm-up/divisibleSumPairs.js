let arr=[1,3,2,6,1,2];
// function divisibleSumPairs(n, k, ar) {
//   // Write your code here

//   let pairCount=0;
//   for(let i=0;i<n-1;i++){
//       for(let j=i+1;j<n;j++){
//           if((ar[i]+ar[j]) % k==0){
//               pairCount++;
//           }
//       }
//   }

//   return pairCount;
// }

//or


function divisibleSumPairs(n, k, ar) {
  // Write your code here
  
  let pairCount=0;
  for(let i=0;i<n-1;i++){
    
    ar.slice(i+1).forEach((item)=>{
       if((item+ar[i])%k==0){
         pairCount++;
       }
     })

  }
 
 
  return pairCount;
}

console.log(divisibleSumPairs(6,3,arr))