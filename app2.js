const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    let urlParts = url.parse(req.url);
    //console.log(urlParts)
    console.log(urlParts.pathname)
    if(req.method==='GET') {
        switch (urlParts.pathname) {
            case '/':
                homepage(req, res);
                break;
            case '/about':
                about(req, res);
                break;
            default:
                page404(req,res);
                break;
        }
    }else if(res.method === 'POST'){
        switch (urlParts.pathname) {
            case '/about':
                about(req, res);
                break;
            case '/about2':
                about2(req, res);
                break;
        }
    }
}).listen(3000);
console.log('server is running');

function homepage(req, res){
    res.end('homepage');
}

function about(req, res){
    res.end('about');
}

function about2(req, res){
    res.end('about2');
}

function page404(req, res) {
    res.end('404')
}