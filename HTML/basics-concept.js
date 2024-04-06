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