//Compare Triplets:
let a=[1,3,2];
let b=[2,3,4];
function compareTriplets(a, b) {
  // Write your code here
  let arr=[0,0];
  for(let i=0;i<a.length;i++){
      if(a[i]>b[i]){
          arr[0]++;
      }
      else if(b[i]>a[i]){
          arr[1]++;
      }
  }
  return arr;

}

console.log(compareTriplets(a,b))