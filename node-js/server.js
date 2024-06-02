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


//////

const portNumber = 5000;
server.listen(portNumber, () => {
  console.log("Server is running on port 5000");
})