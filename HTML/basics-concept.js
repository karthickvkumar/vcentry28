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
  firstName: "mr.abc",
  lastName: "xyz",
  age: 25,
  rollNumber: "47865ASE55"
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
    firstName: "mr.karthick",
    lastName: "xyz",
    age: 28,
    rollNumber: "47865ASE55"
  },
  {
    firstName: "mr.john",
    lastName: "xyz",
    age: 20,
    rollNumber: "47865ASE55"
  },
  {
    firstName: "mr.yuvi",
    lastName: "xyz",
    age: 18,
    rollNumber: "47865ASE55"
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

var variable_name = function(){
  --- codings ---
}

Anonymous Function / Callback Function 

function(){
  --- codings ---
}

syntax: Function Invocation / Execution

functionName();

HTML - onclick="functionName();"

function -- Javascript in-built keyword
functionName -- Valid text it should be a meaningful name (No space, A-Z, a-z, 0-9, _, $)
*/

function printWelcomeMessage() {
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

function displayUserMessage() {
  var userMessage = prompt("Please Enter any Message");
  console.log(userMessage);
  alert(userMessage);
}

//Addition of Two Numbers
function addition() {
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
/*
Operators
1. Arithmetic Operator +, -, *, /, %, ++, --
2. Assignement Operator =
3. Comparaison Operator < (less than), <= , > (greater than), >=, ==, !=, ===, !==
4. Logical Operator && (AND), || (OR), ! (NOT)

&& AND
true && true = true 
false && true = false 
true && false = false 
false && false = false

|| OR 
true || true = true 
true || false = true 
false || true = true
false || false = false 

! NOT
!true = false 
!false = true 
*/

/*
IF ELSE Condition 
Syntax:

if(condition){
  -- coding 1
}
else{
  -- coding 2
}

condition - logiacally should return boolean 
*/

/*/
Problem - To find whether a person is eligible for Vote ?
Pseudocode:
1. Give Number as a Input 
2. Evaluate the number = Number greater than or equal to 18
3. True = Eligible to vote 
4. False = Not Eligible to vote
*/

function checkVotingEligiblity() {
  var age = prompt("Enter your age in number");
  if (age >= 18) {
    alert("The user is Eligible to Vote");
  }
  else {
    alert("The user is NOT Eligible to Vote");
  }
}

/*
Multiple IF ELSE Condition 
Syntax:

if(condition){
  -- condition 1
}
else if(condition){
  -- condition 2
}
else if(condition){
  -- condition 3
}
.
.
else{
  -- condition N
}
*/

/*
Problem: To find Ticket Price based on user age
1) If age is less than 10 - Ticket fair will be 50%
2) If age is greater than or equal to 10 and less then 60 - Ticket fair will be 100%
3) If age is greater than or equal to 60 - Ticker fair will be 75%

Pseudocode:
1. Give Number as a Input 
2. Number < 10 = Ticket fair will be 50%
3. Number >= 10 && Number < 60 = Ticket fair will be 100%
4. Number >= 60 = Ticker fair will be 75%
*/

function checkTicketPrice() {
  var age = prompt("Enter your age in number");
  if (age < 10) {
    alert("Ticket fair will be 50%");
  }
  else if (age >= 10 && age < 60) {
    alert("Ticket fair will be 100%");
  }
  else {
    alert("Ticker fair will be 75%");
  }
}

/*Loop - FOR 
Syntax:

for(initialization; condition; increment/decrement){
  -- repeated logic
}

initialization - Loop starting point 
condition - Loop ending point based on false 
increment/decrement - Loop movement control 

for(var i = 1; i <= 10; i++){
  console.log("Count " + i);
}*/

/*
Problem - To find all Even numbers for the give number of limit 
1. Give number as a Input 
2. Logic = Number % 2 == 0 -- Even number else -- Not Even number 
*/

function findEvenNumbers() {
  var lastNumber = prompt("Enter the last number");
  for (var i = 1; i <= lastNumber; i++) {
    console.log(i);
    if (i % 2 == 0) {
      console.log(i, "is a even number");
    }
  }
}

/*
forEach - Loop only to Iterate array 
syntax:

array_variable_name.forEach(function(value, index){
  --- coding logic --- 
})

callback function = function(){ }
value, index = Argument 
*/

studentDetialList.forEach(function (value, index) {
  console.log("The studen name is " + value.firstName);
});

/* 
Read value from an Object 
object_variable_name.key 
*/

var car = {
  price: 1000000,
  brand: "Hyndai"
}

console.log("My car brand is " + car.brand);

/*
map - Loop only to Iterate array and it will return a new Array
syntax:
array_variable_name.map(function(value, index){
  return value;
});
*/

var mapResult = studentDetialList.map(function (value, index) {
  var data = {
    name: value.firstName,
    roll: value.rollNumber
  }
  return data;
});

console.log(mapResult);
/*
filter - Loop only to Iterate array and it will return a new filtered value Array

array_variable_name.filter(function(value, index){
  return condition; 
})
*/

var filterResult = studentDetialList.filter(function (value, index) {
  return value.age >= 20
});

console.log(filterResult);

/*
Switch Case - Flow Control 
syntax:

switch(expression){
  case value:
    -- coding --
    break;
  case value:
    -- coding --
    break;
  .
  .
  default:
    -- coding --
}

expression - Actual value
value - To match the given expression  
*/

/*
Problem - To perfom basic Arithmetic Operation 
Input : 2 Number value, 1 Operator value 
*/

// Copy and Paste - Shift + Alt + down arrow
function calculator() {
  try{
    //debugger;
    var number1 = prompt("Enter a number 1 value");
    var number2 = prompt("Enter a number 2 value");
    var operator = prompt("Enter a opertor symbol");
    var result;

    switch (operator) {
      case "+":
        result = parseInt(number) + parseInt(number2);
        alert(result);
        break;
      case "-":
        result = number1 - number2;
        alert(result);
        break;
      case "*":
        result = number * number2;
        alert(result);
        break;
      case "/":
        result = number / number2;
        alert(result);
        break;
      default:
        alert("Invalid Operator use only +,-,*,/");
    }
  }
  catch(exception){
    console.log(exception);
    console.info(exception);
    console.warn(exception);
    console.error(exception); // Output of developer

    alert("Something went wrong, pls contact admin of this page"); // Output for User
  }
}

/*
Error Handling 

1. Syntax Error - Incorrect coding syntax (red output in console window - Uncaught syntax error)
2. Reference Error - Using undeclared variable name or function name (red output in console window)
3. Logical Error - Invalid or unexpected output (No red color output - resolve debugger / debugging)
*/

/*
To handle error in code 
syntax:
try{
  -- entire code block
}
catch(exception){

}
*/

/*
Scope - It is used to set accessiblity of a Varaible 
1. Local Scope - Creating variable inside a Function definition 
                 Variable accessiblity rule will only available within the function

2. Global Scope - Creating variable outside a Function definition
                  Variable accessiblity rule will available within the ANY function

*/
var commonUserName = "SID";

function displayName(){
  var username = "karthickvkumar";
  console.log(username);
  console.log(commonUserName);
}

function displayUserName(){
  //console.log(username);
  console.log(commonUserName);
}

/*
Timers 
1. Set Timeout 
2. Set Inerval 
*/

/*
SetTimeout - It will make code to run after the given time duration
Syntax:

setTimeout(function(){
  -- code that run after sometime 
}, timeInMillisecond);

1000 millisecond - 1 Second 
*/

function timeDelayOutput(){
  setTimeout(function(){
    var message = "You won the price!";
    console.log(message);
    alert(message);
  }, 5000);
}

/*
SetInterval - It will run the code in repeat mode for given time duration
Syntax:
setInterval(function(){
  -- code to run repeat mode 
}, timeInMillisecond);
*/
var timeId;

function repatModeOutput(){
  timeId = setInterval(function(){
    var message = "You won the price!";
    console.log(message);
    alert(message);
  }, 3000); 
}

/*
To set interval repeat mode 
syntax:
clearInterval(timerId);
*/

function stopTimeInterval(){
  clearInterval(timeId);
}

/*
Browser Storage 
1. Local Storage - Permenamt storage 
2. Session Storage - Temporary storage 

To store new value into Local Storgae 
syntax: 
localStorage.setItem("key", value);
key - Name to indentify
value - Primitive Type value 

To read stored value from local Storgae
syntax:
localStorage.getItem("key");

To delete particular value from local storage
syntax:
localStorage.removeItem("key");

To all value from local Storage
syntax:
localStorage.clear();

*/

/*
To store Object / Array into local Storage
var result = JSON.stringify(value); ---> string formated object / array 

JSON.parse(stringValue) --> Convert string formated object/ array to original value
*/

/*
To store new value into Session Storage
syntax: 
sessionStorage.setItem("key", value);
key - Name to indentify
value - Primitive Type value 

To read stored value from local Storage
syntax:
sessionStorage.getItem("key");

To delete particular value from local storage
syntax:
sessionStorage.removeItem("key");

To all value from local Storage
syntax:
sessionStorage.clear();
*/