console.log("damsara dilshan") 

var email = "dilshandamsara@gmail.com"
console.log(email)

var studentName = 90;
var mark = 40.6;
var grade = 'A';




var x = 12;
var y = 13;
var answere = x+y;

console.log(answere)

//function
function add(){
  var firstNumber = 10;
  var secondNumber = 12;

  alert("the answere is"+(firstNumber+secondNumber));
  console.log("the answere is"+(firstNumber+secondNumber));
}
//function calling statement
// add();
// add();

function loginUser(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  console.log(email+""+password)
}

function calculateSum() {
  // Get values from the input fields
  const num1 = parseFloat(document.getElementById('number1').value);
  const num2 = parseFloat(document.getElementById('number2').value);
  
  // Check if the inputs are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
      document.getElementById('result').innerText = "Please enter valid numbers.";
  } else {
      // Calculate the sum
      const sum = num1 + num2;
      
      // Display the result
      document.getElementById('result').innerText = "Sum: " + sum;


      
  }
}

// if/else/switch

// true/false,satatemwnt that true or false

var num = 45;



if(num>50){

  console.log("helooooooo");

}

function getsum(){

  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);

  alert(num1+num2);

}

// a family has 3 children. get each child weight form users input. find anerage. if averege weight >55 alert no wories.

function avawei(){
  var wei1 = parseInt(document.getElementById("wei1").value);
  var wei2 = parseInt(document.getElementById("wei2").value);
  var wei3 = parseInt(document.getElementById("wei3").value);

  var averege = (wei1+wei2+wei3)/3

  if(averege>55){
    alert((wei1+wei2+wei3)/3);
  }else{
    alert("kaapan hodata");
  }
}

var val1 = 12;
var val2 = 5;

console.log(val1%val2);


// var num = 11;
// var value = num%2;

// if(value==0){
  // alert("input number is even");
// }else{
  // alert("input number is odd");
// }

var age = 20;

if(age==18){
  console.log("Enter");
}else if(age==16){
  console.log("Call parents");
}else if(age==14){
  console.log("call police");
}else{
  console.log("hallo machn");
}


// &&, || ------> logical operator
if(age>18 && age==10){

}



var dbusername = "dilshandamsara@gmail.com";
var dbpassword = "abcd1234";

var dbusername = "dilshandamsara@gmail.com";
var dbpassword = "abcd1234";
var attemptCount = 0;
var maxAttempts = 3;

function checkLogin() {
  var enteredUsername = document.getElementById("email").value;
  var enteredPassword = document.getElementById("password").value;

  // Check if account is already locked
  if (attemptCount >= maxAttempts) {
    alert("Your account is locked");
    return;
  }

  // Check if entered credentials are correct
  if (enteredUsername === dbusername && enteredPassword === dbpassword) {
    alert("Login successful");
    // Reset attempt count after a successful login (optional)
    attemptCount = 0;
  } else {
    attemptCount++; // Increment attempt count
    alert("Username or password incorrect. Please try again.");
    
    // Clear the input fields
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    // Check if max attempts reached
    if (attemptCount >= maxAttempts) {
      alert("Your account is locked");
    }
  }

  // Clear the input fields
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}



var seen = 5;

switch(seen){
  case 5:
    console.log("5 selected");
    break;
  case 4:
    console.log("4 selected");
    break;
  case 7:
    console.log("7 selected");
    break;
  default:
    console.log("not selected");
  }

  var myval = 4;

  for (var i = 0; i < 6; i++) {
    if (myval % 2 == 0) {
      myval += 3;
    } else {
      myval += 2;
    }
  }
  
  console.log(myval);

  ////////////////////////////////////////



