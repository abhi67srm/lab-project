const express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.send('index.html');
});

app.get('/home', (req, res)=>{
    res.send('index.html');
});

// app.get('/register', (req, res)=>{
//     res.send('register.html');
// });



app.listen('3000', (req, res)=>{
   console.log('Started on port 3000');
});