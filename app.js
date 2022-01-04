const {server} = require('./src/server');
const PORT = 3000;
server.listen(PORT);
console.log(`Server listening on port ${PORT}`);

/*const http = require('http');

const server = http.createServer((req, res ) => {
    if(req.url === '/'){
        res.write('Hello world');
        res.end();
    }
    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});
server.on('connection', (socket) => {
    console.log('new connection')
})
server.listen(3000);

console.log('listening on port 3000');*/
/*
const http = require('http');
const url = require('url');
const {parse} = require('querystring');
const { v4: uuidv4 } = require('uuid');
*/
/*
let person = {
    id: 4564,
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };
let json = JSON.stringify(person);
console.log(json);
*/

/*

const server = http.createServer((req, res) => {
    console.log('server work');
    //get
    if(req.method == 'GET'){
        console.log('method GET');
    }else if(req.method == 'POST'){
        let body = '';
        req.on('data', chunk  =>{
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log(body);
            let params = parse(body);
            console.log(params);
            console.log(params.li)
            res.end('OK')
        });
    }
    res.end('server work')

});

server.listen(3000);
*/