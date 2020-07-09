var http = require('http')
var express = require('express')
var morgan  = require('morgan')
var bodyParser= require('body-parser')


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

app.get('/dishes',(req,res,next)=>{

    res.end("send all dishe to you ");
})

app.post('/dishes',(req,res,next)=>{
//Right now I'm only extracting the name and the description from the body and then sending
// it back to the client in this body.
    res.end("will add the dish: "+req.body.name+"with details"+req.body.description);

})

app.put('/dishes',(req,res,next)=>{
   
        res.statusCode=403;
        res.end("PUT operaion not suppoerted ");
    })


app.delete('/dishes',(req,res,next)=>{
   
    res.end("DELETE ALL DISHES ");
})




app.get('/dishes/:dishId',(req,res,next)=>{
    //So if you just simply see ID here, this should also be corresponding the given sId here.



    res.end("will send the details of the dish :  "+req.params.dishId+"to you ! ");
})

app.post('/dishes/:dishId',(req,res,next)=>{
    res.statusCode=403;
    res.end("POST  operation not suppoerted on /dishes");
})

app.put('/dishes/:dishId',(req,res,next)=>{
        res.write('updating the dish:'+req.params.dishId)
        res.end("WILL UPDATE THE DISH  "+req.body.name);
    })


app.delete('/dishes/:dishId',(req,res,next)=>{
   
    res.end("DELETE  DISHE with  "+req.params.dishId);
})

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
    console.log(`Server running.. in port `+port)
})