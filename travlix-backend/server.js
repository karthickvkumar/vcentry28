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

app.use(express.json({ limit: '10mb' }));

const connection = mysql.createConnection({
    host: "db4free.net",
    user: "vcentry",
    password: "test@123",
    database: "travelix",
    port: 3306
});

connection.connect((error) => {
    if(error){
        throw error;
    }
    else{
        console.log("Mysql Connection Success");
    }
})

// URL: http://localhost:4000/api/destinaiton/add
// Payload:
// {
//     name : "",
//     image : "",
//     count : ""
// }

app.post("/api/destinaiton/add", (request, response) => {
    const incomingValue = request.body;

    const sqlQuery = `INSERT INTO karthick_destinations (name, image, count, location) VALUES ('${incomingValue.name}', '${incomingValue.image}', '${incomingValue.count}', '${incomingValue.location}')`;

    connection.query(sqlQuery, (error, result) => {
        if(error){
            response.status(500).send("Pls contact Admin");
        }
        else{
            response.status(200).send("Destination has been added");
        }
    })  
});

app.get("/api/destination/load", (request, response) => {
    const sqlQuery = `SELECT * FROM karthick_destinations`;

    connection.query(sqlQuery, (error, result) => {
        if(error){
            response.status(500).send("Pls contact Admin");
        }
        else{
            response.status(200).send(result);
        }
    })
})

app.delete("/api/destination/delete/:id", (request, response) => {
    const id = request.params.id;
    const sqlQuery = `DELETE FROM karthick_destinations WHERE id=${id}`;

    connection.query(sqlQuery, (error, result) => {
        if(error){
            response.status(500).send("Pls contact Admin");
        }
        else{
            response.status(200).send("Record has been deleted");
        }
    })
})


const port = 4000;
server.listen(port, () => {
    console.log("Node JS is running on port 4000");
})


// ALTER TABLE table_name ADD columName dataType;