const http = require('http');
const {getData, postData, putData} = require('./controller/controller');
const {isValidId, isValidBody} = require('./validation');

const server = http.createServer((req, res) => {
    let [, pathname, id] = reqUrl.split('/');
    res.end('server work')
    if(req.method === 'GET'){
        if(pathname==='person' && id==undefined){
            res.statusMessage = "OK";
            res.status(200).end();
        }else if(pathname==='person' && id!==undefined){
            if(!isValidId(id)){
                res.statusMessage = "Bad Request";
                res.status(400).end();
            }
            if(getData(req.url === false)){
                res.statusMessage = "Not Found";
                res.status(404).end();
            }
            res.statusMessage = "OK";
            res.status(200).end();

        }else {
            res.statusMessage = "Not Found";
            res.status(404).end();
        }
    }else if(req.method === 'POST') {
        console.log('post');
        if(pathname === 'person'){
            if(!isValidBody){
                res.statusMessage = "Bad Request";
                res.status(400).end();
            }
            res.statusMessage = "Created";
            res.status(201).end();
        }else{ 
            res.statusMessage = "Not Found";
            res.status(404).end();
        }

    }else if(req.method === 'PUT') {
        console.log('put');
        if(pathname==='person' && id===undefined){
            res.statusMessage = "OK";
            res.status(200).end();
        }else if(pathname==='person' && id!==undefined){
            if(!isValidId(id)){
                res.statusMessage = "Bad Request";
                res.status(400).end();
            }
            if(getData(req.url === false)){
                res.statusMessage = "Not Found";
                res.status(404).end();
            }
            res.statusMessage = "OK";
            res.status(200).end();
        }else{
            res.statusMessage = "Not Found";
            res.status(404).end();
        }

    }else if (req.method === 'DELETE') {
        console.log('delete')
        if(pathname==='person' && id===undefined){
            res.statusMessage = "OK";
            res.status(200).end();
        }else if(pathname==='person' && id!==undefined){
            if(!isValidId(id)){
                res.statusMessage = "Bad Request";
                res.status(400).end();
            }
            if(getData(req.url === false)){
                res.statusMessage = "Not Found";
                res.status(404).end();
            }
            res.statusMessage = "No Content";
            res.status(204).end();

        }else{
            res.statusMessage = "Not Found";
            res.status(404).end();
        }
    }else{
        console.log('method is not  supported')
    }
    

});

module.exports = {server};