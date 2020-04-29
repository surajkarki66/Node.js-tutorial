const http = require('http');

//const server = http.createServer(); // also a event emitter


/* Usually dont use

// Listner

server.on('connection', (socket) => {
    console.log('New connection');
})

server.listen(3001);

console.log('Listening on port 3000.');
*/


// Usually do

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000...');
