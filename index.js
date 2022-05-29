// console.log('Hello From Node.js ....');


// const Person = require('./person');

// const person1 =new Person('Saeid Madi', 24);

// person1.greating();
// const Logger = require('./reference/logger');

// const logger = new Logger();

// logger.on('message', (data)=>{
//     console.log('Called Listener :' , data);
// })
// logger.log('Hello World'); 

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // if (req.url === '/' ){
    //     fs.readFile(path.join(__dirname,'public','index.html'), (err, content)=>{
    //         if(err) throw err;
    //         res.writeHead(200,{'Content-Type': 'text/html'});
    //         res.end(content);
    //     })
    // }
    // if (req.url === '/about' ){
    //     fs.readFile(path.join(__dirname,'public','about.html'), (err, content)=>{
    //         if(err) throw err;
    //         res.writeHead(200,{'Content-Type': 'text/html'});
    //         res.end(content);
    //     })
    // }

    //build file path 
    let filePath = path.join(
        __dirname,
        'public',
        req.url === '/' ? 'index.html' : req.url
    );



    //Extention of file 
    let extname = path.extname(filePath);

    //Initial content type 
    let contentType = 'text/html';

    //check ext and set content type 
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            breake;
        case '.css':
            contentType = 'text/css';
            breake;
        case '.json':
            contentType = 'application/json';
            breake;
        case '.png':
            contentType = 'image/png';
            breake;
        case '.jpg':
            contentType = 'image/jpg';
            breake;
    }
    //read file 
    fs.readFile(filePath, (err ,content)=>{
        if(err){
            if(err.code == 'ENOENT'){
                //page not found
                fs.readFile(path.join(__dirname, 'public' ,'404.html'), 
                (err, content)=>{
                    res.writeHead(200,{'Content-Type': 'text/html'});
                    res.end(content , 'utf-8');
                }) ;
            }else{
                //some server error 
                res.writeHead(500);
                res.end(`Server Error ${err.code}`);
            }
        }else{
           //success
            res.writeHead(200,{'Content-Type': contentType});
            res.end(content , 'utf-8');
        }
    });
    console.log(filePath);
    
});



const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));