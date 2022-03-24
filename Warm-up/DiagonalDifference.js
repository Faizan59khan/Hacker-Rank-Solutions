let arr=[[11,2,4],[4,5,6],[10,8,-12]];
function diagonalDifference(arr) {
  // Write your code here
  let len=arr.length-1;
  let i=0,j=len;
  let letfDia=0;
  let rightDia=0;
  let res=0;
  while(i<=len){  
      letfDia+=arr[i][i];
      console.log("l"+letfDia);
      i++;
  }
  i=0;
  while(i<=len){
      rightDia+=arr[i][j];
      console.log("r"+rightDia);
      i++;
      j--;
  }
  console.log(letfDia+" "+rightDia)
  res=Math.abs(letfDia-rightDia);
  return res;
  
}

console.log(diagonalDifference(arr))