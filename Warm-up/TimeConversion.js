//Task convert in military 24 format:

let input="07:05:45PM";
function timeConversion(input) {
  input = input.split(':');
  console.log(input);
  var hours = parseInt(input[0]);    //Convert in Number
  var timeFrame = input[2].slice(2);   //AM OR PM
  var seconds = input[2].slice(0,2);
  if ((timeFrame === 'PM') && (hours !== 12)) {
      hours += 12;
  }
  if ((hours === 12) && (timeFrame === 'AM')) {
      hours = '00';
  } else if (hours < 10) {
      hours = '0' + hours.toString();
  } else {
      hours = hours.toString();
  }
  console.log([hours, input[1], seconds].join(':'));
  return [hours, input[1], seconds].join(':');
};

timeConversion(input);