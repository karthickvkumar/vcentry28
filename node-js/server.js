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

//////

const portNumber = 5000;
server.listen(portNumber, () => {
  console.log("Server is running on port 5000");
})