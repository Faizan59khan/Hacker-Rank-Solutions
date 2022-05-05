let arr=[10, 20, 20, 10, 10, 30, 50, 10, 20];
// function sockMerchant(n, ar) {
//   // Write your code here
//   let count=0;
//   let pairs=0;
//   let countedColor=[];
//   for(let i=0;i<n;i++){
//       ar.slice(i+1,n).forEach((color,index)=>{
//           if(ar[i]==color && !countedColor.includes(ar[i])){
//               count++;
//           }
//       })
//       pairs=pairs+Math.ceil(count/2);
//       count=0;
//       countedColor.push(ar[i]);
//   }
//   return pairs;
// }

//or

function sockMerchant(n, ar) {
  var res = 0;
      ar.sort();
      for(let i=0; i<n;i++){
          if(ar[i] == ar[i+1]){
              i++;
              res++;
             }
      }
  return res;
  }

console.log(sockMerchant(9,arr));