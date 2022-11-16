var http = require('http');
http.createServer(function(requset, respone) {
    respone.writeHead(200, { 'Content-Type': 'text/pain' });
    respone.end("Hello World");

}).listen(8001, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8001/')