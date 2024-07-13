import express from "express";
import cors from "cors";
import mysql from "mysql";
import http from "http";

const app = express();
const server = http.createServer(app);

app.use(cors({
    credentials: true,
    origin: "*"
}))

app.use(express.json());



const port = 4000;
server.listen(port, () => {
    console.log("Node JS is running on port 4000");
})