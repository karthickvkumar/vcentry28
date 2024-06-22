import express from "express";
import cors from "cors";
import http, { get } from "http";
import mysql from "mysql";

const app = express();
const server = http.createServer(app);

app.use(cors({
  credentials: true,
  origin: "*"
}));

app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fullstack",
  port: 3306
});

// const connection = mysql.createConnection({
//   host: "db4free.net",
//   user: "vcentry",
//   password: "test@123",
//   database: "travelix",
//   port: 3306
// });

connection.connect((error) => {
  if(error){
    throw error;
  }
  else{
    console.log("MYSQL Server connected")
  }
})

//////

// Method - GET
// URL - http://localhost:5000/api/list/contact

app.get("/api/list/contact", (request, response) => {
  const sql_query = "SELECT * FROM contactdetails";

  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send(result);
    }
  })
})

// Method - POST 
// URL - http://localhost:5000/api/create/contact
// Playload
// {
//   name : "",
//   email : "",
//   message : ""
// }

app.post("/api/create/contact", (request, response) => {
  const incomingValue = request.body;
  const sql_query = `INSERT INTO contactdetails (name, email, message) VALUES ('${incomingValue.name}', '${incomingValue.email}', '${incomingValue.message}')`;

  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send("Contact details Created Successfully");
    }
  })

})


// Method - GET 
// URL - http://localhost:5000/api/list/users

app.get("/api/list/users", (request, response) => {
  const sql_query = "SELECT * FROM karthick_table;"

  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send(result);
    }
  })
})


// Method - GET
// API URL - http://localhost:5000/api/welcome
app.get("/api/welcome", (request, response) => {
  response.status(200).send("Hey there! this is your first API");
});


// Method - POST
// API URL - http://localhost:5000/api/create/user
app.post("/api/create/user", (request, response) => {
  console.log(request.body);
  response.status(200).send("Success: Valid data");
})

//CRUD - Create, Read, Upadte, Delete 
let studentList = [
  {
    name : "karthick",
    age: 28,
    location: "chennai",
    id: 1
  },
  {
    name : "kumar",
    age: 26,
    location: "madurai",
    id: 2
  },
  {
    name : "yuvaraj",
    age: 29,
    location: "erode",
    id: 3
  }
];
// Method - GET
// URL - http://localhost:5000/api/list/students
app.get("/api/list/students", (request, response) => {
  response.status(200).send(studentList);
});

// Method - POST
// URL - http://localhost:5000/api/create/student
// Payload
// {
//   name : "",
//   age: 0,
//   location: ""
// }

app.post("/api/create/student", (request, response) => {
  let incomingValue = request.body;
  incomingValue.id = studentList.length + 1;

  studentList.push(incomingValue);
  
  response.status(200).send("Student Record has been Created");
});

// Method - PUT
// URL - http://localhost:5000/api/update/student/1

app.put("/api/update/student/:id", (request, response) => {
  const id = request.params.id;
  const incomingValue = request.body;

  if(incomingValue.name == ""){
    response.status(401).send("User Name is Invalid")
  }

  if(incomingValue.age == ""){
    response.status(401).send("User Age is Invalid")
  }

  if(incomingValue.location == ""){
    response.status(401).send("User Location is Invalid")
  }

  const index = id - 1;
  studentList[index] = incomingValue;

  response.status(200).send("Student Record has been Updated");

})

// Method - DELETE
// URL - http://localhost:5000/api/delete/student/2
app.delete("/api/delete/student/:id", (request, response) => {
  const id = request.params.id;
  const index = studentList.findIndex((value) => {
    return value.id == id;
  })
  studentList.splice(index, 1);
  response.status(200).send("Student Record has been Deleted");
})

//////

let employeeList = [
  {
    "employeeName" : "Suresh",
    "designation" : "UI developer",
    "inTime" : "09:00 AM",
    "outTime" : "06:00 PM",
    "salary" : "25000"
  },
  {
    "employeeName" : "Kumar",
    "designation" : "Node JS developer",
    "inTime" : "10:00 AM",
    "outTime" : "07:00 PM",
    "salary" : "30000"
  }
];

// URL - http://localhost:5000/api/employee/list 
app.get("/api/employee/list", (request, response) => {
  response.status(200).send(employeeList);
})

// Payload
// {
//   "employeeName" : "",
//   "designation" : "",
//   "inTime" : "",
//   "outTime" : "",
//   "salary" : ""
// }
// URL - http://localhost:5000/api/employee/create

app.post("/api/employee/create", (request, response) => {
  var incomingValue = request.body;
  employeeList.push(incomingValue);

  response.status(200).send("Employee record had been created");
})



const portNumber = 5000;
server.listen(portNumber, () => {
  console.log("Server is running on port 5000");
})


// ***************CREATE TABLE*********************** //
/*
USE travelix; 
CREATE TABLE karthick_table (name varchar(255), age int(3), location varchar(255), id int NOT NULL AUTO_INCREMENT, PRIMARY KEY(id));


USE travelix; 
INSERT INTO karthick_table (name, age, location) VALUES ('Karthick', 29, 'Chennai');

USE travelix;
SELECT * FROM karthick_table;

*/