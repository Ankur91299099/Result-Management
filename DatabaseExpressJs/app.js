const express = require('express');
const app = express();
const cors=require('cors')
const port = 5000;

/**
 * Routes
 */ 
require("./database/connection");
const Result = require('./models/Result');

app.use(express.urlencoded({extended:true}));

/**
 * Assets
 */ 
app.use(express.static('assets'));

app.use(express.json());
app.use(cors('*'))
/**
 * Routes 
 */ 
app.use('/' , require('./routes'));

app.listen(port , function(err){
    if(err){
        console.log("Error while running Result Management App at port : " ,port );
        console.log(err);
        return;
    }
    console.log("Result Management App is running on port : " , port);
})