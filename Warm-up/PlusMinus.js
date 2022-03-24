
let arr=[-4, 3, -9, 0, 4, 1];
function plusMinus(arr) {
  // Write your code here
  let pos=0,neg=0,zero=0;
  let res=0;
  arr.forEach((val)=>{
      if(val>0){
          console.log(val)
          pos++;
      }
      else if(val<0){
          neg++;
      }
      else{
          zero++;
      }
  })
  res=pos/arr.length;
  console.log(res.toFixed(6));
  res=neg/arr.length;
  console.log(res.toFixed(6));
  res=zero/arr.length;
  console.log(res.toFixed(6));

}

plusMinus(arr);