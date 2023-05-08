import * as http from 'node:http';

function open_ServiceWorkerRegistration() {

}


http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
}).listen(8080);

open_ServiceWorkerRegistration();