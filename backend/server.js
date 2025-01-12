const express = require('express');
const cors = require('cors');

const routerGoals = require('./router/goal.router')

require('./config/connect')

const app = express();
app.use(express.json());
app.use(cors());

app.use('/goal' , routerGoals);


app.listen(3000 , ()=>{
    console.log('server is working');
})
