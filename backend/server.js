const express = require('express');
const cors = require('cors');

require('./config/connect')

const app = express();
app.use(express.json());
app.use(cors());



app.listen(3000 , ()=>{
    console.log('server is working');
})
