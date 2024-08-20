// let a = 10;
// let b = 5;
// let sum = a + b;
// let diff = a - b;
// let product = a * b;
// let quotient = a / b;
// let reminder = a % b;
// let isequal = (a == b);
// let npteqaul = (a != b);
// let isgreater = (a > b);
// let logicaland = (a > b && b < 10);
// document.write(sum, "<br>", diff, "<br>", product, "<br>", quotient, "<br>", reminder, "<br>", isequal, "<br>", npteqaul, "<br>", isgreater, "<br>", logicaland);
// -------------------------------------------------------
// let fname = "Divyansh ";
// document.write("Hello ", fname);
// let age = 20;
// document.write("<br>Age ", age, "<br>");
// let isStudent = true;
// document.write(`Student - ${isStudent ? "yes" : "no"}`, "<br>");
// let emptyVlaue = null;
// document.write(`About us  - ${emptyVlaue || "Write something"}`, "<br>");
// let uninitialized;
// document.write(!uninitialized && "Fill details completely");
//-----------------------------------------------------------------

// let age=10;
// if(age>0){
// document.write("You are eligible for vote");
// }
// else 
// {
//   document.write("You are not eligible for vote");

// }
//              OR

// let age=18;
// document.write(age>17?"you are eligible to vote":"You are not eligible to vote");

//--------------------------------------

// let number=prompt("Enter any number");
// if(number>0)
// {
//   document.write(number," is Positive Number");

// }
// else if(number<0)
// {
//   document.write(number," is Negative Number");

// }
// else{
//   document.write("Number is zero");
// }



//---------------------------------------------------------


// let fruit=prompt("Enter any fruit");
// switch(fruit)
// {
//   case "apple":
//     {
//       document.write("You Entered apple");
//       break;
//     }
//     case "banana":
//       {
//         document.write("You Entered Banana");
//         break;

//       }
//       default:
//         {
//           document.write("Invalid Choice");
//         }
// }



// let a = prompt("Enter First number ");
// let b = prompt("Enter Second number ");
// var ch = prompt("Enter your choice ");
// switch (ch) {
//   case '+':
//     {
//       document.write(parseInt(a) + parseInt(b));
//       break;
//     }
//   case '-':
//     {
//       document.write(parseInt(a) - parseInt(b));
//       break;
//     }
//     case '*':
//       {
//         document.write(parseInt(a) * parseInt(b));
//         break;

//       }
//       case '/':
//         {
//           document.write(parseInt(a) / parseInt(b));
//           break;
//         }
//         default:
//           document.write("there was en error occured during caculating!!");
// }



// //simple function
// function demofunction()
// {
//   document.write("This is the basic function of javascript<br>");
// }
// demofunction();

// //function expression 

// let itisfunction=function()
// {
//   document.write("This is a function expression <br>");
// }
// itisfunction();

// //arrow fuction
// let arrowfunction=()=>
// {
//   document.write("This is an arrow function <br>");
// }
// arrowfunction();


// //iife function 
// (function()
// {
//   document.write("Hello this is iife function ");
// }
// )
// ();

// let calculate=function() {
  // document.getElementById("demo").innerHTML="Good Morning";
  // let num1 = parseFloat(document.getElementById("num1").value);
  // let num2 = parseFloat(document.getElementById("num2").value);
  // let operater = document.getElementById("operator").value;
  // let result;


  // if (operater === "add") {
  //   result = num1 + num2;
  // }
  // else if (operater === "subtract") {
  //   result = num1 - num2;
  // }
  // else if (operater === "multiply") {
  //   result = num1 * num2;
  // }
  // else if (operater === "divide") {
  //   result = num1 / num2;
  // }

  // document.getElementById("result").innerText = "result:" + result;

//   function calculate() {
//     let num1 = parseFloat(document.getElementById("num1").value);
//     let num2 = parseFloat(document.getElementById("num2").value);
//     let operator = document.getElementById("operator").value;
//     let result;

//     if (operator === "add") {
//         result = num1 + num2;
//     } else if (operator === "subtract") {
//         result = num1 - num2;
//     } else if (operator === "multiply") {
//         result = num1 * num2;
//     } else if (operator === "divide") {
//         result = num1 / num2;
//     }

//     // document.getElementById("result").innerText = "Result: " + result;
//     document.getElementById("result").innerHTML = `<h1>Result: ${result}</h1>`
// }














//  function darkmode() {
  
//   document.getElementById("mode").style.background="black"
//   document.getElementById("mode").style.color="grey"
//  }
//  function lightmode() {
  
//   document.getElementById("mode").style.background="White"
//   document.getElementById("mode").style.color="black"
//  }
// // }
// // function evening()
// // {
// //   document.getElementById("demo").innerHTML="Good Evening";

// // }
// // function night()
// // {
// //   document.getElementById("demo").innerHTML="Good Night";

// // }



















// let student ={
//     fname:"Divyansh",
//     id:101,
//     age:20,

// }


// document.write(student.id,"<br>")
// document.write(student.fname,"<br>");
// document.write(student.age,"<br>");

let student ={
    fname:"Divyansh",
    id:101,
    age:20,

}


let{fname,id,age}=student;

document.write(fname,"<br>");
document.write(age,"<br>");
document.write(id,"<br>")







//update
student.id=507
console.log(student['id']);
delete student.id
console.log(student['id']);


student={}
delete student  
console.log(student)