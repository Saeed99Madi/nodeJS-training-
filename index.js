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

const server = http.createServer((req,res)=>{
    if (req.url === '/' ){
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.end('<h1>Home with Saeid Mahmoud Madi</h1>');
    }
    console.log(req.url);
});
const PORT = process.env.PORT || 5000;
server.listen(PORT , ()=> console.log(`Server running on port ${PORT}`));

