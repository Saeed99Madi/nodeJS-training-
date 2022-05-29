const fs = require('fs');
const path = require('path');



//create folder 

// fs.mkdir(path.join(__dirname,'/test'),{}, err =>{
//     if(err) throw err;
//     console.log('Folder created...');
// });



// create and write file 

// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello World!', err =>{
//     if(err) throw err;
//     console.log('File written to...');
// });


// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello World!', err =>{
//     if(err) throw err;
//     console.log('File written to...');

//     //File append 
//     fs.appendFile(path.join(__dirname,'/test','hello.txt'),'I love NodeJS', err =>{
//         if(err) throw err;
//         console.log('File written to...');
//     });
// });

        //Read File 
        // fs.readFile(path.join(__dirname,'/test','hello.txt'), 'utf-8' , (err, data) =>{
        //     if(err) throw err;
        //     console.log(data,' File have been readed ...');
        // });

        //rename file 
         //Read File 
         fs.rename(path.join(__dirname,'/test','hello.txt'), path.join(__dirname,'/test','helloWorld.txt'), (err) =>{
            if(err) throw err;
            console.log(' File have been renamed ...');
        });

