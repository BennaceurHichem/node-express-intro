var http = require('http')
var express = require('express')
var morgan  = require('morgan')
var bodyParser= require('bosy-parser')


var fs  = require('fs')
var path = require('path')


const app  = express();

//Morgan config 
app.use(morgan('dev'))
app.use(express.static(__dirname+'/public'))
//using bodyParser to json parsing 
app.use(bodyParser.json())


/*
So when we say app.all, no matter which method is invoked,
 get, put, post, or delete, for the /dishes REST API endpoint,
 this code will be executed first by default here.
*/
app.all('/dishes',(req,res,next)=> {
    //this will be executed independently of the method type 
    res.statusCode=200;
    res.setHeader("Content-Type",'text/plain')
    //next(): what it means is that it'll continue on to look for additional specifications down below here,
    // which will match this dishes endpoint., 
    next();

})



cd 





//Variables 
const hostname = "localhost"
const port = 8001


app.use((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html')
    res.send("this is an express server")

})



const server  =  http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`Server running `)
})