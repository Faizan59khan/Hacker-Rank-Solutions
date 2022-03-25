//Find Grades: round to next multiple of five (less than 3 diff): 
let arr=[73,45,22,67]
function gradingStudents(grades) {
  // Write your code here
  let tempValue=0;
  for(let i=0;i<grades.length;i++){
    if(grades[i]>35){
      tempValue=grades[i];
      while(tempValue%5!=0){
        tempValue++;
      }
      if((tempValue-grades[i])<3){
        grades[i]=tempValue;
      }
    }
  }
  console.log(grades)
}
gradingStudents(arr)