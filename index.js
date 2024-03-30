const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors= require('cors');
require('./db')
require('dotenv').config();
const PORT= process.env.PORT || 8000;

const authRoutes = require('./routes/authRoutes')
// const taskRoutes = require('./Routes/taskRoutes')


// body parser and express.json do the same job 
// app.use(express.json());
app.use(bodyParser.json());


app.use('/users',authRoutes);
// app.use('/tasks',taskRoutes);


app.get('/',(req,res)=>{
 res.send(" blog api working task manager");
})
app.listen(PORT,()=>{
 console.log(`runnning on ${PORT} `);
})