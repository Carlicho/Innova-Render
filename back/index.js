import express from 'express';
import cors from 'cors'
import pg from 'pg'


const app = express();
const pool = new pg.Pool({
    database: 'postgres',
    user: 'postgres',
    password: '1234qwer',
    port: 5432
})

app.get("/users", async (req, res)=>{

    const result = await pool.query('SELECT NOW()')
    console.log(result)

    res.send({
        users:[]
    });
});

app.use(cors({
    origin: 'http://localhost:3001'
}))

app.listen(3000,()=>{
    console.log("server started on port 3000")
})