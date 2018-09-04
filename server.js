const express = require('express');
var app = express();

app.use(express.static('public'));





app.listen('3000', (req, res)=>{
   console.log('Started on port 3000');
});