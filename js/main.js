// data type

var stdmain = "damsara"// string
var age = 25; // number
var isMarried = false // boolian

// variable------> var,let,const

var val0 = 12;

var val0 = 45;

// let val1 = 34;

// let val1 =55;

// const val3 = 34;

// const val3 = 55;

var val4 = 45;
val4  = 90;

let val5 = 88;
val5 = 71;

// const val6 = 71;
// val6 = 5;


var val7 = 23;

{
  console.log(val7);
  var val8 = 90;
}

console.log(val8);

// var is globle scope

// let val9 = 23;

// {
//   console.log(val9);
//   let val10 = 90;
// }

// console.log(val10);

// // let is block scope

// const val11 = 23;

// {
//   console.log(val11);
//   let val12 = 90;
// }

// console.log(val12);

// const is block scope


function saveData(){

}

saveData();

function deleteData(name){
  console.log("Haaiiii " + name);
}

deleteData();

function sumData(num1, num2){
return num1 * num2
}

var result = sumData(5,4);
console.log(result);


/////////////////////////////


//oop ------> object orianted programming

const objDamsara = {name:"Damsara Dilshan", age:25, address: "ja-ela",favFood:"rice"}


//json object
// {
//   "name":"damsara"
//   "address":"ja ela"
// }

const cars = ["Toyota","jeep","Mazda"]
console.log(cars);

const marks = [];

marks[0]=44;
marks[1]=55;
marks[2]=77;

console.log(marks);

/////////////////

for(const val of cars){
  console.log(val);
}

/////////////////



