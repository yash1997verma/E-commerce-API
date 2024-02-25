import 'dotenv/config'


import express from "express"
const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (req, res)=>{
    return res.send("Welcome to E-Com APi")
});

app.listen(PORT, ()=> console.log(`Server started on Port ${PORT}`));