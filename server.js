import 'dotenv/config'
import routes from './routes/index.js'

import express from "express"
const app = express();

const PORT = process.env.PORT || 8000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    return res.send("Welcome to E-Com APi")
});

// routes
app.use(routes);

app.listen(PORT, ()=> console.log(`Server started on Port ${PORT}`));