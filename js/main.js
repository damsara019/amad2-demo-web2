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