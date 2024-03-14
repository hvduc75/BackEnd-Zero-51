const http = require('http');

const server = http.createServer((req, res) => {
    console.log('run request ...')
    res.setHeader('Content-Type', 'text/html');
    res.write('<h3>Hello world!</h3>');
    res.write('<h2>from Eric & hoi dan it</h2>');
    res.end();
})

server.listen(8080, 'localhost', () => {
    console.log('Node.JS server is running on port: 8080');
})