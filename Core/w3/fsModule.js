const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    fs.readFile('test.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        if (data) {
            res.write(data);
        }
        if (err) {
            res.write(`Error: ${err}`);
        }
        return res.end();   
        

    }); 
}).listen(8080);