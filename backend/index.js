import express, { json } from 'express'

const app = express();

app.use(express, json());


//connect to db 

//define Routes 

app.listen(3000, () => {
    console.log("server is running on Port 300")
})



