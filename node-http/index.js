var http = require('http')
var fs  = require('fs')
var path = require('path')


//Variables 
const hostname = "localhost"
const port = 8001


const server = http.createServer((req,res)=> {
    console.log("request header"+req.headers+"url: "+req.url)

    if(req.method=="GET") {
        var fileUrl;
        if(req.url=='/') fileUrl = '/index.html'
        else fileUrl = req.url;

        var filePath = path.resolve('./public'+fileUrl);

        //Extension of the file 
        const fileExt = path.extname(filePath)


        if(fileExt==".html"){
            fs.exists(filePath,(exists)=>{
                 
                if(!exists){
                    console.log("filePath: "+filePath)
                    res.statusCode = 404;
                    res.setHeader("Content-Type","text/html")
                    res.end("<html><body><h1>ERROR 404</h1></body></html>")

                    return;
                }else{
                    res.statusCode = 200
                    res.setHeader("Content-Type","text/html")
                    fs.createReadStream(filePath).pipe(res);
                }

               

            })
        }
        else{
            res.statusCode = 404
            res.setHeader("Content-Type","text/html")
            res.end("<html><body><h1>ERROR 404 it's not an html file </h1></body></html>")

            return;
        }
            return;
    }
    else{
        res.statusCode = 404
        res.setHeader("Content-Type","text/html")
        res.end("<html><body><h1>req method not supported </h1></body></html>")

        return;
    }


    res.setHeader("Content-type","text/html")
    res.statusCode = 200;
    res.end("hello world")

})

server.listen(port, hostname,()=>{
  

})
