const http = require('http');

//Create server Object 

http.createServer((req,res)=>{
    //Write Response 
    res.write('Hello World');
    res.end()
}).listen(5000, ()=> console.log('Serve running ...') );