let start=5,end=12,a=2,b=15,apples=[2,3,-4],oranges=[-2,6];
function countApplesAndOranges(s, t, a, b, apples, oranges) {  //a=apple tree position, b=orange tree position
  // Write your code here
  
   let appPos=0,orangePos=0;
   
   for(let i=0;i<apples.length;i++){
       apples[i]+=a;
       if(apples[i]>=s && apples[i]<=t){
           appPos++;
       }
   }
  for(let i=0;i<oranges.length;i++){
       oranges[i]+=b;
        if(oranges[i]>=s && oranges[i]<=t){
           orangePos++;
       }
   }
   console.log(appPos);
   console.log(orangePos);
   
}

countApplesAndOranges(start,end,a,b,apples,oranges);