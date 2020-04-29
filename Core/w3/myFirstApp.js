const http = require('http');
const date = require('./myOwnModule');
const url = require('url');

http.createServer((req, res)=> {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(date());
    var q = url.parse(req.url, true).query;
    var text = q.year + " " + q.month;
    res.write(text);
   // res.write(req.url);

    res.end('Hello World');
} ).listen(8080);






