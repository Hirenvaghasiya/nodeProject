var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/plain'});
	res.end('Hello world');
}).listen(8080);

console.log('servert running on port 8080');