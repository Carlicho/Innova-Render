import express from 'express';
import cors from 'cors'
import pg from 'pg'
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER, FRONT_URL, PORT } from './config.js';


const app = express();
const pool = new pg.Pool({
    host: DB_HOST,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT
})

app.get("/users", async (req, res)=>{

    const result = await pool.query('SELECT NOW()')
    console.log(result)

    res.send({
        users:[]
    });
});

app.use(cors({
    origin: FRONT_URL
}))

app.listen(PORT,()=>{
    console.log("server started on port 3000")
})