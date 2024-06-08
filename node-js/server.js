import express from "express";
import cors from "cors";
import http from "http";

const app = express();
const server = http.createServer(app);

app.use(cors({
  credentials: true,
  origin: "*"
}));

app.use(express.json());

//////
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
    location: "chennai"
  },
  {
    name : "kumar",
    age: 26,
    location: "madurai"
  },
  {
    name : "yuvaraj",
    age: 29,
    location: "erode"
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
  studentList.push(incomingValue);
  

  response.status(200).send("Student Record has been Created");
});

//////

const portNumber = 5000;
server.listen(portNumber, () => {
  console.log("Server is running on port 5000");
})