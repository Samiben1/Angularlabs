/*
var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());

var bodyParser = require('body-parser');
app.use (bodyParser.json());

app.use(express.static(__dirname + '/src'));

app.get('/', function(req,res){
    res.sendFile(__dirname + '/src')
});

app.post('/api/auth', function(req,res){
    let users = [
        {'email':'abc@com.au', 'pwd':'123'},
        {'email':'john@griffith.com', 'pwd':'1234'},
        {'email':'chalana.viraj333@gmail.com', 'pwd':'12345'}]

    if (!req.body) {
        return res.sendStatus(400)
    }

    var customer = {};
    customer.email = req.body.email;
    customer.upwd = req.body.upwd;
    customer.valid = false;
    for(let i=0;i<users.length;i++){
        if (req.body.email == users[i].email && req.body.upwd ==users[i].pwd){
            customer.valid = true;
        }
        //else{
           // customer.valid = false;
    }
        res.send(customer);
});
*/
const express = require('express');
const app = express();

const path = require('path');
const http = require('http').Server(app);
const bodyParser = require('body-parser');

app.use (bodyParser.json());

app.use(express.static(path.join(__dirname, '../dist/week4/')));

require('./routes/api-login.ts')(app,path);
require('./listen.js')(http);


app.get('/api/auth', function(req,res){
    res.sendFile(__dirname+ 'api/auth')
})