//import app from "./app.js";
import express from "express";
import { pool } from "./database.js";

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get("/ping", async (req, res) => {
    try {
        const [result] = await pool.query(`SELECT NOW() as now`);
        return res.json(result[0]);
    } catch (error) {
        console.log(error);
    }
});

app.listen(3000);
console.log("Server on port", 3000);