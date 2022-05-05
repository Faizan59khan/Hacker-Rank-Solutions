let path=["U","D","D","U","U","D","D","U"]
function countingValleys(steps, path) {
  // Write your code here
  let valleys=0;
  let levels=0;
  for(let i=0;i<steps;i++){
     if(path[i]=="D"){
         levels--;
     }
     else{
         levels++;
         if(levels==0){
             valleys++;
         }
     }
     
  }
  return valleys;
}
console.log(countingValleys(8,path));