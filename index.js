// console.log('Hello From Node.js ....');


// const Person = require('./person');

// const person1 =new Person('Saeid Madi', 24);

// person1.greating();
const Logger = require('./reference/logger');

const logger = new Logger();

logger.on('message', (data)=>{
    console.log('Called Listener :' , data);
})
logger.log('Hello World'); 