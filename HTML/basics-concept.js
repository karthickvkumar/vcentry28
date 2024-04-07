/*Language Fundamentals - Data Type 
Type 1 - Primite / Pre defined 

Number - Any numberical value from postivie to negative range, decimal, fraction 

String - Any text content which is typed inside single '' or double "" qoute 

Boolean - logical value (true / false)

null - Non exisit data 

undefined - Has variable name but no value assigned*/

/*
Creating Temp storage (Variable definition)
syntax:
var variable_name = value; 

var -- Javascript in-built keyword
variable_name -- Valid text it should be a meaningful name (No space, A-Z, a-z, 0-9, _, $)
value -- any kind of data type 
*/

var userEmailID = "kathick2211@gmail.com";
var userScore = 88.5;
var result = true;
var futureValue;

/*
To print value into console window
syntax:
console.log(variable_name);
*/

console.log(userEmailID);
console.log(userScore);
console.log(result);
console.log(futureValue);

var studentFirstName = "mr.abc";
var studentLastName = "xyz";
var studentAge = 25;
var studentRollNumber = "47865ASE55";

// Type 2 - User Defined / Non Primitive / Object Type
/*
Object - It is a collection of property / key and value
sytax 
var variable_name = {
  key : value,
  key : value
};

var -- Javascript in-built keyword
variable_name -- Valid text it should be a meaningful name (No space, A-Z, a-z, 0-9, _, $)
key -- same like a variable_name
value -- any kind of data type 
*/

var studentDetials = {
  firstName : "mr.abc",
  lastName : "xyz",
  age : 25,
  rollNumber : "47865ASE55"
};

console.log(studentDetials);

/*
Array - It is a list of value / List of similar data type 
syntax:
var variable_name = [ value, value, ... , valueN ];
*/

var nameList = ["abc", "cde", "ghg"];

var studentDetialList = [
  {
    firstName : "mr.abc",
    lastName : "xyz",
    age : 25,
    rollNumber : "47865ASE55"
  },
  {
    firstName : "mr.abc",
    lastName : "xyz",
    age : 25,
    rollNumber : "47865ASE55"
  },
  {
    firstName : "mr.abc",
    lastName : "xyz",
    age : 25,
    rollNumber : "47865ASE55"
  }
];

console.log(nameList);
console.log(studentDetialList);

/*
Function - It is a block of Code 
syntax: Function Definition 

function functionName(){
  --- codings ---
}

syntax: Function Invocation / Execution

functionName();

HTML - onclick="functionName();"

function -- Javascript in-built keyword
functionName -- Valid text it should be a meaningful name (No space, A-Z, a-z, 0-9, _, $)
*/

function printWelcomeMessage(){
  var message = "Hello there! Good Day";
  console.log(message);
  alert(message);
}

/*
To print value in a brower popup notificaiton
syntax:
alert(variable_name);
variable_name value - Only primitive type (number, string, boolean, undefined)
*/

/*
To get input in a browser popup notification 
syntax:
var variable_name = prompt("Lable message");
*/

function displayUserMessage(){
  var userMessage = prompt("Please Enter any Message");
  console.log(userMessage);
  alert(userMessage);
}

//Addition of Two Numbers
function addition(){
  var number1 = prompt("Enter your First Number");
  var number2 = prompt("Enter your Second Number");

  var result = parseInt(number1) + parseInt(number2);
  console.log(result);
  alert(result);
}

/*
Converting String value -> Number value
syntax:
parseInt(value);
*/