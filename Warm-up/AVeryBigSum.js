let ar=[2,3,5,6];

function aVeryBigSum(ar) {
  // Write your code here
 let res=0;
ar.forEach((val)=>{
 res+=val;
})
 return res;
}

console.log(aVeryBigSum(ar));