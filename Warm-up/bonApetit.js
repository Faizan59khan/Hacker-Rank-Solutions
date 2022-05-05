let bill=[2,4,6];
let k=1;      //the item index which anna has'nt eaten.
let b=12;        //cost which is charge by brain to anna
function bonAppetit(bill, k, b) {
  // Write your code here
   let chargeCost=bill.reduce((a,b)=>a+b);
   chargeCost=(chargeCost-bill[k])/2;
   if(chargeCost==b){
       console.log('Bon Appetit');
   }
   else{
       chargeCost=Math.abs(chargeCost-b);
       console.log(chargeCost);
   }
}

bonAppetit(bill,k,b);