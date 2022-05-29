const url = require('url');

const myUrl = new URL('https://www.youtube.com/watch?v=fBNz5xF-Kx4');
console.log(myUrl.toString());

console.log(myUrl.host);

console.log(myUrl.search);
myUrl.searchParams.append('apc','123')
console.log(myUrl.searchParams);
//loop through params
myUrl.searchParams.forEach((value ,name) => {
    console.log(`${name} : ${value}`);
});